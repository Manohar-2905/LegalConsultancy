import React from 'react'
import doctorImage from '../images/card3.jpeg'; 
import { Link } from 'react-router-dom';
import LetsTalkHindi from './LetsTalkHindi';

function Card3Hindi() {
  return (
     <>
    <div>
      <div id='Card31' className="pt-30 md:pt-50 md:pb-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
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
                    <p className="text-gray-800 text-base leading-relaxed mb-6">
                      स्वास्थ्य सेवा विनियमों का अनुपालन कठिन हो सकता है, लेकिन आरएंडए लीगल एंड इंश्योरेंस कंसल्टेंसी के साथ, ऐसा नहीं होना चाहिए। हम स्वास्थ्य सेवा संस्थानों के लिए समर्पित विनियामक अनुपालन सहायता प्रदान करते हैं।
                      <br /><br />
                      हमारी अनुभवी टीम आपको कानूनों और विनियमों के जटिल जाल से गुज़रने में मार्गदर्शन करती है, यह सुनिश्चित करते हुए कि आपका अभ्यास सभी आवश्यक कानूनी मानकों का पालन करता है। अनुपालन ऑडिट करने से लेकर कार्रवाई योग्य अंतर्दृष्टि प्रदान करने तक, हम आपको जोखिमों को कम करने और संभावित नुकसान से बचने में मदद करते हैं।
                      <br /><br />
                      अपनी अनुपालन प्रक्रियाओं को सरल बनाने के लिए हमारे साथ साझेदारी करें, जिससे आप उस चीज़ पर ध्यान केंद्रित कर सकें जो वास्तव में महत्वपूर्ण है - असाधारण रोगी देखभाल प्रदान करना।
                    </p>
                    <Link to="/Meeting" className="text-blue-400 underline hover:text-blue-800 transition-colors duration-200 text-base">नियुक्ति की सूची बनाना</Link>
                  </div>
                </div>
    </div>
    <LetsTalkHindi/>
    </>
  )
}

export default Card3Hindi
