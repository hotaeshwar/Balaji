'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-gold-100 font-sans">
      {/* Upper Footer section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center group py-1">
              <div className="relative w-[360px] sm:w-[430px] h-24 sm:h-28 transition-transform duration-300">
                <Image 
                  src="/logo.jpeg" 
                  alt="Balaji Autoss Logo Banner" 
                  fill
                  className="object-contain"
                />
              </div>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed">
              Balaji Autoss is your premier automotive service destination. We specialize in precision wheel alignment, high-power battery maintenance, and expert diagnostics and tune-ups for EV scooters, ensuring your vehicles run smoothly and safely.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-gold-50 border border-slate-200 text-slate-600 hover:text-gold-600 hover:border-gold-300 transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <div 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm"
                title="ISO Certified Quality"
              >
                <ShieldCheck className="w-4 h-4 text-gold-500" />
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-bold text-slate-900 tracking-wide text-base mb-6 border-b-2 border-gold-200 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-600">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-200">
                  Premium Tyre Fitting & Alignment
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-200">
                  Battery Installation & Health Check
                </a>
              </li>
              <li>
                <a href="#ev-showcase" onClick={(e) => handleLinkClick(e, 'ev-showcase')} className="hover:text-gold-600 transition-colors duration-200">
                  EV Scooter Diagnostics & Repair
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-200">
                  Scheduled Vehicle Maintenance
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-200">
                  Emergency Roadside Assistance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display font-bold text-slate-900 tracking-wide text-base mb-6 border-b-2 border-gold-200 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-600">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-gold-600 transition-colors duration-200">
                  Home / Welcome
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-200">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleLinkClick(e, 'why-choose-us')} className="hover:text-gold-600 transition-colors duration-200">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-gold-600 transition-colors duration-200">
                  Featured Packages
                </a>
              </li>
              <li>
                <a href="#ev-showcase" onClick={(e) => handleLinkClick(e, 'ev-showcase')} className="hover:text-gold-600 transition-colors duration-200">
                  EV Scooter Care
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-gold-600 transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact details Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-slate-900 tracking-wide text-base mb-2 border-b-2 border-gold-200 pb-2 inline-block">
              Contact Details
            </h3>
            <div className="flex flex-col gap-4 text-sm text-slate-600">
              {/* Phones */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-900">Call/WhatsApp:</span>
                  <a href="tel:9646952897" className="hover:text-gold-600 transition-colors">+91 9646952897 (Rohit)</a>
                  <a href="tel:9779606655" className="hover:text-gold-600 transition-colors">+91 9779606655 (Vivek)</a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-900">Email Us:</span>
                  <a href="mailto:balajiautosservice@gmail.com" className="hover:text-gold-600 transition-colors break-all">
                    balajiautosservice@gmail.com
                  </a>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-slate-900">Address:</span>
                  <span className="leading-tight">Plot No. 37, Main Road, Sector 42, Attawa, Chandigarh</span>
                </div>
              </div>
              {/* Work Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 block">Working Hours:</span>
                  <span>Mon - Sat: 09:30 AM - 06:30 PM</span>
                  <span className="block text-gold-600 font-medium">Sunday: 09:30 AM - 05:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-900 text-slate-400 py-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Balaji Autoss. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            Designed for excellence & premium care
            <Heart className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
