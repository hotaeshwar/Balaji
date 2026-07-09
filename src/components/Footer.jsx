'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    
    if (id === 'gallery') {
      router.push('/gallery');
      return;
    }

    const targetPath = id === 'home' ? '/' : `/${id}`;
    
    if (pathname === '/gallery') {
      router.push(targetPath);
      return;
    }

    router.push(targetPath, { scroll: false });
    
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

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
            <a href="/" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center group py-1">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/brand.png" 
                  alt="Balaji Autoss Brand Logo" 
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
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white hover:bg-gold-50 border border-slate-200 text-slate-600 hover:text-gold-600 hover:border-gold-300 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-bold text-slate-900 tracking-wide text-base mb-6 border-b-2 border-gold-200 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-600">
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  Premium Tyre Fitting & Alignment
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  Battery Installation & Health Check
                </a>
              </li>
              <li>
                <a href="/ev-showcase" onClick={(e) => handleLinkClick(e, 'ev-showcase')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  EV Scooter Diagnostics & Repair
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  Scheduled Vehicle Maintenance
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
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
                <a href="/home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  Home / Welcome
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="/why-choose-us" onClick={(e) => handleLinkClick(e, 'why-choose-us')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  Featured Packages
                </a>
              </li>
              <li>
                <a href="/ev-showcase" onClick={(e) => handleLinkClick(e, 'ev-showcase')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  EV Scooter Care
                </a>
              </li>
              <li>
                <a href="/gallery" onClick={(e) => handleLinkClick(e, 'gallery')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 font-semibold text-emerald-800">
                  Video Gallery
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-gold-600 transition-colors duration-300 relative pb-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-gold-500 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
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
                  <span className="leading-tight">Plot no 37, AttawaMain Road, sector 42 chandigarh</span>
                </div>
              </div>
              {/* Work Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 block">Working Hours:</span>
                  <span>Mon - Sat: 09:00 AM - 06:30 PM</span>
                  <span className="block text-gold-600 font-medium">Sunday: 09:00 AM - 05:00 PM (Last Sunday of Month Closed)</span>
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
