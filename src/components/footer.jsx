import React from "react";
import logo from "../assets/svg/Logo.svg";

const Footer = () => {
  return (
    <section className="container1 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
        <div className="">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 md:w-40 lg:w-auto"
          />
        </div>
        <div className="text-center lg:text-left">
          <p className="font-medium text-xl md:text-2xl text-dark mb-4 md:mb-6">
            Links
          </p>
          <ul className="flex flex-col items-center lg:items-start gap-2 md:gap-3">
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Home
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              About us
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Careers
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Pricing
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Features
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Blog
            </li>
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <p className="font-medium text-xl md:text-2xl text-dark mb-4 md:mb-6">
            Legal
          </p>
          <ul className="flex flex-col items-center lg:items-start gap-2 md:gap-3">
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Terms of use
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Terms of conditions
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Privacy policy
            </li>
            <li className="font-medium text-base md:text-lg text-dark hover:text-main cursor-pointer transition duration-200">
              Cookie policy
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 max-w-md mx-auto lg:mx-0">
          <p className="font-medium text-xl md:text-2xl text-dark text-center lg:text-left">
            Newsletter
          </p>
          <p className="font-normal text-lg md:text-xl text-light text-center lg:text-left">
            Over 25000 people have subscribed
          </p>
          <form className="w-full border border-solid border-gray-300 rounded-lg overflow-hidden flex flex-col sm:flex-row">
            <input
              type="email"
              className="p-3 md:p-4 outline-none font-normal text-base md:text-lg text-dark flex-grow bg-transparent"
              placeholder="Enter your email"
            />
            <button className="p-3 md:p-4 font-semibold text-sm md:text-base text-background bg-main hover:bg-opacity-90 transition duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </form>
          <p className="font-normal text-xs md:text-sm text-light text-center lg:text-left">
            We don't sell your email and spam
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
