import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
// import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import { Services2 } from "./components/services2";
// import { Section3 } from "./components/section3";
// import Footer from "./components/footer";
import Home from "./components/home";
// import ContactUs from "./components/contactus"; // تأكد من المسار الصحيح

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
    // <>
    //   <Home></Home>
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
