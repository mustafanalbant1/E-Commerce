import footor_logo from "../assets/Frontend_Assets/logo_big.png";
import instagram_icon from "../assets/Frontend_Assets/instagram_icon.png";
import pintester_icon from "../assets/Frontend_Assets/pintester_icon.png";
import whatsapp_icon from "../assets/Frontend_Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-12">
      <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
        <img src={footor_logo} alt="" className="w-16 md:w-20 lg:w-24" />
        <p className="text-[#383838] text-2xl md:text-3xl lg:text-[46px] font-bold">
          SHOPPER
        </p>
      </div>
      <ul className="flex flex-wrap justify-center list-none gap-4 md:gap-8 lg:gap-12 text-[#252525] text-base md:text-lg lg:text-[20px]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-3 md:gap-4 lg:gap-5">
        <div className="p-2 md:p-3 lg:p-[10px] pb-1 md:pb-2 lg:pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer hover:bg-gray-100">
          <img
            src={instagram_icon}
            alt="Instagram"
            className="w-6 md:w-8 lg:w-10"
          />
        </div>
        <div className="p-2 md:p-3 lg:p-[10px] pb-1 md:pb-2 lg:pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer hover:bg-gray-100">
          <img
            src={pintester_icon}
            alt="Pinterest"
            className="w-6 md:w-8 lg:w-10"
          />
        </div>
        <div className="p-2 md:p-3 lg:p-[10px] pb-1 md:pb-2 lg:pb-[6px] bg-[#fbfbfb] border border-[#ebebeb] cursor-pointer hover:bg-gray-100">
          <img
            src={whatsapp_icon}
            alt="WhatsApp"
            className="w-6 md:w-8 lg:w-10"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[30px] w-full mb-6 md:mb-8 lg:mb-[30px] text-[#1a1a1a] text-base md:text-lg lg:text-[20px]">
        <hr className="w-[80%] border-none h-[2px] md:h-[2.5px] lg:h-[3px] bg-[#c7c7c7] rounded-lg" />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
