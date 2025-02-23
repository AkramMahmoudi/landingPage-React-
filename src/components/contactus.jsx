// import React from "react";

// export const ContactUs = () => {
//   return (
//     <>
//       {/* <Navigation /> */}
//       <div id="contactt" className="container mt-5">
//         <div className="row">
//           {/* نموذج الاتصال */}
//           <div className="col-md-6">
//             <form>
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Name"
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Company"
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Phone"
//                   />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Email"
//                   />
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Subject"
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   className="form-control"
//                   placeholder="Message"
//                   rows="4"
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary w-100">
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* تفاصيل الاتصال */}
//           <div className="col-md-6">
//             <h2>Send Us a Message</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt.
//             </p>
//             <h5>
//               <strong>Address</strong>
//             </h5>
//             <p>Jln Cempaka Wangi No 22, Jakarta - Indonesia 12345</p>
//             <h5>
//               <strong>Phone</strong>
//             </h5>
//             <p>(+62) 8152 254 239</p>
//             <h5>
//               <strong>Email</strong>
//             </h5>
//             <p>contact@domain.com</p>
//           </div>
//         </div>

//         {/* تضمين خريطة جوجل */}
//         <div className="mt-5">
//           <iframe
//             title="location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19897.3298640744!2d-0.11809266044923253!3d51.503324707158194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb7c051ccb%3A0xbdd5e674f5b4a8b1!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1642487283377!5m2!1sen!2suk"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>

//     </>
//   );
// };

// export default ContactUs;
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div id="contactt" className="contact-container">
        {/* نموذج الاتصال */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="text" placeholder="Name" required />
              <input type="text" placeholder="Company" required />
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="tel" placeholder="Phone" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* معلومات الاتصال */}
        <div className="contact-info">
          <h2>Send Us a Message</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <hr />
          <h4>Address</h4>
          <p>eloued debila</p>
          <h4>Phone</h4>
          <p>(+213) 8152 254 239</p>
          <h4>Email</h4>
          <p>contact@domain.com</p>
        </div>
      </div>
      {/* تضمين خريطة جوجل */}
      <div className="contact-container mt-5">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26614.22579618957!2d6.979142240145419!3d33.50714671308631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125904a1f26e310f%3A0x9dac919f51ef8bce!2z2KfZhNiv2KjZitmE2Kk!5e0!3m2!1sar!2sdz!4v1740306764067!5m2!1sar!2sdz"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
