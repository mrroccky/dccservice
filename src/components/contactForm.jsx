"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);  // Track loading state
  const [success, setSuccess] = useState(false);  // Track success state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { fullName, email, phone, service, message } = formData;
    if (!fullName || !email || !phone || !service || !message) {
      setError("All fields are required.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);  // Set loading state to true
    setError("");  // Reset error message
    setSuccess(false); // Reset success state

    emailjs
      .send(
        "service_8ppegmx", // Replace with your EmailJS service ID
        "template_b3erdpl", // Replace with your EmailJS template ID
        formData,
        "by5jQkEDBF6Snc8fv" // Replace with your EmailJS user ID
      )
      .then(() => {
        setSuccess(true); // Mark success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Error sending email: ", err);
        setError("Failed to send the message. Please try again later.");
      })
      .finally(() => {
        setLoading(false); // Set loading state back to false
      });
  };

  return (
    <div className="w-full bg-white pt-6 pb-6">
      <div className="max-w-xl mx-auto p-6 bg-white text-black shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Contact Us</h1>

        {/* Display Success or Error message */}
        {success && (
          <div className="mb-4 text-green-500 text-sm text-center">Message sent successfully!</div>
        )}
        {error && (
          <div className="mb-4 text-red-400 text-sm text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 text-black"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 text-black"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone No
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 text-black"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-1">
              Services
            </label>
            <select
              name="service"
              id="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 text-black"
              required
            >
              <option value="" disabled>
                -- Select One --
              </option>
              <option value="Maid">Maid</option>
              <option value="Cook">Cook</option>
              <option value="Baby Sitter">Baby Sitter</option>
              <option value="Japa Maid">Japa Maid</option>
              <option value="Driver">Driver</option>
              <option value="Patient Care">Patient Care</option>
              <option value="Elderly Care">Elderly Care</option>
              <option value="Office Boy">Office Boy</option>
              <option value="House Keeping">House Keeping</option>
              <option value="Security Guard">Security Guard</option>
              <option value="Home Nurse">Home Nurse</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-md p-2 bg-gray-100 text-black"
              placeholder="Write your message"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`w-full ${loading ? "bg-gray-400" : "bg-green-600"} hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-lg transition`}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
