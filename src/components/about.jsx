import React from "react";
import { motion } from "framer-motion";

export const About = (props) => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 }, // تأخير لكل عنصر
    }),
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <motion.div
            className="col-xs-12 col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInLeft}
          >
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </motion.div>
          <motion.div
            className="col-xs-12 col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInRight}
          >
            <div className="about-text">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <motion.li
                            key={`${d}-${i}`}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={i}
                          >
                            {d}
                          </motion.li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
