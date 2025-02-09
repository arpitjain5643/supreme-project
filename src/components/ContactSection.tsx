import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Message Sent! ✅');
  };

  return (
    <section className="h-screen w-full bg-blue-600 text-white flex items-center justify-center px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <hr className="w-12 border-t-2 mb-6" aria-hidden="true" />
          <p className="text-lg mb-4">For general enquiries</p>

          <p className="font-semibold">Address :</p>
          <address className="mb-4 not-italic">
            110, 16th Road, Chembur, Mumbai - 400071
          </address>

          <p className="font-semibold">Phone :</p>
          <p className="mb-4">
            <a href="tel:+912225208822" className="underline">
              +91 22 25208822
            </a>
          </p>

          <p className="font-semibold">Email :</p>
          <p>
            <a href="mailto:info@supremegroup.co.in" className="underline">
              info@supremegroup.co.in
            </a>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit}
          aria-labelledby="contact-form-heading"
        >
          <h2 id="contact-form-heading" className="sr-only">
            Contact Form
          </h2>

          <label htmlFor="name" className="sr-only">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
            required
          />

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
            required
          />

          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
            required
          />

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="bg-transparent border-b border-white focus:outline-none py-2 text-white placeholder-white"
            required
          />

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
