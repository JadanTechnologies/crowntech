
import React from 'react';
import { Target, Eye, Award, Heart } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">Empowering Sokoto through Technology</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Discover the journey and commitment of Crowntech Global Investment Nig. Ltd.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Our Story</h2>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Established with a vision to provide world-class technology services to the local community, {BRAND_NAME} has grown from a small repair shop to a comprehensive technology hub in Sokoto.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                We recognized early on that businesses in Nigeria need more than just computers; they need solutions that work. From reliable software systems to robust internet connectivity, we have continuously evolved our services to meet the dynamic needs of our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To provide top-notch technological services and training that empower individuals and organizations to achieve their fullest potential through innovation and efficiency.
                </p>
              </div>
              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <Eye size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed">
                  To be the leading technology partner in Northern Nigeria, recognized for excellence, integrity, and our contribution to digital literacy and infrastructure.
                </p>
              </div>
            </div>

            <div className="pt-16 border-t border-slate-100">
              <h2 className="text-3xl font-bold mb-10 text-center">Our Commitment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex space-x-6">
                  <div className="shrink-0 text-blue-600 bg-blue-50 p-4 rounded-xl h-fit">
                    <Award size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Commitment to Quality</h4>
                    <p className="text-slate-600 leading-relaxed">
                      We never compromise on the quality of our work. Whether it's a minor repair or a large-scale software deployment, we ensure everything meets international standards.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="shrink-0 text-blue-600 bg-blue-50 p-4 rounded-xl h-fit">
                    <Heart size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3">Customer Satisfaction</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Our clients are at the heart of everything we do. We listen, adapt, and go the extra mile to ensure every problem is solved and every question is answered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-[3rem] p-12 text-white text-center relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 italic">Message from the Team</h3>
                  <p className="text-xl opacity-90 leading-relaxed italic max-w-2xl mx-auto">
                    "At Crowntech, we don't just fix computers; we build relationships. We are committed to being the reliable foundation upon which your business grows and succeeds."
                  </p>
               </div>
               <div className="absolute top-0 right-0 p-12 text-white/10 select-none">
                 <Target size={200} />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
