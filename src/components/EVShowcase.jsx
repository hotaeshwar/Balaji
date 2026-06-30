'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Gauge, Zap, BatteryCharging, ShieldAlert, Sparkles, Navigation, Calendar, Settings } from 'lucide-react';

export default function EVShowcase({ onBookTestRide }) {
  const [selectedCategory, setSelectedCategory] = useState('sales');
  const [subModel, setSubModel] = useState('premium');

  const contentData = {
    sales: {
      tagline: 'Authorized Sales & Dealership',
      title: 'Smart Electric Scooters for Sale',
      description: 'Step into the green future of urban mobility. We are authorized dealers for premium, high-performance smart electric scooters equipped with modern smart dashboards, cellular GPS navigation, and reliable lithium-ion cells.',
      premium: {
        name: 'Premium Smart EV Scooter',
        price: 'Inquire at Showroom',
        battery: 'High-Capacity Lithium-Ion (IP67 waterproof)',
        warranty: '3 Years on Battery & Hub Motor',
        specs: [
          { label: 'Certified Range', value: 'High Range Capacity', icon: Navigation },
          { label: 'Peak Power', value: 'High-Torque Hub Motor', icon: Zap },
          { label: 'Charging Time', value: 'Fast Charge Support', icon: BatteryCharging },
          { label: 'Max Velocity', value: 'Optimized Speed Governors', icon: Gauge },
        ],
        ctaText: 'Book Test Ride / Consult Sales'
      },
      standard: {
        name: 'Standard Commuter EV Scooter',
        price: 'Inquire at Showroom',
        battery: 'Standard Modular Lithium-Ion (IP67 waterproof)',
        warranty: '3 Years on Battery & Hub Motor',
        specs: [
          { label: 'Certified Range', value: 'Eco Range Capacity', icon: Navigation },
          { label: 'Peak Power', value: 'Efficient Urban Motor', icon: Zap },
          { label: 'Charging Time', value: 'Standard Charging', icon: BatteryCharging },
          { label: 'Max Velocity', value: 'City Commuter Tuned', icon: Gauge },
        ],
        ctaText: 'Book Test Ride / Consult Sales'
      }
    },
    servicing: {
      tagline: 'Certified EV Diagnostic Clinic',
      title: 'Expert EV Diagnostics & Repair',
      description: 'We host Chandigarh Sector 42\'s premier electric two-wheeler service clinic. Our technicians are factory-trained to perform advanced OBD system scans, lithium cell load tests, and mechanical hub motor bearing repairs for all major brands.',
      premium: { // OBD Scan
        name: 'OBD ECU System Scan & Update',
        price: 'Provided Post-Inspection',
        battery: 'Throttle & Safety Sensor Diagnostics',
        warranty: 'Service Warranty Included',
        specs: [
          { label: 'Diagnostics Type', value: 'Full ECU & OBD Scan', icon: Settings },
          { label: 'Sensor Tuning', value: 'Brake-Cut & Stand Sensor', icon: ShieldAlert },
          { label: 'Throttle Sync', value: 'Voltage Level Matching', icon: Gauge },
          { label: 'Firmware Audit', value: 'ECU Error Logs Reset', icon: Zap },
        ],
        ctaText: 'Book OBD Diagnostics Session'
      },
      standard: { // Battery Balancing
        name: 'Cell Balancing & Hub Motor Service',
        price: 'Provided Post-Inspection',
        battery: 'Cell Voltage Balancing & load Check',
        warranty: 'Service Warranty Included',
        specs: [
          { label: 'Battery Check', value: 'Cell Leveling Diagnostics', icon: BatteryCharging },
          { label: 'Hub Motor', value: 'Bearings Grease & Audit', icon: Settings },
          { label: 'Brake Tuning', value: 'Magnetic Regen Calibration', icon: Navigation },
          { label: 'Thermal Checks', value: 'Load Temp Verification', icon: Zap },
        ],
        ctaText: 'Book Battery & Motor Servicing'
      }
    }
  };

  const currentCategory = contentData[selectedCategory];
  const activeDetail = subModel === 'premium' ? currentCategory.premium : currentCategory.standard;

  return (
    <section id="ev-showcase" className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal delay-100">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
            Eco-Friendly Mobility Hub
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            EV Scooters: Sales & Servicing
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            We are your complete destination for smart electric two-wheelers. Buy a next-generation electric scooter with extended warranties, or book your existing ride for professional diagnostics and repairs.
          </p>
        </div>

        {/* Main Category Selector Toggle */}
        <div className="flex flex-col items-center gap-6 mb-12 reveal delay-150">
          <div className="inline-flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm">
            <button
              onClick={() => {
                setSelectedCategory('sales');
                setSubModel('premium');
              }}
              className={`px-6 py-3 rounded-xl text-sm font-bold font-display transition-all duration-300 ${
                selectedCategory === 'sales'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-gold-600'
              }`}
            >
              Buy Smart EV Scooters
            </button>
            <button
              onClick={() => {
                setSelectedCategory('servicing');
                setSubModel('premium');
              }}
              className={`px-6 py-3 rounded-xl text-sm font-bold font-display transition-all duration-300 ${
                selectedCategory === 'servicing'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-gold-600'
              }`}
            >
              EV Repair & Diagnostics
            </button>
          </div>

          {/* Sub-selector for model/service tier */}
          <div className="flex gap-4">
            <button
              onClick={() => setSubModel('premium')}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-300 ${
                subModel === 'premium'
                  ? 'bg-gold-50 text-gold-700 border-gold-400 font-bold'
                  : 'bg-white text-slate-500 border-slate-200 hover:text-gold-600'
              }`}
            >
              {selectedCategory === 'sales' ? 'Premium Smart EV' : 'OBD System Scan'}
            </button>
            <button
              onClick={() => setSubModel('standard')}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-300 ${
                subModel === 'standard'
                  ? 'bg-gold-50 text-gold-700 border-gold-400 font-bold'
                  : 'bg-white text-slate-500 border-slate-200 hover:text-gold-600'
              }`}
            >
              {selectedCategory === 'sales' ? 'Standard Commuter EV' : 'Battery & Motor Care'}
            </button>
          </div>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left reveal reveal-left delay-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 border border-gold-200/50 px-3 py-1 rounded-full">
                {currentCategory.tagline}
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4">
                {activeDetail.name}
              </h3>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {activeDetail.specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div key={index} className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-50/50 text-gold-600 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-slate-400 font-medium">{spec.label}</span>
                      <span className="text-sm font-bold text-slate-800 leading-tight">{spec.value}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Extra Specifications Table */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm mt-2 flex flex-col gap-2">
              <div className="flex justify-between items-center text-xs py-1.5 border-b border-slate-50">
                <span className="text-slate-400 font-medium">
                  {selectedCategory === 'sales' ? 'Battery Tech Details' : 'Diagnostic Audit'}
                </span>
                <span className="text-slate-800 font-semibold">{activeDetail.battery}</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5">
                <span className="text-slate-400 font-medium">Warranty Coverage</span>
                <span className="text-slate-800 font-semibold">{activeDetail.warranty}</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1.5 border-t border-slate-50 mt-1 pt-1.5">
                <span className="text-slate-400 font-medium">Cost Estimate</span>
                <span className="text-gold-700 font-bold text-sm">{activeDetail.price}</span>
              </div>
            </div>

            {/* Interactive CTA Section */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={() => onBookTestRide(activeDetail.name)}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3.5 rounded-full shadow-md hover:shadow-gold-glow-lg transition-all duration-300 text-sm active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                {activeDetail.ctaText}
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 px-6 py-3.5 rounded-full shadow-sm transition-all duration-300 text-sm"
              >
                Contact Attawa Showroom
              </a>
            </div>

            <p className="text-[10px] text-slate-400 italic">
              * Services and sales consultation provided on site. Tax and replacement hardware components extra.
            </p>
          </div>

          {/* Right Side: Showcase Image */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[460px] reveal reveal-right delay-300">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gold-200/20 rounded-[2rem] filter blur-xl opacity-40 scale-95" />
            
            {/* Image Wrapper with Golden Accents */}
            <div className="relative w-full h-full border border-gold-300/30 rounded-[2rem] overflow-hidden shadow-2xl bg-white transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/ev_scooter_showcase.png"
                alt="Balaji Autoss Smart EV Scooter Sales and Diagnostic Workshop: Modern electric scooter under showroom led highlights"
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 40vw"
              />
              
              {/* Overlay Badges */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg border border-slate-700/50 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                Sales & Servicing Center
              </div>

              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-slate-800 text-[10px] font-bold px-3 py-2 rounded-xl shadow-lg border border-gold-200/50 flex flex-col items-start gap-0.5">
                <span className="text-gold-600 uppercase tracking-widest text-[8px] font-bold">Authorized Center</span>
                <span>Sector 42, Attawa</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
