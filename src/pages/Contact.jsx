import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utils/animation";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div>
      <Headers />
      <div className="dark:bg-black dark:text-white">
        <div className="container mx-auto px-8 pt-[110px] pb-[90px]">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Contact Form Section */}
            <div className="w-full md:w-1/2 bg-slate-100 rounded-xl dark:bg-black dark:text-white p-6 md:p-12">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
              >
                <p className="text-3xl md:text-5xl font-bold mb-6">
                  Contact us
                </p>
              </motion.p>

              <motion.p
                variants={SlideUp(0.7)}
                initial="hidden"
                whileInView={"visible"}
              >
                <p className="text-sm md:text-base mb-8">
                  Hello! Do you have any questions or suggestions about this
                  site, or just want to say Hi? Send a message using the below
                  form. I will get back to you as soon as possible.
                </p>
              </motion.p>

              <form>
                {/* Full Name */}
                <div className="mb-6">
                  <input
                    type="text"
                    id="fullname"
                    className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Full name"
                  />
                </div>
                {/* Email */}
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email"
                  />
                </div>
                {/* Subject */}
                <div className="mb-6">
                  <input
                    type="text"
                    id="subject"
                    className="w-full border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                {/* Message */}
                <div className="mb-6">
                  <textarea
                    id="message"
                    className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Message"
                    rows="5"
                  />
                </div>
                {/* Submit Button */}
                <button
                  type="button"
                  className="w-full bg-green-500 text-white rounded-full px-5 py-3 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 ">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                src="https://cdn.pixabay.com/photo/2021/02/26/20/13/girl-6053037_1280.jpg"
                alt="image"
                className="w-full h-auto md:h-[800px] object-cover rounded-xl md:rounded-r-xl"
              />
              {/* <img
              src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Contact Us"
              className="w-full h-auto md:h-[800px] object-cover rounded-xl md:rounded-r-xl"
            /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
