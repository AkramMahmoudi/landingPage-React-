import React from "react";

export const Services2 = () => {
  return (
    <div id="Services2">
      <div className="container">
        <div className="row">
          {/* القسم الأيسر للنصوص */}
          <div className="col-md-6">
            <h3 className="text-primary">Why Choose Us</h3>
            <h2 className="font-weight-bold">
              Experience construction done right.
            </h2>
            <p
              className="text-muted"
              style={{
                fontSize: "16px", // Adjust font size for readability
                lineHeight: "1", // Add spacing between lines
                textAlign: "center", // Justify text alignment
                marginBottom: "10px", // Add some spacing below the paragraph
              }}
            >
              Sociosqu massa semper vivamus fusce luctus porta purus nunc
              consectetur. Mollis sollicitudin erat dui luctus aenean ex
              vehicula. Risus habitant leo turpis sit vehicula.
            </p>

            <ul className="list-unstyled">
              <li className="media mb-3">
                <div className="media-left">
                  <span
                    className="text-primary"
                    style={{ fontSize: "24px", marginRight: "10px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  className="media-body"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Time savings through effective project management
                </div>
              </li>
              <li className="media mb-3">
                <div className="media-left">
                  <span
                    className="text-primary"
                    style={{ fontSize: "24px", marginRight: "10px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  className="media-body"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  High-quality workmanship and materials
                </div>
              </li>
              <li className="media">
                <div className="media-left">
                  <span
                    className="text-primary"
                    style={{ fontSize: "24px", marginRight: "10px" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  className="media-body"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Professional and efficient project delivery
                </div>
              </li>
            </ul>
            {/*  */}
            <div className="container2">
              <div className="flex-container">
                <button className="button">More About Us</button>
                <div className="icon-text-container">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 1536 1536"
                    >
                      <path
                        fill="currentColor"
                        d="M1280 1065q0-11-2-16t-18-16.5t-40.5-25T1172 981t-45.5-25t-28.5-15q-5-3-19-13t-25-15t-21-5q-15 0-36.5 20.5t-39.5 45t-38.5 45T885 1039q-7 0-16.5-3.5T853 1029t-17-9.5t-14-8.5q-99-55-170-126.5T525 714q-2-3-8.5-14t-9.5-17t-6.5-15.5T497 651q0-13 20.5-33.5t45-38.5t45-39.5T628 503q0-10-5-21t-15-25t-13-19q-3-6-15-28.5T555 364t-26.5-47.5t-25-40.5t-16.5-18t-16-2q-48 0-101 22q-46 21-80 94.5T256 503q0 16 2.5 34t5 30.5t9 33t10 29.5t12.5 33t11 30q60 164 216.5 320.5T843 1230q6 2 30 11t33 12.5t29.5 10t33 9t30.5 5t34 2.5q57 0 130.5-34t94.5-80q22-53 22-101m256-777v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"
                      ></path>
                    </svg>
                  </span>
                  <span className="text">(123) 456 7890</span>
                </div>
              </div>
            </div>
          </div>

          {/* القسم الأيمن للصور */}
          <div className="col-md-6 ">
            <div
              className="d-flex justify-content-between align-items-end imgm"
              style={{ height: "auto" }}
            >
              <img
                className="fimage"
                src="/img/slide_sud_etanche_3.jpg"
                alt=""
                // style={{
                //   height: "250px",
                //   width: "150px",
                //   borderRadius: "5px",
                //   marginRight: "10px",
                //   marginLeft: "50px",
                //   objectFit: "cover",
                // }}
              />
              <img
                className="simage"
                src="/img/etancheite-toit-terrasse-rouleaux-bitumineux.jpg"
                alt=""
                // style={{
                //   height: "300px",
                //   width: "150px",
                //   borderRadius: "5px",
                //   marginRight: "10px",
                //   objectFit: "cover",
                // }}
              />
              <img
                className="timage"
                src="/img/video_slider1_16.jpeg"
                alt=""
                // style={{
                //   height: "350px",
                //   width: "150px",
                //   borderRadius: "5px",
                //   objectFit: "cover",
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
