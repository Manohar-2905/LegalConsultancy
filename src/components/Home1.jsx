import React from 'react';
import image1 from '../images/HomeImg.png';
import image2 from '../images/HomeImg2.png';

function Home1() {
  return (
    <>
      {/* For small/mobile devices - image2 background */}
      <div
        className="h-screen bg-cover bg-center relative flex items-center sm:hidden"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="relative z-10 w-full ml-4">
          <div className="flex flex-col items-start text-white space-y-4 px-4">
            <div className="mb-5">
              <h1 className="text-3xl font-bold">Your healthcare</h1>
              <h1 className="text-3xl font-bold">guardian</h1>
            </div>
            <span className="text-lg max-w-md">
              We protect your practice with expertise.
            </span>
            <a
              href="#Serv"
              className="bg-[#32aa27] hover:bg-[#279220] text-white py-2 px-4 rounded cursor-pointer text-sm transition"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>

      {/* For medium and larger devices - image1 background */}
      <div
        id="Home"
        className="hidden sm:flex h-screen bg-fixed bg-cover bg-center relative items-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="relative z-10 w-full ml-10 md:ml-20 lg:ml-36">
          <div className="flex flex-col items-start text-white space-y-4 px-6 md:px-10">
            <div className="mb-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Your healthcare</h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">guardian</h1>
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl max-w-md">
              We protect your practice with expertise.
            </span>
            <a
              href="#Serv"
              className="bg-[#32aa27] hover:bg-[#279220] text-white py-2 px-4 rounded cursor-pointer text-base transition"
            >
              VIEW SERVICES
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;
