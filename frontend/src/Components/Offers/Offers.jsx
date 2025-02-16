import exclusvive_image from "../assets/Frontend_Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="flex w-[80%] h-[60vh] m-auto pl-[140px] pr-[140px] pt-0 pb-0 mb-[150px] bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)]">
      <div className="flex flex-1 flex-col justify-center">
        <h1 className="text-[#171717] text-[80px] font-semibold">Exclusive</h1>
        <h1 className="text-[#171717] text-[80px] font-semibold">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[22px] font-semibold">
          ONLY ON BEST SELLERS PRODUCT
        </p>
        <button className="w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-8 cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="flex  items-center justify-center pt-12">
        <img src={exclusvive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
