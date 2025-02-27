import React from "react";
import { motion } from "framer-motion";

export const OurStory = () => {
  return (
    <section className="our-story">
      <motion.div
        className="container-ourstory"
        initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="story-content">
          {/* Left Side - Images */}
          <motion.div
            className="story-images"
            initial={{ opacity: 0, scale: 0.8 }}
            // animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.img
              src="/img/ourstory1.jpg"
              alt="Main Roof"
              className="main-sec"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="second-sec"
              initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <img
                src="/img/ourstory2.jpg"
                alt="Construction"
                className="sub-image"
              />
              <motion.div
                className="experience-badge"
                initial={{ scale: 0 }}
                // animate={{ scale: 1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.div
                  className="shake-icon"
                  whileInView={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={36}
                    height={36}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M10.244 3.012a.5.5 0 0 0-.39.186l-.089.066C8.04 2.73 6.072 3.122 4.702 4.442a4.69 4.69 0 0 0-1.374 4.31l-.05.046l-.779.75a1.53 1.53 0 0 0 0 2.22c.398.384.95.528 1.463.432c.063.289.21.564.443.788c.307.296.706.449 1.108.46c.011.387.17.771.477 1.067s.707.45 1.109.46c.01.387.17.772.477 1.068a1.676 1.676 0 0 0 2.202.092l.437.42c.64.617 1.678.617 2.318 0c.306-.294.465-.676.479-1.062c.4-.012.795-.165 1.1-.459s.465-.677.477-1.063a1.66 1.66 0 0 0 1.087-.459c.243-.233.393-.522.451-.824a1.67 1.67 0 0 0 1.44-.436a1.53 1.53 0 0 0 0-2.221l-.72-.693l.147-.55a4.5 4.5 0 0 0-.42-3.336c-.836-1.506-2.458-2.436-4.212-2.436h-1.23l-.159-.004zm2.453 3.716l2.405 2.317l.003.002l1.741 1.678a.574.574 0 0 1 0 .833a.63.63 0 0 1-.865 0l-1.321-1.272a.52.52 0 0 0-.72 0l-.014.012a.48.48 0 0 0 0 .694l1.03.992c.24.23.24.604 0 .835a.63.63 0 0 1-.8.055a.524.524 0 0 0-.669.046a.477.477 0 0 0-.041.645a.574.574 0 0 1-.054.775a.63.63 0 0 1-.81.048a.524.524 0 0 0-.674.038a.477.477 0 0 0-.043.648a.58.58 0 0 1-.053.788a.637.637 0 0 1-.877 0l-.433-.417l.158-.152a1.53 1.53 0 0 0 0-2.221a1.66 1.66 0 0 0-1.108-.46a1.54 1.54 0 0 0-.477-1.068a1.66 1.66 0 0 0-1.109-.459a1.54 1.54 0 0 0-.477-1.068a1.67 1.67 0 0 0-1.463-.431a1.55 1.55 0 0 0-.443-.788a1.66 1.66 0 0 0-1.292-.454a3.74 3.74 0 0 1 1.13-3.208A4.06 4.06 0 0 1 8.708 4.04L7.253 5.11a1.703 1.703 0 0 0-.33 2.44a1.81 1.81 0 0 0 2.477.336l1.576-1.157zm-4.852-.813l2.592-1.903h.536a2 2 0 0 1 .147.004h1.242c1.404 0 2.685.745 3.338 1.922c.442.796.558 1.721.327 2.594l-.003.01l-2.76-2.667a.5.5 0 0 0-.353-.147h-2.1a.5.5 0 0 0-.295.097L8.808 7.079a.81.81 0 0 1-1.1-.149a.703.703 0 0 1 .137-1.015m.442 8.61l.01-.01l.778-.75l.009-.008a.63.63 0 0 1 .856.009a.574.574 0 0 1 0 .833l-.779.75a.63.63 0 0 1-.865 0a.574.574 0 0 1-.01-.824m.077-1.462l-.01.009l-.778.75l-.01.009a.63.63 0 0 1-.855-.01a.574.574 0 0 1-.007-.826l.007-.007l.778-.75l.007-.007a.63.63 0 0 1 .858.007a.574.574 0 0 1 .01.825m-1.595-1.519l-.779.75l-.007.007a.63.63 0 0 1-.858-.007a.574.574 0 0 1 0-.833l.778-.75a.63.63 0 0 1 .866 0a.574.574 0 0 1 .007.827zm-1.906-1.219l-.778.75a.63.63 0 0 1-.866 0a.574.574 0 0 1 0-.834l.779-.75a.63.63 0 0 1 .865 0a.574.574 0 0 1 0 .834"
                    ></path>
                  </svg>
                </motion.div>
                <motion.span
                  className="number"
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  45+
                </motion.span>
                <p>Experience of work</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="story-text"
            initial={{ opacity: 0, x: 50 }}
            // animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h4
              className="story-subtitle"
              initial={{ opacity: 0, y: -20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Our Story
            </motion.h4>
            <motion.h2
              className="story-title"
              initial={{ opacity: 0, y: -20 }}
              // animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              We Are Qualified & Professional Worker Stories
            </motion.h2>
            <motion.p
              className="story-description"
              initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Sociosqu massa semper vivamus fusce luctus porta purus nunc
              consectetur. Mollis sollicitudin erat dui luctus aenean ex
              vehicula. Risus habitant leo turpis sit vehicula.
            </motion.p>

            <motion.div
              className="story-features"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              // animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.div
                className="feature"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.75 10a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"
                    ></path>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M3.774 8.877a8.04 8.04 0 0 1 8.01-7.377h.432a8.04 8.04 0 0 1 8.01 7.377a8.7 8.7 0 0 1-1.933 6.217L13.5 20.956a1.937 1.937 0 0 1-3 0l-4.792-5.862a8.7 8.7 0 0 1-1.934-6.217M12 5.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4>We work all over America</h4>
                  <p>
                    Lorem ipsum dolor sit amet elit tellus luctus nec
                    ullamcorper mattis.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="feature"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.7 443.7 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.9 351.9 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446 446 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35M788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370 370 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176m79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390s58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4>Any type of work</h4>
                  <p>
                    Lorem ipsum dolor sit amet elit tellus luctus nec
                    ullamcorper mattis.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <button className="more-btn">More About Us</button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
