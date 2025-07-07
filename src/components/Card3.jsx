import React from 'react'
import doctorImage from '../images/card3.jpeg'; 
import { Link } from 'react-router-dom';
import LetsTalk from './LetsTalk';
function Card3() {
  return (
    <>
    <div>
      <div id='Card31' className="pt-30 md:pt-50 md:pb-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
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
                      Regulatory compliance support
                    </h3>
                    <p className="text-gray-800 text-base leading-relaxed mb-6">
                      Compliance with healthcare regulations can be daunting, but with R&A Legal and Insurance Consultancy, it doesn’t have to be. We provide dedicated regulatory compliance support tailored for healthcare institutions.
                      <br /><br />
                      Our experienced team guides you through the intricate web of laws and regulations, ensuring that your practice adheres to all necessary legal standards. From conducting compliance audits to offering actionable insights, we help you mitigate risks and avoid potential pitfalls. 
                      <br /><br />
                      Partner with us to streamline your compliance processes, allowing you to concentrate on what truly matters—delivering exceptional patient care.
                    </p>
                    <Link to="/Meeting" className="text-blue-400 underline hover:text-blue-800 transition-colors duration-200 text-base">Schedule appointment</Link>
                  </div>
                </div>
    </div>
    <LetsTalk/>
    </>
  )
}

export default Card3
