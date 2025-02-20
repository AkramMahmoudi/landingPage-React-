// import React from "react";
// export const Section3 = () => {
//   return (
//     <div className="container3">
//       {/* العنوان */}
//       <div className="title-container">
//         <h2 className="title3">
//           Explore our best roofing <span className="highlight">services</span>
//         </h2>
//       </div>
//       <div className="button-container">
//         <button className="button3">All Services</button>
//       </div>
//       {/* البطاقات */}
//       <div className="grid">
//         {/* البطاقة الأولى */}
//         <div className="card3">
//           <img
//             src="/img/slide_sud_etanche_3.jpg"
//             alt="Roof Installation"
//             width={"100px"}
//             height={"100px"}
//           />
//           <div className="card-content">
//             <h3 className="card-title">Roof Installation</h3>
//           </div>
//         </div>
//         {/* البطاقة الثانية */}
//         <div className="card3">
//           <img
//             src="/img/slide_sud_etanche_3.jpg"
//             alt="Roof Renovation"
//             width={"100px"}
//             height={"100px"}
//           />
//           <div className="card-content">
//             <h3 className="card-title">Roof Renovation</h3>
//           </div>
//         </div>
//         {/* البطاقة الثالثة */}
//         <div className="card3">
//           <img
//             src="/img/slide_sud_etanche_3.jpg"
//             alt="Roof Survey"
//             width={"250px"}
//             height={"250px"}
//           />
//           <div className="card-content">
//             <h3 className="card-title">Roof Survey</h3>
//           </div>
//         </div>
//         {/* البطاقة الرابعة */}
//         <div className="card3">
//           <img
//             src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
//             alt="Commercial Roofing"
//             width={"250px"}
//             height={"250px"}
//           />
//           <div className="card-content">
//             <h3 className="card-title">Commercial Roofing</h3>
//           </div>
//         </div>
//         {/* البطاقة الخامسة */}
//         <div className="card3">
//           <img
//             src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
//             alt="Residential Roofing"
//             width={"250px"}
//             height={"250px"}
//           />
//           <div className="card-content">
//             <h3 className="card-title">Residential Roofing</h3>
//           </div>
//         </div>
//         {/* البطاقة السادسة */}
//         <div className="card3">
//           <img
//             src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
//             alt="Roof Repair"
//             width={"250px"}
//             height={"250px"}
//           />
//           <div className="card-content">
//             <h3 className="card-title">Roof Repair</h3>
//           </div>
//         </div>
//       </div>

//       {/* زر */}
//     </div>
//   );
// };
import React from "react";

export const Section3 = () => {
  return (
    <div id="Section3">
      <div className="container3">
        {/* العنوان والزر في نفس السطر */}
        <div className="header-container">
          <h2 className="title3">
            Explore our best roofing <span className="highlight">services</span>
          </h2>
          <button className="button3">All Services</button>
        </div>

        {/* البطاقات */}
        <div className="grid">
          {/* البطاقة الأولى */}
          <div className="card3">
            <img src="/img/slide_sud_etanche_3.jpg" alt="Roof Installation" />
            <div className="card-content">
              <h3 className="card-title">Roof Installation</h3>
            </div>
          </div>
          {/* البطاقة الثانية */}
          <div className="card3">
            <img src="/img/slide_sud_etanche_3.jpg" alt="Roof Renovation" />
            <div className="card-content">
              <h3 className="card-title">Roof Renovation</h3>
            </div>
          </div>
          {/* البطاقة الثالثة */}
          <div className="card3">
            <img src="/img/slide_sud_etanche_3.jpg" alt="Roof Survey" />
            <div className="card-content">
              <h3 className="card-title">Roof Survey</h3>
            </div>
          </div>
          {/* البطاقة الرابعة */}
          <div className="card3">
            <img
              src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
              alt="Commercial Roofing"
            />
            <div className="card-content">
              <h3 className="card-title">Commercial Roofing</h3>
            </div>
          </div>
          {/* البطاقة الخامسة */}
          <div className="card3">
            <img
              src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
              alt="Residential Roofing"
            />
            <div className="card-content">
              <h3 className="card-title">Residential Roofing</h3>
            </div>
          </div>
          {/* البطاقة السادسة */}
          <div className="card3">
            <img
              src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
              alt="Roof Repair"
            />
            <div className="card-content">
              <h3 className="card-title">Roof Repair</h3>
            </div>
          </div>
          {/* <div className="card3">
            <img
              src="/img/the-roof-is-covered-with-bituminous-shingles-of-br-2022-11-14-16-05-23-utc.jpg"
              alt="Roof Repair"
            />
            <div className="card-content">
              <h3 className="card-title">Roof Repair</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
