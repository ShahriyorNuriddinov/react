import React from "react";
import img from "../assets/img/overview.png";

const Activity = () => {
  return (
    <section className="container1 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 bg-main flex items-center justify-center">
      <div className="w-full flex justify-center">
        <img
          src={img}
          alt="Activity overview"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        />
      </div>
    </section>
  );
};

export default Activity;
