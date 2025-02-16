import { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login", formData);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.href = "/";
      } else {
        alert(responseData.error || "Giriş sırasında bir hata oluştu");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Giriş sırasında bir hata oluştu");
    }
  };

  const signup = async () => {
    console.log("Sign Up", formData);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.href = "/";
      } else {
        alert(responseData.error || "Kayıt sırasında bir hata oluştu");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Kayıt sırasında bir hata oluştu");
    }
  };
  return (
    <div>
      <div className="w-full min-h-screen bg-[#fce3fe] pt-[50px] sm:pt-[75px] md:pt-[100px] px-4">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[580px] bg-white mx-auto p-4 sm:p-6 md:p-8 lg:p-[40px] rounded-lg">
          <h1 className="text-[#5c5c5c] text-3xl sm:text-4xl md:text-[45px] lg:text-[50px] font-bold mb-4 sm:mb-5 md:mb-[20px]">
            {state}
          </h1>
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-[29px] mt-5 sm:mt-6 md:mt-7 lg:mt-[30px]">
            {state === "Sign Up" && (
              <input
                onChange={changeHandler}
                name="username"
                value={formData.username}
                type="text"
                placeholder="Your Name"
                className="h-[50px] sm:h-[60px] md:h-[65px] lg:h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-base sm:text-lg lg:text-[18px] rounded-lg"
              />
            )}
            <input
              onChange={changeHandler}
              name="email"
              value={formData.email}
              type="email"
              placeholder="Your Email"
              className="h-[50px] sm:h-[60px] md:h-[65px] lg:h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-base sm:text-lg lg:text-[18px] rounded-lg"
            />
            <input
              onChange={changeHandler}
              name="password"
              value={formData.password}
              type="password"
              placeholder="Your Password"
              className="h-[50px] sm:h-[60px] md:h-[65px] lg:h-[72px] w-full pl-[20px] border border-[#c9c9c9] outline-none text-[#5c5c5c] text-base sm:text-lg lg:text-[18px] rounded-lg"
            />
          </div>
          <button
            onClick={() => (state === "Login" ? login() : signup())}
            className="w-full h-[50px] sm:h-[60px] md:h-[65px] lg:h-[72px] bg-[#ff4141] mt-5 sm:mt-6 md:mt-7 lg:mt-[30px] border-none text-white text-lg sm:text-xl md:text-2xl lg:text-[24px] font-medium cursor-pointer rounded-lg"
          >
            Continue
          </button>
          {state === "Login" && (
            <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-[20px] text-[#5c5c5c] text-base sm:text-lg lg:text-[18px] font-medium">
              Create an account?
              <span
                onClick={() => setState("Sign Up")}
                className="text-[#ff4141] ml-2 font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          )}
          {state === "Sign Up" && (
            <p className="mt-4 sm:mt-5 md:mt-6 lg:mt-[20px] text-[#5c5c5c] text-base sm:text-lg lg:text-[18px] font-medium">
              Already have an account?
              <span
                onClick={() => setState("Login")}
                className="text-[#ff4141] ml-2  font-semibold cursor-pointer"
              >
                Login
              </span>
            </p>
          )}
          <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-[20px] flex gap-3 sm:gap-4 md:gap-5 lg:gap-[20px] text-[#5c5c5c] text-xs sm:text-sm md:text-base lg:text-[14px] font-medium">
            <input type="checkbox" name="agree" id="agree" />
            <p>By continuing, i agree to the terms of Use & Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
