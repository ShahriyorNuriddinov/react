import React from "react";

const Product = () => {
  return (
    <section className="container1 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-[100px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-tight">
            The Product we work with.
          </h1>
        </div>
        <div className="flex items-center">
          <p className="font-normal text-lg sm:text-xl lg:text-2xl text-light text-center lg:text-left">
            Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
            aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 py-12 md:py-16 lg:py-[100px]">
        <div className="flex flex-col items-center text-center gap-6 p-6 rounded-lg hover:bg-gray-50 transition duration-200">
          <div className="flex items-center justify-center w-12 h-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H22V4H4C2.9 4 2 4.9 2 6V17H0V20H14V17H4V6ZM23 8H17C16.45 8 16 8.45 16 9V19C16 19.55 16.45 20 17 20H23C23.55 20 24 19.55 24 19V9C24 8.45 23.55 8 23 8ZM22 17H18V10H22V17Z"
                fill="#FFBD74"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl text-dark mb-2">
              Cross platform
            </h1>
            <p className="font-normal text-sm sm:text-base text-light">
              Elit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-6 p-6 rounded-lg hover:bg-gray-50 transition duration-200">
          <div className="flex items-center justify-center w-12 h-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.35 10.04C19.0141 8.33772 18.0976 6.80486 16.7571 5.70325C15.4165 4.60163 13.7351 3.99961 12 4C9.11 4 6.6 5.64 5.35 8.04C3.88023 8.19883 2.52101 8.89521 1.53349 9.99532C0.545971 11.0954 -0.000171702 12.5217 4.04928e-08 14C4.04928e-08 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04ZM19 18H6C3.79 18 2 16.21 2 14C2 11.79 3.79 10 6 10H6.71C7.37 7.69 9.48 6 12 6C15.04 6 17.5 8.46 17.5 11.5V12H19C20.66 12 22 13.34 22 15C22 16.66 20.66 18 19 18Z"
                fill="#E2598B"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl text-dark mb-2">
              Cloud server
            </h1>
            <p className="font-normal text-sm sm:text-base text-light">
              Elit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-6 p-6 rounded-lg hover:bg-gray-50 transition duration-200">
          <div className="size-12 bg-gray-100 rounded-[50%] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 4.14V2H14V4H10V2H7V4.14C5.28 4.59 4 6.14 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.14 18.72 4.59 17 4.14ZM18 20H6V8C6 6.9 6.9 6 8 6H16C17.1 6 18 6.9 18 8V20ZM16.5 12V16H14.5V14H7.5V12H16.5Z"
                fill="#4D12EE"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl text-dark mb-2">
              Secure Payments
            </h1>
            <p className="font-normal text-sm sm:text-base text-light">
              Elit esse cillum dolore eu fugiat nulla pariatur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
