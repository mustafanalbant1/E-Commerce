const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Dosya yükleme için depolama ayarları
const storage = multer.diskStorage({
  // Yüklenen dosyaların kaydedileceği dizin
  destination: "./uploads/images",
  // Dosya adı oluşturma fonksiyonu
  filename: (req, file, cb) => {
    return cb(
      null,
      // Benzersiz dosya adı oluşturma: alan adı + timestamp + orijinal dosya uzantısı
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

// Multer middleware'ini yapılandırma
const upload = multer({ storage: storage });

// /images yolunu statik dosya sunucusu olarak ayarlama
app.use("/images", express.static("uploads/images"));

// Dosya yükleme endpoint'i
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    // Yüklenen dosyanın URL'sini döndürme
    image_url: `${process.env.REACT_APP_API}/images/${req.file.filename}`,
  });
});

const Product = mongoose.model("Product", {
  id: { type: Number, required: true }, // String yerine Number yap
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  available: { type: Boolean, required: true, default: true },
});

app.post("/addproduct", async (req, res) => {
  console.log(req.body); // Gönderilen veriyi logla
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product = products.slice(-1)[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
    available: req.body.available,
  });

  const savedProduct = await product.save();
  console.log("Saved product:", savedProduct);
  console.log("Product saved successfully");
  res.json({ success: true, name: req.body.name });
});

app.post("/removeproduct", async (req, res) => {
  console.log("Removing product with ID:", req.body.id);
  let product = await Product.findOne({ id: req.body.id });
  if (product) {
    await Product.deleteOne({ id: req.body.id });
    console.log("Product removed successfully");
    res.json({ success: true, name: req.body.name });
  } else {
    console.log("Product not found");
    res.json({ success: false });
  }
});

app.get("/allproducts", async (req, res) => {
  console.log("Fetching all products");
  let products = await Product.find({});
  console.log("Found", products.length, "products");
  res.json({ products: products });
});

const Users = mongoose.model("User", {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body); // Gönderilen veriyi logla
    try {
      let check = await Users.findOne({ email: req.body.email });
      if (check) {
        return res.json({
          success: false,
          error: "Bu email adresi ile kayıtlı bir kullanıcı zaten var",
        });
      }
    } catch (error) {
      console.error("Email kontrol hatası:", error);
      return res.json({
        success: false,
        error: "Email kontrolü sırasında bir hata oluştu",
      });
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
      cartData: cart,
    });

    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ success: true, token: token });
  } catch (error) {
    console.error("Signup error:", error);
    res.json({
      success: false,
      error: "Kayıt sırasında bir hata oluştu",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    let user = await Users.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ success: false, error: "Email veya şifre yanlış" });
    }

    const passCompare = req.body.password === user.password;
    if (!passCompare) {
      return res.json({ success: false, error: "Email veya şifre yanlış" });
    }

    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Login error:", error);
    res.json({
      success: false,
      error: "Giriş sırasında bir hata oluştu",
    });
  }
});

app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(0).slice(-8);
  console.log("NewCollection Fetched");
  res.send(newcollection);
});

app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });
  let popularinwomen = products.slice(0, 4);
  console.log("Popularinwomen Fetched");
  res.send(popularinwomen);
});

const fetchUser = async (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
};

app.post("/addtocart", async (req, res) => {
  console.log("Adding to cart", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
});
app.post("/removefromcart", async (req, res) => {
  console.log("Removing from cart", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
});

app.post("/getcart", fetchUser, async (req, res) => {
  console.log("Getting cart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
