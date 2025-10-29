import React from "react";
import img from "../assets/img/showcase.png";

const Showcase = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-[100px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="flex flex-col justify-evenly order-2 lg:order-1 text-center lg:text-left w-full lg:w-1/2">
          <div className="mb-6 lg:mb-8">
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] text-dark leading-tight">
              Track your <br /> Expenses & <br /> Save Money
            </h1>
          </div>
          
          <div className="mb-6 lg:mb-8">
            <p className="font-normal text-lg sm:text-xl lg:text-2xl text-gray-600">
              Helps you to organize your income and expenses
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto py-3 px-6 lg:py-4 lg:px-5 font-normal text-lg lg:text-2xl text-background bg-main rounded-md hover:bg-opacity-90 transition duration-200">
              Try free demo <i className="fa-solid fa-chevron-down ml-2"></i>
            </button>
            <p className="text-lg lg:text-2xl text-light font-normal whitespace-nowrap">
              — Web, iOS and Android
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 w-full lg:w-1/2 flex justify-center">
          <img 
            src={img} 
            alt="showcase" 
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Showcase;