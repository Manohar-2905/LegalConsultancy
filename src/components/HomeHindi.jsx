import React from 'react'
import image1 from '../images/HomeImg.png';
function HomeHindi() {
  return (
    <div>
      <div
            id="Home"
            className="h-screen bg-fixed bg-cover bg-center relative flex items-center "
            style={{ backgroundImage: `url(${image1})` }}
          >
      
            {/* Content over background */}
            <div className="relative z-10 w-full ml-4 sm:ml-10 md:ml-20 lg:ml-36">
              <div className="flex flex-col items-start text-white space-y-4 px-4 sm:px-6 md:px-10">
                <div className="mb-5">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">आपकी स्वास्थ्य सेवा</h1>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">अभिभावक</h1>
                </div>
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md">
                  हम आपकी प्रैक्टिस को विशेषज्ञता के साथ सुरक्षित रखते हैं।
                </span>
                <a
                  href="#Serv"
                  className="bg-[#32aa27] hover:bg-[#279220] text-white py-2 px-4 rounded cursor-pointer text-sm sm:text-base transition"
                >
                    सेवाएँ देखें
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default HomeHindi
