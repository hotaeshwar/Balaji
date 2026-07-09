'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, MessageSquareCode } from 'lucide-react';
import Typewriter from './Typewriter';

export default function FeaturedProducts({ activeTab, setActiveTab, onInquire, isInquiryOpen }) {
  const [isFading, setIsFading] = useState(false);
  const [clickedPackageId, setClickedPackageId] = useState(null);

  // Handle manual tab selection with fade transition
  const handleTabClick = (tab) => {
    if (tab === activeTab) return;
    
    setIsFading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsFading(false);
    }, 500); // 500ms transition time
  };

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
        id: 'pkg-tyre-ultimate',
        name: '2-Wheeler EV & 4-Wheeler Tyre Pack',
        type: 'Complete Under-chassis Servicing',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Alignment + Spin Balancing', '4-Wheel/2-Wheel rim checks', 'Tyre pressure sensor audit', 'Tubeless Valve & Rim Check'],
        warranty: '15-Day Post-Service Re-check',
        brand: 'All Vehicles',
        image: '/tyres.png'
      }
    ],
    mechanical: [
      {
        id: 'pkg-tyre-alignment',
        name: '4-Wheeler Alignment & Scan',
        type: 'Car/SUV Tyre Alignment',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Computerised Wheel Alignment', 'Tyre tread & wear scan', 'Suspension joint inspection', 'Steering position calibration'],
        warranty: '7-Day Post-Service Re-check',
        brand: '4-Wheeler',
        image: '/wheel_alignment.png'
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
        image: '/wheelbalancing.png'
      },
      {
        id: 'pkg-tyre-lift-scan',
        name: 'Ultimate Alignment & Lift Care Pack',
        type: 'Complete Under-chassis Service',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Precision Alignment + Balancing', 'Full underbody lift inspection', 'Suspension & link rod audit', 'Steering & Suspension Tuning'],
        warranty: '15-Day Post-Service Re-check',
        brand: 'All Vehicles',
        image: '/hydrauliclift.png'
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
        brand: 'All Vehicles'
      },
      {
        id: 'pkg-bat-recharge',
        name: '2-Wheeler Battery Refresh',
        type: 'Bike/Scooter Power Service',
        price: 'Inspect & Estimate',
        rating: '4.8',
        features: ['Slow pulse charging recovery', 'Battery terminal de-scaling', 'Acid density balancing', 'Load capacity calibration'],
        warranty: 'Charge Stability Warranty',
        brand: '2-Wheeler'
      },
      {
        id: 'pkg-bat-electrical',
        name: '4-Wheeler Full Electrical Scan',
        type: 'Car Charging Circuit Diagnostics',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Battery health load check', 'Alternator charging current scan', 'Starter motor current draw scan', 'Fuse box short-circuit audit'],
        warranty: 'Complete Electrical Report',
        brand: '4-Wheeler'
      },
      {
        id: 'pkg-bat-jumpstart',
        name: 'Emergency 2/4-Wheel Jumpstart',
        type: 'On-Demand Recovery Service',
        price: 'Inspect & Estimate',
        rating: '4.7',
        features: ['Emergency heavy-duty jumpstart', 'Alternator output scanning', 'Cable terminal cleaning', 'Starter solenoid inspection'],
        warranty: 'Instant Recovery Check',
        brand: 'All Vehicles'
      }
    ],
    wash: [
      {
        id: 'pkg-wash-premium',
        name: 'Premium Foam Wash & Wax',
        type: 'Advanced Paint Protection',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Premium snow foam wash', 'Underbody high-pressure wash', 'Tyre cleaning & dressing', 'Microfiber spray wax polish'],
        warranty: 'Long-Lasting Gloss Shield',
        brand: '4-Wheeler'
      }
    ],
    fitness: [
      {
        id: 'pkg-fit-rto',
        name: 'RTO Fitness Prep & Scan',
        type: 'Commercial/Private Pre-RTO Check',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: ['Full electrical & mechanical prep check', 'Headlight alignment & focus test', 'Brake load & efficiency verification', 'Under-chassis & leakage inspection'],
        warranty: 'Pass-Ready Assurance Report',
        brand: 'All Vehicles'
      },
      {
        id: 'pkg-fit-wash-combo',
        name: 'Ultimate Wash & RTO Renewal Pack',
        type: 'Complete Wash & Fitness Compliance',
        price: 'Inspect & Estimate',
        rating: '5.0',
        features: ['Premium foam & underbody wash', 'Deep interior cabin vacuuming & dressing', 'Authorized emission scan & certificate', 'Physical vehicle representation & RTO booking'],
        warranty: 'End-to-End Compliance & Shine',
        brand: 'All Vehicles'
      }
    ],
    'car-service': [
      {
        id: 'pkg-car-clutch-suspension',
        name: 'Car Clutch & Suspension Package',
        type: 'Underbody Transmission & Suspension Work',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: [
          'Car clutch plate change',
          'Car suspension work',
          'Car denting painting rubbing'
        ],
        warranty: 'Premium Parts & Service Warranty',
        brand: 'Car Service'
      },
      {
        id: 'pkg-car-diagnostics-detailing',
        name: 'Car Scanner Diagnostics & Detailing',
        type: 'Electrical OBD Scan & Interior Deep Clean',
        price: 'Inspect & Estimate',
        rating: '4.8',
        features: [
          'Car scanner Diagnostics',
          'Injector clean only petrol vehicle',
          'Car dryclean'
        ],
        warranty: 'Full Health & Shine Guarantee',
        brand: 'Car Service'
      }
    ],
    oils: [
      {
        id: 'pkg-oils',
        name: 'Premium Automobile Oils & Lubricants',
        type: 'Engine Oils & Fluid Top-ups',
        price: 'Inspect & Estimate',
        rating: '4.9',
        features: [
          'ENG.OIL FULL SYNTHETIC',
          'MOBIL',
          'SERVO',
          'CASTROL'
        ],
        warranty: '100% Genuine Brands Guaranteed',
        brand: 'All Vehicles',
        image: '/autooil.png'
      }
    ]
  };

  return (
    <section id="products" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Pills stacked below typewriter text */}
        <div className="flex flex-col gap-6 mb-12 reveal delay-100">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
              Service Packages
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-500 leading-tight">
              <Typewriter 
                words={[
                  activeTab === 'tyres' ? 'Tyre Care Packages' :
                  activeTab === 'mechanical' ? 'Alignment & Balancing' :
                  activeTab === 'batteries' ? 'Battery Diagnostics' :
                  activeTab === 'car-service' ? 'Car Service' :
                  activeTab === 'wash' ? 'Car Wash' :
                  activeTab === 'fitness' ? 'Fitness Care' :
                  activeTab === 'oils' ? 'Automobile Oils' : 'Maintenance & Care'
                ]}
                loop={false}
              />
            </h2>
            <div className="w-16 h-1 bg-gold-500 mr-auto mt-4 rounded-full" />
          </div>

          {/* Custom Tabs directly below animated text */}
          <div className="flex flex-wrap gap-2 self-start bg-neutral-50 border border-neutral-200/50 p-1.5 rounded-[2rem]">
            <button
              onClick={() => handleTabClick('tyres')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'tyres'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Tyre Care Packages
            </button>
            <button
              onClick={() => handleTabClick('mechanical')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'mechanical'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Alignment & Balancing
            </button>
            <button
              onClick={() => handleTabClick('batteries')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'batteries'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Battery Diagnostics
            </button>
            <button
              onClick={() => handleTabClick('car-service')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'car-service'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Car Service
            </button>
            <button
              onClick={() => handleTabClick('wash')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'wash'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Car Wash
            </button>
            <button
              onClick={() => handleTabClick('fitness')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'fitness'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Fitness Care
            </button>
            <button
              onClick={() => handleTabClick('oils')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-display transition-all duration-300 ${
                activeTab === 'oils'
                  ? 'bg-gold-500 text-white shadow-md shadow-gold-200'
                  : 'text-neutral-600 hover:text-gold-600 hover:bg-gold-50/50'
              }`}
            >
              Automobile Oils
            </button>
          </div>
        </div>

        {/* Packages Grid with Fade Transition */}
        <div className={`transition-all duration-500 ease-in-out ${isFading ? 'opacity-0 scale-[0.99] blur-[2px]' : 'opacity-100 scale-100 blur-none'}`}>
          <div className={`grid grid-cols-1 ${packages[activeTab].length === 1 ? '' : 'lg:grid-cols-2'} gap-8`}>
            {packages[activeTab].map((pkg, index) => (
              <div
                key={pkg.id}
                className="relative group/package reveal delay-200"
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Ambient Rotating Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 via-gold-400 to-slate-400 rounded-3xl filter blur-2xl opacity-20 scale-[1.01] animate-rotate-glow -z-10" />

                <div
                  className="glow-card bg-white rounded-3xl border border-slate-200/60 shadow-sm flex flex-col md:flex-row overflow-hidden min-h-[280px] h-full relative z-10"
                >
                  {pkg.image ? (
                    <>
                      <div className="relative w-full md:w-[40%] h-56 md:h-auto bg-slate-50 shrink-0">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 hover:scale-105"
                          sizes="(max-w-768px) 100vw, 25vw"
                        />
                      </div>
                      {/* Package Details */}
                      <div className="p-6 flex flex-col justify-between flex-1 gap-4 min-w-0">
                        <div className="flex flex-col gap-3 text-left">
                          {/* Level and rating */}
                          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                            <span className="text-gold-600 font-bold font-display">{pkg.brand}</span>
                            <span className="flex items-center gap-1">★ {pkg.rating}</span>
                          </div>

                          {/* Name */}
                          <h3 className="font-display font-bold text-lg text-slate-900 leading-tight group-hover:text-gold-600 transition-colors">
                            {pkg.name}
                          </h3>
                          
                          {/* Type label */}
                          <span className="text-[11px] font-sans font-medium text-slate-500 -mt-2">
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
                        <div className="pt-4 border-t border-slate-100 flex flex-col lg:flex-col xl:flex-row justify-between items-stretch lg:items-stretch xl:items-center gap-3">
                          <div className="flex flex-col text-left">
                            <span className="text-[10px] text-slate-500 font-medium">Service Fee</span>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-display font-semibold text-xs text-gold-600 whitespace-nowrap">{pkg.price}</span>
                              <span className="text-[9px] uppercase font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200/40">Guaranteed</span>
                            </div>
                          </div>

                          <button
                            onClick={() => onInquire(pkg)}
                            className="w-full xl:w-auto inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-gold-500 text-slate-700 hover:text-white border border-slate-200/60 hover:border-gold-500 font-semibold py-2.5 px-5 rounded-xl text-xs transition-all duration-300 group shadow-sm active:scale-95 whitespace-nowrap"
                          >
                            <span>Book Now</span>
                            <MessageSquareCode className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 text-gold-500 group-hover:text-white" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="p-6 flex flex-col justify-between flex-1 gap-4 w-full min-w-0">
                      <div className="flex flex-col gap-3 text-left">
                        {/* Level and rating */}
                        <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                          <span className="text-gold-600 font-bold font-display">{pkg.brand}</span>
                          <span className="flex items-center gap-1">★ {pkg.rating}</span>
                        </div>

                        {/* Name */}
                        <h3 className="font-display font-bold text-lg text-slate-900 leading-tight group-hover:text-gold-600 transition-colors">
                          {pkg.name}
                        </h3>
                        
                        {/* Type label */}
                        <span className="text-[11px] font-sans font-medium text-slate-500 -mt-2">
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
                      <div className="pt-4 border-t border-slate-100 flex flex-col lg:flex-col xl:flex-row justify-between items-stretch lg:items-stretch xl:items-center gap-3">
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] text-slate-500 font-medium">Service Fee</span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-display font-semibold text-xs text-gold-600 whitespace-nowrap">{pkg.price}</span>
                            <span className="text-[9px] uppercase font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200/40">Guaranteed</span>
                          </div>
                        </div>

                        <button
                          onClick={() => {
                            setClickedPackageId(pkg.id);
                            setTimeout(() => {
                              onInquire(pkg);
                            }, 500);
                            setTimeout(() => {
                              setClickedPackageId(null);
                            }, 2000);
                          }}
                          className={`w-full xl:w-auto inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-700 border border-slate-200/60 font-semibold py-2.5 px-5 rounded-xl text-xs transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) group overflow-hidden relative
                            ${clickedPackageId === pkg.id
                              ? 'shadow-[0_0_25px_rgba(218,165,32,0.85)] scale-95 opacity-0 pointer-events-none'
                              : 'shadow-sm hover:shadow-gold-glow hover:bg-gold-500 hover:text-white hover:border-gold-500 active:scale-95'
                            }`}
                        >
                          <span className={`transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${clickedPackageId === pkg.id ? '-translate-x-[60px]' : 'translate-x-0'}`}>
                            Book Now
                          </span>
                          <span className={`transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${clickedPackageId === pkg.id ? 'translate-x-[60px]' : 'translate-x-0'}`}>
                            <MessageSquareCode className="w-3.5 h-3.5 text-gold-500 group-hover:text-white" />
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
