import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="h-screen w-full bg-blue-600 text-white flex items-center justify-center px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <hr className="w-12 border-t-2 mb-6" />
          <p className="text-lg mb-4">For general enquiries</p>

          <p className="font-semibold">Address :</p>
          <p className="mb-4">110, 16th Road, Chembur, Mumbai - 400071</p>

          <p className="font-semibold">Phone :</p>
          <p className="mb-4">+91 22 25208822</p>

          <p className="font-semibold">Email :</p>
          <p>info@supremegroup.co.in</p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
          />
          <textarea
            placeholder="Message"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
          />
          <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition">
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
