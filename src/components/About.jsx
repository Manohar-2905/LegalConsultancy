import React from 'react';
import about1 from '../images/mobImg.png';
import about2 from '../images/mobImg.png'
function Aboutlayer() {
  return (
    <div
      id="About"
      className="bg-[#cee0ed] min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10"
    >
      {/* Left Image */}
      <div className="flex-1 mb-8 md:mb-0 md:mr-10">
        <img
          src={about2}
          alt="About Us"
          className="w-full h-[500px] md:hidden md:h-[550px] rounded-lg shadow-md object-cover object-[50%_40%] md:object-center"
        />
        <img
          src={about1}
          alt="About Us"
          className="w-full h-[500px] hidden md:block md:h-[550px] rounded-lg shadow-md object-cover object-[50%_40%] md:object-center"
        />
      </div>

      {/* Right Text Content */}
      <div className="flex-1 space-y-2 sm:space-y-4 md:pl-10">
        <div className="text-xl text-[#32aa27] font-semibold">
          About Founder
        </div>
        <div className="text-gray-700 leading-relaxed max-w-2xl">
          Rana Rahul Pratap, co-founder of the firm, brings over 23 years of
          legal experience with a distinguished background in insurance law,
          consumer disputes, workman compensation, and both criminal and civil
          litigation. A practicing advocate at the Bar Association, Hazaribagh,
          he has advised leading insurance companies and has actively promoted
          public legal awareness.
        </div>
        <a
          href="#contact"
          className="bg-[#155E95] hover:bg-[#0e3f6c] text-white font-light py-1 px-2 rounded-4xl cursor-pointer text-sm sm:text-base transition"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default Aboutlayer;
