import React, { useEffect } from "react";
import Headers from "../components/Headers";
import { get_singleBlog, get_blogs } from "../store/reducers/blogReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import parse from "html-react-parser";
const BlogDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { singleBlog, status, error, blogs } = useSelector(
    (state) => state.blog
  ); // Access singleBlog here

  console.log("blogs:", blogs);
  useEffect(() => {
    if (slug) {
      dispatch(get_singleBlog(slug)); // Dispatch to fetch the single blog by slug
      dispatch(get_blogs());
    }
  }, [slug, dispatch]);

  // Loading or error states
  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  // If no blog is found
  if (!singleBlog) return <div>Blog not found!</div>;

  return (
    <div>
      <Headers />

      <div className="bg-[url('https://images.pexels.com/photos/221201/pexels-photo-221201.jpeg?auto=compress&cs=tinysrgb&w=600')] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">E-com Shop</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-6 py-8 ">
        <div className="w-2/3">
          <h2 className="text-3xl font-bold my-4">{singleBlog.title}</h2>

          <p className="text-xl font-bold text-green-700 mb-4">
            {" "}
            {singleBlog.category}
          </p>
          <div>
            <img
              src={singleBlog.image}
              alt="blogimage"
              className="rounded-xl"
            />
          </div>
          <div>
            <p className="text-xl font-bold my-5">{singleBlog.shortText}</p>

            <p>
              {singleBlog.articleText
                ? parse(singleBlog.articleText)
                : "No description available."}
            </p>

            <p>{singleBlog.shortText}</p>
          </div>
        </div>
        <div className="w-1/3">
          {/* You can display additional information here */}
          <div>
            <h3 className="my-6 text-3xl font-bold">Other Blogs</h3>
            {blogs && blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog._id} className="mb-4">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full rounded-md"
                  />
                  <Link to={`/blog/details/${blog.slug}`}>
                    <p className="text-xl font-bold mb-6 hover:text-red-500 my-4">
                      {blog.title}
                    </p>
                  </Link>
                </div>
              ))
            ) : (
              <p>No other blogs available.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
