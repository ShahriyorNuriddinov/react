import React from "react";
import img from "../assets/img/family.png";
const family = () => {
  return (
    <section className="container1 py-[100px]">
      <div className="grid grid-cols-2">
        <div className="">
          <img src={img} alt="showcase" className="" />
        </div>
        <div className="flex flex-col justify-evenly">
          <div className="">
            <p className="font-normal text-2xl text-light">Alwalys online</p>
            <h1 className="font-bold  text-[70px] text-dark">
              Save cost <br /> for you and <br /> family
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
      </div>
    </section>
  );
};

export default family;
