import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import logo from "../../src/assets/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaUser,
  FaLock,
  FaList,
} from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillHeart,
  AiFillShopping,
} from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_category } from "../store/reducers/homeReducer";
import {
  get_card_products,
  get_wishlist_products,
} from "../store/reducers/cardReducer";

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { categorys } = useSelector((state) => state.home);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { card_product_count, wishlist_count } = useSelector(
    (state) => state.card
  );
  // console.log(categorys);
  const { pathname } = useLocation();
  const [showShidebar, setShowShidebar] = useState(true);
  const [categoryShow, setCategoryShow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");

  const redirect_card_page = () => {
    if (userInfo) {
      navigate(`/card`);
    } else {
      navigate(`/login`);
    }
  };
  useEffect(() => {
    if (userInfo) {
      dispatch(get_card_products(userInfo.id));
      dispatch(get_wishlist_products(userInfo.id));
    }
  }, [userInfo]);

  useEffect(() => {
    dispatch(get_category());
  }, [dispatch]);
  return (
    <div>
      <nav className="bg-gray-200 text-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/">
              <div className="flex flex-row items-center justify-center md:justify-start">
                <img className="w-[100px] h-[70px]" src={logo} alt="logo" />
                <p className="uppercase text-3xl font-bold text-red-700">
                  Car-parts
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/shops" className="hover:text-gray-300">
                Shops
              </Link>
              <Link to="/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>
            <div className="flex flex-row gap-4">
              {userInfo ? (
                <Link
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm"
                  to="/dashboard"
                >
                  <span>
                    <FaUser />
                  </span>
                  <span>{userInfo.name}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex cursor-pointer justify-center items-center gap-2 text-sm"
                >
                  <span>
                    <FaLock />
                  </span>
                  <span>Login</span>
                </Link>
              )}
              <div>
                {" "}
                <div className="flex md-lg:hidden justify-center items-center gap-5">
                  <div className="flex justify-center gap-5">
                    <div
                      onClick={() =>
                        navigate(userInfo ? "/dashboard/my-wishlist" : "/login")
                      }
                      className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]"
                    >
                      <span className="text-xl text-red-500">
                        <AiFillHeart />
                      </span>

                      {wishlist_count !== 0 && (
                        <div className="w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                          {wishlist_count}
                        </div>
                      )}
                    </div>
                    <div
                      onClick={redirect_card_page}
                      className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]"
                    >
                      <Link to="/card">
                        <span className="text-xl text-orange-500">
                          <AiFillShopping />
                        </span>
                      </Link>

                      {card_product_count !== 0 && (
                        <div className="w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                          {card_product_count}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-2xl focus:outline-none"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-blue-400 text-white p-4 space-y-4">
              <Link
                to="/"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block hover:bg-blue-600 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* category */}
      <div className="w-[85%] lg:w-[90%] mx-auto mt-2">
        <div className="flex w-full flex-wrap md-lg:gap-8">
          <div className="w-full md:w-3/12 mb-4">
            <div className="bg-white relative">
              <div
                onClick={() => setCategoryShow(!categoryShow)}
                className="h-[50px] bg-green-600 text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer"
              >
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <FaList />
                  </span>
                  <span>All Category</span>
                </div>
                <span className="pt-1">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </div>
              <div
                className={`${
                  categoryShow ? "h-0" : "h-[400px]"
                } overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-white w-full border-x`}
              >
                <ul className="py-2 text-slate-600 font-medium h-full overflow-auto">
                  {categorys.map((c, i) => {
                    return (
                      <li
                        key={i}
                        className="flex justify-start items-center gap-2 px-[24px] py-[6px]"
                      >
                        <img
                          src={c.image}
                          className="w-[30px] h-[30px] rounded-full overflow-hidden"
                          alt={c.name}
                        />
                        <Link
                          to={`/products?category=${c.name}`}
                          className="text-sm block"
                        >
                          {c.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-9/12 pl-8 md-lg:pl-0 md-lg:w-full">
            <div className="flex flex-wrap w-full justify-between items-center md-lg:gap-6">
              <div className="w-full md:w-8/12 ">
                <div className="flex border h-[50px] items-center relative gap-5">
                  <div className="relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] md:hidden">
                    <select
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-[150px] text-slate-600 font-semibold bg-transparent px-2 h-full outline-0 border-none"
                      name=""
                      id=""
                    >
                      <option value="">Select category</option>
                      {categorys.map((c, i) => (
                        <option key={i} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <input
                    className="w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full"
                    // onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    name=""
                    id=""
                    placeholder="what do you need"
                  />
                  <button
                    //onClick={search}
                    className="bg-green-600 right-0 absolute px-8 h-full font-semibold uppercase text-white"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className=" sm:w-4/12 md:block ">
                <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center ">
                  <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center">
                    <span>
                      <IoIosCall />
                    </span>
                  </div>
                  <div className="flex justify-end flex-col gap-1 ">
                    <h2 className="text-md font-medium text-slate-700">
                      +8803242343243
                    </h2>
                    <span className="text-sm">support 33/45 time</span>
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

export default Headers;
