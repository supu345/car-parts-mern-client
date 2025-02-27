import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import toast from "react-hot-toast";
import {
  add_to_card,
  messageClear,
  add_to_wishlist,
} from "../store/reducers/cardReducer";

const BestSelling = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage } = useSelector((state) => state.card);

  const add_card = (id) => {
    if (userInfo) {
      dispatch(
        add_to_card({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  //console.log(userInfo);
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);

  const add_wishlist = (pro) => {
    dispatch(
      add_to_wishlist({
        userId: userInfo.id,
        productId: pro._id,
        name: pro.name,
        price: pro.price,
        image: pro.images[0],
        discount: pro.discount,
        rating: pro.rating,
        slug: pro.slug,
      })
    );
  };

  return (
    <div className="px-5">
      <div>
        <div>
          <p className="p-3 uppercase text-2xl font-bold">Best Sellers</p>
          <p className="pl-3 mb-8">
            Do not miss the current offers until the end of February.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000, // Adjust delay in milliseconds
            disableOnInteraction: false, // Keep autoplay active even when interacting with the slider
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]} // Add Autoplay to modules
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
                  <ul className="flex flex-col transition-all duration-700 right-2 justify-center items-center gap-2 absolute group-hover:bottom-3">
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
                    <Link>
                      <li
                        onClick={() => add_card(p._id)}
                        className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
                      >
                        <AiOutlineShoppingCart />
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="py-3 text-slate-600 px-2">
                  <h2>{p.name}</h2>
                  <div className="flex justify-start items-center gap-3">
                    <span className="text-lg font-bold">${p.price}</span>
                    <div className="flex">rating</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* 3 div */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 bg-red-500 rounded-2xl relative overflow-hidden group">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/30666527/pexels-photo-30666527/free-photo-of-close-up-of-a-blue-sports-car-on-a-race-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Black Opacity Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute top-[40px] ml-[40px] items-center justify-center uppercase">
            <p className="py-1 text-white  uppercase">Only this week</p>
            <p className="py-1 text-white text-4xl font-bold ">Up to 30% off</p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
            <Link to="/shops">
              <button className="bg-red-100 text-black p-2 rounded mt-3">
                <div className="flex flex-row gap-3 items-center px-2 hover:text-red-500">
                  <p className="font-bold"> Shop Now</p>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-red-500 rounded-2xl relative overflow-hidden group">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Black Opacity Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute top-[40px] ml-[40px] items-center justify-center uppercase">
            <p className="py-1 text-white  uppercase">Only this week</p>
            <p className="py-1 text-white text-4xl font-bold ">Up to 30% off</p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
            <Link to="/shops">
              <button className="bg-red-100 text-black p-2 rounded mt-3 hover:text-red-700">
                <div className="flex flex-row gap-3 items-center px-2 ">
                  <p className="font-bold"> Shop Now</p>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-red-500 rounded-2xl relative overflow-hidden group">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Black Opacity Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute top-[40px] ml-[40px] items-center justify-center uppercase">
            <p className="py-1 text-white  uppercase">Only this week</p>
            <p className="py-1 text-white text-4xl font-bold ">Up to 30% off</p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
            <Link to="/shops">
              <button className="bg-red-100 text-black p-2 rounded mt-3">
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

export default BestSelling;
