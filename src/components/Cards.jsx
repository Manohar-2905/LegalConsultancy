import React from 'react';

import { HashLink } from 'react-router-hash-link';
import Card from './Card';
import card1 from '../images/card1.jpeg';
import card2 from '../images/card2.jpeg';
import card3 from '../images/card3.jpeg';

function Cards() {
  return (
    <div id="Serv" className="bg-[#cacacfe5] py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="text-xl text-[#32aa27] font-semibold mb-3">
            Tailored legal solutions
          </div>
          <div className="text-2xl font-medium">
            Empowering healthcare professionals
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <HashLink to="/Card1/#Card11">
            <Card
              ImgUrl={card1}
              heading="Medico-legal dispute handling"
              contents="Expert solutions for navigating complex medico-legal disputes."
            />
          </HashLink>
          <HashLink to="/Card2/#Card21">
          <Card
            ImgUrl={card2}
            heading="Insurance advisory services"
            contents="Comprehensive insurance solutions tailored for healthcare professionals"
          /></HashLink>
          <HashLink to="/Card3/#Card31">
          <Card
            ImgUrl={card3}
            heading="Regulatory compliance support"
            contents="Stay compliant with evolving healthcare regulations effortlessly."
          /></HashLink>
        </div>
      </div>
    </div>
  );
}

export default Cards;
