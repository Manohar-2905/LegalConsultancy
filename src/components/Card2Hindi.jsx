import React from 'react'
import doctorImage from '../images/card2.jpeg'; 
import { Link } from 'react-router-dom';
import LetsTalkHindi from './LetsTalkHindi';

function Card2Hindi() {
  return (
    <>
    <div>
      <div id='Card21' className="pt-30 md:pt-50 md:pb-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
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
                बीमा सलाहकार सेवाएँ
              </h3>
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                लगातार विकसित हो रहे स्वास्थ्य सेवा परिदृश्य में, चिकित्सकों के लिए मजबूत बीमा कवरेज हासिल करना महत्वपूर्ण है। आरएंडए लीगल एंड इंश्योरेंस कंसल्टेंसी विशेष रूप से स्वास्थ्य सेवा क्षेत्र के लिए डिज़ाइन की गई बीमा सलाहकार सेवाएँ प्रदान करती है।
                <br /><br />
                हमारे विशेषज्ञों की टीम अस्पतालों, क्लीनिकों और व्यक्तिगत चिकित्सकों को उनके अभ्यास की सुरक्षा के लिए सही पेशेवर क्षतिपूर्ति और जोखिम कवरेज विकल्पों की पहचान करने में सहायता करती है। हम आपकी अनूठी ज़रूरतों का विश्लेषण करते हैं और आपके हितों की रक्षा करते हुए कानूनी मानकों के अनुपालन को सुनिश्चित करते हुए रणनीतिक सिफारिशें प्रदान करते हैं।
                <br /><br />
                हमारे समर्थन से, आप गुणवत्तापूर्ण देखभाल प्रदान करने पर ध्यान केंद्रित कर सकते हैं, यह जानते हुए कि आपकी बीमा आवश्यकताएं सक्षम हाथों में हैं।
              </p>
             <Link to="/Meeting" className="text-blue-400 underline hover:text-blue-800 transition-colors duration-200 text-base">नियुक्ति की सूची बनाना</Link>
            </div>
          </div>
    </div>
    <LetsTalkHindi/>
    </>
  )
}

export default Card2Hindi
