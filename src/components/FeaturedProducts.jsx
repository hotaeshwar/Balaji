'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, MessageSquareCode } from 'lucide-react';

export default function FeaturedProducts({ onInquire }) {
  const [activeTab, setActiveTab] = useState('tyres');

  // Fix tab visibility bug: Re-observe reveal elements whenever activeTab changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('#products .reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target); // Reveal once
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.1,
        }
      );
      revealElements.forEach((el) => observer.observe(el));
    }, 50);

    return () => clearTimeout(timer);
  }, [activeTab]);

  const packages = {
    tyres: [
      {
        id: 'pkg-tyre-alignment',
        name: '4-Wheeler 3D Alignment & Scan',
        type: 'Car/SUV Tyre Alignment',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Computerised 3D Wheel Alignment', 'Tyre tread & wear scan', 'Suspension joint inspection', 'Steering position calibration'],
        warranty: '7-Day Post-Service Re-check',
        brand: '4-Wheeler',
        image: '/tyre_alignment.png'
      },
      {
        id: 'pkg-tyre-balancing',
        name: '4-Wheeler Balancing & Rotation',
        type: 'Precision Car Balancing',
        price: 'Inspect & Estimate',
        rating: '4.8',
        features: ['Precision spin balancing', '4-Wheel rotation matching', 'Rim runout checking', 'Weights alignment tuning'],
        warranty: '100% Vibration-Free Guarantee',
        brand: '4-Wheeler',
        image: '/wheel_balancing.png'
      },
      {
        id: 'pkg-tyre-ultimate',
        name: 'Ultimate 2 & 4-Wheel Tyre Pack',
        type: 'Complete Under-chassis Servicing',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['3D Alignment + Spin Balancing', '4-Wheel/2-Wheel rim checks', 'Nitrogen purging & refill', 'Tyre pressure sensor audit'],
        warranty: '15-Day Post-Service Re-check',
        brand: 'All Vehicles',
        image: '/hero_vehicle_care.png'
      }
    ],
    batteries: [
      {
        id: 'pkg-bat-diagnostic',
        name: '2/4-Wheel Battery Diagnostic',
        type: 'Electronic Health Check',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Advanced load cell testing', 'Battery gravity electrolyte audit', 'Terminal corrosion cleaning', 'Petroleum jelly sealing'],
        warranty: 'Full Diagnostic Audit Sheet',
        brand: 'All Vehicles',
        image: '/battery_diagnostic.png'
      },
      {
        id: 'pkg-bat-recharge',
        name: '2-Wheeler Battery Refresh',
        type: 'Bike/Scooter Power Service',
        price: 'Inspect & Estimate',
        rating: '4.8',
        features: ['Slow pulse charging recovery', 'Battery terminal de-scaling', 'Acid density balancing', 'Load capacity calibration'],
        warranty: 'Charge Stability Warranty',
        brand: '2-Wheeler',
        image: '/battery_charging.png'
      },
      {
        id: 'pkg-bat-electrical',
        name: '4-Wheeler Full Electrical Scan',
        type: 'Car Charging Circuit Diagnostics',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Battery health load check', 'Alternator charging current scan', 'Starter motor current draw scan', 'Fuse box short-circuit audit'],
        warranty: 'Complete Electrical Report',
        brand: '4-Wheeler',
        image: '/electrical_scan.png'
      },
      {
        id: 'pkg-bat-jumpstart',
        name: 'Emergency 2/4-Wheel Jumpstart',
        type: 'On-Demand Recovery Service',
        price: 'Inspect & Estimate',
        rating: '4.7',
        features: ['Emergency heavy-duty jumpstart', 'Alternator output scanning', 'Cable terminal cleaning', 'Starter solenoid inspection'],
        warranty: 'Instant Recovery Check',
        brand: 'All Vehicles',
        image: '/emergency_jumpstart.png'
      }
    ],
    carwashing: [
      {
        id: 'pkg-wash-eco',
        name: 'Eco Foam Wash & Vacuum',
        type: 'Basic Exterior & Interior',
        price: 'Inspect & Estimate',
        rating: '4.8',
        features: ['High-pressure water rinse', 'Active foam shampoo scrub', 'Complete exterior hand dry', 'Basic interior vacuuming'],
        warranty: 'Spotless Shine Guarantee',
        brand: '2 & 4-Wheeler',
        image: '/carwash/bj1.png'
      },
      {
        id: 'pkg-wash-premium',
        name: 'Premium Foam & Wax',
        type: 'Advanced Paint Protection',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Premium snow foam wash', 'Underbody high-pressure wash', 'Tyre cleaning & dressing', 'Microfiber spray wax polish'],
        warranty: 'Long-Lasting Gloss Shield',
        brand: '4-Wheeler',
        image: '/carwash/bj2.png'
      },
      {
        id: 'pkg-wash-interior',
        name: 'Complete Interior Spa',
        type: 'Deep Cabin Grooming',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Deep interior vacuum & dust', 'Dashboard & console dressing', 'Upholstery & mat shampooing', 'AC vent sanitisation'],
        warranty: '100% Odour-Free Guarantee',
        brand: '4-Wheeler',
        image: '/carwash/bj3.png'
      },
      {
        id: 'pkg-wash-ultimate',
        name: 'Ultimate Gold Detailing',
        type: 'Showroom Polish Treatment',
        price: 'Inspect & Estimate',
        rating: '5.0',
        features: ['Premium foam & underbody wash', 'Deep interior cabin cleaning', 'Engine bay detailing & gloss', 'Hand-applied premium wax coat'],
        warranty: 'Premium Protection Plan',
        brand: 'All Vehicles',
        image: '/carwash/bj4.png'
      }
    ]
  };

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 reveal delay-100">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
              Service Packages
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
              Maintenance & Care Bundles
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Custom Tabs */}
          <div className="flex gap-2 self-start bg-slate-50 border border-slate-200/50 p-1.5 rounded-full">
            <button
              onClick={() => setActiveTab('tyres')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'tyres'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-slate-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Tyre Care Packages
            </button>
            <button
              onClick={() => setActiveTab('batteries')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'batteries'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-slate-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Battery Diagnostics
            </button>
            <button
              onClick={() => setActiveTab('carwashing')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'carwashing'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-slate-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Car Washing
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages[activeTab].map((pkg, index) => (
            <div
              key={pkg.id}
              className="glow-card bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row gap-6 reveal delay-200"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Service Illustration Box with AI Generated Image */}
              <div className="w-full md:w-2/5 h-48 md:h-auto min-h-[180px] bg-slate-100 rounded-2xl relative overflow-hidden group border border-slate-200/40 shadow-inner shrink-0">
                <Image 
                  src={pkg.image} 
                  alt={pkg.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 25vw"
                />
                {/* Subtle dark gradient overlay to give gold styling depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              {/* Package Details */}
              <div className="flex flex-col justify-between flex-1 gap-4">
                <div className="flex flex-col gap-3 text-left">
                  {/* Level and rating */}
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <span className="text-gold-600 font-bold font-display">{pkg.brand}</span>
                    <span className="flex items-center gap-1">★ {pkg.rating}</span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display font-bold text-lg text-slate-900 leading-tight group-hover:text-gold-600 transition-colors">
                    {pkg.name}
                  </h3>
                  
                  {/* Type label */}
                  <span className="text-[11px] font-sans font-medium text-slate-400 -mt-2">
                    {pkg.type}
                  </span>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-1.5 mt-1">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 font-sans">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-slate-400 font-medium">Service Fee</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-display font-semibold text-xs text-gold-600">{pkg.price}</span>
                      <span className="text-[9px] uppercase font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200/40">Guaranteed</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onInquire(pkg)}
                    className="inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-gold-500 text-slate-700 hover:text-white border border-slate-200/60 hover:border-gold-500 font-semibold py-2 px-4 rounded-xl text-xs transition-all duration-300 group shadow-sm active:scale-95 whitespace-nowrap"
                  >
                    <span>Book Service Pack</span>
                    <MessageSquareCode className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 text-gold-500 group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
