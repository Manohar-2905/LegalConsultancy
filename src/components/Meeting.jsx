import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Meeting.css';
import emailjs from '@emailjs/browser';

function Meeting() {
  const form = useRef();
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState('');

  const formatDate = (date) => {
    return date
      ? new Intl.DateTimeFormat('en-US', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(date)
      : '';
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2m7s75n',
        'template_znv4xyj',
        form.current,
        '5ASaINTy6NBl0OOqk'
      )
      .then(
        () => {
          setStatus('✅ Appointment request sent successfully!');
          form.current.reset();
          setSelectedDate(null);
        },
        (error) => {
          console.error(error.text);
          setStatus('❌ Failed to send appointment. Please try again.');
        }
      );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-green-600 font-semibold uppercase text-sm">
          Meeting Request Form
        </h3>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          We look forward to meeting with you
        </h2>
      </div>

      {/* Date Picker */}
      <div className="mb-20">
        <label className="block font-semibold mb-2 text-base text-gray-800 text-center">
          Select a date and time <span className="text-red-500">*</span>
        </label>
        <div className="flex justify-center">
          <div className="zoom-datepicker-wrapper">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-base"
              placeholderText="Click to select a date"
              minDate={new Date()}
              showTimeSelect
              dateFormat="Pp"
              inline
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <form ref={form} onSubmit={sendEmail} className="space-y-6 text-base text-gray-800">
        {/* Hidden field for date+time */}
        <input type="hidden" name="time" value={formatDate(selectedDate)} />

        <div>
          <label className="block font-semibold mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded text-base"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="w-full border px-3 py-2 rounded text-base"
            placeholder="email@website.com"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="Phone_number"
            className="w-full border px-3 py-2 rounded text-base"
            placeholder="+91 000-000-0000"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Which service or services are you interested in?
          </label>
          <div className="space-y-1 ml-1">
            <label className="block text-base">
              <input type="checkbox" className="mr-2 scale-110" />
              Medico-legal dispute handling
            </label>
            <label className="block text-base">
              <input type="checkbox" className="mr-2 scale-110" />
              Insurance advisory services
            </label>
            <label className="block text-base">
              <input type="checkbox" className="mr-2 scale-110" />
              Regulatory compliance support
            </label>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full border px-3 py-2 rounded text-base"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded text-base font-semibold hover:bg-green-700 transition"
        >
          SUBMIT
        </button>

        {status && (
          <p
            className={`text-center mt-4 font-semibold ${
              status.includes('✅') ? 'text-green-600' : 'text-red-500'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

export default Meeting;
