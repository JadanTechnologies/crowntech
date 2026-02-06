
import React from 'react';
import { COLORS } from '../constants';

interface LogoProps {
  className?: string;
  showText?: boolean;
  lightMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, lightMode = false }) => {
  const primaryColor = lightMode ? "#ffffff" : COLORS.primary;
  const accentColor = COLORS.accent;

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          {/* Globe Background */}
          <circle cx="50" cy="50" r="45" fill={primaryColor} />
          {/* Globe Grids */}
          <path d="M5 50 Q50 45 95 50 M5 50 Q50 55 95 50" stroke="white" strokeWidth="0.5" fill="none" opacity="0.4" />
          <path d="M50 5 Q45 50 50 95 M50 5 Q55 50 50 95" stroke="white" strokeWidth="0.5" fill="none" opacity="0.4" />
          <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
          
          {/* The Network 'C' - Vibrant Accent */}
          <path 
            d="M72 30 A30 30 0 1 0 72 70" 
            fill="none" 
            stroke={accentColor} 
            strokeWidth="8" 
            strokeLinecap="round" 
          />
          {/* Connecting Dots */}
          <circle cx="72" cy="30" r="3.5" fill={accentColor} />
          <circle cx="82" cy="42" r="3" fill={accentColor} />
          <circle cx="82" cy="58" r="3" fill={accentColor} />
          <circle cx="72" cy="70" r="3.5" fill={accentColor} />
          
          {/* Inner details to match image */}
          <path d="M60 40 L78 40 M60 60 L78 60" stroke={accentColor} strokeWidth="4" strokeLinecap="round" />
          <circle cx="78" cy="40" r="2" fill={accentColor} />
          <circle cx="78" cy="60" r="2" fill={accentColor} />
        </svg>
      </div>
      {showText && (
        <div className="ml-3 flex flex-col justify-center select-none">
          <span className={`text-xl font-extrabold leading-none tracking-tight uppercase ${lightMode ? 'text-white' : 'text-[#0f2e5a]'}`}>
            CROWNTECH
          </span>
          <span className={`text-[0.6rem] font-bold leading-tight uppercase tracking-tighter ${lightMode ? 'text-blue-100' : 'text-[#eab308]'}`}>
            Global Investment Nig. Ltd
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
