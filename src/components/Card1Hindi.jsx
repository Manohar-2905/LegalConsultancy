import React from 'react'
import doctorImage from '../images/card1.jpeg'; 
import { Link } from 'react-router-dom';
import LetsTalkHindi from './LetsTalkHindi';

function Card1Hindi() {
  return (
    <>
    <div id='Card11' className="pt-30 md:pt-50 md:pb-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
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
        <p className="text-gray-800 text-base leading-relaxed mb-6">
          चिकित्सा-कानूनी विवादों की जटिलताओं को हल करने के लिए सटीकता और विशेषज्ञता की आवश्यकता होती है। आरएंडए लीगल एंड इंश्योरेंस कंसल्टेंसी में, हम ऐसे विवादों को व्यापक रूप से संभालने में विशेषज्ञ हैं, यह सुनिश्चित करते हुए कि स्वास्थ्य सेवा पेशेवरों को वह सुरक्षा और प्रतिनिधित्व मिले जिसके वे हकदार हैं।
          <br /><br />
          हमारी टीम स्वास्थ्य सेवा कानून और मुकदमेबाजी की पेचीदगियों से अच्छी तरह वाकिफ है, जो प्रत्येक विशिष्ट मामले के लिए रणनीतिक सलाह प्रदान करती है। हमारा लक्ष्य विवादों को कुशलतापूर्वक हल करना है, जिससे चिकित्सा व्यवसायी अपने प्राथमिक लक्ष्य पर ध्यान केंद्रित कर सकें - असाधारण देखभाल प्रदान करना।
          <br /><br />
          इन चुनौतीपूर्ण समयों में हम आपके साथ खड़े रहेंगे तथा स्पष्टता और आत्मविश्वास के साथ हर कदम पर आपका मार्गदर्शन करेंगे, इस पर हम पर भरोसा रखें।
        </p>
        <Link to="/Meeting" className="text-blue-400 underline hover:text-blue-800 transition-colors duration-200 text-base">नियुक्ति की सूची बनाना</Link>
      </div>
      
    </div>
    <LetsTalkHindi/>
    </>
  )
}

export default Card1Hindi
