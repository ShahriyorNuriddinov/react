import React from "react";
import img from "../assets/img/grid.png";
import img1 from "../assets/img/grid1.png";

const Banner = () => {
  return (
    <section className="bg-main py-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12 py-8 md:py-12 lg:py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] text-background leading-tight">
                20M+ downloaded from 32 different countries
              </h1>
              <p className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-background text-center mt-4 md:mt-6">
                Try demo for 7 days with full features.
              </p>
            </div>
            <div className="flex justify-center">
              <button className="py-3 px-6 sm:py-4 sm:px-8 font-normal text-base sm:text-lg lg:text-xl text-main bg-background rounded-md hover:bg-opacity-90 transition duration-200 w-full sm:w-auto text-center">
                Try free demo <i className="fa-solid fa-chevron-down ml-2"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 py-6 md:py-8 lg:py-12">
            <div className="flex justify-center">
              <img
                src={img}
                alt="App download statistics"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
            <div className="flex justify-center">
              <img
                src={img1}
                alt="Global reach visualization"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
