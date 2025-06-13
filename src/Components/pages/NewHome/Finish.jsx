import React from "react";
import ogo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import l1 from "../../../assets/images/l1.png";
import l2 from "../../../assets/images/l2.png";

import l3 from "../../../assets/images/l3.png";

const Finish = () => {
  const navigate = useNavigate();

  return (
    <div className=" text-3xl bg-white h-screen">
      <div className=" border-[#e6e6e6] border w-full  h-[76px]">
        <div className="p-4 flex items-center justify-between">
          <img src={ogo} alt="Logo" className="h-10 " />

          <button
            onClick={() => navigate("/Home")}
            type="submit"
            className="w-[314px] h-[40px]  text-black font-sblackemibold font-semibold font-poppins rounded-md hover:text-red-700 transition text-[20px]"
          >
            Sign In
          </button>
        </div>
      </div>
      {/* img */}

      <div className="">
        <div className=" flex items-center justify-center pt-20 gap-3">
          <img src={l1} alt="" />
          <img src={l2} alt="" className="w-[90px] h-[90px]" />
          <img src={l3} alt="" />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[12px] font-Poppins text-gray-600 mt-10">
            STEP 1 OF 3
          </h2>
          <h1 className="text-center font-bold text-[#333333]">
            Finish setting up your <br /> account
          </h1>
          <p className="text-center text-[18px] text-[#333333] font-semibold mt-2">
            Netflix is personalized for you.
            <br /> Create a password to watch on any
            <br /> device at any time.
          </p>
          <button
            onClick={() => navigate("/Membership")}
            className="bg-[#e50914] w-[340px] h-[67px] mt-7 cursor-pointer text-white rounded-md font-bold text-[24px] hover:bg-red-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finish;
