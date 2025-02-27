import React, { useRef, useState, useEffect } from "react";
import best1 from "../assets/bestseller-1.jpg";
import cake1 from "../assets/cake-1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Ratings from "../components/Ratings";
// import {
//   add_to_card,
//   messageClear,
//   add_to_wishlist,
// } from "../../store/reducers/cardReducer";
const BestSellers = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { userInfo } = useSelector((state) => state.auth);
  // const { successMessage, errorMessage } = useSelector((state) => state.card);

  // const add_card = (id) => {
  //   if (userInfo) {
  //     dispatch(
  //       add_to_card({
  //         userId: userInfo.id,
  //         quantity: 1,
  //         productId: id,
  //       })
  //     );
  //   } else {
  //     navigate("/login");
  //   }
  // };
  // useEffect(() => {
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     dispatch(messageClear());
  //   }
  //   if (errorMessage) {
  //     toast.error(errorMessage);
  //     dispatch(messageClear());
  //   }
  // }, [errorMessage, successMessage]);

  // const add_wishlist = (pro) => {
  //   dispatch(
  //     add_to_wishlist({
  //       userId: userInfo.id,
  //       productId: pro._id,
  //       name: pro.name,
  //       price: pro.price,
  //       image: pro.images[0],
  //       discount: pro.discount,
  //       rating: pro.rating,
  //       slug: pro.slug,
  //     })
  //   );
  // };

  {
    /*Timer */
  }
  const duration = 7 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) return; // Stop the timer when time reaches 0

    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [time]);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));

    return `${days} ${hours} ${minutes} ${seconds}`;
  };
  return (
    <div className="w-[95%] flex flex-wrap mx-auto">
      <div className="w-full flex flex-row gap-6">
        {/*left side */}
        <div className="w-1/4  ">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image1"
              className="h-[400px] w-full rounded-xl object-cover"
            />
            <div className="absolute top-[40px] ml-[40px] items-center justify-center">
              <p className="py-1 text-white">E-Bazar Foods</p>
              <p className="py-1 text-2xl">Special Offer</p>
              <p className="py-1 text-2xl font-bold">New Products</p>

              <p className="py-1 text-2xl text-white font-bold">$20.50</p>
            </div>
          </div>
          <div>
            {/*left side 1*/}
            <div className="mt-9">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3166786/pexels-photo-3166786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image1"
                  className="h-[400px] w-full rounded-xl"
                />
                <div className="absolute top-[40px] ml-[40px] items-center justify-center text-red-500">
                  <p className="py-1 ">E-Bazar Foods</p>
                  <p className="py-1 text-2xl">Special Offer</p>
                  <p className="py-1 text-2xl font-bold">New Products</p>

                  <p className="py-1 text-2xl text-red-400 font-bold">$20.50</p>
                </div>
              </div>
              <div>1</div>
            </div>
          </div>
        </div>

        {/*right side */}
        <div className="w-3/4 ">
          <div>
            <p className="p-3 uppercase text-2xl font-medium">Best Sellers</p>
            <p className="pl-3 mb-8">
              Do not miss the current offers until the end of February.
            </p>
          </div>
          {/*right slider */}

          <div>
            <div className="w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={2}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {products.map((p, i) => (
                  <SwiperSlide key={i}>
                    <div className="border group transition-all duration-500 hover:shadow-md hover:-mt-3 mb-7">
                      <div className="relative overflow-hidden">
                        {p.discount > 0 && (
                          <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                            {p.discount}%
                          </div>
                        )}
                        <img
                          className="sm:w-full w-full h-[240px]"
                          src={p.images[0]}
                          alt="product image"
                        />
                        <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                          <li
                            onClick={() => add_wishlist(p)}
                            className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
                          >
                            <AiFillHeart />
                          </li>
                          <Link
                            to={`/product/details/${p.slug}`}
                            className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
                          >
                            <FaEye />
                          </Link>
                          <li
                            onClick={() => add_card(p._id)}
                            className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
                          >
                            <AiOutlineShoppingCart />
                          </li>
                        </ul>
                      </div>
                      <div className="py-3 text-slate-600 px-2">
                        <h2>{p.name}</h2>
                        <div className="flex justify-start items-center gap-3">
                          <span className="text-lg font-bold">${p.price}</span>
                          <div className="flex">
                            <Ratings ratings={4.5} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/*right covid*/}
            <div className="bg-sky-200 rounded-md mt-6 flex flex-row justify-between">
              <div className="pl-9 mt-8">
                <p>Always takeing care</p>
                <p className="text-xl font-md">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/1381816/pexels-photo-1381816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  className="h-[130px] w-[300px] object-cover rounded-md"
                />
              </div>
            </div>

            {/*right HOT PRODUCT FOR THIS WEEK*/}
            <div>
              <div>
                <p className="p-3 uppercase text-2xl font-medium">
                  HOT PRODUCT FOR THIS WEEK
                </p>
                <p className="pl-3 mb-8">
                  Dont miss this opportunity at a special discount just for this
                  week.
                </p>
              </div>
              <div className="border relative border-red-500 rounded-md mt-6 flex flex-row ">
                <div>
                  <img
                    src="https://images.pexels.com/photos/65623/vehicle-chrome-technology-automobile-65623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="image"
                    className="h-[230px] w-[300px] object-cover rounded-md p-4"
                  />

                  <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                    2%
                  </div>
                </div>
                <div className="py-7 ml-7 ">
                  <p className="font-bold text-red-500">$4.49</p>
                  <p className="text-md font-md">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                  <div>
                    <p className=" mt-3 rounded-md   text-lg font-bold">
                      {time > 0 ? (
                        <>
                          <span className="bg-gray-100 p-2 mr-2">
                            {formatTime(time).split(" ")[0]}
                          </span>
                          :
                          <span className="bg-gray-100 p-2 mx-2">
                            {formatTime(time).split(" ")[1]}
                          </span>
                          :
                          <span className="bg-gray-100 p-2 mx-2">
                            {formatTime(time).split(" ")[2]}
                          </span>
                          :
                          <span className="bg-gray-100 p-2 mx-2">
                            {formatTime(time).split(" ")[3]}
                          </span>
                        </>
                      ) : (
                        "Time's up!"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
