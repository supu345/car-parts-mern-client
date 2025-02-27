import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  add_to_card,
  messageClear,
  add_to_wishlist,
} from "../store/reducers/cardReducer";

const FeatureProducts = ({ products }) => {
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
    <div>
      <div className="w-[85%] flex flex-wrap mx-auto">
        <div className="w-full">
          <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
            <h2>Feature Products</h2>
            <div className="w-[100px] h-[4px] bg-[#7fad39] mt-4"></div>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-4  sm:grid-cols-1 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="border group transition-all duration-500 hover:shadow-md hover:-mt-3 p-2"
            >
              <div className="relative overflow-hidden">
                {p.discount ? (
                  <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                    {p.discount}%
                  </div>
                ) : (
                  ""
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
                <h2 className="font-bold">{p.name}</h2>
                <div className="flex justify-start items-center gap-3">
                  <span className="text-lg  font-bold">{p.price}</span>
                  <div className="flex">Rating</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 2 div */}
      <div className="flex flex-col md:flex-row  px-6 mt-7 gap-6">
        <div className="w-full md:w-1/2 bg-red-500 relative overflow-hidden rounded-xl group">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/30666527/pexels-photo-30666527/free-photo-of-close-up-of-a-blue-sports-car-on-a-race-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="h-[240px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Black Opacity Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute top-[40px] ml-[40px] items-center justify-center uppercase">
            <p className="py-1 text-white uppercase">Only this week</p>
            <p className="py-1 text-white text-4xl font-bold">Up to 30% off</p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
            <Link to="/shops">
              <button className="bg-red-100 text-black p-2 rounded mt-3 hover:text-red-700">
                <div className="flex flex-row gap-3 items-center px-2">
                  <p className="font-bold">Shop Now</p>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-red-500 relative overflow-hidden rounded-xl group">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="h-[240px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
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
                <div className="flex flex-row gap-3 items-center px-2">
                  <p className="font-bold "> Shop Now</p>
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

export default FeatureProducts;
