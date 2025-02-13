import React from "react";
import { motion } from "framer-motion";

export const RainEffect = () => {
  const dropVariants = {
    animate: (i) => ({
      y: ["-100%", "110vh"], // Start from top to outside the screen
      // opacity: [1, 1, 0],
      opacity: [0.8, 0.6, 0],
      transition: {
        delay: i * 0.2, // Delay between each drop
        duration: 2, // Duration of the drop
        repeat: Infinity, // Infinite loop
        ease: "easeIn",
      },
    }),
  };

  const rainDrops = Array.from({ length: 50 }); // Number of raindrops

  return (
    <>
      {rainDrops.map((_, i) => (
        <motion.div
          key={i}
          className="raindrop"
          variants={dropVariants}
          animate="animate"
          custom={i} // Customization for each drop
          style={{
            position: "absolute",
            top: "-10%",
            left: `${Math.random() * 100}%`, // Random horizontal position
            width: "2px",
            // height: "20px",
            height: `${Math.random() * 30 + 10}px`,
            // backgroundColor: "#5ca9fb",
            backgroundColor: "rgba(173, 216, 230, 0.8)", // Light blue with some transparency
            // borderRadius: "50%",
            borderRadius: "0px",
            // boxShadow: "0px 0px 10px 2px rgba(92, 169, 251, 0.7)",
            filter: "blur(1px)", // Slight blur to mimic water effect
          }}
        />
      ))}
    </>
  );
};
