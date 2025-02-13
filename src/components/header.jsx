import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { RainEffect } from "./raineffect";

export const Header = ({ data }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  };
  const lineVariants = {
    animate: {
      y: ["-100%", "100vh"],
      transition: {
        repeat: Infinity,
        duration: 8, // Duration for each loop
        ease: "linear", // Smooth animation
      },
    },
  };
  const lineVariants1 = {
    animate: {
      y: ["-100%", "100vh"],
      transition: {
        repeat: Infinity,
        duration: 10, // Duration for each loop
        ease: "linear", // Smooth animation
      },
    },
  };
  const lineVariants2 = {
    animate: {
      y: ["100%", "-100vh"],
      transition: {
        repeat: Infinity,
        duration: 10, // Duration for each loop
        ease: "linear", // Smooth animation
      },
    },
  };
  const lineVariants3 = {
    animate: {
      y: ["100%", "-100vh"],
      transition: {
        repeat: Infinity,
        duration: 8, // Duration for each loop
        ease: "linear", // Smooth animation
      },
    },
  };

  return (
    <header id="header">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="header-slider"
      >
        {data?.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="intro"
              style={{
                position: "relative", //new style
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              {/* raineffect */}
              <RainEffect />

              {/* Animated Line */}
              {/* left */}
              {/* <motion.div
                className="animated-line"
                variants={lineVariants}
                animate="animate"
                style={{
                  position: "absolute",

                  top: 0, // Start from the bottom
                  left: "5%", // Center horizontally
                  width: "1px", // Vertical line width
                  height: "30px",
                  backgroundColor: "#5ca9fb", // Line color
                  // background: "linear-gradient(180deg, #5ca9fb, #ff6f61)", // تدرج لوني
                  boxShadow: "0px 0px 10px 2px rgba(92, 169, 251, 0.7)", // تأثير التوهج
                  borderRadius: "5px",

                  zIndex: 2,
                }}
              /> */}
              {/* <motion.div
                className="animated-line"
                variants={lineVariants1}
                animate="animate"
                style={{
                  position: "absolute",

                  top: 0, // Start from the bottom
                  left: "10%", // Center horizontally
                  width: "1px", // Vertical line width
                  height: "30px",
                  backgroundColor: "#5ca9fb", // Line color
                  boxShadow: "0px 0px 10px 2px rgba(92, 169, 251, 0.7)", // تأثير التوهج
                  borderRadius: "5px",
                  zIndex: 2,
                }}
              /> */}
              {/* right */}
              {/* <motion.div
                className="animated-line"
                variants={lineVariants2}
                animate="animate"
                style={{
                  position: "absolute",
                  // top: "90%", // Center vertically
                  // left: 0,
                  // width: "100%",
                  // height: "1px",
                  bottom: 0, // Start from the bottom
                  left: "95%", // Center horizontally
                  width: "1px", // Vertical line width
                  height: "30px",
                  backgroundColor: "#5ca9fb", // Line color
                  boxShadow: "0px 0px 10px 2px rgba(92, 169, 251, 0.7)", // تأثير التوهج
                  borderRadius: "5px",
                  zIndex: 2,
                }}
              /> */}
              {/* <motion.div
                className="animated-line"
                variants={lineVariants3}
                animate="animate"
                style={{
                  position: "absolute",
                  // top: "90%", // Center vertically
                  // left: 0,
                  // width: "100%",
                  // height: "1px",
                  bottom: 0, // Start from the bottom
                  left: "90%", // Center horizontally
                  width: "1px", // Vertical line width
                  height: "30px",
                  backgroundColor: "#5ca9fb", // Line color
                  boxShadow: "0px 0px 10px 2px rgba(92, 169, 251, 0.7)", // تأثير التوهج
                  borderRadius: "5px",
                  zIndex: 2,
                }}
              /> */}
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                      >
                        {data?.title || "Loading"}
                        <span></span>
                      </motion.h1>
                      <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ delay: 0.5 }}
                      >
                        {data?.paragraph || "Loading"}
                      </motion.p>
                      <motion.a
                        href="#features"
                        className="btn btn-custom btn-lg page-scroll"
                        initial="hidden"
                        animate="visible"
                        variants={buttonVariants}
                        transition={{ delay: 1 }}
                      >
                        Learn More
                      </motion.a>
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
