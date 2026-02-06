
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { ADDRESS, PHONES } from '../constants';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    emailOrPhone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', emailOrPhone: '', message: '' });
  };

  return (
    <div className="flex flex-col">
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Have questions? We are here to help you solve your technology challenges.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100">
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-200 text-green-700 p-6 rounded-xl mb-6 flex items-center">
                  <Send className="w-6 h-6 mr-3" />
                  <span>Your message has been sent successfully! We will contact you shortly.</span>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email or Phone Number</label>
                  <input 
                    type="text" 
                    required
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({...formData, emailOrPhone: e.target.value})}
                    placeholder="example@mail.com or 080..."
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="How can we help you today?"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center"
                >
                  Send Message <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-5 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Office Address</h4>
                      <p className="text-slate-600 leading-relaxed">{ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-5 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone Numbers</h4>
                      <div className="flex flex-col">
                        <a href={`tel:${PHONES[0]}`} className="text-slate-600 hover:text-blue-600 transition-colors">{PHONES[0]}</a>
                        <a href={`tel:${PHONES[1]}`} className="text-slate-600 hover:text-blue-600 transition-colors">{PHONES[1]}</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-5 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                      <p className="text-slate-600">info@crowntechglobal.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-5 shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                      <p className="text-slate-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden border-4 border-slate-50 shadow-2xl h-80 relative bg-slate-200">
                {/* Embed actual Google map if possible, but using a high quality visual placeholder for this task */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15582.470535898084!2d5.2152!3d13.0622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7d59000000001%3A0xc6657c91c9535804!2sSokoto!5e0!3m2!1sen!2sng!4v1715000000000!5m2!1sen!2sng"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sokoto Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
