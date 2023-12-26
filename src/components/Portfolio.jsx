import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion as m } from "framer-motion";
import Card from "./Card";
import AmericaVoters from "../assets/America-s-Christian-Voters.webp";
import BlackMoon from "../assets/Black-Moon-Tattoo-Company.webp";
import BurgerProspect from "../assets/BurgerProspect.webp";
import BuyEmailLists from "../assets/Buy-Email-Lists.webp";
import CHLNet from "../assets/CHLNet.webp";
import InciteStrategies from "../assets/Incite-Strategies.webp";
import Instabarcode from "../assets/Instabarcode.webp";
import MassTax from "../assets/MassTax.webp";
import Smartfreezecontainers from "../assets/Smartfreezecontainers.webp";

const Portfolio = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll on next/prev
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (e.g., 3 seconds)
    arrows: false, // Hide the previous and next arrows
    dots: false, // Hide the dots
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for medium-sized screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust settings for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        id="portfolio"
        className={`w-full h-auto relative lg:px-40 md:px-12 px-4 py-20 bg-goldenTainoi-300`}
      >
        <m.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className={`lg:text-5xl text-4xl font-semibold pb-20 text-steelGray-950`}
        >
          Look at my projects
        </m.h2>
        {/* Slider card area */}
        <m.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
        >
          <Slider {...settings}>
            <Card
              img={AmericaVoters}
              siteName="We Believe We Vote"
              siteDec="We Believe We Vote: a Washington State nonprofit with volunteer Christian citizens and leaders from various denominations and professions, led by an Executive Director..."
              siteUrl="https://webelievewevote.com/"
            />
            <Card
              img={BlackMoon}
              siteName="Black Moon Tattoo Company"
              siteDec="Black Moon Tattoo Co, a licensed shop, caters to your tattoo needs. Skilled artists, sterile setting, and high-quality service..."
              siteUrl="https://blackmoontattoocompany.com/"
            />
            <Card
              img={BurgerProspect}
              siteName="Burger Prospect"
              siteDec="Discover the fun and freshness at Burger Prospect, your local burger joint. Our made-to-order burgers are always fresh, offering a warm, delicious welcome..."
              siteUrl="https://burgerprospect.com/"
            />
            <Card
              img={BuyEmailLists}
              siteName="Book Your Data"
              siteDec="Book Your Data's innovative tool revolutionizes direct marketing. Easily access and download premium contact information across diverse industries with just a few clicks..."
              siteUrl="https://www.bookyourdata.com/"
            />
            <Card
              img={CHLNet}
              siteName="Chlnet"
              siteDec="Our team includes core staff, advisors, emeritus roles, and a Secretariat partnering with Network Partner organizations across Canada..."
              siteUrl="https://chlnet.ca/"
            />
            <Card
              img={InciteStrategies}
              siteName="Incite Strategies"
              siteDec="Incite Strategies get to know better how we can work together to help your clients achieve their financial goals..."
              siteUrl="https://incitestrategies.credit/"
            />
            <Card
              img={Instabarcode}
              siteName="Insta Barcode"
              siteDec="Insta Barcode is your hassle-free, speedy barcode solution, usable on any e-commerce store without concerns about renewal fees or upgrades..."
              siteUrl="https://instabarcode.com/"
            />
            <Card
              img={MassTax}
              siteName="Mass Tax"
              siteDec="At MassTax, we handle tax prep and bookkeeping in one fixed monthly rate, ensuring no year-end surprise bills. Select a tailored plan and pay a single, predictable monthly fee for comprehensive services..."
              siteUrl="https://mass-tax.com/"
            />
            <Card
              img={Smartfreezecontainers}
              siteName="Incite Strategies"
              siteDec="Smartfreeze containers offer food tracking and backup plans, ensuring fresh, safe meals whenever needed, worry-free about their safety..."
              siteUrl="https://www.smartfreezecontainers.com/"
            />
          </Slider>
        </m.div>
      </section>
    </>
  );
};

export default Portfolio;
