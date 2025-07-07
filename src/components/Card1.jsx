import React from 'react';
import doctorImage from '../images/card1.jpeg'; 
import { Link } from 'react-router-dom';
import LetsTalk from './LetsTalk';
function Card1() {
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
          Medico-Legal Dispute Handling
        </h3>
        <p className="text-gray-800 text-base leading-relaxed mb-6">
          Navigating the complexities of medico-legal disputes requires precision and expertise. At R&A Legal and Insurance Consultancy, we specialize in comprehensive handling of such disputes, ensuring that healthcare professionals receive the protection and representation they deserve.
          <br /><br />
          Our team is well-versed in the intricacies of healthcare law and litigation, providing strategic advice tailored to each unique case. We aim to resolve conflicts efficiently, allowing medical practitioners to focus on their primary goal—delivering exceptional care.
          <br /><br />
          Trust us to stand by your side during these challenging times, guiding you through every step with clarity and confidence.
        </p>
        <Link to="/Meeting" className="text-blue-400 underline hover:text-blue-800 transition-colors duration-200 text-base">Schedule appointment</Link>
      </div>
      
    </div>
    <LetsTalk/>
    </>
  );
}

export default Card1;
