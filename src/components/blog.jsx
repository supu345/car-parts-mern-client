import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaAnglesRight } from "react-icons/fa6";
import { get_blogs, get_blogcategory } from "../store/reducers/blogReducer";

const Blog = () => {
  const dispatch = useDispatch();

  const { successMessage, errorMessage, blogcategorys, blogs } = useSelector(
    (state) => state.blog
  );

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

  useEffect(() => {
    dispatch(get_blogcategory());

    dispatch(get_blogs());
  }, [dispatch]);

  useEffect(() => {
    console.log("blogcategorys:", blogcategorys);
    console.log("blog:", blogs);
  }, [blogcategorys, blogs]);

  return (
    <div className="px-6 py-7">
      <div className="py-12  mt-6">
        <div className="relative h-[100px] w-full overflow-hidden rounded-md">
          {/* Image */}
          <img
            src="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="h-full w-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-10"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center uppercase">
            <p className="py-1 text-white text-md font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
              pariatur!
            </p>
            <p className="py-1 text-2xl font-bold text-white">New Products</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-2xl font-bold mb-6">Auto Care Tips & Advice</p>
      </div>

      {/* 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {blogs.map((blog, i) => {
          return (
            <div key={i} className="rounded-md">
              {/* Image Section */}
              <div className="relative group h-[200px] w-full rounded-md overflow-hidden">
                <img
                  src={blog.image}
                  alt="image"
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <img
                    src="https://images.pexels.com/photos/1519192/pexels-photo-1519192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="icon"
                    className="h-full w-full object-cover"
                  />
                </div> */}
              </div>
              {/* Blog Details */}
              <div className="flex flex-row items-center justify-between my-4">
                <p className="text-md font-semibold bg-slate-200 px-2 text-red-600">
                  {blog.category}
                </p>
                <p className="text-md">20/2/2025</p>
                <p className="text-md">by name</p>
              </div>

              <Link to={`/blog/details/${blog.slug}`}>
                <p className="text-xl font-bold mb-6 hover:text-red-500">
                  {blog.title}
                </p>
              </Link>
              <p>
                {blog.articleText.length > 200
                  ? `${blog.articleText.substring(0, 200)}...`
                  : blog.articleText}
              </p>
              {/* Read More Section */}
              {/* <div className="flex flex-row gap-5 items-center mt-4">
                <button className="font-bold">Read More</button>
                <FaAnglesRight />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
