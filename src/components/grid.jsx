import React from "react";

const Grid = () => {
  return (
    <section className="container1 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] text-dark leading-tight">
          Choose your flexible plan.
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 py-8 md:py-12 lg:py-16">
        {/* Starter Plan */}
        <div
          style={{ boxShadow: "0 0 50px 0 rgba(0,0,0,0.04)" }}
          className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-start bg-gray-100 rounded-xl p-6 md:p-8 w-full max-w-sm lg:max-w-xs xl:max-w-sm"
        >
          <div className="flex items-center justify-center w-12 h-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6H17V4C17 2.89 16.11 2 15 2H9C7.89 2 7 2.89 7 4V6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM9 4H15V6H9V4ZM20 19H4V17H20V19ZM20 14H4V8H7V10H9V8H15V10H17V8H20V14Z"
                fill="#3EC1F3"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-6 md:gap-7 items-start w-full">
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl text-dark">
                Starter Plan
              </h3>
            </div>
            <div className="w-full">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Store unlimited data
                </li>
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Export to pdf, xls, csv
                </li>
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Cloud server support
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div>
                <h3 className="font-semibold text-xl md:text-2xl text-dark">
                  $9.99/
                  <span className="font-light text-lg md:text-xl text-light">
                    year
                  </span>
                </h3>
                <p className="text-xs font-normal text-light mt-1">
                  up to 3 user + 1.99 per user
                </p>
              </div>
              <div className="w-full">
                <button className="w-full border-solid border-main border rounded-sm py-3 px-5 hover:bg-main hover:text-white transition duration-200">
                  Get this
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Silver Plan */}
        <div
          style={{ boxShadow: "0 0 50px 0 rgba(0,0,0,0.04)" }}
          className="flex flex-col gap-6 md:gap-8 lg:gap-10 bg-gray-100 rounded-xl items-start p-6 md:p-8 w-full max-w-sm lg:max-w-xs xl:max-w-sm transform lg:scale-105"
        >
          <div className="flex items-center justify-center w-12 h-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6.00004H17.82C17.93 5.69004 18 5.35004 18 5.00004C18.0011 4.35486 17.7939 3.72657 17.4092 3.20863C17.0245 2.69069 16.4829 2.31077 15.8649 2.12538C15.2469 1.93999 14.5856 1.95903 13.9794 2.17969C13.3731 2.40034 12.8542 2.81081 12.5 3.35004L12 4.02004L11.5 3.34004C10.96 2.54004 10.05 2.00004 9 2.00004C7.34 2.00004 6 3.34004 6 5.00004C6 5.35004 6.07 5.69004 6.18 6.00004H4C2.89 6.00004 2.01 6.89004 2.01 8.00004L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8.00004C22 6.89004 21.11 6.00004 20 6.00004ZM15 4.00004C15.55 4.00004 16 4.45004 16 5.00004C16 5.55004 15.55 6.00004 15 6.00004C14.45 6.00004 14 5.55004 14 5.00004C14 4.45004 14.45 4.00004 15 4.00004ZM9 4.00004C9.55 4.00004 10 4.45004 10 5.00004C10 5.55004 9.55 6.00004 9 6.00004C8.45 6.00004 8 5.55004 8 5.00004C8 4.45004 8.45 4.00004 9 4.00004ZM20 19H4V17H20V19ZM20 14H4V8.00004H9.08L7 10.83L8.62 12L12 7.40004L15.38 12L17 10.83L14.92 8.00004H20V14Z"
                fill="#FF7235"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-6 md:gap-7 items-start w-full">
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl text-dark">
                Silver Plan
              </h3>
            </div>
            <div className="w-full">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Store unlimited data
                </li>
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Export to pdf, xls, csv
                </li>
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Cloud server support
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div>
                <h3 className="font-semibold text-xl md:text-2xl text-dark">
                  $19.99/
                  <span className="font-light text-lg md:text-xl text-light">
                    year
                  </span>
                </h3>
                <p className="text-xs font-normal text-light mt-1">
                  up to 3 user + 1.99 per user
                </p>
              </div>
              <div className="w-full">
                <button className="w-full border-solid border-main border rounded-sm py-3 px-5 bg-main text-white hover:bg-opacity-90 transition duration-200">
                  Get this
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Diamond Plan */}
        <div
          style={{ boxShadow: "0 0 50px 0 rgba(0,0,0,0.04)" }}
          className="flex flex-col gap-6 md:gap-8 lg:gap-10 bg-gray-100 rounded-xl items-start p-6 md:p-8 w-full max-w-sm lg:max-w-xs xl:max-w-sm"
        >
          <div className="flex items-center justify-center w-12 h-12">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2H4C2.89 2 2 2.89 2 4V15C2 16.11 2.89 17 4 17H8V22L12 20L16 22V17H20C21.11 17 22 16.11 22 15V4C22 2.89 21.11 2 20 2ZM20 15H4V13H20V15ZM20 10H4V5C4 4.45 4.45 4 5 4H19C19.55 4 20 4.45 20 5V10Z"
                fill="#4D12EE"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-6 md:gap-7 items-start w-full">
            <div>
              <h3 className="font-semibold text-2xl md:text-3xl text-dark">
                Diamond Plan
              </h3>
            </div>
            <div className="w-full">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Store unlimited data
                </li>
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Export to pdf, xls, csv
                </li>
                <li className="flex items-center gap-3 font-normal text-base md:text-lg text-dark">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  Cloud server support
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div>
                <h3 className="font-semibold text-xl md:text-2xl text-dark">
                  $29.99/
                  <span className="font-light text-lg md:text-xl text-light">
                    year
                  </span>
                </h3>
                <p className="text-xs font-normal text-light mt-1">
                  up to 3 user + 1.99 per user
                </p>
              </div>
              <div className="w-full">
                <button className="w-full border-solid border-main border rounded-sm py-3 px-5 hover:bg-main hover:text-white transition duration-200">
                  Get this
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;
