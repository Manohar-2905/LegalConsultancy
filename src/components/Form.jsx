import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5elv15h',     // Replace with your actual EmailJS service ID
        'template_rycojub',    // Replace with your actual EmailJS template ID
        form.current,
        'RH6YWYkHYjW6Ww-Is'      // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('❌ Failed to send message.');
        }
      );
  };

  return (
    <div className="scroll-mt-24 min-h-screen bg-white flex items-center justify-center px-4 py-10" id="contact">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 bg-white">
        {/* Form Section */}
        <div className="flex-1">
          <p className="text-[#32aa27] font-semibold uppercase text-lg">Get in touch</p>
          <h2 className="text-3xl font-bold mb-8">We're here to assist you!</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6 text-base">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                required
                name="name" // ✅ keep only once
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#32aa27]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="email@website.com"
                required
                name="email" // ✅ match template var
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#32aa27]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 000-000-0000"
                required
                name="Phone_number" // ✅ no space
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#32aa27]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                name="message"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#32aa27]"
              ></textarea>
            </div>

            {/* Consent */}
            <div className="flex items-start text-base">
              <input type="checkbox" className="mt-1 mr-2" required />
              <label>
                I allow this website to store my submission so they can respond to my inquiry.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#32aa27] text-white font-semibold px-8 py-3 rounded hover:bg-[#279220] transition"
            >
              Submit
            </button>

            {/* Status */}
            {status && (
              <p className="mt-4 font-medium text-green-600">{status}</p>
            )}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1 bg-gray-100 rounded-lg p-6 md:m-24 md:p-8 space-y-6 text-base shadow-md">
          <div>
            <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
            <div className="flex items-center space-x-2 text-gray-700 text-lg">
              <FaEnvelope />
              <a
                href="https://mail.google.com/mail/?view=cm&to=ra.legalconsult@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200 underline"
              >
                ra.legalconsult@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Location</h3>
            <div className="flex items-center space-x-2 text-gray-700 text-lg">
              <FaMapMarkerAlt />
              <a
                href="https://www.google.com/maps/place/Hazaribagh,+Jharkhand"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200 underline"
              >
                Hazaribagh, Jharkhand, India
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Hours</h3>
            <ul className="text-gray-700 space-y-1 text-lg">
              <li>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am – 10:00pm</li>
              <li>Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am – 10:00pm</li>
              <li>Wednesday &nbsp;&nbsp;9:00am – 10:00pm</li>
              <li>Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am – 10:00pm</li>
              <li>Friday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am – 10:00pm</li>
              <li>Saturday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am – 06:00pm</li>
              <li>Sunday    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9:00am – 12:00pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
