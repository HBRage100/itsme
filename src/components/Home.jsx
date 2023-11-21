import React from "react";
import { Link } from "react-scroll";
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import helloHand from "../assets/helloHand.svg";
import TypingEffect from "./TypingEffect";
import vsCode from "../assets/VS.png";
import figma from "../assets/figma.png";
import tailWind from "../assets/tailwind.png";
import fireFox from "../assets/firefox.png";
import reactIcon from "../assets/react.png";
import gitHub from "../assets/github.png";
import photoShop from "../assets/photoshop.png";
import { motion as m } from "framer-motion";
import WhiteBtn from "./button/WhiteBtn";
import PurpleBtn from "./button/PurpleBtn";

const Home = (props) => {
  return (
    <>
      <section
        id="home"
        className={`w-full lg:h-screen h-auto ${
          props.mode === false ? "bg-white" : "bg-steelGray-950"
        } lg:px-40 md:px-12 px-4 grid lg:grid-cols-2 grid-cols-1 lg:pb-0 pb-32 relative`}
      >
        <div className="max-md:order-2 md:pt-32 pt-16">
          <m.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className={`inline-flex text-5xl font-medium gap-5 ${
              props.mode === false ? "text-steelGray-950" : "text-white"
            }`}
          >
            <img src={helloHand} alt="Hello" className="animate-waving-hand" />I
            am
          </m.span>
          <m.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            className={`text-6xl font-semibold py-4 ${
              props.mode === false ? "text-steelGray-950" : "text-white"
            }`}
          >
            <TypingEffect />
          </m.h1>
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            className="flex items-center text-studio-700"
          >
            <hr class="lg:w-28 w-20 border-t border-2 border-studio-700 mr-4" />
            <span className="text-2xl">Web Developer</span>
          </m.div>
          <m.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className={`lg:pr-60 py-4 text-lg ${
              props.mode === false ? "text-steelGray-950" : "text-white"
            }`}
          >
            I am a Web Developer with a Excellent track record in designing,
            developing websites, and managing databases.
          </m.p>
          {/* button */}
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.6 },
            }}
            className="lg:inline-flex flex-wrap items-center justify-center flex gap-5 pt-4"
          >
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
            >
              <PurpleBtn btntxt="Talk to me" />
            </Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={1000}
            >
              <WhiteBtn btntxt="My Work" />
            </Link>
          </m.div>
          {/* Follow button */}
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.7 },
            }}
            className="lg:pt-16 pt-8 flex items-center"
          >
            <p
              className={`text-lg inline-block ${
                props.mode === false ? "text-steelGray-950" : "text-white"
              }`}
            >
              Follow me
            </p>
            <a
              href="https://www.behance.net/HBRage100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-block relative p-4 mx-2 rounded-full shadow-2xl bg-white hover:bg-studio-700 duration-500 hover:text-white cursor-pointer">
                <FaBehance size={30} />
              </span>
            </a>
            <a
              href="https://instagram.com/its._.photoshop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-block relative p-4 mx-2 rounded-full shadow-2xl bg-white hover:bg-studio-700 duration-500 hover:text-white  cursor-pointer">
                <FaInstagram size={30} />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/m-hamza-632480261/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-block relative p-4 mx-2 rounded-full shadow-2xl bg-white hover:bg-studio-700 duration-500 hover:text-white  cursor-pointer">
                <FaLinkedinIn size={30} />
              </span>
            </a>
          </m.div>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <BsMouse
              className={`absolute lg:top-[85%] top-[92%] animate-bounce cursor-pointer ${
                props.mode === false ? "text-steelGray-950" : "text-white"
              }`}
              size={40}
            />
          </Link>
        </div>
        <div className="relative my-auto max-md:order-1 max-md:pt-32 md:pt-10 max-sm:pt-24">
          <m.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="bg-white shadow-2xl lg:mt-16 lg:mx-56 max-md:mx-40 md:mx-32 max-sm:mx-16 w-24 h-24 flex justify-center items-center rounded-2xl"
          >
            <img src={figma} alt="Figma" className="w-16 h-16" />
          </m.div>
          <m.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.4 },
            }}
            className="bg-white shadow-2xl lg:ml-[70%] lg:-mt-10 ml-[70%] -mt-20 w-20 h-20 absolute flex justify-center items-center rounded-2xl"
          >
            <img src={fireFox} alt="Firefox" className="w-12 h-12" />
          </m.div>
          <m.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="bg-white shadow-2xl lg:mx-40 max-md:mx-20 md:mx-16 max-sm:mx-2 mt-16 w-20 h-20 absolute flex justify-center items-center rounded-2xl"
          >
            <img src={tailWind} alt="Tailwind Css" className="w-12 h-12" />
          </m.div>
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="bg-white shadow-2xl mx-auto mt-4 lg:w-40 lg:h-40 w-32 h-32 flex justify-center items-center rounded-2xl"
          >
            <img
              src={vsCode}
              alt="VS Code"
              className="lg:w-32 lg:h-32 w-28 h-28"
            />
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.6 },
            }}
            className="bg-white shadow-2xl lg:mx-48 max-md:mx-28 md:mx-24 max-sm:mx-6 mt-4 w-28 h-28 flex justify-center items-center rounded-2xl"
          >
            <img src={reactIcon} alt="React" className="w-22 h-22" />
          </m.div>
          <m.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="bg-white shadow-2xl lg:ml-[64%] max-md:ml-[75%] md:ml-[65%] -mt-60 w-14 h-14 absolute flex justify-center items-center rounded-2xl"
          >
            <img src={gitHub} alt="GitHub" className="w-10 h-10" />
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.6 },
            }}
            className="bg-white shadow-2xl ml-[50%] -mt-24 w-24 h-24 absolute flex justify-center items-center rounded-2xl"
          >
            <img src={photoShop} alt="Photoshop" className="w-16 h-16" />
          </m.div>
        </div>
      </section>
    </>
  );
};

export default Home;
