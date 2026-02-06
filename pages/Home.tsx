
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';
import { SERVICES, TESTIMONIALS, SITE_CONTENT, WHY_CHOOSE_US, getIcon, PHONES, TAGLINE } from '../constants';

const Home: React.FC = () => {
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f2e5a]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
            alt="Technology Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f2e5a] via-[#0f2e5a]/90 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-[#eab308] px-4 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in shadow-xl shadow-yellow-500/10">
              <span className="flex h-2 w-2 rounded-full bg-[#eab308]"></span>
              <span>{TAGLINE}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-lg">
              {SITE_CONTENT.home.heroTitle.split(' ').map((word, i) => (
                word === 'Technology' ? <span key={i} className="text-[#eab308] block md:inline"> {word} </span> : word + ' '
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-10 max-w-2xl leading-relaxed">
              {SITE_CONTENT.home.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/contact" 
                className="bg-[#eab308] hover:bg-yellow-500 text-[#0f2e5a] px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center shadow-2xl shadow-yellow-900/40 group"
              >
                Contact Us <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
              {[
                { label: "Client Satisfaction", val: "99%" },
                { label: "Years Experience", val: "10+" },
                { label: "Tech Experts", val: "15+" },
                { label: "Completed Projects", val: "1k+" }
              ].map((stat, i) => (
                <div key={i} className="text-white">
                  <p className="text-3xl font-black mb-1 text-[#eab308]">{stat.val}</p>
                  <p className="text-xs text-blue-200/60 uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div className="max-w-2xl border-l-8 border-[#eab308] pl-6">
              <h2 className="text-[#0f2e5a] font-black uppercase tracking-[0.2em] text-sm mb-4">Core Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Specialized <span className="text-[#0f2e5a]">IT Solutions</span>
              </h3>
            </div>
            <Link to="/services" className="text-[#0f2e5a] font-black flex items-center hover:translate-x-2 transition-transform">
              View All Services <ArrowRight className="ml-2 w-5 h-5 text-[#eab308]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service) => (
              <div key={service.id} className="group relative bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-[0_20px_50px_rgba(15,46,90,0.1)] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-125 transition-all duration-700 text-[#0f2e5a]">
                  {getIcon(service.iconName)}
                </div>
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-[#0f2e5a] shadow-sm mb-8 group-hover:bg-[#eab308] group-hover:text-[#0f2e5a] transition-colors duration-500">
                  {getIcon(service.iconName)}
                </div>
                <h4 className="text-xl font-black mb-4 text-[#0f2e5a]">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description.substring(0, 100)}...
                </p>
                <Link to="/services" className="inline-flex items-center text-[#0f2e5a] font-black text-xs uppercase tracking-widest hover:underline decoration-[#eab308] decoration-2 underline-offset-4">
                  Explore <ChevronRight className="ml-1 w-4 h-4 text-[#eab308]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#0a1b38] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-[#eab308] font-black uppercase tracking-[0.2em] text-sm mb-4">The Crowntech Edge</h2>
                <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Why Sokoto Trusts Our <span className="text-[#eab308]">Experts</span></h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We combine local presence with world-class tech standards. Our dedication to the tagline "<span className="text-white italic">{TAGLINE}</span>" is reflected in every project we handle.
                </p>
              </div>
              
              <div className="space-y-8">
                {WHY_CHOOSE_US.map((item, i) => (
                  <div key={i} className="flex items-start space-x-6 group">
                    <div className="bg-slate-800 p-4 rounded-2xl text-[#eab308] group-hover:bg-[#eab308] group-hover:text-[#0f2e5a] transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-500/10 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                alt="Tech Collaboration" 
                className="relative z-10 rounded-[3rem] shadow-2xl border-2 border-white/5"
              />
              <div className="absolute -bottom-10 -right-10 z-20 bg-[#eab308] p-10 rounded-[2rem] shadow-xl hidden md:block animate-bounce-slow text-[#0f2e5a]">
                <p className="text-5xl font-black">100%</p>
                <p className="font-bold uppercase tracking-widest text-sm">Reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[#0f2e5a] font-black uppercase tracking-[0.2em] text-sm mb-4">Client Feedback</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 underline decoration-[#eab308] decoration-4 underline-offset-8">Success Stories</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col justify-between group">
                <div>
                  <div className="flex text-[#eab308] mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-600 text-lg italic leading-relaxed mb-8 group-hover:text-slate-900 transition-colors">"{t.content}"</p>
                </div>
                <div className="flex items-center space-x-4 border-t border-slate-100 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-[#eab308] object-cover shadow-lg shadow-yellow-500/10" />
                  <div>
                    <h5 className="font-black text-[#0f2e5a]">{t.name}</h5>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0f2e5a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#eab308]/10 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Innovating <span className="text-[#eab308]">Your Future</span></h2>
            <p className="text-xl text-blue-100 mb-12">Crowntech Global Investment Nig. Ltd is ready to be your technology backbone.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-[#eab308] text-[#0f2e5a] px-12 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-900/20">Get Started Today</Link>
              <a href={`tel:${PHONES[0]}`} className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">Call Our Experts</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
