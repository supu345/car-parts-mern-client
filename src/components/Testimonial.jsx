import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6";
import { testimonialData } from "../components/constants/Testimonial";
import { Link } from "react-router-dom";
const Testimonial = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const breakpointsResponsive = {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  };

  const handleSwiperEvents = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="flex flex-col  md:flex-row gap-6 px-5">
      {/* left */}

      <div className="bg-gray-200 sm:w-full md:w-2/3 rounded-md">
        <div className="w-full h-full space-y-5 relative lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-2xl text-neutral-700 font-semibold">
              Testimonials
            </h2>

            {/* Custom buttons */}
            <div className="flex items-center gap-6 mt-4">
              <button
                className={`custom-prev text-neutral-50 bg-green-600 hover:bg-700 p-2 rounded-full z-10 ${
                  isBeginning
                    ? "opacity-50 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                disabled={isBeginning}
              >
                <FaChevronLeft size={20} />
              </button>
              <button
                className={`custom-next text-neutral-50 bg-green-600 hover:bg-green-700 p-2 rounded-full z-10 ${
                  isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={isEnd}
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="w-full py-2">
            <Swiper
              slidesPerView={1}
              spaceBetween={5}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={breakpointsResponsive}
              onSlideChange={(swiper) => handleSwiperEvents(swiper)}
              onInit={(swiper) => handleSwiperEvents(swiper)}
              modules={[Navigation]}
              className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
            >
              {testimonialData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="w-full h-auto p-6 space-y-10 group bg-neutral-800/10 rounded-xl border border-neutral-800/70">
                    <p className="text-black text-base font-normal">
                      {item.desc}
                    </p>

                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-12 h-12 object-center object-cover rounded-full border"
                        />

                        <div className="space-y-1">
                          <p className="text-black text-base font-semibold">
                            {item.name}
                          </p>
                          <p className="text-black text-xs font-normal italic">
                            {item.role} of Company {item.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-yellow-500/5 rounded-full px-2 py-1">
                        <FaStar className="text-yellow-600 text-sm" />
                        <p className="text-xs text-yellow-600">{item.rating}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="md:w-1/3 sm:w-full rounded-md">
        <div className="relative overflow-hidden rounded-md group">
          <img
            src="https://images.pexels.com/photos/952338/pexels-photo-952338.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-[400px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute top-[40px] ml-[40px] items-center justify-center uppercase mt-9">
            <p className="py-1 text-white uppercase">Only this week</p>
            <p className="py-1 text-white text-4xl font-bold ">Up to 30% off</p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
            <Link to="/shops">
              <button className="bg-red-100 text-black p-2 rounded mt-3 ">
                <div className="flex flex-row gap-3 items-center px-2 hover:text-red-600">
                  <p className="font-bold"> Shop Now</p>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
