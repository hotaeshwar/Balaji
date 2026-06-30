'use client';

import Image from 'next/image';
import { ArrowRight, Shield, Award, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e, id) => {
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
    <section id="home" className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-slate-100">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full filter blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-50/30 rounded-full filter blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Area */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left reveal delay-100 active">
            
            {/* Tag / Badge with Logo */}
            <div className="inline-flex items-center gap-3 self-start bg-gold-50/50 border border-gold-200/50 px-4 py-2 rounded-full">
              <div className="relative w-7 h-7 rounded-full overflow-hidden bg-white shadow-sm shrink-0 border border-gold-300">
                <Image src="/logo.jpeg" alt="Balaji Autoss Emblem Logo" fill className="object-cover" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-700 font-sans">
                Sales & Service Hub
              </span>
            </div>

            {/* Title / Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
              2 & 4-Wheeler Care & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700">
                EV Scooter Hub
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Keep your ride running at peak performance. <strong className="text-slate-800 font-semibold">Balaji Autoss</strong> is Sector 42 Attawa&apos;s leading automotive hub, offering certified 3D wheel alignment, battery load tests for both 2-wheelers & 4-wheelers, and authorized sales & service for electric scooters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-medium px-7 py-3.5 rounded-full shadow-md transition-all duration-300 group text-sm tracking-wide"
              >
                Schedule Service
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center bg-white hover:bg-gold-50/50 active:scale-95 text-gold-700 font-semibold border border-gold-300 px-7 py-3.5 rounded-full shadow-sm hover:shadow-gold-glow transition-all duration-300 text-sm tracking-wide"
              >
                Book Consultation
              </a>
            </div>

            {/* Small trust anchors */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 mt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-gold-700">
                  <Award className="w-4.5 h-4.5 text-gold-500" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">2 & 4-Wheel</span>
                </div>
                <span className="text-[11px] text-slate-500 leading-tight">Full Service Alignment</span>
              </div>
              
              <div className="flex flex-col gap-1 border-x border-slate-100 px-4">
                <div className="flex items-center gap-1.5 text-gold-700">
                  <Shield className="w-4.5 h-4.5 text-gold-500" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">Certified Care</span>
                </div>
                <span className="text-[11px] text-slate-500 leading-tight">Expert Trained Staff</span>
              </div>

              <div className="flex flex-col gap-1 pl-2">
                <div className="flex items-center gap-1.5 text-gold-700">
                  <span className="text-gold-500 font-bold text-sm">5★</span>
                  <span className="text-xs font-bold font-display uppercase tracking-wider">Rated Trust</span>
                </div>
                <span className="text-[11px] text-slate-500 leading-tight">10k+ Vehicles Serviced</span>
              </div>
            </div>
          </div>

          {/* Graphical / Image Area */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[450px] lg:h-[500px] reveal delay-200 active">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-200 to-amber-200 rounded-[2rem] filter blur-xl opacity-20 scale-95 animate-pulse-glow" />
            
            {/* Image Container with golden border */}
            <div className="relative w-full h-full border border-gold-300/30 rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100 transition-all duration-500 hover:scale-[1.01] hover:border-gold-400">
              <Image
                src="/hero_vehicle_care.png"
                alt="Balaji Autoss Premium Showroom & Service Garage with Tyres, Batteries, and EV Scooters"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
            
            {/* Quick stats floating tag */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 bg-white border border-gold-200 shadow-xl px-5 py-3 rounded-2xl flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 rounded-xl bg-gold-50 flex items-center justify-center text-gold-600 font-bold text-lg border border-gold-200">
                15+
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-800">Years of Service</span>
                <span className="text-[10px] text-slate-500">Uncompromising Reliability</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
