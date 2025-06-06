import React, { useState } from "react";
import mbg from "../../assets/images/mbg.png";
import ogo from "../../assets/images/logo.png";
import Api from "../pages/Api";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleSelect = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative w-full h-screen text-white font-sans">
        {/* Background Image */}
        <img
          src={mbg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute top-0 left-0 w-full h-full  z-0" />
        {/* Header + Title Layer */}
        <div className="absolute top-0 left-0 w-full px-10 pt-10 z-10 flex flex-col space-y-10">
          {/* Header Bar */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <img src={ogo} alt="Logo" className="h-10" />
            {/* Right-side Controls */}
            <div className="flex items-center space-x-4 relative">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
                >
                  {language} ▼
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-20">
                    <ul className="py-1 text-gray-700">
                      <li>
                        <button
                          onClick={() => handleSelect("English")}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          English
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleSelect("French")}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          French
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Sign In Button */}
              <button className="w-[77px] h-[32px] rounded-[4px] bg-[#E50914] text-white">
                Sign in
              </button>
            </div>
          </div>
          {/* Title Text */}
          <div className="flex items-center justify-center mt-20">
            <h1 className="text-4xl md:text-6xl  font-bold max-w-[600px] ">
              Unlimited movies, TV shows, and more
            </h1>
          </div>
          <p className="font-Poppins font-bold">
            Start at US$2.99.Cancel anytime
          </p>
          <p className="-mt-10 font-Poppins">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex gap-5 items-center justify-center">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className="block w-[400px] h-[56px] rounded-md border px-3 py-1.5 text-base text-white  placeholder:text-gray-400 focus:outline-2 focus:outline-white"
            />
            <button
              type="submit"
              className="w-[208px] h-[56px] bg-[#e50914] text-white font-semibold text-[24px] rounded-md hover:bg-red-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Api />
    </div>
  );
};

export default Home;
