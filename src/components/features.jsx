import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Features = (props) => {
  const [ref, inView] = useInView({ threshold: 0.2 }); // Trigger when 20% of the section is visible
  const titleControls = useAnimation();
  const cardControls = useAnimation();

  useEffect(() => {
    if (inView) {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
      cardControls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
      }));
    }
  }, [inView, titleControls, cardControls]);

  return (
    <div id="features" className="text-center">
      <div className="container" ref={ref}>
        <motion.div
          className="col-md-10 col-md-offset-1 section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={titleControls}
        >
          <h2>Features</h2>
        </motion.div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.title}-${i}`}
                  className="col-xs-12 col-sm-6 col-md-3"
                  style={{ padding: "15px" }}
                  custom={i} // Custom index for staggered animation
                  initial={{ opacity: 0, y: 50 }}
                  animate={cardControls}
                >
                  {/* Card */}
                  <div
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: "10px",
                      padding: "20px",
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                    className="feature-card"
                  >
                    <i
                      className={d.icon}
                      style={{
                        fontSize: "40px",
                        color: "#5ca9fb",
                        marginBottom: "15px",
                      }}
                    ></i>
                    <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                      {d.title}
                    </h3>
                    <p style={{ color: "#666" }}>{d.text}</p>
                  </div>
                </motion.div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
