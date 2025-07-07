import React from 'react'
import { HashLink } from 'react-router-hash-link';
import Card from './Card';
import card1 from '../images/card1.jpeg';
import card2 from '../images/card2.jpeg';
import card3 from '../images/card3.jpeg';
function CardsHindi() {
  return (
    <div>
       <div id="Serv" className="bg-[#cacacfe5] py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="text-xl text-[#32aa27] font-semibold mb-3">
            अनुकूलित कानूनी समाधान
          </div>
          <div className="text-2xl font-medium">
            स्वास्थ्य देखभाल पेशेवरों को सशक्त बनाना
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <HashLink to="/Card1/#Card11">
            <Card
              ImgUrl={card1}
              heading="चिकित्सा-कानूनी विवाद निपटान"
              contents="जटिल चिकित्सा-कानूनी विवादों के समाधान के लिए विशेषज्ञ समाधान।"
            />
          </HashLink>
          <HashLink to="/Card2/#Card21">
          <Card
            ImgUrl={card2}
            heading="बीमा सलाहकार सेवाएँ"
            contents="स्वास्थ्य सेवा पेशेवरों के लिए अनुकूलित व्यापक बीमा समाधान"
          /></HashLink>
          <HashLink to="/Card3/#Card31">
          <Card
            ImgUrl={card3}
            heading="विनियामक अनुपालन समर्थन"
            contents="विकसित होते स्वास्थ्य देखभाल नियमों का सहजता से अनुपालन करें।"
          /></HashLink>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardsHindi
