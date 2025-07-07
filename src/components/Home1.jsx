import React from 'react';
import image1 from '../images/HomeImg.png';

function Home1() {
  return (
    <div
      id="Home"
      className="h-screen bg-fixed bg-cover bg-center relative flex items-center "
      style={{ backgroundImage: `url(${image1})` }}
    >

      {/* Content over background */}
      <div className="relative z-10 w-full ml-4 sm:ml-10 md:ml-20 lg:ml-36">
        <div className="flex flex-col items-start text-white space-y-4 px-4 sm:px-6 md:px-10">
          <div className="mb-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Your healthcare</h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">guardian</h1>
          </div>
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md">
            We protect your practice with expertise.
          </span>
          <a
            href="#Serv"
            className="bg-[#32aa27] hover:bg-[#279220] text-white py-2 px-4 rounded cursor-pointer text-sm sm:text-base transition"
          >
            VIEW SERVICES
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home1;
