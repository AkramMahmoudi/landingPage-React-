import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand ">
          <div className="first-c">
            <img
              src="/img/2.png"
              alt="Rise & Roof Logo"
              className="footer-logo"
            />

            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8.4 15q.475 0 .813-.337t.337-.813v-3.7q0-.475-.337-.812T8.4 9H6.75q-.325 0-.537.213T6 9.75v4.5q0 .325.213.538T6.75 15zm-1.25-1.15v-3.7H8.4v3.7zM10.875 15h1.9q.225 0 .388-.175t.162-.425q0-.225-.162-.388t-.388-.162h-1.5v-1.3H12q.25 0 .413-.162t.162-.413t-.162-.412T12 11.4h-.725v-1.25h1.475q.25 0 .413-.162t.162-.413t-.162-.412T12.75 9h-1.875q-.325 0-.537.213t-.213.537v4.5q0 .325.213.538t.537.212m5.15-.025q.325 0 .563-.213t.312-.537l1.2-4.5q.075-.275-.1-.5T17.55 9q-.2 0-.363.113t-.212.312l-.95 3.675l-.975-3.675q-.05-.2-.2-.312T14.5 9q-.275 0-.45.225t-.1.5l1.2 4.5q.075.325.313.538t.562.212M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
              ></path>
            </svg> */}

            <div className="footer-title">
              <h2 className="footer-h2">sud etanche</h2>
              {/* <p className="footer-h2-desc">description Template Kit </p> */}
            </div>
          </div>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="social-icons">
            <a href="/" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </a>
            <a href="/" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth={2}
                    d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"
                  ></path>
                  <circle
                    cx={16.5}
                    cy={7.5}
                    r={1.5}
                    fill="currentColor"
                  ></circle>
                  <circle
                    cx={12}
                    cy={12}
                    r={3}
                    stroke="currentColor"
                    strokeWidth={2}
                  ></circle>
                </g>
              </svg>
            </a>
            <a href="/" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                ></path>
              </svg>
            </a>
            <a href="/" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillOpacity={0}
                  d="M12 11L12 12L12 13z"
                >
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.6s"
                    dur="0.2s"
                    values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"
                  ></animate>
                  <set
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s"
                    to={1}
                  ></set>
                </path>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray={64}
                  strokeDashoffset={64}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="64;0"
                  ></animate>
                </path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Our Project</a>
            </li>
            <li>
              <a href="/">Our Pricing</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="footer-section useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms and Conditions</a>
            </li>
            <li>
              <a href="/">Disclaimer</a>
            </li>
            <li>
              <a href="/">Our Pricing</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Landing Page Template by ExpressTech</p>
        <p>Copyright © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
