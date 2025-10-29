import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img from "../assets/svg/avatar.svg";

const ResponsiveSwiper = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="rounded-2xl"
      >
        <SwiperSlide>
          <div className=" flex flex-col  justify-center bg-background gap-3 font-semibold rounded-2xl border">
            <div className="w-[100%] h-[20px] bg-main rounded-t-xl"></div>
            <div className="px-5">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </div>
            <div className="flex items-center justify-start px-5">
              <img src={img} alt="" />
              <p className="font-bold text-base text-[#000]">
                Cameron Williamson,{" "}
                <span className="font-normal text-light">CEO</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col  justify-center bg-background gap-3 font-semibold rounded-2xl border">
            <div className="w-[100%] h-[20px] bg-blue-600 rounded-t-xl"></div>
            <div className="px-5">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </div>
            <div className="flex items-center justify-start px-5">
              <img src={img} alt="" />
              <p className="font-bold text-base text-[#000]">
                Cameron Williamson,{" "}
                <span className="font-normal text-light">CEO</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col  justify-center bg-background gap-3 font-semibold rounded-2xl border">
            <div className="w-[100%] h-[20px] bg-red-600 rounded-t-xl"></div>
            <div className="px-5">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </div>
            <div className="flex items-center justify-start px-5">
              <img src={img} alt="" />
              <p className="font-bold text-base text-[#000]">
                Cameron Williamson,{" "}
                <span className="font-normal text-light">CEO</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col  justify-center bg-background gap-3 font-semibold rounded-2xl border">
            <div className="w-[100%] h-[20px] bg-yellow-600 rounded-t-xl"></div>
            <div className="px-5">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </div>
            <div className="flex items-center justify-start px-5">
              <img src={img} alt="" />
              <p className="font-bold text-base text-[#000]">
                Cameron Williamson,{" "}
                <span className="font-normal text-light">CEO</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col  justify-center bg-background gap-3 font-semibold rounded-2xl border">
            <div className="w-[100%] h-[20px] bg-green-600 rounded-t-xl"></div>
            <div className="px-5">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </div>
            <div className="flex items-center justify-start px-5">
              <img src={img} alt="" />
              <p className="font-bold text-base text-[#000]">
                Cameron Williamson,{" "}
                <span className="font-normal text-light">CEO</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex flex-col  justify-center bg-background gap-3 font-semibold rounded-2xl border">
            <div className="w-[100%] h-[20px] bg-blue-600 rounded-t-xl"></div>
            <div className="px-5">
              Eleifend fames amet, fames enim. Ullamcorper pellentesque ac
              volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros
              pretium felis massa mauris, aliquam congue.
            </div>
            <div className="flex items-center justify-start px-5">
              <img src={img} alt="" />
              <p className="font-bold text-base text-[#000]">
                Cameron Williamson,{" "}
                <span className="font-normal text-light">CEO</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ResponsiveSwiper;
