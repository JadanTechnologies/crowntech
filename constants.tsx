
import React from 'react';
import { 
  Wrench, 
  Monitor, 
  ShoppingBag, 
  Settings, 
  ShieldCheck, 
  Wifi, 
  Code, 
  GraduationCap,
  CheckCircle2,
  Clock,
  Cpu
} from 'lucide-react';
import { Service, Testimonial } from './types';

export const BRAND_NAME = "CROWNTECH GLOBAL INVESTMENT NIG. LTD";
export const TAGLINE = "Innovating Technology. Empowering Businesses.";
export const LOCATION = "Sokoto, Nigeria";
export const ADDRESS = "Emir Yahaya Road, Opposite Zenith Bank, Sokoto, Nigeria";
export const PHONES = ["07068887666", "08141110019"];
export const EMAIL = "info@crowntechglobal.com";
export const WHATSAPP_LINK = "https://wa.me/2347068887666";

// Corporate Colors from Logo
export const COLORS = {
  primary: "#0f2e5a", // Navy Blue
  accent: "#eab308",  // Gold
  slate: {
    50: "#f8fafc",
    900: "#0f172a"
  }
};

export const SITE_CONTENT = {
  home: {
    heroTitle: "Your Trusted Partner in Technology Solutions",
    heroSub: "CROWNTECH GLOBAL INVESTMENT NIG. LTD provides cutting-edge hardware maintenance, software systems, and professional IT training in the heart of Sokoto.",
    aboutShort: "Crowntech Global Investment Nig. Ltd is a registered technology firm established to bridge the digital divide in Northern Nigeria. We combine deep technical expertise with a commitment to excellence to serve our clients.",
  },
  about: {
    mission: "To provide top-notch technological services and training that empower individuals and organizations to achieve their fullest potential through innovation and efficiency.",
    vision: "To be the leading technology partner in Northern Nigeria, recognized for excellence, integrity, and our contribution to digital literacy and infrastructure.",
  }
};

export const SERVICES: Service[] = [
  {
    id: 'repairs',
    title: 'Computer Maintenance & Repairs',
    description: 'Expert diagnostics and professional repair for all kinds of devices, including laptops, desktops, and peripherals. We handle hardware failures, screen replacements, and internal cleaning.',
    iconName: 'Wrench',
    features: ['Motherboard Repair', 'Screen & Keyboard Replacement', 'Thermal Pasting & Cleaning', 'Data Recovery', 'Hardware Upgrades (RAM/SSD)']
  },
  {
    id: 'installations',
    title: 'Computer Installations',
    description: 'Complete setup of computer systems, local area networks (LAN), and specialized workstations tailored for corporate offices and personal home setups.',
    iconName: 'Monitor',
    features: ['Office Network Setup', 'Printer Configuration', 'Server Installation', 'Workstation Assembly', 'OS Deployment']
  },
  {
    id: 'commerce',
    title: 'Buying & Selling of Computers',
    description: 'Your trusted hub for high-quality new and refurbished laptops, desktops, and tech accessories. We offer warranties and authentic parts.',
    iconName: 'ShoppingBag',
    features: ['Certified Refurbished Laptops', 'Brand New Desktops', 'Original Accessories', 'Trade-in Options', 'Post-purchase Support']
  },
  {
    id: 'software',
    title: 'Professional Software Installation',
    description: 'Expert configuration of business management software including Tally Prime, Aronium POS, Prokip, QuickBooks, and various accounting suites.',
    iconName: 'Settings',
    features: ['Tally Prime ERP', 'Aronium POS Systems', 'QuickBooks Accounting', 'Cloud Backup Integration', 'User Training & Support']
  },
  {
    id: 'cctv',
    title: 'CCTV Installation & Security',
    description: 'Modern surveillance solutions for residential and commercial properties. Remote viewing setup on mobile devices for 24/7 peace of mind.',
    iconName: 'ShieldCheck',
    features: ['IP & Analog Camera Setup', 'NVR/DVR Configuration', 'Mobile Remote Monitoring', 'Motion Detection Alerts', 'Night Vision Systems']
  },
  {
    id: 'starlink',
    title: 'Starlink Installation',
    description: 'Professional installation and configuration of SpaceX Starlink satellite internet for lightning-fast connectivity anywhere in Sokoto.',
    iconName: 'Wifi',
    features: ['Satellite Dish Mounting', 'Router Optimization', 'Mesh Network Expansion', 'Performance Testing', 'Firmware Updates']
  },
  {
    id: 'dev',
    title: 'Software Development',
    description: 'Custom software solutions and web applications designed to solve specific business problems and enhance operational efficiency.',
    iconName: 'Code',
    features: ['Custom Web Applications', 'Business Automation Tools', 'Inventory Management Systems', 'Database Design', 'API Integrations']
  },
  {
    id: 'training',
    title: 'Computer Training Centre',
    description: 'Industry-standard training modules covering basic digital literacy, advanced office productivity, and specialized IT professional courses.',
    iconName: 'GraduationCap',
    features: ['Basic Computer Literacy', 'Advanced Excel & Office Suite', 'Graphics Design Basics', 'Software Engineering Intro', 'Certification Prep']
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Expert Technicians",
    description: "Our team consists of certified professionals with years of hands-on experience.",
    icon: <Cpu className="w-10 h-10" />
  },
  {
    title: "Quality Guarantee",
    description: "We use only genuine parts and follow industry best practices for every project.",
    icon: <CheckCircle2 className="w-10 h-10" />
  },
  {
    title: "Timely Delivery",
    description: "We understand that your business can't wait. We offer the fastest turnaround in Sokoto.",
    icon: <Clock className="w-10 h-10" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alhaji Bello',
    role: 'Local Business Owner',
    content: 'The software installation for my shop was seamless. Tally Prime has changed how I track inventory. Crowntech is the best in Sokoto!',
    avatar: 'https://i.pravatar.cc/150?u=bello'
  },
  {
    id: '2',
    name: 'Fatima Usman',
    role: 'Creative Professional',
    content: 'My MacBook was repaired within 24 hours. The professionalism and transparency were top-notch.',
    avatar: 'https://i.pravatar.cc/150?u=fatima'
  },
  {
    id: '3',
    name: 'Ibrahim Mohammed',
    role: 'Corporate Manager',
    content: 'The Starlink installation they did for our office has been perfect. We finally have reliable high-speed internet.',
    avatar: 'https://i.pravatar.cc/150?u=ibrahim'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Wrench': return <Wrench className="w-8 h-8" />;
    case 'Monitor': return <Monitor className="w-8 h-8" />;
    case 'ShoppingBag': return <ShoppingBag className="w-8 h-8" />;
    case 'Settings': return <Settings className="w-8 h-8" />;
    case 'ShieldCheck': return <ShieldCheck className="w-8 h-8" />;
    case 'Wifi': return <Wifi className="w-8 h-8" />;
    case 'Code': return <Code className="w-8 h-8" />;
    case 'GraduationCap': return <GraduationCap className="w-8 h-8" />;
    default: return <Settings className="w-8 h-8" />;
  }
};
