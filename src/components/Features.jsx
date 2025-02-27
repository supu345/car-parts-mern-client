import React from "react";
import shopping from "../assets/shopping.png";
import atmCard from "../assets/atm-card.png";
import freeReturn from "../assets/return.png";
import phoneCall from "../assets/phone-call.png";

const Features = () => {
  return (
    <div>
      <div className="px-6 flex flex-col md:flex-row gap-8">
        <div className="w-1/4 flex flex-col items-center text-center">
          <img src={shopping} alt="image1" className="h-[70px] w-[70px]" />
          <p className="text-xl font-bold mt-2">Worldwide Delivery</p>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            molestiae commodi libero earum explicabo.
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center text-center">
          <img src={atmCard} alt="image1" className="h-[70px] w-[70px]" />
          <p className="text-xl font-bold mt-2">Secure Shopping</p>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            molestiae commodi libero earum explicabo.
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center text-center">
          <img src={freeReturn} alt="image1" className="h-[70px] w-[70px]" />
          <p className="text-xl font-bold mt-2">Free Returns</p>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            molestiae commodi libero earum explicabo.
          </p>
        </div>
        <div className="w-1/4 flex flex-col items-center text-center">
          <img src={phoneCall} alt="image1" className="h-[70px] w-[70px]" />
          <p className="text-xl font-bold mt-2">24/7 Help Center</p>
          <p className="mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            molestiae commodi libero earum explicabo.
          </p>
        </div>
      </div>

      <div className="py-12 px-4 mt-6">
        <div className="relative h-[100px] w-full overflow-hidden rounded-md">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="h-full w-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-10"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center uppercase">
            <p className="py-1 text-white text-xl font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              pariatur!
            </p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
