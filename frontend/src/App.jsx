import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import mens_banner from "./Components/assets/Frontend_Assets/banner_mens.png";
import womens_banner from "./Components/assets/Frontend_Assets/banner_women.png";
import kids_banner from "./Components/assets/Frontend_Assets/banner_kids.png";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory category="men" banner={mens_banner} />}
          />
          <Route
            path="/womens"
            element={<ShopCategory category="women" banner={womens_banner} />}
          />
          <Route
            path="/kids"
            element={<ShopCategory category="kids" banner={kids_banner} />}
          />

          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
