"use client"
import React from "react";

const TermsAndConditionsComponent = () => {
  return (
    <div className="bg-white text-gray-700 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            1. Service Agreement
          </h2>
          <p className="text-gray-600">
            By availing of our services, you agree to adhere to the terms and conditions
            mentioned below. These terms ensure a smooth and transparent process for
            both parties involved.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            2. Service Scope
          </h2>
          <p className="text-gray-600">
            We provide staffing solutions for domestic, corporate, and industrial needs.
            Our services include hiring for roles such as maids, cooks, babysitters, 
            drivers, patient care assistants, and more. We ensure that the candidates
            meet the basic requirements set by the client.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            3. Replacement Policy
          </h2>
          <ul className="list-disc list-inside text-gray-900 space-y-2">
            <li>
              Clients are entitled to a maximum of three (3) candidate replacements 
              if the selected candidate does not meet the required expectations.
            </li>
            <li>
              The replacement policy is valid for six (6) months from the date of token payment.
            </li>
            <li>
              Replacements will be provided only if valid concerns or mismatched requirements 
              are reported by the client within this period.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            4. Client Responsibilities
          </h2>
          <ul className="list-disc list-inside text-gray-900 space-y-2">
            <li>
              Clients must provide clear requirements and expectations for the role.
            </li>
            <li>
              The service token must be paid in advance to initiate the recruitment process.
            </li>
            <li>
              Any additional costs or responsibilities (e.g., accommodation, food, etc.)
              must be discussed with the candidate directly or through our service team.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            5. Confidentiality
          </h2>
          <p className="text-gray-900">
            All information shared between the client and our agency will be kept 
            strictly confidential. We ensure the privacy of both our clients and the 
            candidates involved in the recruitment process.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            6. Limitations of Liability
          </h2>
          <p className="text-gray-900">
            While we take all reasonable measures to verify and match candidates, we are
            not liable for any misconduct, negligence, or unforeseen issues arising after 
            the placement of the candidate. Clients are encouraged to conduct their own 
            checks as necessary.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            7. Termination and Refunds
          </h2>
          <ul className="list-disc list-inside text-gray-900 space-y-2">
            <li>
              No refunds will be provided once the service has been initiated, 
              including token payments.
            </li>
            <li>
              The agreement will be terminated if the client violates any of these terms 
              or fails to communicate within the specified replacement period.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            8. Governing Law
          </h2>
          <p className="text-gray-900">
            These terms and conditions are governed by the laws of India. Any disputes 
            arising under this agreement will be resolved in the jurisdiction of Nagpur, Maharashtra.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsComponent;
