"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function BandicootForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    organization: "",
    phone_number: "000-000-0000",
    message: "",
    enquiry_item: "bandicoot",
    enquiry_type: "solution",
  });

  const [formError, setFormError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let errors = {};

    if (!formData.full_name?.trim()) errors.full_name = "Full name is required";
    if (!formData.email?.trim()) errors.email = "Email is required";
    if (!formData.organization?.trim())
      errors.organization = "Organization is required";

    setFormError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        email: "",
        organization: "",
        message: "",
        enquiry_item: "bandicoot",
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

  return (
    <section className="bandicoot-form-section" id="bandicootFrom">
      <div className="form_container">
        <div className="form_title">
          <h1>Interested in Bandicoot?</h1>
          <p>
            Let us show you how Bandicoot can revolutionize your sanitation
            operations. Fill out the form below for a demo or to get more
            information.
          </p>
        </div>
        <br />
        <div className="bandicoot-form">
          <form onSubmit={handleSubmit}>
            <label>
              Full Name <span className="text-red-600 text-xl">*</span>
              <input
                type="text"
                name="full_name"
                placeholder="Your Name"
                value={formData.full_name}
                onChange={handleChange}
              />
              {formData.full_name.length === 0 && formError.full_name && (
                <p style={{ color: "red" }}>{formError.full_name}</p>
              )}
            </label>

            <label>
              Email Address <span className="text-red-600 text-xl">*</span>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {formData.email.length === 0 && formError.email && (
                <p style={{ color: "red" }}>{formError.email}</p>
              )}
            </label>

            <label>
              Organization <span className="text-red-600 text-xl">*</span>
              <input
                type="text"
                name="organization"
                placeholder="your company/municipality"
                value={formData.organization}
                onChange={handleChange}
              />
              {formData.organization.length === 0 && formError.organization && (
                <p style={{ color: "red" }}>{formError.organization}</p>
              )}
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="How can we help you? Any specific question about bandicoot"
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
  );
}

export default BandicootForm;
