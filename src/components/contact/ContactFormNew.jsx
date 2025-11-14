"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import * as Md from "react-icons/md";
import { BeatLoader } from "react-spinners";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function ContactFormNew({ map }) {
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
      !formData.email?.trim()
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

    debugger;

    const isNotValid = validateForm();

    if (isNotValid) return;

    setIsSubmitting(true);
    const payload = {
      full_name: formData.firstName + " " + formData.lastName,
      email: formData.email,
      organization: formData.organization,
      phone_number: "00 00 0000",
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
    <section className="newContact_form">
      <div className="container-fluid">
        <div className="padding_space">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
              <div className="form_container">
                <h1>Leave A Message</h1>
                <form
                  action=""
                  className="h-full w-full"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 vol-sm-12 mt-2">
                      <div className="inp_container">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control contact_inp"
                          value={formData?.firstName ?? ""}
                          onChange={handleChange}
                          placeholder="Enter your Firstname"
                        />
                        {formData?.firstName &&
                          formData?.firstName?.trim().length === 0 &&
                          formError && (
                            <span className="error text-red-500 text-sm">
                              First name is Required!
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 vol-sm-12 mt-2">
                      <div className="inp_container">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control contact_inp"
                          value={formData?.lastName ?? ""}
                          onChange={handleChange}
                          placeholder="Enter your Lastname"
                        />
                        {formData?.lastName &&
                          formData?.lastName?.trim().length === 0 &&
                          formError === true && (
                            <span className="error text-red-500 text-sm">
                              Lastname is Required!
                            </span>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="inp_container">
                    <input
                      type="text"
                      name="email"
                      id=""
                      className="form-control contact_inp"
                      value={formData?.email ?? ""}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                    />
                    {formData?.email &&
                      formData?.email?.trim().length === 0 &&
                      formError && (
                        <span className="error text-red-500 text-sm">
                          Email address is required!
                        </span>
                      )}
                  </div>
                  <div className="inp_container">
                    <textarea
                      name="message"
                      id=""
                      className="gen_txt"
                      placeholder="Message"
                      value={formData?.message}
                      onChange={handleChange}
                      rows={8}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="gen_form_submit"
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? (
                      <>
                        {" "}
                        Submit <Md.MdArrowRightAlt />
                      </>
                    ) : (
                      <BeatLoader size={10} color="#fff" />
                    )}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
              <div className="map_">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.417846033399!2d76.87872427526023!3d8.555757191487888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befaeabb885f%3A0x486c83afdd2a6d65!2sGenrobotic%20Innovations%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1751174302919!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormNew;
