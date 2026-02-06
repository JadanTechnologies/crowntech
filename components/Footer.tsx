
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BRAND_NAME, ADDRESS, PHONES, TAGLINE } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1b38] text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/">
              <Logo lightMode={true} />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 italic font-medium">
              "{TAGLINE}"
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading technology solutions provider in Sokoto, Nigeria. We specialize in maintenance, software development, installations, and professional IT training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 bg-slate-800/50 rounded-xl hover:bg-[#eab308] hover:text-[#0f2e5a] transition-all"><Facebook size={18} /></a>
              <a href="#" className="p-2.5 bg-slate-800/50 rounded-xl hover:bg-[#eab308] hover:text-[#0f2e5a] transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-2.5 bg-slate-800/50 rounded-xl hover:bg-[#eab308] hover:text-[#0f2e5a] transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg border-l-4 border-[#eab308] pl-3">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#eab308] transition-colors flex items-center">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#eab308] transition-colors flex items-center">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#eab308] transition-colors flex items-center">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#eab308] transition-colors flex items-center">Contact Support</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg border-l-4 border-[#eab308] pl-3">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-[#eab308] transition-colors">Hardware Repairs</Link></li>
              <li><Link to="/services" className="hover:text-[#eab308] transition-colors">CCTV Installation</Link></li>
              <li><Link to="/services" className="hover:text-[#eab308] transition-colors">Starlink Setup</Link></li>
              <li><Link to="/services" className="hover:text-[#eab308] transition-colors">IT Training</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg border-l-4 border-[#eab308] pl-3">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#eab308] shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#eab308] shrink-0" />
                <div className="flex flex-col">
                  <span>{PHONES[0]}</span>
                  <span>{PHONES[1]}</span>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#eab308] shrink-0" />
                <span>info@crowntechglobal.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-60">Developed by <span className="text-[#eab308]">JADAN TECH SOLUTIONS NIG LTD</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
