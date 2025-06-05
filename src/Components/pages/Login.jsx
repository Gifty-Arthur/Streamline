import React from "react";
import login from "../../assets/images/bg.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <div className="relative  w-full h-screen">
        <div>
          <img
            src={login}
            alt=""
            className="w-full h-[980px] object-cover opacity-70"
          />
          <div className="">
            <div className="absolute top-0 left-0  ">
              <h1 className="text-[#E50914] font-Poppins font-bold text-6xl ">
                NETFLIX
              </h1>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              {/* login */}
              <div className="w-[450px] h-[708px] bg-[#070c0f] opacity-90 flex flex-col justify-center mt-80 lg:px-8 px-6">
                <div className="">
                  <h2 className="text-[32px] font-Poppins font-extrabold text-white">
                    Sign In
                  </h2>
                </div>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form action="#" method="POST" className="space-y-6">
                    <div className="flex justify-center">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Email"
                        className="block w-[315px] h-[56px] rounded-md border px-3 py-1.5 text-base text-black outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-white"
                      />
                    </div>
                    <div className="flex justify-center">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        autoComplete="current-password"
                        className="block w-[315px] h-[56px] rounded-md border px-3 py-1.5 text-base text-black outline-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:outline-white"
                      />
                    </div>
                    {/* button */}
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-[314px] h-[40px] bg-[#e50914] text-white font-semibold rounded-md hover:bg-red-700 transition"
                      >
                        Sign In
                      </button>
                    </div>
                    <h1 className="text-xl text-[#acb3b3] font-Poppins">OR</h1>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="w-[314px] h-[40px] bg-[#3f3e3d] text-white font-semibold rounded-md hover:bg-gray-500 transition"
                      >
                        Use a Sign-In Code
                      </button>
                    </div>
                    <div className="text-sm text-center">
                      <a
                        href="#"
                        className="font-semibold text-white hover:text-gray-400"
                      >
                        Forgot password?
                      </a>
                    </div>
                    {/* tick */}
                    <label className="flex item-center  space-x-3 ">
                      <input
                        type="checkbox"
                        className="appearance-none w-[18px] h-[18px] border mt-1   focus:outline-none"
                      />
                      <span className="text-white">Remember me</span>
                    </label>
                    {/* new */}
                    <div className="flex flex-row gap-2">
                      <h2 className=" font-Poppins text-[16px] text-[#8B8988]">
                        New to Netflix?
                      </h2>
                      <h2 className="text-[16px] text-white font-Poppins">
                        Sign up now
                      </h2>
                    </div>
                    <div>
                      <p className="text-[16px] text-[#8B8988]">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.
                      </p>
                      <Link
                        to="/learn-more"
                        className="text-blue-500 underline hover:text-blue-300"
                      >
                        Learn more
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
