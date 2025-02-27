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
