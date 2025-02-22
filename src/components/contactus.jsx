import React from "react";
// import { Navigation } from "./navigation"; // تأكد من المسار الصحيح للمكون
// import Footer from "./footer"; // تأكد من المسار الصحيح للمكون

export const ContactUs = () => {
  return (
    <>
      {/* <Navigation /> */}
      <div id="contactt" className="container mt-5">
        <div className="row">
          {/* نموذج الاتصال */}
          <div className="col-md-6">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>

          {/* تفاصيل الاتصال */}
          <div className="col-md-6">
            <h2>Send Us a Message</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <h5>
              <strong>Address</strong>
            </h5>
            <p>Jln Cempaka Wangi No 22, Jakarta - Indonesia 12345</p>
            <h5>
              <strong>Phone</strong>
            </h5>
            <p>(+62) 8152 254 239</p>
            <h5>
              <strong>Email</strong>
            </h5>
            <p>contact@domain.com</p>
          </div>
        </div>

        {/* تضمين خريطة جوجل */}
        <div className="mt-5">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19897.3298640744!2d-0.11809266044923253!3d51.503324707158194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cb7c051ccb%3A0xbdd5e674f5b4a8b1!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1642487283377!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ContactUs;
