import { useState } from "react";
import upload_area from "../../assets/Admin_Assets/upload_area.svg";

const AddProduct = () => {
  // Debug için API URL'sini kontrol et
  console.log("API URL:", import.meta.env.VITE_API_URL);

  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    old_price: "",
    new_price: "",
    category: "women",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    try {
      if (!image) {
        alert("Lütfen bir resim seçin");
        return;
      }

      console.log("Uploading to:", `${import.meta.env.VITE_API_URL}/upload`);

      let formData = new FormData();
      formData.append("product", image);

      const uploadResponse = await fetch("http://localhost:5001/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error("Upload failed");
      }

      const responseData = await uploadResponse.json();
      console.log("responseData", responseData);

      if (responseData.success) {
        const product = {
          ...productDetails,
          image: responseData.image_url,
        };

        console.log("Saving product:", product);

        const addProductResponse = await fetch(
          "http://localhost:5001/addproduct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );

        if (!addProductResponse.ok) {
          throw new Error("Failed to add product");
        }

        const data = await addProductResponse.json();
        if (data.success) {
          alert("Ürün Başarıyla Eklendi");
          setProductDetails({
            name: "",
            image: "",
            old_price: "",
            new_price: "",
            category: "women",
          });
          setImage(false);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Bir hata oluştu: " + error.message);
    }
  };

  return (
    <div className="flex flex-col w-[70%] p-5 gap-8 ml-5 mt-5 bg-white rounded-lg text-black">
      <div className="flex flex-col gap-2">
        <p className="text-[#4B4B4B] text-lg font-medium">Product Title</p>
        <input
          type="text"
          name="name"
          value={productDetails.name}
          onChange={changeHandler}
          placeholder="Product Title"
          className="w-full text-black px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      <div className="flex max-[800px]:flex-col gap-4">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-[#4B4B4B] text-lg font-medium">Product Price</p>
          <input
            type="number"
            name="old_price"
            value={productDetails.old_price}
            onChange={changeHandler}
            placeholder="Product Price"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-[#4B4B4B] text-lg font-medium">Offer Price</p>
          <input
            type="number"
            name="new_price"
            value={productDetails.new_price}
            onChange={changeHandler}
            placeholder="Offer Price"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[#4B4B4B] text-lg font-medium">Product Category</p>
        <select
          name="category"
          value={productDetails.category}
          onChange={changeHandler}
          className="w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input" className="cursor-pointer">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt="upload_area"
          />
        </label>
        <input
          type="file"
          id="file-input"
          name="image"
          onChange={imageHandler}
          className="hidden"
        />
      </div>
      <div>
        <button
          className="px-12 py-3 bg-[#6B42E9] text-white rounded-md hover:bg-[#5835c0] transition-colors"
          onClick={Add_Product}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
