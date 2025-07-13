import React from "react";
import doctorImage from "../images/card3.jpeg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LetsTalkHindi from "./LetsTalkHindi";

function Card3Hindi() {
  return (
    <>
      <div>
        <div
          id="Card31"
          className="pt-30 md:pt-50 md:pb-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20"
        >
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
              विनियामक अनुपालन समर्थन
            </h3>
            <p className="text-justify text-gray-800 text-base leading-relaxed mb-6">
              स्वास्थ्य सेवा विनियमों का अनुपालन कठिन हो सकता है, लेकिन आरएंडए
              लीगल एंड इंश्योरेंस कंसल्टेंसी के साथ, ऐसा नहीं होना चाहिए। हम
              स्वास्थ्य सेवा संस्थानों के लिए समर्पित विनियामक अनुपालन सहायता
              प्रदान करते हैं।
              <br />
              <br />
              हमारी अनुभवी टीम आपको कानूनों और विनियमों के जटिल जाल से गुज़रने
              में मार्गदर्शन करती है, यह सुनिश्चित करते हुए कि आपका अभ्यास सभी
              आवश्यक कानूनी मानकों का पालन करता है। अनुपालन ऑडिट करने से लेकर
              कार्रवाई योग्य अंतर्दृष्टि प्रदान करने तक, हम आपको जोखिमों को कम
              करने और संभावित नुकसान से बचने में मदद करते हैं।
              <br />
              <br />
              अपनी अनुपालन प्रक्रियाओं को सरल बनाने के लिए हमारे साथ साझेदारी
              करें, जिससे आप उस चीज़ पर ध्यान केंद्रित कर सकें जो वास्तव में
              महत्वपूर्ण है - असाधारण रोगी देखभाल प्रदान करना।
            </p>
            <Link
              to="/Meeting"
              className="bg-[#155E95] hover:bg-[#0e3f6c] text-white font-light py-1 px-2 rounded-4xl cursor-pointer text-sm sm:text-base transition"
            >
              नियुक्ति की सूची बनाना
            </Link>
          </div>
        </div>
      </div>

      {/* Other Services Section */}
      <div className="w-full px-6 md:px-20 mt-4">
        <h3 className="text-xl font-semibold mb-6 text-center underline">
          अन्य सेवाएँ :
        </h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <HashLink to="/Card1/#Card11" className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 cursor-pointer group p-4 h-full">
              <div className="flex justify-between items-center mt-2 transition-colors duration-300 group-hover:text-blue-700">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    चिकित्सा-कानूनी विवाद निपटान
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
          <HashLink to="/Card2/#Card21" className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 cursor-pointer group p-4 h-full">
              <div className="flex justify-between items-center mt-2 transition-colors duration-300 group-hover:text-blue-700">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    बीमा सलाहकार सेवाएँ
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

      <LetsTalkHindi />
    </>
  );
}

export default Card3Hindi;
