'use client';

import { Disc, BatteryCharging, Zap, ArrowUpRight, Sparkles, Wrench, Droplets, ClipboardCheck } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Typewriter from './Typewriter';

export default function Services({ setActiveTab }) {
  const services = [
    {
      id: 'tyres',
      icon: Disc,
      title: '2-Wheeler EV Tyre & 4-Wheeler Tyre Clinic',
      description: 'Computerised wheel alignment, laser balancing, and professional tubeless tyre services for EV 2-wheelers and 4-wheelers.',
      highlights: ['Wheel Alignment', 'Precision Wheel Balancing', 'Tyre Rotation & Care Checks', 'Rim & Valve Integrity Checks'],
      cta: 'View Tyre Packages',
      linkId: 'products',
      tabKey: 'tyres'
    },
    {
      id: 'batteries',
      icon: BatteryCharging,
      title: 'All 4-Wheeler & 2-Wheeler EV Battery Clinic',
      description: 'Advanced load testing, terminal cleaning, alternator output scanning, and battery recharging for all bikes, scooters, and cars.',
      highlights: ['Diagnostic Load Testing', 'Alternator Output Check', 'Battery Recharging & Cleaning', 'Terminal Protection Treatment'],
      cta: 'View Battery Services',
      linkId: 'products',
      tabKey: 'batteries'
    },
    {
      id: 'ev-scooters',
      icon: Zap,
      title: 'EV Scooter Sales & Service',
      description: 'Authorized smart electric scooter sales, expert OBD diagnostic scans, battery cell balancing, and hub motor tuning.',
      highlights: ['Authorized Scooter Sales', 'OBD Software Scan Diagnostics', 'Lithium Battery Cell Balancing', 'Authorized Spare Parts & Motor Tuning'],
      cta: 'View EV Packages',
      linkId: 'ev-showcase'
    },
    {
      id: 'car-service',
      icon: Wrench,
      title: 'Expert Car Service Clinic',
      description: 'Professional transmission clutch works, suspension repairs, fuel injector cleaning, scanning diagnostics, dry cleaning & denting.',
      highlights: ['Car clutch plate change', 'Car suspension work', 'Injector clean (Petrol only)', 'Car scanner Diagnostics', 'Car denting painting rubbing', 'Car dryclean'],
      cta: 'View Car Services',
      linkId: 'products',
      tabKey: 'car-service'
    },
    {
      id: 'wash',
      icon: Droplets,
      title: 'Premium Car Wash Clinic',
      description: 'Underbody high-pressure wash, snow foam cleaning, interior vacuuming, and premium microfiber polish for ultimate gloss and protection.',
      highlights: ['Premium snow foam wash', 'Underbody high-pressure wash', 'Tyre cleaning & dressing', 'Microfiber spray wax polish'],
      cta: 'View Car Wash Packages',
      linkId: 'products',
      tabKey: 'wash'
    },
    {
      id: 'fitness',
      icon: ClipboardCheck,
      title: 'RTO Fitness Prep Clinic',
      description: 'Authorized pre-RTO safety prep checks, authorized emission scans, headlamp focusing audits, and pass-ready certification prep.',
      highlights: ['Full pre-RTO fitness scans', 'Headlight alignment & focus tests', 'Brake load & efficiency audits', 'PUC Emission diagnostics'],
      cta: 'View Fitness Packages',
      linkId: 'products',
      tabKey: 'fitness'
    }
  ];

  const [activeZoomIndex, setActiveZoomIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (hoveredIndex !== null) return; // Pause auto-rotation on manual hover

    const interval = setInterval(() => {
      setActiveZoomIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length, hoveredIndex]);

  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeZoomIndex;

  const handleScrollTo = (e, id, tabKey) => {
    e.preventDefault();
    if (tabKey && setActiveTab) {
      setActiveTab(tabKey);
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
    <section id="services" className="relative py-20 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal delay-100">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-500 leading-tight">
            <Typewriter 
              words={['Our Elite Services']}
              loop={true}
              typingSpeed={40}
              deletingSpeed={20}
              delayBetween={2000}
            />
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            From safety-focused wheel alignment and battery diagnostics to expert EV two-wheeler tuning, we utilize advanced tools and certified expertise to maintain your ride.
          </p>
        </div>

        {/* Services Grid with Auto-Rotating Highlight Effect */}
        <div className="flex flex-row overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 gap-6 lg:grid lg:grid-cols-3 lg:gap-8 group/grid scrollbar-none snap-x snap-mandatory px-4 lg:px-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = index === currentIndex;
            return (
              <div 
                key={service.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative shrink-0 w-[290px] sm:w-[320px] lg:w-auto snap-center"
              >
                {/* Background glow halo */}
                <div className={`absolute inset-0 bg-gradient-to-r from-slate-400/25 via-gold-400/25 to-slate-400/25 rounded-[2rem] filter blur-xl transition-all duration-500 -z-10
                  ${isActive ? 'opacity-100 scale-110' : 'opacity-0 scale-95'}`}
                />

                <div 
                  className={`glow-card bg-white rounded-3xl p-6 flex flex-col gap-5 border transition-all duration-500 ease-out group/card cursor-pointer h-full relative z-10
                    ${isActive 
                      ? 'scale-105 opacity-100 shadow-[0_20px_50px_rgba(71,162,105,0.25)] border-slate-300' 
                      : 'scale-95 opacity-90 border-slate-100 shadow-md'
                    }`}
                >
                  {/* Top: Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-500 shrink-0
                    ${isActive 
                      ? 'bg-gold-500 text-white border-gold-500 shadow-sm shadow-gold-500/20' 
                      : 'bg-slate-50 border-slate-100 text-slate-500'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${service.id === 'tyres' ? 'animate-spin' : ''}`} style={service.id === 'tyres' ? { animationDuration: '10s' } : {}} />
                  </div>

                  {/* Bottom: Content details */}
                  <div className="flex-1 flex flex-col justify-between text-left gap-4">
                    <div className="flex flex-col gap-3">
                      {/* Title */}
                      <h3 className={`font-display font-bold text-lg transition-colors duration-500
                        ${isActive ? 'text-gold-600' : 'text-slate-700'}`}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600/90 leading-relaxed font-sans">
                        {service.description}
                      </p>

                      {/* Bullets List */}
                      <ul className="flex flex-col gap-2 mt-1">
                        {service.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-600 font-semibold font-sans">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-500
                              ${isActive ? 'bg-gold-500 scale-125' : 'bg-slate-300 scale-100'}`}
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card CTA Link */}
                    <div className="pt-4 border-t border-slate-100 mt-2">
                      <a
                        href={`#${service.linkId}`}
                        onClick={(e) => handleScrollTo(e, service.linkId, service.tabKey)}
                        className={`inline-flex items-center gap-1.5 font-display text-xs font-semibold transition-colors duration-500 group
                          ${isActive ? 'text-gold-600' : 'text-slate-700'}`}
                      >
                        {service.cta}
                        <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                          ${isActive ? 'text-slate-500' : 'text-slate-400'}`}
                      />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Showcase Section */}
        <div className="mt-20 border-t border-slate-200/60 pt-16 reveal delay-300 overflow-hidden w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
              Trusted Brands
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-800 min-h-[1.5em]">
              <Typewriter 
                words={['Partner Brands & Batteries We Support']}
                loop={true}
                typingSpeed={50}
                deletingSpeed={30}
                delayBetween={3000}
              />
            </h3>
            <div className="w-12 h-0.5 bg-gold-400 mx-auto mt-3 rounded-full" />
          </div>

          {/* Infinite Auto-Scrolling Logo Carousel (No arrows, no dots, automatic & bigger) */}
          <div className="relative w-full overflow-hidden py-6 mask-gradient bg-white/40 backdrop-blur-sm border-y border-slate-100">
            <div className="flex gap-16 md:gap-24 items-center w-max animate-infinite-scroll">
              {[
                { src: '/appolo.png', alt: 'Apollo Tyres' },
                { src: '/amaron.png', alt: 'Amaron' },
                { src: '/powerzone.png', alt: 'Powerzone' },
                { src: '/exide.png', alt: 'Exide' },
                { src: '/appolo.png', alt: 'Apollo Tyres' },
                { src: '/amaron.png', alt: 'Amaron' },
                { src: '/powerzone.png', alt: 'Powerzone' },
                { src: '/exide.png', alt: 'Exide' },
                { src: '/appolo.png', alt: 'Apollo Tyres' },
                { src: '/amaron.png', alt: 'Amaron' },
                { src: '/powerzone.png', alt: 'Powerzone' },
                { src: '/exide.png', alt: 'Exide' },
                { src: '/appolo.png', alt: 'Apollo Tyres' },
                { src: '/amaron.png', alt: 'Amaron' },
                { src: '/powerzone.png', alt: 'Powerzone' },
                { src: '/exide.png', alt: 'Exide' }
              ].map((logo, idx) => (
                <div 
                  key={idx} 
                  className="relative w-36 h-16 sm:w-48 sm:h-20 hover:scale-110 transition-transform duration-500 ease-out select-none shrink-0 opacity-90 hover:opacity-100"
                >
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
