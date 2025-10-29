import React from "react";
import img from "../assets/img/online.png";
const online = () => {
  return (
    <section className="container1 py-[100px]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-evenly">
          <div className="">
            <p className="font-normal text-2xl text-light">Use anytime</p>
            <h1 className="font-bold  text-[70px] text-dark">
              Use anytime <br /> when you <br /> need
            </h1>
          </div>
          <div className="">
            <p className="font-normal text-2xl">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </p>
          </div>
          <div className="text-main flex items-center gap-3">
            <p className="font-normal text-2xl">Learn more</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="">
          <img src={img} alt="showcase" className="" />
        </div>
      </div>
    </section>
  );
};

export default online;
