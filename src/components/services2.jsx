// import React from "react";

// export const Services2 = () => {
//   return (
//     <div id="Services2">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
//           {/* Left Section: Text Content */}
//           <div className="text-section">
//             <h3>Why Choose Us</h3>
//             <h2>Experience construction done right.</h2>
//             <p>
//               Sociosqu massa semper vivamus fusce luctus porta purus nunc
//               consectetur. Mollis sollicitudin erat dui luctus aenean ex
//               vehicula. Risus habitant leo turpis sit vehicula.
//             </p>
//             <ul>
//               <li>
//                 <span>✔</span> Time savings through effective project management
//               </li>
//               <li>
//                 <span>✔</span> High-quality workmanship and materials
//               </li>
//               <li>
//                 <span>✔</span> Professional and efficient project delivery
//               </li>
//             </ul>
//             <div className="action-buttons">
//               <button>More About Us</button>
//               <span className="contact">
//                 <span>📞</span> (123) 456 7890
//               </span>
//             </div>
//           </div>

//           {/* Right Section: Images */}
//           <div className="image-container">
//             <img
//               src="/img/slide_sud_etanche_3.jpg"
//               alt=""
//               style={{ height: "250px" }}
//             />
//             <img
//               src="/img/slide_sud_etanche_3.jpg"
//               alt=""
//               style={{ height: "300px" }}
//             />
//             <img
//               src="/img/slide_sud_etanche_3.jpg"
//               alt=""
//               style={{ height: "350px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// import React from "react";

// export const Services2 = () => {
//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           {/* Left Section: Text Content */}
//           <div className="col-md-6">
//             <h3 className="text-primary">Why Choose Us</h3>
//             <h2 className="font-weight-bold">
//               Experience construction done right.
//             </h2>
//             <p>
//               Sociosqu massa semper vivamus fusce luctus porta purus nunc
//               consectetur. Mollis sollicitudin erat dui luctus aenean ex
//               vehicula. Risus habitant leo turpis sit vehicula.
//             </p>
//             <ul className="list-unstyled">
//               <li>
//                 <span className="text-primary">✔</span> Time savings through
//                 effective project management
//               </li>
//               <li>
//                 <span className="text-primary">✔</span> High-quality workmanship
//                 and materials
//               </li>
//               <li>
//                 <span className="text-primary">✔</span> Professional and
//                 efficient project delivery
//               </li>
//             </ul>
//             <div className="mt-3">
//               <button className="btn btn-primary">More About Us</button>
//               <span className="ml-3">
//                 <span className="text-primary">📞</span> (123) 456 7890
//               </span>
//             </div>
//           </div>

//           {/* Right Section: Images */}
//           <div className="col-md-6">
//             <div className="row">
//               <div className="col-xs-4">
//                 <img
//                   src="/img/slide_sud_etanche_3.jpg"
//                   alt="Image 1"
//                   className="img-responsive"
//                   style={{ height: "250px", borderRadius: "5px" }}
//                 />
//               </div>
//               <div className="col-xs-4">
//                 <img
//                   src="/img/slide_sud_etanche_3.jpg"
//                   alt="Image 2"
//                   className="img-responsive"
//                   style={{ height: "300px", borderRadius: "5px" }}
//                 />
//               </div>
//               <div className="col-xs-4">
//                 <img
//                   src="/img/slide_sud_etanche_3.jpg"
//                   alt="Image 3"
//                   className="img-responsive"
//                   style={{ height: "350px", borderRadius: "5px" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

export const Services2 = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* القسم الأيسر للنصوص */}
          <div className="col-md-6">
            <h3 className="text-primary">Why Choose Us</h3>
            <h2 className="font-weight-bold">
              Experience construction done right.
            </h2>
            <p>
              Sociosqu massa semper vivamus fusce luctus porta purus nunc
              consectetur. Mollis sollicitudin erat dui luctus aenean ex
              vehicula. Risus habitant leo turpis sit vehicula.
            </p>
            <ul className="list-unstyled">
              <li>
                <span className="text-primary">✔</span> Time savings through
                effective project management
              </li>
              <li>
                <span className="text-primary">✔</span> High-quality workmanship
                and materials
              </li>
              <li>
                <span className="text-primary">✔</span> Professional and
                efficient project delivery
              </li>
            </ul>
            <div className="mt-3">
              <button className="btn btn-primary">More About Us</button>
              <span className="ml-3">
                <span className="text-primary">📞</span> (123) 456 7890
              </span>
            </div>
          </div>

          {/* القسم الأيمن للصور */}
          <div className="col-md-6">
            <div
              className="d-flex justify-content-between align-items-end"
              style={{ height: "auto" }}
            >
              <img
                src="/img/slide_sud_etanche_3.jpg"
                alt=""
                style={{
                  height: "250px",
                  width: "150px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  marginLeft: "50px",
                  objectFit: "cover",
                }}
              />
              <img
                src="/img/etancheite-toit-terrasse-rouleaux-bitumineux.jpg"
                alt=""
                style={{
                  height: "300px",
                  width: "150px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  objectFit: "cover",
                }}
              />
              <img
                src="/img/video_slider1_16.jpeg"
                alt=""
                style={{
                  height: "350px",
                  width: "150px",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
