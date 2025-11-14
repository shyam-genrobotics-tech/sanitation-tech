"use client";
import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function Home_form() {
  const [formData, setFormData] = useState({
    full_name: "",
    organization: "",
    designation: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
    country: "",
    interestedIn: [],
    interestedInOtherText: "",
    purpose: "",
    purposeOtherText: "",
    demoMode: "",
    message: "",
    enquiry_item: "demo",
    enquiry_type: "service",
  });

  const [formError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldRefs = {
    full_name: useRef(null),
    organization: useRef(null),
    email: useRef(null),
    phone_number: useRef(null),
    city: useRef(null),
    interestedIn: useRef(null),
    purpose: useRef(null),
    demoMode: useRef(null),
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.full_name?.trim()) errors.full_name = "Full name is required";
    if (!formData.organization?.trim())
      errors.organization = "Organization is required";
    if (!formData.email?.trim()) errors.email = "Email is required";
    if (!formData.phone_number?.trim())
      errors.phone_number = "Phone number is required";
    if (!formData.city?.trim()) errors.city = "City is required";
    if (!formData.interestedIn || formData.interestedIn.length === 0)
      errors.interestedIn = "Please select at least one option";
    if (!formData.purpose || !formData.purpose.trim())
      errors.purpose = "Please select purpose of enquiry";
    if (!formData.demoMode || !formData.demoMode.trim())
      errors.demoMode = "Please select preferred mode of demo";

    setFormError(errors);
    scrollToFirstError(errors);
    return Object.keys(errors).length === 0;
  };

  const scrollToFirstError = (errors) => {
    const errorFields = Object.keys(errors);
    if (errorFields.length > 0) {
      const firstErrorField = errorFields[0];
      const fieldRef = fieldRefs[firstErrorField];

      if (fieldRef && fieldRef.current) {
        fieldRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        setTimeout(() => {
          if (fieldRef.current) {
            fieldRef.current.focus();
          }
        }, 500);
      }
    }
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

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${BASE_URL}enquiries/user/create-new-enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
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
        full_name: "",
        organization: "",
        designation: "",
        email: "",
        phone_number: "",
        city: "",
        state: "",
        country: "",
        interestedIn: [],
        interestedInOtherText: "",
        purpose: "",
        purposeOtherText: "",
        demoMode: "",
        message: "",
        enquiry_item: "demo",
        enquiry_type: "service",
      });

      setFormError({});
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(
        error.message || "An error occurred while submitting the enquiry."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExpand = () => {
    const formSection = document.querySelector(".bandicoot-form");
    if (formSection) {
      formSection.classList.remove("hidden");
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div id="home_enquiry">
      <section className="bandicoot-form-section" id="enquiry_form">
        <div>
          <div className="form_title">
            <h1>Experience the Power of Robotics – Book a Demo Today</h1>
            <p>
              Let us show you how our products can revolutionize your
              operations. Fill out the form below and our team will get in touch
              with you shortly.
            </p>
          </div>
          <br />
          <button className="book_demo_button" onClick={handleExpand}>Book a Demo</button>
          <div className="bandicoot-form hidden">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>
                    Full Name <span className="text-red-600 text-xl">*</span>
                    <input
                      ref={fieldRefs.full_name}
                      type="text"
                      name="full_name"
                      placeholder="Your Name"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                    {formData.full_name.length === 0 && formError.full_name && (
                      <p className="text-red-600 text-sm">
                        {formError.full_name}
                      </p>
                    )}
                  </label>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>
                    Organization / Company Name{" "}
                    <span className="text-red-600 text-xl">*</span>
                    <input
                      ref={fieldRefs.organization}
                      type="text"
                      name="organization"
                      placeholder="Your company or municipality"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                    {formData.organization.length === 0 &&
                      formError.organization && (
                        <p className="text-red-600 text-sm">
                          {formError.organization}
                        </p>
                      )}
                  </label>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>
                    Designation / Role
                    <input
                      type="text"
                      name="designation"
                      placeholder="Your role or title"
                      value={formData.designation}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>
                    Email Address{" "}
                    <span className="text-red-600 text-xl">*</span>
                    <input
                      ref={fieldRefs.email}
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formData.email.length === 0 && formError.email && (
                      <p className="text-red-600 text-sm">{formError.email}</p>
                    )}
                  </label>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label>
                    Phone Number <span className="text-red-600 text-xl">*</span>
                    <input
                      ref={fieldRefs.phone_number}
                      type="tel"
                      name="phone_number"
                      placeholder=""
                      value={formData.phone_number}
                      onChange={handleChange}
                    />
                    {formData.phone_number.length === 0 &&
                      formError.phone_number && (
                        <p className="text-red-600 text-sm">
                          {formError.phone_number}
                        </p>
                      )}
                  </label>
                </div>
              </div>
              <hr />
              <fieldset>
                <legend>Location Details</legend>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label>
                      City <span className="text-red-600 text-xl">*</span>
                      <input
                        ref={fieldRefs.city}
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {formData.city.length === 0 && formError.city && (
                        <p className="text-red-600 text-sm">{formError.city}</p>
                      )}
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label>
                      State
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label>
                      Country
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
              <hr />
              <fieldset ref={fieldRefs.interestedIn}>
                <legend>
                  Interested In <span className="text-red-600 text-2xl">*</span>
                </legend>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="checkbox"
                      name="interestedIn"
                      value="Bandicoot – Sewer Cleaning Robot"
                      checked={formData.interestedIn.includes(
                        "Bandicoot – Sewer Cleaning Robot"
                      )}
                      onChange={handleChange}
                    />
                    <span className="pt-2">
                      Bandicoot Series – Sewer Cleaning Robot
                    </span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="checkbox"
                      name="interestedIn"
                      value="Wilboar – Stormwater Drain Cleaning Robot"
                      checked={formData.interestedIn.includes(
                        "Wilboar – Stormwater Drain Cleaning Robot"
                      )}
                      onChange={handleChange}
                    />
                    <span className="pt-2">
                      Wilboar – Stormwater Drain Cleaning Robot
                    </span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="checkbox"
                      name="interestedIn"
                      value="G-Mammoth – Oil & Gas Pipeline Inspection Robot"
                      checked={formData.interestedIn.includes(
                        "G-Mammoth – Oil & Gas Pipeline Inspection Robot"
                      )}
                      onChange={handleChange}
                    />
                    <span className="pt-2">
                      G-Mammoth – Oil & Gas Pipeline Inspection Robot
                    </span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="checkbox"
                      name="interestedIn"
                      value="G-Crow - Digital platform for Asset & Operations Management"
                      checked={formData.interestedIn.includes(
                        "G-Crow - Digital platform for Asset & Operations Management"
                      )}
                      onChange={handleChange}
                    />
                    <span className="pt-2">
                      G-Crow - Digital platform for Asset & Operations
                      Management
                    </span>
                  </label>
                </div>
                {formData.interestedIn.length === 0 &&
                  formError.interestedIn && (
                    <p className="text-red-600 text-sm">
                      {formError.interestedIn}
                    </p>
                  )}
              </fieldset>
              <br />
              <fieldset ref={fieldRefs.purpose}>
                <legend>
                  Purpose of Enquiry{" "}
                  <span className="text-red-600 text-2xl">*</span>
                </legend>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="Request a Demo"
                      checked={formData.purpose === "Request a Demo"}
                      className="radio_"
                      onChange={handleChange}
                    />
                    <span className="pt-2">Request a Demo</span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="Product Information"
                      checked={formData.purpose === "Product Information"}
                      className="radio_"
                      onChange={handleChange}
                    />
                    <span className="pt-2">Product Information</span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="Technical Specifications"
                      checked={formData.purpose === "Technical Specifications"}
                      className="radio_"
                      onChange={handleChange}
                    />
                    <span className="pt-2">Technical Specifications</span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="radio"
                      name="purpose"
                      value="Partnership Opportunity"
                      checked={formData.purpose === "Partnership Opportunity"}
                      className="radio_"
                      onChange={handleChange}
                    />
                    <span className="pt-2">Partnership Opportunity</span>
                  </label>
                </div>
                {!formData.purpose && formError.purpose && (
                  <p className="text-red-600 text-sm">{formError.purpose}</p>
                )}
              </fieldset>
              <br />
              <fieldset ref={fieldRefs.demoMode}>
                <legend>
                  Preferred Mode of Demo{" "}
                  <span className="text-red-600 text-2xl">*</span>
                </legend>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="radio"
                      name="demoMode"
                      className="radio_"
                      value="Virtual (Online)"
                      checked={formData.demoMode === "Virtual (Online)"}
                      onChange={handleChange}
                    />
                    <span className="pt-2">Virtual (Online)</span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="radio"
                      name="demoMode"
                      className="radio_"
                      value="On-Site Visit"
                      checked={formData.demoMode === "On-Site Visit"}
                      onChange={handleChange}
                    />
                    <span className="pt-2">On-Site Visit</span>
                  </label>
                </div>
                <div className="checkbox_item">
                  <label>
                    <input
                      type="radio"
                      name="demoMode"
                      className="radio_"
                      value="To be decided"
                      checked={formData.demoMode === "To be decided"}
                      onChange={handleChange}
                    />
                    <span className="pt-2">To be decided</span>
                  </label>
                </div>
                {!formData.demoMode && formError.demoMode && (
                  <p className="text-red-600 text-sm">{formError.demoMode}</p>
                )}
              </fieldset>
              <br />
              <label>
                Message / Special Requirements (if any)
                <textarea
                  name="message"
                  placeholder="How can we help you? Any specific question about our products"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home_form;
