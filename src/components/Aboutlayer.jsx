import React from 'react';
import about1 from '../images/Img2.png';

function About() {
  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Left Content */}
      <div className="flex-1 space-y-4 mb-8 md:mb-0 md:pr-10">
        <div className="text-xl text-[#32aa27] font-semibold">
          Your trusted healthcare ally
        </div>
        <div className="text-lg font-medium">
          Comprehensive legal & insurance solutions
        </div>
        <div className="text-justify text-gray-700 leading-relaxed space-y-4 max-w-prose">
          <p>
            At R&A Legal and Insurance Consultancy, we deliver focused legal and insurance solutions exclusively for the healthcare sector. Serving doctors, hospitals, clinics, and diagnostic centres across India, we specialize in managing the legal complexities that come with modern medical practice.
          </p>
          <p>
            From handling medico-legal disputes and litigation to navigating regulatory frameworks, we provide end-to-end support designed to protect both your practice and professional integrity. Our services include strategic advice on professional indemnity and medical insurance, legal risk management, and representation across all judicial forums—from District Courts to the Supreme Court of India.
          </p>
        </div>
        <a href="#contact" className="bg-[#155E95] hover:bg-[#0e3f6c] text-white font-light py-1 px-2 rounded-4xl cursor-pointer text-sm sm:text-base transition">
          Get in touch
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
  );
}

export default About;
