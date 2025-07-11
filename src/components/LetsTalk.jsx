import React from 'react';
import { HashLink } from 'react-router-hash-link';

function LetsTalk() {
  return (
    <div className="mt-10 md:mt-10 bg-[#2b6ba2] py-7 px-6 sm:px-10 md:px-20 flex  md:flex-row items-center justify-center text-white text-center gap-x-12 md:gap-x-24">
      {/* Text Section */}
      <div>
        <h2 className="text-3xl font-bold mb-3">Let's talk</h2>
        <p className="text-xl font-light">We would love to hear you!</p>
      </div>

      {/* Button Section */}
      <HashLink
        smooth
        to="/#contact"
        className="border border-white text-white px-6 py-2 text-md rounded hover:bg-white hover:text-[#2b6ba2] font-semibold transition duration-300"
      >
        GET IN TOUCH
      </HashLink>
    </div>
  );
}

export default LetsTalk;
