import React from "react";
import img from "../assets/img/online.png";

const Online = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col justify-center order-2 lg:order-1 gap-6 md:gap-8 lg:gap-10">
          <div className="text-center lg:text-left">
            <p className="font-normal text-lg sm:text-xl lg:text-2xl text-light mb-2">
              Use anytime
            </p>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-dark leading-tight">
              Use anytime <br /> when you <br /> need
            </h1>
          </div>

          <div className="text-center lg:text-left">
            <p className="font-normal text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </p>
          </div>

          <div className="text-main flex items-center justify-center lg:justify-start gap-3 cursor-pointer hover:gap-4 transition-all duration-200">
            <p className="font-normal text-lg sm:text-xl lg:text-2xl hover:underline">
              Learn more
            </p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src={img}
            alt="Use anytime illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Online;
