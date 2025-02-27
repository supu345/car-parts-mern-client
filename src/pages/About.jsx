import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utils/animation";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Headers />
      <div className=" py-[80px]  dark:bg-black dark:text-white">
        {/* parallex */}
        <div
          className="bg-fixed h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2022/05/22/11/10/highway-7213206_1280.jpg')",
          }}
        >
          <div className="flex flex-col items-center">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              <p className="text-center text-white text-7xl font-bold">
                About Us.
              </p>
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              <h1 className="text-xl pt-3 text-white">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore <br />
                molestias aliquid ullam ea doloremque officiis nobis quia
                officia cum eum
              </h1>
            </motion.p>

            <div className="w-12 h-1 bg-white mt-2 mb-6"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-[70px] px-[40px]">
          <div className="w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-[500px] h-full object-cover"
            />
          </div>
          <div className="w-1/2 ">
            <div className=" flex flex-col">
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                whileInView={"visible"}
              >
                <p className="text-6xl font-bold uppercase font-bebas">
                  Our Story
                </p>
                <p className="mt-4 text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  minima asperiores officia consectetur accusantium quibusdam
                  optio neque dolorem voluptatem velit?
                </p>
                <p className="mt-4 text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  minima asperiores officia consectetur accusantium quibusdam
                  optio neque dolorem voluptatem velit?
                </p>
                <p className="mt-4 text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  minima asperiores officia consectetur accusantium quibusdam
                  optio neque dolorem voluptatem velit?
                </p>
                <p className="mt-4 text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  minima asperiores officia consectetur accusantium quibusdam
                  optio neque dolorem voluptatem velit?
                </p>
                <p className="mt-4 text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  minima asperiores officia consectetur accusantium quibusdam
                  optio neque dolorem voluptatem velit?
                </p>
                <p className="mt-4 text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  minima asperiores officia consectetur accusantium quibusdam
                  optio neque dolorem voluptatem velit? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Modi minima asperiores
                  officia consectetur accusantium quibusdam optio neque dolorem
                  voluptatem velit?
                </p>

                <p className="mt-4 text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  minima asperiores officia consectetur accusantium quibusdam
                  optio neque dolorem voluptatem velit?
                </p>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
