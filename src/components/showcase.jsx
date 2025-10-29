import React from "react";
import img from "../assets/img/showcase.png";
const showcase = () => {
  return (
    <section className="container1 py-[100px]">
      <div className="flex  justify-between">
        <div className="flex flex-col justify-evenly">
          <div className="">
            <h1 className="font-bold  text-[70px] text-dark">
              Track your <br /> Expenses & <br /> Save Money
            </h1>
          </div>
          <div className="">
            <p className="font-normal text-2xl">
              Helps you to organize your income and expenses
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="py-4 px-5 font-normal text-2xl text-background bg-main rounded-md">
              Try free demo <i class="fa-solid fa-chevron-down"></i>
            </button>
            <p className="text-2xl text-light font-normal">
              — Web, iOS and Android
            </p>
          </div>
        </div>
        <div className="">
          <img src={img} alt="showcase" className="" />
        </div>
      </div>
    </section>
  );
};

export default showcase;
