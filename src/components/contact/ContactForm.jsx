"use client"
import React, { useState } from "react";
import * as Fa6 from "react-icons/fa6";
import * as Tb from "react-icons/tb";
import * as Ai from "react-icons/ai";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    phone_number: "",
    message: "",
  });

  const [formError, setFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (
      !formData.firstName?.trim() ||
      !formData.lastName?.trim() ||
      !formData.organization?.trim() ||
      !formData.email?.trim() ||
      !formData.phone_number?.trim()
    ) {
      setFormError(true);
      return true;
    }

    return false;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const currentValues = prev[name] || [];

        if (checked) {
          if (!currentValues.includes(value)) {
            return { ...prev, [name]: [...currentValues, value] };
          }
          return prev;
        } else {
          return { ...prev, [name]: currentValues.filter((v) => v !== value) };
        }
      });
    } else {
      if (name === "phone_number") {
        const onlyNums = value.replace(/\D/g, "");
        setFormData((prev) => ({
          ...prev,
          [name]: onlyNums,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNotValid = validateForm();

    if (isNotValid) return;

    setIsSubmitting(true);
    const payload = {
      full_name: formData.firstName + " " + formData.lastName,
      email: formData.email,
      organization: formData.organization,
      phone_number: formData.phone_number,
      message: formData.message,
      enquiry_item: "contact",
      enquiry_type: "service",
    };

    try {
      const response = await fetch(
        `${BASE_URL}enquiries/user/create-new-enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Form submission failed");
      }

      if (result.error === true) {
        throw new Error(result.message || "Form submission failed");
      }

      toast.success("Enquiry submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        organization: "",
        message: "",
        phone_number: "",
      });

      setFormError(false);
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        error.message || "An error occurred while submitting the enquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact_form" id="contact_form">
      <div className="container-fluid">
        <div className="lg:px-[90]">
          <br />
          <div className="form_wrapper">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contact_info">
                  <h1>
                    A Safer Future Together <br /> We Build
                  </h1>
                  <p>
                    Let us know how we can reach you and <br /> we'll respond as
                    soon as possible
                  </p>
                  <br />
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="contact_card card">
                        <label htmlFor="contactNumber">Call Us</label>
                        <a href="tel:09961616166">+91-9961616166</a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="contact_card card">
                        <label htmlFor="mediaContact">Media & support contact</label>
                        <a href="mailto:info@genrobotics.org">
                          info@genrobotics.org
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="contact_card card">
                        <label htmlFor="location">Location</label>
                        <p>
                          Genrobotic Innovations, CDAC Building, Technopark
                          Campus, <br />
                          Thiruvananthapuram Kerala, 695581
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="contact_card card">
                        <label htmlFor="socialmediaLinks">Social Networks</label>
                        <div className="social_links">
                          <a
                            href="https://www.facebook.com/genrobotic"
                            target="_blank"
                            className="fb_"
                          >
                            <Fa6.FaFacebookF />
                          </a>
                          <a
                            href="https://x.com/GenRobotic"
                            className="x_"
                            target="_blank"
                          >
                            <Fa6.FaXTwitter />
                          </a>
                          <a
                            href="https://www.instagram.com/genroboticinnovations/"
                            target="_blank"
                            className="insta_"
                          >
                            <Ai.AiFillInstagram />
                          </a>
                          <a
                            href="https://www.linkedin.com/company/13393278/admin/dashboard/"
                            target="_blank"
                            className="linked_"
                          >
                            <Fa6.FaLinkedinIn />
                          </a>
                          <a
                            href="http://www.youtube.com/@genroboticinnovations"
                            className="yt_"
                            target="_blank"
                          >
                            <Fa6.FaYoutube />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <form className="contact_form_field" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                      <label
                        htmlFor="firstName"
                        className="form-label contact_label"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control contact_inp"
                        value={formData?.firstName ?? ""}
                        onChange={handleChange}
                      />
                      {formData?.firstName &&
                        formData?.firstName?.trim().length === 0 &&
                        formError && (
                          <span className="error text-red-500 text-sm">
                            First name is Required!
                          </span>
                        )}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                      <label htmlFor="lastName" className="form-label contact_label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control contact_inp"
                        value={formData?.lastName ?? ""}
                        onChange={handleChange}
                      />
                      {formData?.lastName &&
                        formData?.lastName?.trim().length === 0 &&
                        formError === true && (
                          <span className="error text-red-500 text-sm">
                            Lastname is Required!
                          </span>
                        )}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                      <label htmlFor="emailId" className="form-label contact_label">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="emailId"
                        className="form-control contact_inp"
                        value={formData?.email ?? ""}
                        onChange={handleChange}
                        required
                      />
                      {formData?.email &&
                        formData?.email?.trim().length === 0 &&
                        formError && (
                          <span className="error text-red-500 text-sm">
                            Email address is required!
                          </span>
                        )}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-4">
                      <label htmlFor="phoneNumber" className="form-label contact_label">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phoneNumber"
                        className="form-control contact_inp"
                        value={formData?.phone_number ?? ""}
                        onChange={handleChange}
                      />
                      {formData?.phone_number &&
                        formData?.phone_number?.trim().length === 0 &&
                        formError && (
                          <span className="error text-red-500 text-sm">
                            Phone number is required!
                          </span>
                        )}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                      <label htmlFor="organisation" className="form-label contact_label">
                        Organisation
                      </label>
                      <input
                        type="text"
                        name="organization"
                        id="organisation"
                        className="form-control contact_inp"
                        value={formData?.organization ?? ""}
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                    <label htmlFor="" className="form-label contact_label">
                      Select Subject?
                    </label>

                    <div className="form-group">
                      <label
                        htmlFor="general_enquiry"
                        className="form-label radio_label"
                      >
                        <input
                          type="radio"
                          name="subject"
                          id="general_enquiry"
                          className=""
                        />
                        General Enquiry
                      </label>
                      <label
                        htmlFor="product_support"
                        className="form-label radio_label"
                      >
                        <input
                          type="radio"
                          name="subject"
                          id="product_support"
                          className=""
                        />
                        Product Support
                      </label>
                      <label
                        htmlFor="media_press"
                        className="form-label radio_label"
                      >
                        <input
                          type="radio"
                          name="subject"
                          id="media_press"
                          className=""
                        />
                        Media & Press
                      </label>
                    </div>
                  </div> */}
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-4">
                      <label htmlFor="message" className="form-label contact_label">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="form-control contact_inp contact_message"
                        value={formData?.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="contact_submit_btn"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? (
                      <>
                        {" "}
                        <Tb.TbSend />
                        <span>Submit Enquiry </span>
                      </>
                    ) : (
                      <BeatLoader size={10} color="#fff" />
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
