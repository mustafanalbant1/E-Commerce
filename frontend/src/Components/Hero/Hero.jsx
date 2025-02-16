import handle_icon from "../assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../assets/Frontend_Assets/arrow.png";
import hero_image from "../assets/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row h-[100vh] bg-[linear-gradient(180deg,#fde1ff,#e1ffea22_60%)] leading-none">
      <div className="flex-1 flex flex-col justify-center gap-3 md:gap-4 lg:gap-5 px-4 md:px-20 lg:px-40">
        <h2 className="text-[#090909] text-lg md:text-xl lg:text-2xl font-semibold text-center md:text-left">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-3 md:gap-4 lg:gap-5 justify-center md:justify-start">
            <p className="text-[#171717] text-4xl md:text-6xl lg:text-8xl font-bold">
              new
            </p>
            <img
              src={handle_icon}
              className="w-12 md:w-16 lg:w-24"
              alt="Hand icon"
            />
          </div>
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#171717] text-center md:text-left">
            collections
          </p>
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#171717] text-center md:text-left">
            for everyone
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 w-60 md:w-72 lg:w-80 h-12 md:h-14 lg:h-16 rounded-[75px] mt-4 md:mt-6 lg:mt-8 bg-[#ff4141] text-white text-base md:text-lg lg:text-xl font-medium px-4 md:px-5 lg:px-6 mx-auto md:mx-0">
          <span>Latest Collection</span>
          <img
            src={arrow_icon}
            alt="Arrow icon"
            className="w-4 md:w-5 lg:w-6"
          />
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center mt-4 md:mt-0">
        <img
          src={hero_image}
          alt="Hero"
          className="w-[300px] md:w-[450px] lg:w-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;
