import React from "react";
import { Link } from "react-scroll";
import { IoFingerPrintOutline } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="w-full py-6 lg:px-40 md:px-12 px-4 bg-studio-700">
        {/* logo  */}
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <IoFingerPrintOutline
            size={50}
            className="mx-auto w-full cursor-pointer text-white"
          />
        </Link>
        <p className={`text-center pt-4 text-lg text-white`}>
          © {currentYear} by M Hamza. All Rights Reserved
        </p>
      </section>
    </>
  );
};

export default Footer;
