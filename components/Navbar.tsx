
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { PHONES, COLORS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:block bg-[#0f2e5a] text-white py-2 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1 text-[#eab308]" /> {PHONES[0]}</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1 text-[#eab308]" /> {PHONES[1]}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-3 h-3 mr-1 text-[#eab308]" /> info@crowntechglobal.com
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors hover:text-[#0f2e5a] ${
                  isActive(link.path) ? 'text-[#0f2e5a] border-b-2 border-[#eab308]' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-[#0f2e5a] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#1a3d74] transition-all shadow-lg shadow-blue-900/10"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0f2e5a] focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-3 px-4 rounded-lg font-bold ${
                isActive(link.path) ? 'bg-blue-50 text-[#0f2e5a]' : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-[#0f2e5a] text-white py-4 rounded-xl font-bold mt-4"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
