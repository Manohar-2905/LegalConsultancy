import React from 'react';
import doctorImage from '../images/card2.jpeg';
import { Link } from 'react-router-dom';
import LetsTalk from './LetsTalk';
import { HashLink } from 'react-router-hash-link';

function Card2() {
  return (
    <>
      {/* Main Section */}
      <div id="Card21" className="pt-30 md:pt-50 md:pb-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={doctorImage}
            alt="Doctor discussing"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h3 className="text-green-600 font-semibold text-lg uppercase mb-4">
            Insurance advisory services
          </h3>
          <p className="text-justify text-gray-800 text-base leading-relaxed mb-6">
            In an ever-evolving healthcare landscape, securing robust insurance coverage is crucial for medical practitioners. R&A Legal and Insurance Consultancy offers tailored insurance advisory services designed specifically for the healthcare sector.
            <br /><br />
            Our team of experts assists hospitals, clinics, and individual practitioners in identifying the right professional indemnity and risk coverage options to safeguard their practice. We analyze your unique needs and provide strategic recommendations, ensuring compliance with legal standards while protecting your interests.
            <br /><br />
            With our support, you can focus on providing quality care, knowing that your insurance needs are in capable hands.
          </p>
          <Link
            to="/Meeting"
            className="bg-[#155E95] hover:bg-[#0e3f6c] text-white font-light py-1 px-2 rounded-4xl cursor-pointer text-sm sm:text-base transition"
          >
            Schedule appointment
          </Link>
        </div>
      </div>

      {/* Other Services Section */}
      <div className="w-full px-6 md:px-20 mt-4">
        <h3 className="text-xl font-semibold mb-6 text-center underline">Other Services :-</h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <HashLink to="/Card1/#Card11" className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 cursor-pointer group p-4 h-full">
              <div className="flex justify-between items-center mt-2 transition-colors duration-300 group-hover:text-blue-700">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    Medico-legal dispute handling
                  </h3>
                  <svg
                    fill="none"
                    viewBox="0 0 10 17"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </HashLink>

          {/* Card 2 */}
          <HashLink to="/Card3/#Card31" className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 cursor-pointer group p-4 h-full">
              <div className="flex justify-between items-center mt-2 transition-colors duration-300 group-hover:text-blue-700">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    Regulatory compliance support
                  </h3>
                  <svg
                    fill="none"
                    viewBox="0 0 10 17"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <path
                      d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </HashLink>
        </div>
      </div>

      {/* CTA Section */}
      <LetsTalk />
    </>
  );
}

export default Card2;
