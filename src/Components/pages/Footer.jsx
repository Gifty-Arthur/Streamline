import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full h-[300px] bg-[#161616] bg-opacity-50  text-sm text-white">
      <div className="px-20 pt-20 text-left">
        <p className="text-[16px]">Questions? Contact us</p>
        <div className="flex flex-row underline text-[14px]  items-center justify-between mt-10">
          <p className="">FAQ</p>
          <p>Help Center</p>
          <p>Terms of Use</p>
          <p>Privacy</p>
        </div>
        <div className="flex flex-row underline text-[14px]  gap-45 mt-10">
          <Link>
            <p className="">Cookie Preferences</p>
          </Link>
          <p>Coporate </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
