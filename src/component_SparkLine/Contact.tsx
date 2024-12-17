import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2e3192] mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Contact us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#f36b22] p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2e3192] mb-2">Email Us</h3>
                <p className="text-gray-600">contact@sparkconsulting.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#f36b22] p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2e3192] mb-2">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#f36b22] p-3 rounded-full">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#2e3192] mb-2">Visit Us</h3>
                <p className="text-gray-600">123 Innovation Street<br />Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f36b22] focus:ring-2 focus:ring-[#f36b22] focus:ring-opacity-50 outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f36b22] focus:ring-2 focus:ring-[#f36b22] focus:ring-opacity-50 outline-none transition-all"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f36b22] focus:ring-2 focus:ring-[#f36b22] focus:ring-opacity-50 outline-none transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#f36b22] focus:ring-2 focus:ring-[#f36b22] focus:ring-opacity-50 outline-none transition-all"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#2e3192] text-white py-4 rounded-lg hover:bg-[#f36b22] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;