import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};
export const Section3 = () => {
  return (
    <motion.div id="Section3">
      <div className="container3">
        {/* العنوان والزر في نفس السطر */}
        <motion.div
          className="header-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="title3" variants={containerVariants}>
            Explore our best roofing <span className="highlight">services</span>
          </motion.h2>
          <motion.button className="button3" variants={buttonVariants}>
            All Services
          </motion.button>
        </motion.div>
        {/* Cards with Staggered Animation */}
        {/* البطاقات */}
        <motion.div className="grid">
          {[
            { img: "/img/slide_sud_etanche_3.jpg", title: "Roof Installation" },
            { img: "/img/slide_sud_etanche_3.jpg", title: "Roof Renovation" },
            { img: "/img/slide_sud_etanche_3.jpg", title: "Roof Survey" },
            {
              img: "/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg",
              title: "Commercial Roofing",
            },
            {
              img: "/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg",
              title: "Residential Roofing",
            },
            {
              img: "/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg",
              title: "Roof Repair",
            },
          ].map((item, index) => (
            <motion.div
              className="card3"
              whileHover={hoverEffect}
              key={index}
              custom={index} // Pass index for stagger effect
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.title} />
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
          {/* <div className="card3">
            <img
              src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
              alt="Roof Repair"
            />
            <div className="card-content">
              <h3 className="card-title">Roof Repair</h3>
            </div>
          </div> */}
        </motion.div>
      </div>
    </motion.div>
  );
};
