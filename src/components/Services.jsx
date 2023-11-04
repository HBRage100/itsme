import React from "react";
import { motion as m } from "framer-motion";

const Services = (props) => {
  return (
    <>
      <section
        id="services"
        className={`w-full h-auto relative lg:px-40 md:px-12 px-4 py-20 flex-wrap ${
          props.mode === false ? "bg-gray-50" : "bg-[#302F43]"
        }`}
      >
        <m.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className={`lg:text-5xl text-4xl font-semibold pb-20 ${
            props.mode === false ? "text-steelGray-950" : "text-white"
          }`}
        >
          Services I Provide
        </m.h2>
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className={`border-t border-gray-500 py-5 lg:flex flex-wrap items-center justify-center ${
            props.mode === false ? "text-steelGray-950" : "text-white"
          } hover:bg-studio-700 hover:text-white`}
        >
          <span className="lg:w-1/12 w-1/3 text-xl inline-flex">01</span>
          <h3 className="lg:w-1/5 w-8/12 text-2xl inline-flex">
            Figma Conversion
          </h3>
          <p className="lg:w-3/5 w-full text-lg lg:pt-0 pt-4">
            Transform your Figma designs into fully functional WordPress or
            HTML/CSS websites with ease. Bridge the gap between design and
            development, making your web projects come to life effortlessly.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          className={`border-t border-gray-500 py-5 lg:flex flex-wrap items-center justify-center ${
            props.mode === false ? "text-steelGray-950" : "text-white"
          } hover:bg-studio-700 hover:text-white`}
        >
          <span className="lg:w-1/12 w-1/3 text-xl inline-flex">02</span>
          <h3 className="lg:w-1/5 w-8/12 text-2xl inline-flex">Malware</h3>
          <p className="lg:w-3/5 w-full text-lg lg:pt-0 pt-4">
            I also offer specialized services for malware removal. Safeguard
            your digital world and keep your data secure with my expert
            solutions.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className={`border-t border-gray-500 py-5 lg:flex flex-wrap items-center justify-center ${
            props.mode === false ? "text-steelGray-950" : "text-white"
          } hover:bg-studio-700 hover:text-white`}
        >
          <span className="lg:w-1/12 w-1/3 text-xl inline-flex">03</span>
          <h3 className="lg:w-1/5 w-8/12 text-2xl inline-flex">
            Project Management
          </h3>
          <p className="lg:w-3/5 w-full text-lg lg:pt-0 pt-4">
            From planning to execution, I ensure your projects are on track and
            deliver exceptional results.
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.6 },
          }}
          className={`border-t border-gray-500 py-5 lg:flex flex-wrap items-center justify-center ${
            props.mode === false ? "text-steelGray-950" : "text-white"
          } hover:bg-studio-700 hover:text-white`}
        >
          <span className="lg:w-1/12 w-1/3 text-xl inline-flex">04</span>
          <h3 className="lg:w-1/5 w-8/12 text-2xl inline-flex">
            Quality Assurance
          </h3>
          <p className="lg:w-3/5 w-full text-lg lg:pt-0 pt-4">
            I also ensure the highest standards and reliability for your
            projects with my expert QA solutions.
          </p>
        </m.div>
        <a
          href="https://dummyapijson.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.7 },
            }}
            className={`border-y border-gray-500 py-5 lg:flex flex-wrap items-center justify-center ${
              props.mode === false ? "text-steelGray-950" : "text-white"
            } hover:bg-studio-700 hover:text-white`}
          >
            <span className="lg:w-1/12 w-1/3 text-xl inline-flex">05</span>
            <h3 className="lg:w-1/5 w-8/12 text-2xl inline-flex">
              Backend API
            </h3>
            <p className="lg:w-3/5 w-full text-lg lg:pt-0 pt-4">
              I also Backend API service that seamlessly connects and powers
              your applications, delivering data and functionality with
              efficiency and reliability, ensuring a smooth user experience.
            </p>
          </m.div>
        </a>
      </section>
    </>
  );
};

export default Services;
