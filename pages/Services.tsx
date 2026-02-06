
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Comprehensive technology services designed for modern businesses and individuals.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className="group flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-start p-6 rounded-[2.5rem] transition-all duration-500 hover:bg-slate-50 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 border border-transparent hover:border-slate-100"
              >
                <div className="bg-blue-50 p-6 rounded-2xl text-blue-600 shrink-0 shadow-sm group-hover:bg-[#eab308] group-hover:text-[#0f2e5a] transition-all duration-500 group-hover:scale-110">
                  {getIcon(service.iconName)}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 flex items-center group-hover:text-[#0f2e5a] transition-colors duration-300">
                    <span className="text-slate-300 mr-2 text-xl font-mono group-hover:text-[#eab308] transition-colors duration-300">0{index + 1}.</span>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features (Specific to certain items for variety) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.id === 'software' && (
                      <>
                        <span className="flex items-center text-sm text-slate-700 font-medium bg-slate-100 py-2 px-3 rounded-lg"><Check className="w-4 h-4 mr-2 text-blue-600" /> Tally Prime</span>
                        <span className="flex items-center text-sm text-slate-700 font-medium bg-slate-100 py-2 px-3 rounded-lg"><Check className="w-4 h-4 mr-2 text-blue-600" /> Aronium POS</span>
                        <span className="flex items-center text-sm text-slate-700 font-medium bg-slate-100 py-2 px-3 rounded-lg"><Check className="w-4 h-4 mr-2 text-blue-600" /> Prokip</span>
                        <span className="flex items-center text-sm text-slate-700 font-medium bg-slate-100 py-2 px-3 rounded-lg"><Check className="w-4 h-4 mr-2 text-blue-600" /> QuickBooks</span>
                      </>
                    )}
                    {service.id === 'repairs' && (
                      <>
                        <span className="flex items-center text-sm text-slate-700 font-medium bg-slate-100 py-2 px-3 rounded-lg"><Check className="w-4 h-4 mr-2 text-blue-600" /> Screen Repairs</span>
                        <span className="flex items-center text-sm text-slate-700 font-medium bg-slate-100 py-2 px-3 rounded-lg"><Check className="w-4 h-4 mr-2 text-blue-600" /> Battery Replacement</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f2e5a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Need a Custom Solution?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
            We understand every business has unique challenges. Contact us today to discuss how we can tailor our services to your specific needs.
          </p>
          <a href="#/contact" className="bg-[#eab308] text-[#0f2e5a] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-yellow-500 transition-all inline-block">
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
