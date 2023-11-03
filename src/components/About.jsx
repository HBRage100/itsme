import React from "react";
import WhiteBtn from "./button/WhiteBtn";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-studio-700 w-full h-auto lg:py-28 py-20  lg:px-40 md:px-12 px-4 grid lg:grid-cols-2 grid-cols-1"
      >
        <div className="flex justify-center">
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="bg-goldenTainoi-300 flex-wrap flex justify-center items-start w-96 max-sm:w-80"
          >
            <m.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.3 },
              }}
              className="text-studio-700 text-[380px] max-sm:text-[300px] font-extrabold font-oswald -mt-44 max-sm:-mt-40"
            >
              03
            </m.span>
            <m.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.4 },
              }}
              className="-mt-20 max-sm:-mt-16 text-xl"
            >
              Year of Expereience
            </m.span>
            <m.span
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.5 },
              }}
              className="-mt-10 -mb-16 max-sm:-mb-10 max-sm:-mt-5 text-studio-700 text-9xl max-sm:text-8xl font-extrabold font-oswald"
            >
              HAMZA
            </m.span>
          </m.div>
        </div>
        <div className="max-md:pt-8 md:pt-8 max-sm:pt-8">
          <m.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className={`lg:text-5xl text-4xl font-semibold py-4 text-white`}
          >
            About
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            className={`lg:pr-32 py-4 text-lg text-white`}
          >
            I am a Web Developer with an Excellent track record in designing,
            developing websites, and managing databases. 3+ years of experience
            in testing, designing, and implementing web-based projects. Also,
            I'm working on the react app from past 6 months. The ability to
            complete tasks accurately in a fast-paced environment within
            deadlines. I am really open-minded and outgoing. To me, effective
            cooperation requires effective communication.
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            className="justify-center items-center inline-flex mt-8 "
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1fHWcivze5kjo-5Zx3kntRQvqLRKeO841/view?usp=sharing"
            >
              <WhiteBtn btntxt="My Resume" />
            </a>
            <span className="font-signature text-studio-100 text-4xl -rotate-[30deg] ml-20 max-sm:mx-5">
              Hamza
            </span>
          </m.div>
        </div>
      </section>
    </>
  );
};

export default About;
