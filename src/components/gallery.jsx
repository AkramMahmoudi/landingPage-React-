import { Image } from "./image";
import React from "react";
import { motion } from "framer-motion";

export const Gallery = (props) => {
  // تأثير الظهور مع التكبير التدريجي
  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <motion.div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    variants={fadeInScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // تشغيل الأنيميشن عند ظهور 30% من العنصر
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </motion.div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
