'use client';

import { Disc, BatteryCharging, Zap, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'tyres',
      icon: Disc,
      title: '2 & 4-Wheeler Tyre Clinic',
      description: 'Optimize your vehicle\'s handling and steering safety. We provide state-of-the-art computerised 3D wheel alignment, laser wheel balancing, and professional tubeless tyre services for all two-wheelers and four-wheelers.',
      highlights: ['3D Wheel Alignment', 'Precision Wheel Balancing', 'Nitrogen Inflation', 'Tyre Rotation & Care Checks'],
      cta: 'View Tyre Packages',
      linkId: 'products'
    },
    {
      id: 'batteries',
      icon: BatteryCharging,
      title: '2 & 4-Wheeler Battery Clinic',
      description: 'Ensure reliable power output. We offer advanced diagnostic load testing, terminal corrosion cleaning, alternator checks, and battery recharging/greasing services for bikes, scooters, and cars.',
      highlights: ['Diagnostic Load Testing', 'Alternator Output Check', 'Battery Recharging & Cleaning', 'Terminal Protection Treatment'],
      cta: 'View Battery Services',
      linkId: 'products'
    },
    {
      id: 'ev-scooters',
      icon: Zap,
      title: 'EV Scooter Sales & Service',
      description: 'Purchase cutting-edge smart electric scooters with extended warranties, or book your existing electric ride for expert OBD software scans, battery cell balancing, and electrical tuning.',
      highlights: ['Authorized Scooter Sales', 'OBD Software Scan Diagnostics', 'Lithium Battery Cell Balancing', 'Authorized Spare Parts & Motor Tuning'],
      cta: 'View EV Packages',
      linkId: 'ev-showcase'
    },
    {
      id: 'carwash',
      icon: Sparkles,
      title: '2 & 4-Wheeler Car Wash Clinic',
      description: 'Keep your ride looking showroom-fresh. We provide high-pressure active foam washing, detailed interior vacuum cabin cleaning, dashboard polishing, and complete sanitisation.',
      highlights: ['Premium Active Foam Wash', 'Detailed Cabin Vacuuming', 'Dashboard & Trim Polish', 'Upholstery Sanitisation'],
      cta: 'View Wash Packages',
      linkId: 'products'
    }
  ];

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
    <section id="services" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal delay-100">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
            What We Do
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Our Elite Services
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
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
                className="glow-card bg-white rounded-3xl p-8 flex flex-col justify-between border border-slate-100 shadow-sm reveal delay-200"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Upper Card Info */}
                <div className="flex flex-col gap-5">
                  {/* Icon Wrapper */}
                  <div className="w-14 h-14 rounded-2xl bg-gold-50 border border-gold-200/50 flex items-center justify-center text-gold-600 transition-colors duration-300">
                    <Icon className={`w-7 h-7 ${service.id === 'tyres' ? 'animate-spin' : ''}`} style={service.id === 'tyres' ? { animationDuration: '10s' } : {}} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  {/* Bullets List */}
                  <ul className="flex flex-col gap-2 mt-2">
                    {service.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div className="pt-8 border-t border-slate-50 mt-6">
                  <a
                    href={`#${service.linkId}`}
                    onClick={(e) => handleScrollTo(e, service.linkId)}
                    className="inline-flex items-center gap-1.5 font-display text-sm font-semibold text-slate-900 hover:text-gold-600 transition-colors group"
                  >
                    {service.cta}
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-gold-500" />
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
