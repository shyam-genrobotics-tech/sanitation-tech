import React from "react";

import * as Io5 from "react-icons/io5";
import * as Fa6 from "react-icons/fa6";

function ContactDetails({ contactDetails }) {
  return (
    <section className="contact_details_sec">
      <div className="container-fluid">
        <div className="padding_space">
          <div className="wide_screen">
            <div className="row">
              <div className="col-lg-4 mt-3">
                <div className="card contact_info_card_new">
                  <div className="contents__details">
                    <div className="ico_">
                      <Io5.IoMailSharp />
                    </div>
                    <h3>E-Mail</h3>
                    <p>info@genrobotics.org</p>
                    <a
                      className="contact_btns"
                      href={`mailto:info@genrobotics.org`}
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-3">
                <div className="card contact_info_card_new">
                  <div className="contents__details">
                    <div className="ico_">
                      <Io5.IoCallSharp />
                    </div>
                    <h3>Phone Number</h3>
                    <p>+91-996 161 6166</p>
                    <a className="contact_btns" href={`tel:+91-9961616166`}>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-3">
                <div className="card contact_info_card_new">
                  <div className="contents__details">
                    <div className="ico_">
                      <Io5.IoLocationSharp />
                    </div>
                    <h3>Address</h3>
                    <p>
                      Genrobotic Innovations, CDAC Building, Technopark Campus,
                      Thiruvananthapuram Kerala, 695581
                    </p>

                    <a
                      className="contact_btns"
                      href="https://www.google.com/maps/place/Genrobotic+Innovations+Pvt.+Ltd./@8.5557572,76.8787243,1075m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b05befaeabb885f:0x486c83afdd2a6d65!8m2!3d8.5557572!4d76.8812992!16s%2Fg%2F11f_d83fvs?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      Reach Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mob_screen">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-6 mt-3">
                <div className="card contact_info_card_new">
                  <div className="contents__details">
                    <div className="ico_">
                      <Io5.IoMailSharp />
                    </div>
                    <h3>E-Mail</h3>
                    <p>info@genrobotics.org</p>
                    <a
                      className="contact_btns"
                      href={`mailto:info@genrobotics.org`}
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-6  mt-3">
                <div className="card contact_info_card_new">
                  <div className="contents__details">
                    <div className="ico_">
                      <Io5.IoCallSharp />
                    </div>
                    <h3>Phone Number</h3>
                    <p>+91-9961616166</p>
                    <a className="contact_btns" href={`tel:+91-9961616166`}>
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row flex justify-center">
              <div className="col-lg-4 col-md-4 col-sm-4 col-6 mt-3">
                <div className="card contact_info_card_new">
                  <div className="contents__details">
                    <div className="ico_">
                      <Io5.IoLocationSharp />
                    </div>
                    <h3>Address</h3>
                    <p>
                      Genrobotic Innovations, CDAC Building, Technopark Campus,
                      Thiruvananthapuram Kerala, 695581
                    </p>

                    <a
                      className="contact_btns"
                      href="https://www.google.com/maps/place/Genrobotic+Innovations+Pvt.+Ltd./@8.5557572,76.8787243,1075m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b05befaeabb885f:0x486c83afdd2a6d65!8m2!3d8.5557572!4d76.8812992!16s%2Fg%2F11f_d83fvs?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      Reach Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
