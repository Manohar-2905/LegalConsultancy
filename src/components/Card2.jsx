import React from 'react'
import doctorImage from '../images/card2.jpeg'; 
import { Link } from 'react-router-dom';
import LetsTalk from './LetsTalk';

function Card2() {
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
                Insurance advisory services
              </h3>
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                In an ever-evolving healthcare landscape, securing robust insurance coverage is crucial for medical practitioners. R&A Legal and Insurance Consultancy offers tailored insurance advisory services designed specifically for the healthcare sector.
                <br /><br />
                Our team of experts assists hospitals, clinics, and individual practitioners in identifying the right professional indemnity and risk coverage options to safeguard their practice. We analyze your unique needs and provide strategic recommendations, ensuring compliance with legal standards while protecting your interests.
                <br /><br />
                With our support, you can focus on providing quality care, knowing that your insurance needs are in capable hands.
              </p>
             <Link to="/Meeting" className="text-blue-400 underline hover:text-blue-800 transition-colors duration-200 text-base">Schedule appointment</Link>
            </div>
          </div>
    </div>
    <LetsTalk/>
    </>
  )
}

export default Card2
