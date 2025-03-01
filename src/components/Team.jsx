// import React from "react";

// export const Team = (props) => {
//   return (
//     <div id="team" className="text-center">
//       <div className="container">
//         <div className="col-md-8 col-md-offset-2 section-title">
//           <h2>Meet the Team</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//             dapibus leonec.
//           </p>
//         </div>
//         <div id="row">
//           {props.data
//             ? props.data.map((d, i) => (
//                 <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
//                   <div className="thumbnail">
//                     {" "}
//                     <img src={d.img} alt="..." className="team-img" />
//                     <div className="caption">
//                       <h4>{d.name}</h4>
//                       <p>{d.job}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "loading"}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { motion } from "framer-motion";

export const Team = (props) => {
  // تعريف الأنيميشن: ظهور تدريجي وتحرك من الأسفل
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // يبدأ غير مرئي مع انزياح لأسفل
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <motion.div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6 team"
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} // تشغيل الأنيميشن عند ظهور 20% من العنصر
                >
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </motion.div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
