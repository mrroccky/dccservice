import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-white flex flex-col justify-center items-center font-sans">
        <h1 className="text-center font-bold text-2xl mt-5 mb-5 text-black">
          CONTACT DCC SERVICES
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-6 bg-white">
        {/* Information Card */}
        <div className="flex-1 w-full max-w-xl bg-white p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="space-y-4">
            <p className="text-gray-700 text-center">
              <span className="font-bold text-lg block">Reach To Us</span>
              For any inquiries, please contact us using the details provided below.
            </p>
            <p className="text-gray-700 text-center">
              <span className="font-medium">Phone:</span> +91 9307667930
            </p>
            <p className="text-gray-700 text-center">
              <span className="font-medium">Phone:</span> +91 9325859861
            </p>
            <p className="text-gray-700 text-center">
              <span className="font-medium">Email:</span> dccservicesnagpur@gmail.com
            </p>
            <p className="text-gray-700 text-center">
              <span className="font-medium">Address:</span> Plot Number 48, Subhash Nagar Rd, opposite BusStand, Naik Layout, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022
            </p>
          </div>
        </div>

        {/* Map Card */}
        <div className="flex-1 w-full max-w-xl bg-white p-1 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18328.356432313856!2d79.04068854382723!3d21.120024036819032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c124c21e7a99%3A0x6164102382e1fc18!2sDCC%20SERVICES!5e0!3m2!1sen!2sin!4v1732002899795!5m2!1sen!2sin"
            width="100%"
            height="250"
            className="border-0 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
