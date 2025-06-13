import React, { useState } from "react";
import ogo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { handleSubmit } from "../../../../Config";

const Membership = () => {
  const navigate = useNavigate();
  const [setError] = useState("");

  return (
    <div className="bg-white h-screen flex flex-col">
      {/* Header */}
      <div className="border-b border-[#e6e6e6] w-full h-[76px] flex items-center justify-between px-4">
        <img src={ogo} alt="Logo" className="h-10" />
        <button
          onClick={() => navigate("/Home")}
          type="button"
          className="text-black font-semibold font-poppins hover:text-red-700 transition text-[20px]"
        >
          Sign In
        </button>
      </div>

      {/* Content & Form */}
      <div className="flex flex-col items-center px-4 pt-18">
        <div className="flex flex-col items-start text-left space-y-2 max-w-md mb-6">
          <h2 className="text-[12px] font-Poppins text-gray-600">
            STEP 1 OF 3
          </h2>
          <h1 className="text-3xl font-bold text-[#333333] leading-tight">
            Create a password to start <br /> your membership
          </h1>
          <p className="text-[18px] text-[#333333] leading-relaxed">
            Just a few more steps and you are done!
            <br /> We hate paperwork, too.
          </p>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e, setError)}
          className="space-y-4 px-4"
        >
          <div className="flex justify-center">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              className="block w-[415px] h-[56px] rounded-md border-1 px-3 py-1.5 text-base text-white outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
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
              className="block w-[415px] h-[56px] rounded-md border-1 px-3 py-1.5 text-base text-white outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-black"
            />
          </div>
          {/* button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#e50914] w-[415px] h-[57px] cursor-pointer text-white rounded-md font-bold text-[24px] hover:bg-red-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Membership;
