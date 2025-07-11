import React from 'react';
import image1 from '../images/HomeImg.png';
import image2 from '../images/HomeImg2.png';

function HomeHindi() {
  return (
    <>
      {/* 👇 Mobile & Small Devices - image2 */}
      <div
        className="h-screen bg-cover bg-center relative flex items-center sm:hidden"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="relative z-10 w-full ml-4">
          <div className="flex flex-col items-start text-white space-y-4 px-4">
            <div className="mb-5">
              <h1 className="text-3xl font-bold">आपकी स्वास्थ्य सेवा</h1>
              <h1 className="text-3xl font-bold">अभिभावक</h1>
            </div>
            <span className="text-lg max-w-md">
              हम आपकी प्रैक्टिस को विशेषज्ञता के साथ सुरक्षित रखते हैं।
            </span>
            <a
              href="#Serv"
              className="bg-[#32aa27] hover:bg-[#279220] text-white py-2 px-4 rounded cursor-pointer text-sm transition"
            >
              सेवाएँ देखें
            </a>
          </div>
        </div>
      </div>

      {/* 👇 Medium & Large Devices - image1 */}
      <div
        id="Home"
        className="hidden sm:flex h-screen bg-fixed bg-cover bg-center relative items-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="relative z-10 w-full ml-10 md:ml-20 lg:ml-36">
          <div className="flex flex-col items-start text-white space-y-4 px-6 md:px-10">
            <div className="mb-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">आपकी स्वास्थ्य सेवा</h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">अभिभावक</h1>
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl max-w-md">
              हम आपकी प्रैक्टिस को विशेषज्ञता के साथ सुरक्षित रखते हैं।
            </span>
            <a
              href="#Serv"
              className="bg-[#32aa27] hover:bg-[#279220] text-white py-2 px-4 rounded cursor-pointer text-base transition"
            >
              सेवाएँ देखें
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHindi;
