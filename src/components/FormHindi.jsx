import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
function FormHindi() {
    const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_223jb25',     // Replace with your actual EmailJS service ID
        'template_739hehd',    // Replace with your actual EmailJS template ID
        form.current,
        'EoPnegTDT5w_46NqZ'         // Replace with your actual EmailJS public key
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
    <div>
      <div className="scroll-mt-24 min-h-screen bg-white flex items-center justify-center px-4 py-10" id="contact">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10 bg-white">
              {/* Form Section */}
              <div className="flex-1">
                <p className="text-[#32aa27] font-semibold uppercase text-lg">संपर्क में रहो</p>
                <h2 className="text-3xl font-bold mb-8">हम आपकी सहायता के लिए यहाँ हैं!</h2>
      
                <form ref={form} onSubmit={sendEmail} className="space-y-6 text-base">
                  {/* Name */}
                  <div>
                    <label className="block font-semibold mb-1">
                      नाम <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="अपना नाम दर्ज करें"
                      required
                      name="name" // ✅ keep only once
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#32aa27]"
                    />
                  </div>
      
                  {/* Email */}
                  <div>
                    <label className="block font-semibold mb-1">
                      मेल पता <span className="text-red-500">*</span>
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
                      फ़ोन नंबर <span className="text-red-500">*</span>
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
                    <label className="block font-semibold mb-1">संदेश</label>
                    <textarea
                      rows="4"
                      placeholder="यहां अपना संदेश लिखें..."
                      name="message"
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#32aa27]"
                    ></textarea>
                  </div>
      
                  {/* Consent */}
                  <div className="flex items-start text-base">
                    <input type="checkbox" className="mt-1 mr-2" required />
                    <label>
                      मैं इस वेबसाइट को अपनी प्रविष्टियां संग्रहीत करने की अनुमति देता हूं ताकि वे मेरी पूछताछ का जवाब दे सकें।
                    </label>
                  </div>
      
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bg-[#32aa27] text-white font-semibold px-8 py-3 rounded hover:bg-[#279220] transition"
                  >
                    
                    जमा करना
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
                  <h3 className="text-2xl font-bold mb-2">
                        संपर्क में रहें</h3>
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
                  <h3 className="text-2xl font-bold mb-2">जगह</h3>
                  <div className="flex items-center space-x-2 text-gray-700 text-lg">
                    <FaMapMarkerAlt />
                    <a
                      href="https://www.google.com/maps/place/Hazaribagh,+Jharkhand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors duration-200 underline"
                    >
                      हजारीबाग, झारखंड, भारत
                    </a>
                  </div>
                </div>
      
                <div>
                  <h3 className="text-2xl font-bold mb-2">घंटे</h3>
                  <ul className="text-gray-700 space-y-1 text-base sm:text-lg">
                    <li>सोमवार   &nbsp; सुबह 9:00 बजे – रात 10:00 बजे</li>
                    <li>मंगलवार    सुबह 9:00 बजे – रात 10:00 बजे</li>
                    <li>बुधवार   &nbsp;&nbsp;&nbsp; सुबह 9:00 बजे – रात 10:00 बजे</li>
                    <li>गुरुवार    &nbsp;&nbsp;&nbsp;सुबह 9:00 बजे – रात 10:00 बजे</li>
                    <li>शुक्रवार      सुबह 9:00 बजे – रात 10:00 बजे</li>
                    <li>शनिवार    &nbsp;&nbsp;सुबह 9:00 बजे – शाम 06:00 बजे</li>
                    <li>रविवार       सुबह 9:00 बजे – दोपहर 12:00 बजे</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default FormHindi
