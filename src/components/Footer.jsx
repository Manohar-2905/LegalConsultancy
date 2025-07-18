import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const copyright = String.fromCodePoint(0x00A9);

  return (
    <div className="bg-blue-950 text-white text-sm sm:text-base font-light">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-4 text-center sm:text-left gap-2 sm:gap-0">
        <div className=' text-start'>
          <Link
            to="https://trinityinstitute.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed by: - <span className='underline underline-offset-3'>Trinity Institute of Information Technology</span>
          </Link>
        </div>
        <div className="whitespace-nowrap overflow-auto">
          {copyright} R&A Legal and Insurance Consultancy. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
