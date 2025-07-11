import React from 'react'
import about1 from '../images/Img2.png';
function AboutLayerHindi() {
  return (
    <div>
      <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
            {/* Left Content */}
            <div className="flex-1 space-y-4 mb-8 md:mb-0 md:pr-10">
              <div className="text-xl text-[#32aa27] font-semibold">
                आपका विश्वसनीय स्वास्थ्य सेवा सहयोगी
              </div>
              <div className="text-lg font-medium">
                व्यापक कानूनी और बीमा समाधान
              </div>
              <div className= "text-justify text-gray-700 leading-relaxed space-y-4 max-w-prose">
                <p>
                  आरएंडए लीगल एंड इंश्योरेंस कंसल्टेंसी में, हम विशेष रूप से स्वास्थ्य सेवा क्षेत्र के लिए केंद्रित कानूनी और बीमा समाधान प्रदान करते हैं। भारत भर में डॉक्टरों, अस्पतालों, क्लीनिकों और डायग्नोस्टिक केंद्रों की सेवा करते हुए, हम आधुनिक चिकित्सा पद्धति के साथ आने वाली कानूनी जटिलताओं के प्रबंधन में विशेषज्ञ हैं।
                </p>
                <p>
                  चिकित्सा-कानूनी विवादों और मुकदमेबाजी से लेकर विनियामक ढाँचों को संभालने तक, हम आपके अभ्यास और पेशेवर अखंडता दोनों की रक्षा के लिए डिज़ाइन किए गए एंड-टू-एंड समर्थन प्रदान करते हैं। हमारी सेवाओं में पेशेवर क्षतिपूर्ति और चिकित्सा बीमा, कानूनी जोखिम प्रबंधन और जिला न्यायालयों से लेकर भारत के सर्वोच्च न्यायालय तक सभी न्यायिक मंचों पर प्रतिनिधित्व पर रणनीतिक सलाह शामिल है।
                </p>
              </div>
              <a href="#contact" className="bg-[#155E95] hover:bg-[#0e3f6c] text-white font-light py-1 px-2 rounded-4xl cursor-pointer text-sm sm:text-base transition">
                संपर्क में रहें
              </a>
            </div>
      
            {/* Right Image */}
            <div className="flex-1">
              <img
                src={about1}
                alt="About Us"
                className="w-full h-auto max-h-[500px] rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
    </div>
  )
}

export default AboutLayerHindi
