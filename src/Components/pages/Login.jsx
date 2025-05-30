import React from "react";
import login from "../../assets/images/bg.png";

const Login = () => {
  return (
    <div>
      <div className="relative  w-full h-screen">
        <img
          src={login}
          alt=""
          className="w-[2000px] h-[1209px] object-cover opacity-70"
        />
        <div className="">
          <div className="absolute top-0 left-0  ">
            <h1 className="text-[#E50914] font-Poppins font-bold text-3xl ">
              NETFLIX
            </h1>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            {/* login */}
            <div className="w-[450px] h-[708px] bg-[#070c0f] opacity-70 flex flex-col justify-center mt-80 lg:px-8 px-6">
              <div className="-mt-70">
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
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="w-[314px] h-[40px] bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition"
                    >
                      Sign In
                    </button>
                  </div>

                  {/* ✅ Red Sign In Button */}

                  <div className="text-sm text-center">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
