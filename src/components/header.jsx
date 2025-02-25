import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { RainEffect } from "./raineffect";

export const Header = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const textVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  // };
  // Animation variants for h1 and p
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // const buttonVariants = {
  //   hidden: { opacity: 0, scale: 0.8 },
  //   visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  // };

  return (
    <header id="header">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="header-slider"
      >
        {data?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="intro"
              style={{
                position: "relative", //new style
                backgroundImage: `url(${slide.images})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              {/* raineffect */}
              <RainEffect />

              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <motion.h1
                        key={activeIndex}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                      >
                        {slide?.title || "Loading"}
                        <span></span>
                      </motion.h1>
                      <motion.p
                        key={`p-${activeIndex}`}
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ delay: 0.5 }}
                      >
                        {slide?.paragraph || "Loading"}
                      </motion.p>

                      {/* <motion.a
                        href="#features"
                        className="btn btn-custom btn-lg page-scroll"
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                        transition={{ delay: 1 }}
                      >
                        Learn More
                      </motion.a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </header>
  );
};
