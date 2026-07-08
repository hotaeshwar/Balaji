'use client';

import Image from 'next/image';
import { Disc, BatteryCharging, Zap, ArrowUpRight, FileText, Sparkles } from 'lucide-react';

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
      id: 'fitness',
      icon: Sparkles,
      title: 'RTO Fitness & Premium Wash Clinic',
      description: 'Pre-RTO fitness scans, speed governor setup, PUC emissions testing, and premium active high-pressure foam washing.',
      highlights: ['Pre-RTO Fitness Prep & Scan', 'Premium Active Foam Wash', 'PUC Emission & Safety Tests', 'Interior Vacuum & Dashboard Polish'],
      cta: 'View Fitness & Wash Packages',
      linkId: 'products',
      tabKey: 'wash'
    }
  ];

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
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Our Elite Services
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            From safety-focused wheel alignment and battery diagnostics to expert EV two-wheeler tuning, we utilize advanced tools and certified expertise to maintain your ride.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="glow-card bg-white rounded-3xl p-8 flex flex-col justify-between border border-emerald-100 shadow-xl transition-all duration-300 reveal delay-200 group/card hover:shadow-emerald-500/10 hover:border-emerald-300"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Upper Card Info */}
                <div className="flex flex-col gap-5">
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 transition-all duration-300 group-hover/card:bg-emerald-600 group-hover/card:text-white group-hover/card:border-emerald-600">
                    <Icon className={`w-7 h-7 ${service.id === 'tyres' ? 'animate-spin' : ''}`} style={service.id === 'tyres' ? { animationDuration: '10s' } : {}} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-emerald-800 group-hover/card:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-emerald-700/80 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Bullets List */}
                  <ul className="flex flex-col gap-2 mt-2">
                    {service.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2.5 text-xs text-emerald-800 font-medium font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 group-hover/card:scale-125 transition-transform duration-300" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div className="pt-8 border-t border-emerald-100 mt-6">
                  <a
                    href={`#${service.linkId}`}
                    onClick={(e) => handleScrollTo(e, service.linkId, service.tabKey)}
                    className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-emerald-800 group-hover/card:text-emerald-600 transition-colors group"
                  >
                    {service.cta}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
