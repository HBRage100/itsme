import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { IoFingerPrintOutline } from "react-icons/io5";

const Navbar = (props) => {
  const [myNav, setNav] = useState(false);
  const handleNav = () => setNav(!myNav);
  return (
    <>
      <nav
        className={`fixed z-20 h-20 w-full lg:px-40 md:px-12 px-4 flex justify-between items-center ${
          props.mode === false ? "bg-white" : "bg-steelGray-950"
        } text-${props.mode === false ? "steelGray-950" : "white"}`}
      >
        {/* logo  */}
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          <IoFingerPrintOutline size={60} className=" cursor-pointer" />
        </Link>

        {/* Desktop menu */}
        <ul className="md:flex hidden text-lg">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer">Home</li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer">About</li>
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer">Experience</li>
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer">Service</li>
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer">Portfolio</li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer">Contact</li>
          </Link>
          {/* toggle  */}
          <label className="w-5 h-5 flex items-center justify-center rounded-full ml-4 cursor-pointer">
            <input
              type="checkbox"
              className="absolute opacity-0"
              onClick={props.togleBtn}
              checked={props.mode}
            />
            <FaSun className="text-white text-2xl z-[1] duration-1000 absolute thisSun" />
            <FaMoon className="text-white text-2xl z-[1] duration-1000 thisMoon" />
            <span className="bg-studio-700 w-10 h-10 absolute rounded-full thisToggle duration-1000"></span>
          </label>
        </ul>

        {/* Humburger icon */}
        <div className="md:hidden flex " onClick={handleNav}>
          {!myNav ? <FaBars size={30} /> : <FaTimes size={30} />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !myNav
              ? `hidden`
              : `absolute text-lg z-10 top-20 left-0 w-full h-screen pl-3 ${
                  props.mode === false ? "bg-white" : "bg-steelGray-950"
                }`
          }
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer py-1">Home</li>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer py-1">About</li>
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer py-1">
              Experience
            </li>
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer py-1">
              Service
            </li>
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer py-1">
              Portfolio
            </li>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            <li className="hover:text-studio-700 cursor-pointer py-1">
              Contact
            </li>
          </Link>
          <label className="w-5 h-5 flex items-center justify-center rounded-full m-6 cursor-pointer">
            <input
              type="checkbox"
              className="absolute opacity-0"
              onClick={props.togleBtn}
            />
            <FaSun className="text-white text-2xl z-[1] duration-1000 absolute thisSun" />
            <FaMoon className="text-white text-2xl z-[1] duration-1000 thisMoon" />
            <span className="bg-studio-700 w-10 h-10 absolute rounded-full thisToggle duration-1000"></span>
          </label>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
