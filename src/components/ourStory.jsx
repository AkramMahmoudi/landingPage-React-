import React from "react";

export const OurStory = () => {
  return (
    <section className="our-story">
      <div className="container-ourstory">
        <div className="story-content">
          {/* Left Side - Images */}
          <div className="story-images">
            <img
              src="/img/ourstory1.jpg"
              alt="Main Roof"
              className="main-sec"
            />
            <div className="second-sec">
              <img
                src="/img/ourstory2.jpg"
                alt="Construction"
                className="sub-image"
              />
              <div className="experience-badge">
                <span className="number">45+</span>
                <p>Experience of work</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="story-text">
            <h4 className="story-subtitle">Our Story</h4>
            <h2 className="story-title">
              We Are Qualified & Professional Worker Stories
            </h2>
            <p className="story-description">
              Sociosqu massa semper vivamus fusce luctus porta purus nunc
              consectetur. Mollis sollicitudin erat dui luctus aenean ex
              vehicula. Risus habitant leo turpis sit vehicula.
            </p>

            <div className="story-features">
              <div className="feature">
                <div className="icon-box">📍</div>
                <div>
                  <h4>We work all over America</h4>
                  <p>
                    Lorem ipsum dolor sit amet elit tellus luctus nec
                    ullamcorper mattis.
                  </p>
                </div>
              </div>
              <div className="feature">
                <div className="icon-box">🔨</div>
                <div>
                  <h4>Any type of work</h4>
                  <p>
                    Lorem ipsum dolor sit amet elit tellus luctus nec
                    ullamcorper mattis.
                  </p>
                </div>
              </div>
            </div>

            <button className="more-btn">More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};
