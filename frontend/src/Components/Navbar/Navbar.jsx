import logo from "../assets/Frontend_Assets/logo.png";
import cart_icon from "../assets/Frontend_Assets/cart_icon.png";
import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import nav_dropdown from "../assets/Frontend_Assets/nav_dropdown.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const dropdown_toggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
  };

  return (
    <div className="navbar flex md:flex-row justify-around p-4 shadow-md">
      <div className="nav-logo flex items-center gap-4 md:gap-10">
        <img src={logo} alt="" className="w-[30px] md:w-[35px] lg:w-[40px]" />
        <p className="text-[#171717] text-[24px] md:text-[32px] lg:text-[38px] font-semibold">
          Shopper
        </p>
      </div>

      <img
        src={nav_dropdown}
        alt=""
        className="nav-dropdown items-center justify-center w-[20px] h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] block md:hidden cursor-pointer"
        onClick={dropdown_toggle}
      />

      <ul
        ref={menuRef}
        className={`nav-menu absolute left-0 right-0 top-[80px] bg-white md:static md:bg-transparent ${
          showMenu ? "flex" : "hidden"
        } md:flex flex-row md:flex-row md:w-[400px] items-center justify-center text-[#626262] text-[16px] md:text-[18px] lg:text-[20px] font-medium gap-[20px] md:gap-[35px] lg:gap-[50px] mt-4 md:mt-0`}
      >
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="w-full h-[3px] bg-red-500 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Men</Link>
          {menu === "mens" ? (
            <hr className="w-full h-[3px] bg-red-500 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Women</Link>
          {menu === "womens" ? (
            <hr className="w-full h-[3px] bg-red-500 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? (
            <hr className="w-full h-[3px] bg-red-500 rounded-lg" />
          ) : (
            <></>
          )}
        </li>
      </ul>

      <div className="nav-login-cart flex items-center gap-[25px] md:gap-[35px] lg:gap-[45px] mt-4 md:mt-0">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={handleLogout}
            className="w-[120px] h-[45px] md:w-[140px] lg:w-[157px] md:h-[50px] lg:h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-base md:text-lg lg:text-xl font-medium bg-white text-[#515151] cursor-pointer active:bg-[#f3f3f3]"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="w-[120px] h-[45px] md:w-[140px] lg:w-[157px] md:h-[50px] lg:h-[58px] outline-none border border-[#7a7a7a] rounded-[75px] text-base md:text-lg lg:text-xl font-medium bg-white text-[#515151] cursor-pointer active:bg-[#f3f3f3]">
              Login
            </button>
          </Link>
        )}

        <Link to="cart" className="relative">
          <img
            src={cart_icon}
            alt=""
            className="w-[25px] md:w-[28px] lg:w-[30px]"
          />
          <div className="absolute -top-1 -right-1 flex w-[18px] h-[18px] md:w-[20px] md:h-[20px] lg:w-[22px] lg:h-[22px] justify-center items-center rounded-[11px] text-[12px] md:text-[13px] lg:text-[14px] bg-red-600 text-white">
            {getTotalCartItems()}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
