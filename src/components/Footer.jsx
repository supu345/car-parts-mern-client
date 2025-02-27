import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

import { FaArrowUp } from "react-icons/fa";
import logo from "../../src/assets/logo.png";

import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    const scrollStep = -window.scrollY / 50;
    const delay = 10;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, delay);
  };
  return (
    <footer className="bg-black text-white">
      <div className="w-[85%] flex flex-col md:flex-row px-[40px] py-6">
        {/* Logo and About Section */}
        <div className=" text-center md:w-6/12 sm:text-center md:text-left">
          <div className="flex flex-col gap-3 w-10/12 mx-auto md:mx-0">
            <div className="flex flex-row items-center justify-center md:justify-start">
              <img className="w-[100px] h-[70px]" src={logo} alt="logo" />
              <p className="uppercase text-3xl font-bold text-red-700">
                Car-parts
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              quis ipsum magnam est cumque suscipit beatae blanditiis atque
              quibusdam voluptatum!
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-center h-[50px] text-white">
            <div className="flex gap-4">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <AiOutlineTwitter />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Useful Links Section */}
        <div className="text-center md:w-3/12  sm:text-center md:text-left">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-lg mb-2 mt-6">Useful Links</h2>
            <ul className="flex flex-col gap-2 text-white text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shops">Shops</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div className="text-center md:w-3/12  md:text-left">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-lg mb-2 mt-6">Address</h2>
            <ul className="flex flex-col gap-2 text-white">
              <li>Address : Dhaka, Bangladesh</li>
              <li>Phone : 5873458345</li>
              <li>Email : adilah@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        onClick={scrollTop}
        id="scroll"
        className="fixed bottom-4 right-4 cursor-pointer"
      >
        <button className="bg-slate-300 p-3 rounded-md  shadow-md">
          <span>
            <FaArrowUp className="text-black" />
          </span>
        </button>
      </div>
      <div className="border border-slate-300"></div>
      <div className="w-[85%] flex flex-wrap justify-center items-center text-white mx-auto py-5 text-center">
        <span>
          Copiright ©2025 All rights reserved | mady by{" "}
          <Link
            to="https://codewithfoyzun.com/"
            className="text-blue-500 underline"
          >
            Suparna
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
