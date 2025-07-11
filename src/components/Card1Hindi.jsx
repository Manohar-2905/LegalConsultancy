import React from 'react';
import doctorImage from '../images/card1.jpeg';
import { Link } from 'react-router-dom';
import LetsTalkHindi from './LetsTalkHindi';
import { HashLink } from 'react-router-hash-link';

function Card1Hindi() {
  return (
    <>
      <div id="Card11" className="pt-30 md:pt-50 md:pb-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
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
            चिकित्सा-कानूनी विवाद निपटान
          </h3>
          <p className="text-justify text-gray-800 text-base leading-relaxed mb-6">
            चिकित्सा-कानूनी विवादों की जटिलताओं को हल करने के लिए सटीकता और विशेषज्ञता की आवश्यकता होती है।
            आरएंडए लीगल एंड इंश्योरेंस कंसल्टेंसी में, हम ऐसे विवादों को व्यापक रूप से संभालने में विशेषज्ञ हैं,
            यह सुनिश्चित करते हुए कि स्वास्थ्य सेवा पेशेवरों को वह सुरक्षा और प्रतिनिधित्व मिले जिसके वे हकदार हैं।
            <br /><br />
            हमारी टीम स्वास्थ्य सेवा कानून और मुकदमेबाजी की पेचीदगियों से अच्छी तरह वाकिफ है, जो प्रत्येक विशिष्ट मामले के लिए रणनीतिक सलाह प्रदान करती है।
            हमारा लक्ष्य विवादों को कुशलतापूर्वक हल करना है, जिससे चिकित्सा व्यवसायी अपने प्राथमिक लक्ष्य पर ध्यान केंद्रित कर सकें — असाधारण देखभाल प्रदान करना।
            <br /><br />
            इन चुनौतीपूर्ण समयों में हम आपके साथ खड़े रहेंगे तथा स्पष्टता और आत्मविश्वास के साथ हर कदम पर आपका मार्गदर्शन करेंगे — इस पर हम पर भरोसा रखें।
          </p>
          <Link
            to="/Meeting"
            className="text-blue-400 underline hover:text-blue-800 transition-colors duration-200 text-base"
          >
            नियुक्ति की सूची बनाएं
          </Link>
        </div>
      </div>

      {/* Other Services */}
      <div className="w-full px-6 md:px-20 mt-4">
        <h3 className="text-xl font-semibold mb-6 text-center underline">अन्य सेवाएँ :</h3>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {/* Card 1 */}
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

          {/* Card 2 */}
          <HashLink to="/Card3/#Card31" className="w-full md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 cursor-pointer group p-4 h-full">
              <div className="flex justify-between items-center mt-2 transition-colors duration-300 group-hover:text-blue-700">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    विनियामक अनुपालन समर्थन
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

export default Card1Hindi;
