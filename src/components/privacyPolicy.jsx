"use client"
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-700 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Effective Date: <strong>01-01-2025</strong>
        </p>

        {/* Section 1: Information We Collect */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, phone number, email
              address, and physical address for inquiries and service delivery.
            </li>
            <li>
              <strong>Usage Information:</strong> Details of your interaction
              with our website, such as pages visited and device information.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              to enhance user experience and analyze website performance.
            </li>
          </ul>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and manage our services effectively.</li>
            <li>To communicate updates and inquiries related to our services.</li>
            <li>
              To improve website functionality and tailor offerings to your
              preferences.
            </li>
            <li>
              To comply with legal obligations and ensure data protection.
            </li>
          </ul>
        </section>

        {/* Section 3: Sharing Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell your personal information. However, we may share it
            under these conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>With Service Providers:</strong> Trusted third-party
              vendors to facilitate our services.
            </li>
            <li>
              <strong>Legal Obligations:</strong> When required by law, we may
              share information with authorities.
            </li>
          </ul>
        </section>

        {/* Section 4: Security of Your Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. Security of Your Information
          </h2>
          <p>
            We take appropriate measures to safeguard your information, such as
            encryption and regular system updates. However, no system can
            guarantee 100% security. Please take precautions to protect your
            own data.
          </p>
        </section>

        {/* Section 5: Your Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. Your Rights
          </h2>
          <p className="mb-4">
            You have the right to access, update, delete, or withdraw consent
            regarding your personal information. Contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:dccservicesnagpur@gmail.com"
              className="text-blue-500"
            >
              dccservicesnagpur@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> +91 9307667930, +91 9325859861
          </p>
        </section>

        {/* Section 6: Links to Third-Party Websites */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. Links to Third-Party Websites
          </h2>
          <p>
            Our website may include links to third-party websites. We are not
            responsible for their privacy practices. Please review their
            policies before interacting with them.
          </p>
        </section>

        {/* Section 7: Updates */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. Updates to This Privacy Policy
          </h2>
          <p>
            We may update this policy from time to time. Please review this page
            periodically. The "Effective Date" indicates the latest revision.
          </p>
        </section>

        {/* Section 8: Contact Us */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions or concerns, please contact us at:
          </p>
          <ul className="space-y-2 mt-4">
            <li>
              <strong>Address:</strong> Plot Number 48, Subhash Nagar Rd,
              opposite Bus Stand, Naik Layout, Parsodi, Trimurtee Nagar, Nagpur,
              Maharashtra 440022
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:dccservicesnagpur@gmail.com"
                className="text-blue-500"
              >
                dccservicesnagpur@gmail.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +91 9307667930, +91 9325859861
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
