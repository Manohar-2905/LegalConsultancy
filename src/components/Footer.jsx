import React from 'react';

function Footer() {
  const copyright = String.fromCodePoint(0x00A9);
  return (
    <div className="bg-blue-950">
      <div className="text-sm sm:text-base font-light p-4 text-white text-center whitespace-nowrap overflow-auto">
        {copyright} R&A Legal and Insurance Consultancy.Copyright... 
      </div>
    </div>
  );
}

export default Footer;
