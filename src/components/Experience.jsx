import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion as m } from "framer-motion";

const Experience = (props) => {
  return (
    <>
      <section
        id="experience"
        className={`w-full h-auto relative lg:px-40 md:px-12 px-4 py-20 grid lg:grid-cols-2 grid-cols-1 ${
          props.mode === false ? "bg-white" : "bg-steelGray-950"
        }`}
      >
        {/* blur bg Start here */}
        <div className="absolute lg:top-40 top-[25%] lg:left-60 left-16 bg-purple-300 rounded-full lg:w-72 lg:h-72 w-44 h-44 mix-blend-multiply filter blur-xl animate-blub"></div>
        <div className="absolute lg:top-40 top-[35%] lg:left-[25%] left-[30%] bg-yellow-300 rounded-full lg:w-72 lg:h-72 w-44 h-44 mix-blend-multiply filter blur-xl animate-blub animationDelay-2000"></div>
        <div className="absolute lg:top-80 top-[40%] left-[15%] bg-pink-300 rounded-full lg:w-72 lg:h-72 w-44 h-44 mix-blend-multiply filter blur-xl animate-blub animationDelay-4000"></div>
        {/* blur bg End here */}
        <div className=" lg:w-[90%] w-full">
          <m.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className={`lg:text-5xl text-4xl font-semibold pb-10 ${
              props.mode === false ? "text-steelGray-950" : "text-white"
            }`}
          >
            Work Experience
          </m.h2>
          <m.ul
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            <m.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              className="relative flex gap-6 pb-5 items-baseline"
            >
              <div
                className={`before:absolute before:left-[22.2px] before:h-full before:w-[3px] ${
                  props.mode === false
                    ? "before:bg-studio-700"
                    : "before:bg-white"
                }`}
              >
                <FaCircle
                  className={`${
                    props.mode === false ? "text-studio-700" : "text-white"
                  }`}
                />
              </div>
              <div className="bg-white text-steelGray-950 p-8 rounded-xl w-full shadow-2xl">
                <p>2021 - Continue</p>
                <h3 className="py-2 text-xl text-goldenTainoi-300">
                  Web Developer
                </h3>
                <p className="font-bold">6xperts</p>
                <p className="text-lg">
                  WordPress website development, project management, and team
                  leadership. Our focus on quality assurance
                </p>
              </div>
            </m.li>
            <m.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              className="relative flex gap-6 pb-5 items-baseline"
            >
              <div>
                <FaCircle
                  className={`${
                    props.mode === false ? "text-studio-700" : "text-white"
                  }`}
                />
              </div>
              <div className="bg-white text-steelGray-950 p-8 rounded-xl w-full shadow-2xl">
                <p>2020 - 2021</p>
                <h3 className="py-2 text-xl text-goldenTainoi-300">
                  Virtual Assistant
                </h3>
                <p className="font-bold">Freelancer</p>
                <p className="text-lg">Wordpress and Ebay Listing</p>
              </div>
            </m.li>
          </m.ul>
        </div>
        {/* Second box */}
        <div className="lg:w-[90%] w-full">
          <m.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className={`lg:text-5xl text-4xl font-semibold pb-10 lg:pt-0 pt-16 ${
              props.mode === false ? "text-steelGray-950" : "text-white"
            }`}
          >
            Education
          </m.h2>
          <m.ul
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
          >
            <m.li
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              className="relative flex gap-6 pb-5 items-baseline"
            >
              <div>
                <FaCircle
                  className={`${
                    props.mode === false ? "text-studio-700" : "text-white"
                  }`}
                />
              </div>
              <div className="bg-white text-steelGray-950 p-8 rounded-xl w-full shadow-2xl">
                <p>2016 - 2020</p>
                <h3 className="py-2 text-xl text-goldenTainoi-300">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="font-bold">
                  GC University Faisalabad Sahiwal Campus
                </p>
              </div>
            </m.li>
          </m.ul>
        </div>
      </section>
    </>
  );
};

export default Experience;
