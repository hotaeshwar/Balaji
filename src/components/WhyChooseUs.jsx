'use client';

import { ShieldCheck, HeartHandshake, Settings2, Leaf, Clock, ThumbsUp } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: ShieldCheck,
      title: 'Certified Technicians',
      description: 'Our garage crew is trained directly by manufacturers to provide flawless fitting, computerised alignment, and diagnostics for both 2 & 4-wheelers.'
    },
    {
      icon: Settings2,
      title: 'Genuine Service Spares',
      description: 'We utilize original spares (Michelin, CEAT, Exide, Amaron) for all tyre and battery replacements during maintenance, backed by direct manufacturer warranties.'
    },
    {
      icon: HeartHandshake,
      title: 'Customer-First Guarantee',
      description: 'Transparent billing, honest recommendations, and zero hidden charges. We treat every vehicle like it is our own.'
    },
    {
      icon: Leaf,
      title: 'EV Sales & Diagnostics',
      description: 'Authorized dealers for smart electric scooters, providing test rides, warranty registration, software scans, and hub motor repairs.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text and Points */}
          <div className="lg:col-span-7 flex flex-col gap-8 reveal reveal-left delay-100">
            <div className="text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
                Our Values
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
                Why Balaji Autoss is the Preferred Choice
              </h2>
              <div className="w-16 h-1 bg-gold-500 mt-4 rounded-full" />
            </div>

            {/* Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2">
              {points.map((pt, index) => {
                const Icon = pt.icon;
                return (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gold-200/50 flex items-center justify-center text-gold-600 shadow-sm shrink-0 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="font-display font-semibold text-slate-900 text-base mb-1.5">
                        {pt.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Statistics Box */}
          <div className="lg:col-span-5 relative reveal reveal-right delay-200">
            {/* Glowing effect behind */}
            <div className="absolute inset-0 bg-gold-200/20 rounded-[2.5rem] filter blur-xl opacity-30 transform rotate-3" />
            
            {/* Card Content */}
            <div className="relative bg-white border border-gold-200/50 rounded-[2rem] p-10 shadow-xl flex flex-col gap-8 text-left">
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-5 h-5 text-gold-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Performance Milestones
                </span>
              </div>

              {/* Stat 1 */}
              <div className="flex items-baseline gap-2 border-b border-slate-100 pb-5">
                <span className="font-display font-extrabold text-5xl text-slate-900">
                  15+
                </span>
                <span className="font-sans text-sm text-slate-600 font-medium">
                  Years of Unmatched Reputation
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex items-baseline gap-2 border-b border-slate-100 pb-5">
                <span className="font-display font-extrabold text-5xl text-slate-900">
                  10k+
                </span>
                <span className="font-sans text-sm text-slate-600 font-medium">
                  Happy Vehicles Serviced
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex items-baseline gap-2">
                <span className="font-display font-extrabold text-5xl text-slate-900">
                  99%
                </span>
                <span className="font-sans text-sm text-slate-600 font-medium">
                  Direct Customer Retention Rate
                </span>
              </div>

              {/* Banner */}
              <div className="bg-gold-50 border border-gold-200/60 p-4 rounded-xl flex items-center gap-3.5 mt-2">
                <Clock className="w-6 h-6 text-gold-600 shrink-0" />
                <div className="text-xs text-slate-700 leading-normal font-sans">
                  Need emergency battery jumpstart or tyre check? Call our hotline. We are ready to assist.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
