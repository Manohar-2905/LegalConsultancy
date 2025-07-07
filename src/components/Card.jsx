import React from 'react';

function Card(props) {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200 cursor-pointer group p-4">
      {/* Image */}
      <img
        alt="close up shot of a healthcare professional discussing medico legal"
        loading="lazy"
        src={props.ImgUrl}
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Title & Icon */}
      <div className="flex justify-between items-center mt-4 transition-colors duration-300 group-hover:text-blue-700">
        <a href="#Card1">
          <h3 className="text-lg font-semibold">{props.heading}</h3>
        <svg fill="none" viewBox="0 0 10 17" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
          <path
            d="M1.25111 16.0843c-.320261 0-.640343-.1222-.88465-.3663-.488613-.4886-.488613-1.2807 0-1.7693l5.90679-5.90664L.36646 2.13545c-.488613-.48844-.488613-1.28069 0-1.769124.488434-.488435 1.28069-.488435 1.76912 0L8.92684 7.15759c.48844.48843.48844 1.28068 0 1.7693L2.13558 15.7181c-.24412.244-.56421.3662-.88447.3662Z"
            fill="currentColor"
          />
        </svg>
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-2">
        {props.contents}
      </p>
    </div>
  );
}

export default Card;
