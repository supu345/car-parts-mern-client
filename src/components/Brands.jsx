import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div className="px-6">
      <div>
        <p className="text-3xl font-bold mb-6">Listed Our Trusted Brands</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 ">
        {/* left */}
        <div className="md:w-1/3 sm:w-full rounded-md">
          <div className="relative overflow-hidden rounded-md group">
            <img
              src="https://images.pexels.com/photos/18296/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="h-[320px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute top-[40px] ml-[40px] items-center justify-center uppercase">
              <p className="py-1 text-white uppercase">Only this week</p>
              <p className="py-1 text-white text-4xl font-bold">
                Up to 30% off
              </p>
              <p className="py-1 text-2xl font-bold text-white">New Products</p>
              <Link to="/shops">
                <button className="bg-red-100 text-black p-2 rounded mt-3">
                  <div className="flex flex-row gap-3 items-center px-2 hover:text-red-700">
                    <p className="font-bold">Shop Now</p>
                    <FaArrowRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 sm:w-full  rounded-md grid sm:grid-cols-2 md:grid-cols-4  gap-2 items-center">
          <div className=" p-12 bg-amber-300 ml-2">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-2.png"
              alt="image"
              className="h-[50px]"
            />
          </div>

          <div className=" p-12 bg-blue-300 ">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-1.png"
              alt="image"
              className="h-[50px]"
            />
          </div>
          <div className="p-12 bg-amber-300">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-3.png"
              alt="image"
              className="h-[50px]"
            />
          </div>
          <div className=" p-12 bg-green-300">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-4.png"
              alt="image"
              className="h-[50px]"
            />
          </div>
          <div className=" ml-2 p-12 bg-blue-300">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-4.png"
              alt="image"
              className="h-[50px]"
            />
          </div>
          <div className=" p-12 bg-green-300">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-5.png"
              alt="image"
              className="h-[50px]"
            />
          </div>
          <div className="p-12 bg-amber-300">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-6.png"
              alt="image"
              className="h-[50px]"
            />
          </div>
          <div className=" p-12 bg-blue-300">
            <img
              src="https://demo2.wpopal.com/autosoe/wp-content/uploads/2024/10/h1_brand-7.png"
              alt="image"
              className="h-[50px]"
            />
          </div>
        </div>
      </div>

      <div className="py-12 ">
        <div className="relative h-[200px] w-full overflow-hidden rounded-md">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/1021683/pexels-photo-1021683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="h-full w-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center uppercase">
            <p className="py-1 text-white text-4xl font-bold">Up to 30% off</p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>

            <button className="bg-red-100 text-black p-2 rounded mt-3">
              <div className="flex flex-row gap-3 items-center px-2">
                <p className="font-bold">Shop Now</p>
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
