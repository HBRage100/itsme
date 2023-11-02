import React, { useState } from "react";
import { motion as m } from "framer-motion";
import WhiteBtn from "./button/WhiteBtn";
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = (props) => {
  const [copySuccess, setCopySuccess] = useState(null);

  const handleCopyClick = () => {
    const textToCopy = "hamzach153@gmail.com";
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopySuccess("Text copied to clipboard: " + textToCopy);
    });
  };
  return (
    <>
      <section
        id="contact"
        className={`w-full h-auto relative lg:px-40 md:px-12 px-4 py-20 ${
          props.mode === false ? "bg-white" : "bg-steelGray-950"
        }`}
      >
        <m.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
          className={`lg:text-5xl text-4xl font-semibold pb-10 ${
            props.mode === false ? "text-steelGray-950" : "text-white"
          }`}
        >
          Contact
        </m.h2>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <m.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              className={`lg:text-4xl text-3xl font-semibold pb-4 ${
                props.mode === false ? "text-steelGray-950" : "text-white"
              }`}
            >
              Let's work together
            </m.h3>
            <m.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.8 },
              }}
              className={`lg:pr-60 text-lg pb-4 ${
                props.mode === false ? "text-steelGray-950" : "text-white"
              }`}
            >
              Join forces with us! Collaborate for results. We offer tailored
              solutions to meet your goals. Together, we can achieve more.
              Connect with us today and let's get started on your journey to
              success.
            </m.p>
            <m.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
            >
              <a href="mailto:hamzach153@gmail.com">
                <WhiteBtn btntxt="Contact me" />
              </a>
            </m.div>
          </div>
          <div className="lg:pt-0 pt-16 ">
            <m.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.6 },
              }}
              className={`lg:text-4xl text-3xl font-semibold pb-4 ${
                props.mode === false ? "text-steelGray-950" : "text-white"
              }`}
            >
              Email
            </m.h3>
            <m.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.8 },
              }}
              className={`lg:pr-60 text-lg inline-flex items-center gap-10 ${
                props.mode === false ? "text-steelGray-950" : "text-white"
              }`}
            >
              <a id="textToCopy" href="mailto:hamzach153@gmail.com">
                hamzach153@gmail.com
              </a>
              <button
                onClick={handleCopyClick}
                class="bg-studio-700 text-white text-lg rounded-[4px] shadow-lg hover:shadow-xl py-1 px-2"
              >
                Copy
              </button>
            </m.div>
            {/* Follow button */}
            <m.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              className="lg:pt-10 pt-8 flex items-center"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
