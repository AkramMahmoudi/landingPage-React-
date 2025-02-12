// import React from "react";

// export const Header = (props) => {
//   return (
//     <header id="header">
//       <div className="intro">
//         <div className="overlay">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-8 col-md-offset-2 intro-text">
//                 <h1>
//                   {props.data ? props.data.title : "Loading"}
//                   <span></span>
//                 </h1>
//                 <p>{props.data ? props.data.paragraph : "Loading"}</p>
//                 <a
//                   href="#features"
//                   className="btn btn-custom btn-lg page-scroll"
//                 >
//                   Learn More
//                 </a>{" "}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// let images = [
//   "/img/etancheite-toit-terrasse-rouleaux-bitumineux.jpg",
//   "/img/etancheite-toit-terrasse-rouleaux-bitumineux.jpg",
//   "/img/etancheite-toit-terrasse-rouleaux-bitumineux.jpg",
// ];
export const Header = ({ data }) => {
  return (
    <header id="header">
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="header-slider"
      >
        {/* {console.log(data?.images)} */}
        {data?.images?.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="intro"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="overlay">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 intro-text">
                      <h1>
                        {data?.title || "Loading"}
                        <span></span>
                      </h1>
                      <p>{data?.paragraph || "Loading"}</p>
                      <a
                        href="#features"
                        className="btn btn-custom btn-lg page-scroll"
                      >
                        Learn More
                      </a>
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
