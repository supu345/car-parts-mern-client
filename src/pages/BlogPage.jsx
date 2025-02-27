import React, { useEffect } from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import Blog from "../components/blog";

const BlogPage = () => {
  return (
    <div>
      <Headers />
      <div className="bg-[url('https://cdn.pixabay.com/photo/2024/08/17/15/35/vehicle-8976090_1280.png')] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">E-com Shop</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[25px] mb-4">
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
