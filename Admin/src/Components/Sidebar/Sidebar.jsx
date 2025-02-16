import { Link } from "react-router-dom";
import add_Product_icon from "../../assets/Admin_Assets/Product_Cart.svg";
import list_Product_icon from "../../assets/Admin_Assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start p-5  gap-5 pt-7 h-[100vh] bg-white max-[800px]:flex-row max-[800px]:h-auto max-[800px]:w-full max-[800px]:justify-center">
      <Link to="/addproduct" style={{ textDecoration: "none" }}>
        <div className="flex items-center gap-5 justify-center p-3 rounded-[6px] bg-[#f6f6f6] cursor-pointer md:m-0">
          <img src={add_Product_icon} alt="add-product-icon" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct" style={{ textDecoration: "none" }}>
        <div className="flex items-center gap-5 justify-center p-3 rounded-[6px] bg-[#f6f6f6] cursor-pointer md:m-0">
          <img src={list_Product_icon} alt="add-product-icon" />
          <p>List Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
