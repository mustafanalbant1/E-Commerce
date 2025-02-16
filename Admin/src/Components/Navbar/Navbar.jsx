import logo from "../../assets/Admin_Assets/nav-logo.svg";
import profile from "../../assets/Admin_Assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-4 sm:px-8 md:px-14 shadow-md bg-white mb-[1px]">
      <img
        src={logo}
        className="w-[150px] sm:w-[175px] md:w-[200px]"
        alt="logo"
      />
      <img
        src={profile}
        className="w-[50px] sm:w-[60px] md:w-[75px]"
        alt="profile"
      />
    </div>
  );
};

export default Navbar;
