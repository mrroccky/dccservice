import React from "react";

const ServiceCard = () => {
  return (
    <>
    <div className="bg-white p-2 flex flex-col justify-center items-center font-sans">
      <h1 className="text-center font-bold text-2xl mt-5 mb-5 text-black">
      OUR SERVICE DOMAINS
      </h1>
    <div className="flex flex-wrap justify-center">
       
        <div className="bg-white p-10 m-3 rounded-lg text-center shadow-sm border-2 shadow-sm transition hover:shadow-2xl">
          <div className="flex justify-center">
          <img src="dccimg/domestic.png" alt="domestic services" width={50} height={50} />
          </div>
          <div className="text-3xl font-semibold mb-4 text-green-900">DOMESTIC</div>
          <ul className="text-left space-y-2 mb-4">
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle  text-black mr-2"></i>DCC Maid Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i> DCC Cook Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i> DCC Baby sitter Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i> DCC Japa Maid Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-times-circle text-red-500 mr-2"></i> DCC Driver Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-times-circle text-red-500 mr-2"></i> DCC Patient Care Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-times-circle text-red-500 mr-2"></i> DCC Elderly Care services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i>Home Nurce Services
            </li>
          </ul>
          <a href="/domestic-services" className="block py-2 px-4">
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Read More
          </button>
          </a>

         
        </div>


        <div className="bg-white p-10 m-3 rounded-lg text-center shadow-sm border-2 scale-105 relative transition hover:shadow-2xl">
        <div className="flex justify-center">
          <img src="dccimg/commercial.png" alt="Commercial services" width={50} height={50} />
          </div>
          <div className="text-3xl font-semibold mb-4 text-green-900">COMMERCIAL</div>
          <ul className="text-left space-y-2 mb-4">
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle  text-black mr-2"></i>Office Boy Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i>House Keeping Services
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i>Security Gaurd Services
            </li>
           
            <li className="flex items-center text-white font-bold">
              <i className="fas fa-times-circle text-red-500 mr-2"></i>.
            </li>
            <li className="flex items-center text-white font-bold">
              <i className="fas fa-times-circle text-red-500 mr-2"></i>.
            </li>
            <li className="flex items-center text-white font-bold">
              <i className="fas fa-times-circle text-red-500 mr-2"></i>.
            </li>
            <li className="flex items-center text-white font-bold">
              <i className="fas fa-times-circle text-red-500 mr-2"></i>.
            </li>
          </ul>
          <a href="/commercial-services" className="block py-2 px-4">
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Read More
          </button>
          </a>
        </div>

        {/* <div className="bg-white p-10 m-3 rounded-lg text-center shadow-sm transition shadow-sm border-2 hover:shadow-2xl">
          <div className="flex justify-center">
          <img src="dccimg/corporate.png" alt="corporate services" width={50} height={50} />
          </div>
          <div className="text-3xl font-semibold mb-4 text-green-900">CORPORATE</div>
          <ul className="text-left space-y-2 mb-4">
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle  text-black mr-2"></i> ........... Awaileble soon.........
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i> ........... Awaileble soon.........
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i> ........... Awaileble soon.........
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-check-circle text-green-500 mr-2"></i> ........... Awaileble soon.........
            </li>
            <li className="flex items-center text-black font-bold">
            <img src="dccimg/check.png" alt="Commercial" width={20} height={20} />
              <i className="fas fa-times-circle text-red-500 mr-2"></i> ........... Awaileble soon.........
            </li>
          </ul>
          <a href="/corporate-services" className="block py-2 px-4 ">
          <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            Read More
          </button>
          </a>
        </div> */}

        
        </div>
        </div>

    </>
  );
};

export default ServiceCard;
