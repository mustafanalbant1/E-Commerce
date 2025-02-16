const NewsLetter = () => {
  return (
    <div className="w-[65%] sm:w-[70%] md:w-[75%] lg:w-[80%] min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] flex flex-col items-center justify-center m-auto px-2 sm:px-3 md:px-4 lg:px-[140px] mb-[100px] sm:mb-[120px] md:mb-[130px] lg:mb-[150px] bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_60%)] gap-2 sm:gap-3 md:gap-4 lg:gap-8">
      <h1 className="text-[#454545] text-xl sm:text-2xl md:text-4xl lg:text-[55px] font-semibold text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-sm sm:text-base md:text-lg lg:text-[20px] text-center">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-full sm:w-[400px] md:w-[500px] lg:w-[730px] min-h-[40px] sm:min-h-[45px] md:min-h-[50px] lg:min-h-[70px] rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-[80px] border border-[#e3e3e3]">
        <input
          type="email"
          className="w-[50%] sm:w-[55%] md:w-[60%] lg:w-[500px] ml-2 sm:ml-3 md:ml-4 lg:ml-[30px] border-none outline-none text-[#616161] font-poppins text-xs sm:text-sm md:text-base"
          placeholder="Your Email"
        />
        <button className="w-[90px] sm:w-[100px] md:w-[120px] lg:w-[210px] min-h-[40px] sm:min-h-[45px] md:min-h-[50px] lg:min-h-[70px] rounded-[30px] sm:rounded-[35px] md:rounded-[40px] lg:rounded-[80px] bg-black text-white text-xs sm:text-sm md:text-base cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
