import React from "react";
import logo from "../assets/svg/Logo.svg";

const Header = () => {
  return (
    <header className="container1">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <a href="/">
            <img src={logo} alt="Logo" className="" />
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-dark font-normal text-lg">
          <a href="#" className="hover:text-orange-400 transition">
            Features
          </a>
          <a href="#" className="hover:text-orange-400  transition">
            About us
          </a>
          <a href="#" className="hover:text-orange-400  transition">
            Pricing
          </a>
          <a href="#" className="hover:text-orange-400  transition">
            Feedback
          </a>
        </nav>

        <button
          className="p-2 border border-amber-600 border-solid  rounded-md font-normal text-lg
         text-main"
        >
          Request a demo
        </button>
      </div>
    </header>
  );
};

export default Header;
