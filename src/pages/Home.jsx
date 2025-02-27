import React from "react";
import Slider from "../components/slider";
import Categorys from "../components/Categorys";
import { get_category, get_products } from "../store/reducers/homeReducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Headers from "../components/Headers";
import BestSelling from "../components/BestSelling";
import { FaArrowRight } from "react-icons/fa";
import FeatureProducts from "../components/FeatureProducts";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Features from "../components/Features";
import CarMoving from "../components/CarMoving";
import Footer from "../components/Footer";
import Blog from "../components/blog";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const {
    categorys,
    products,
    latest_product,
    topRated_product,
    discount_product,
    status,
  } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_category());
    dispatch(get_products());
  }, [dispatch]);

  return (
    <div>
      {/* <Header /> */}
      <Headers />
      <Slider />
      <Categorys />
      <div className="py-5 px-9">
        <div className="relative h-[200px] w-full overflow-hidden rounded-md group">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/2922140/pexels-photo-2922140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center uppercase">
            <p className="py-1 text-white text-4xl font-bold">Up to 30% off</p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
            <Link to="/shops">
              <button className="bg-red-100 text-black p-2 rounded mt-3 hover:text-red-600">
                <div className="flex flex-row gap-3 items-center px-2">
                  <p className="font-bold">Shop Now</p>
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-[45px]">
        <BestSelling products={products} />
      </div>

      <div className="py-[45px]">
        <FeatureProducts products={products} />
      </div>
      <div className="py-[45px]">
        <Testimonial />
      </div>
      <div className="py-[45px]">
        <Brands />
      </div>

      <div className="py-[45px]">
        <Features />
      </div>
      <div className="py-[25px] mb-4">
        <Blog />
      </div>

      {/* <div className="py-[45px]">
        <CarMoving />
      </div> */}
      {/* <BestSellers products={products} /> */}

      <Footer />
    </div>
  );
};

export default Home;
