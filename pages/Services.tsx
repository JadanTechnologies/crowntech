
import React, { useState } from 'react';
import { SERVICES, getIcon, COLORS } from '../constants';
import { Check, X, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-[#0f2e5a] text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Solutions</h1>
          <p className="text-xl text-blue-100/70 max-w-2xl mx-auto font-medium">
            Innovative technology services designed for modern businesses and individuals in Northern Nigeria.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                onClick={() => openModal(service)}
                className="group cursor-pointer flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-start p-8 rounded-[2.5rem] transition-all duration-500 hover:bg-slate-50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 border border-slate-50 hover:border-slate-200"
              >
                <div className="bg-blue-50 p-6 rounded-3xl text-[#0f2e5a] shrink-0 shadow-sm group-hover:bg-[#eab308] transition-all duration-500 group-hover:scale-110">
                  {getIcon(service.iconName)}
                </div>
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 flex items-center group-hover:text-[#0f2e5a] transition-colors duration-300">
                    <span className="text-slate-300 mr-2 text-xl font-mono group-hover:text-[#eab308] transition-colors duration-300">0{index + 1}.</span>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#0f2e5a] font-bold text-sm uppercase tracking-widest pt-2 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight size={16} className="ml-1 text-[#eab308]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          <div className="absolute inset-0 bg-[#0f2e5a]/80 backdrop-blur-md" onClick={closeModal}></div>
          <div className="bg-white w-full max-w-3xl rounded-[3rem] shadow-2xl relative z-10 overflow-hidden animate-fade-in transform transition-all">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors z-20"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col md:flex-row h-full">
              {/* Modal Visual Side */}
              <div className="hidden md:flex md:w-1/3 bg-[#0f2e5a] p-12 flex-col items-center justify-center text-center space-y-6">
                 <div className="bg-[#eab308] p-8 rounded-[2rem] text-[#0f2e5a] shadow-xl">
                   {getIcon(selectedService.iconName)}
                 </div>
                 <div className="text-white">
                   <p className="text-xs uppercase tracking-[0.3em] font-black opacity-40 mb-2">Service Details</p>
                   <h4 className="font-black text-lg leading-tight">{selectedService.title}</h4>
                 </div>
              </div>

              {/* Modal Content Side */}
              <div className="md:w-2/3 p-8 md:p-12 overflow-y-auto max-h-[80vh]">
                <div className="md:hidden flex items-center space-x-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-[#0f2e5a]">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{selectedService.title}</h3>
                </div>
                
                <h3 className="hidden md:block text-3xl font-black text-slate-900 mb-6">{selectedService.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {selectedService.description}
                </p>

                {selectedService.features && (
                  <div>
                    <h4 className="text-[#0f2e5a] font-black uppercase tracking-widest text-sm mb-6 border-l-4 border-[#eab308] pl-3">Key Features & Specialties</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#eab308] transition-colors">
                          <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center shadow-sm mr-4 shrink-0">
                            <Check size={16} className="text-green-500" />
                          </div>
                          <span className="text-slate-700 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-12 flex space-x-4">
                  <a 
                    href="#/contact" 
                    onClick={closeModal}
                    className="flex-grow bg-[#0f2e5a] text-white text-center py-4 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10"
                  >
                    Request Service
                  </a>
                  <button 
                    onClick={closeModal}
                    className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#0a1b38] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#eab308]/5 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">Need a Specialized <span className="text-[#eab308]">IT Strategy?</span></h2>
          <p className="text-blue-100/70 mb-12 max-w-2xl mx-auto text-xl font-medium">
            Our consultants are ready to help you navigate the technological landscape and find the perfect tools for your business growth.
          </p>
          <a href="#/contact" className="bg-[#eab308] text-[#0f2e5a] px-12 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-yellow-900/30 hover:bg-yellow-500 transition-all inline-block hover:scale-105 transform">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
