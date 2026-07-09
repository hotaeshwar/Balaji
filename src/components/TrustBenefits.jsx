'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Typewriter from './Typewriter';

export default function TrustBenefits() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const benefits = [
    'Authorized multi-brand diagnostic scanner equipment and service protocols',
    'State-of-the-art computerised alignment and laser balancing machinery',
    'Official replacement support and service warranty coverage on repairs',
    'Trained technicians specializing in tubeless technology and EV electronics',
    'Comfortable, air-conditioned customer waiting lounge with transparent view'
  ];

  const testimonials = [
    {
      name: 'Amit Sharma',
      role: 'Thar Owner',
      quote: 'Outstanding service! Got my Thar wheels aligned and balanced within 45 minutes. Rohit explained the tread wear patterns and did a thorough alignment check. Transparent pricing and fast service.',
      rating: 5,
      init: 'AS'
    },
    {
      name: 'Priyanka Sen',
      role: 'Aura X Rider',
      quote: 'Excellent EV scooter diagnostics service! Vivek resolved a dashboard warning light and motor lag that other garages couldn\'t diagnose. Truly professional and helpful team.',
      rating: 5,
      init: 'PS'
    },
    {
      name: 'Vikramjeet Singh',
      role: 'Hyundai Creta Owner',
      quote: 'Highly recommended for battery health checks and service. My battery was having starting issues. They load-tested the alternator and battery, recharged it, and cleaned the terminals. Excellent work!',
      rating: 5,
      init: 'VS'
    }
  ];

  // Auto-slide effect for testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIdx];

  return (
    <section className="py-20 bg-white border-b border-slate-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Benefits & Trust - slides in from left */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left reveal reveal-left delay-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
                Our Guarantee
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight min-h-[3.6em] sm:min-h-[2.4em] lg:min-h-[3em]">
                <Typewriter 
                  words={['Quality You Can Trust, Service You Can Count On']}
                  loop={true}
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetween={3000}
                />
              </h2>
              <div className="w-16 h-1 bg-gold-500 mt-4 rounded-full" />
            </div>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Balaji Autoss, we strive to make automotive services stress-free. Every service is backed by our direct-dealer credentials and standard warranties.
            </p>
 
            {/* Checkmark List */}
            <div className="flex flex-col gap-4 mt-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-slate-700 leading-normal">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Customer Reviews - slides in from right */}
          <div className="lg:col-span-6 flex flex-col gap-6 reveal reveal-right delay-200">
            <div className="text-left mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-1">
                Client Testimonials
              </span>
              <h3 className="font-display font-bold text-2xl leading-normal min-h-[1.5em]">
                <Typewriter 
                  words={['What Our Customers Say']}
                  loop={true}
                  typingSpeed={80}
                  deletingSpeed={40}
                  delayBetween={3500}
                />
              </h3>
            </div>

            {/* Testimonial Slider Card with Background Glow */}
            <div className="relative w-full z-10">
              {/* Rotating Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 via-gold-400 to-slate-400 rounded-[2.2rem] filter blur-2xl opacity-30 scale-[1.02] animate-rotate-glow -z-10" />

              <div className="bg-white border border-slate-200/60 rounded-[2rem] p-8 sm:p-10 shadow-xl relative flex flex-col justify-between text-left min-h-[300px] z-10">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-gold-500/10 shrink-0" />

                {/* Review Text */}
                <div className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base italic text-slate-600 leading-relaxed font-sans">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-200/50">
                  <div className="flex items-center gap-4">
                    {/* Initials circle */}
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-300/40 text-gold-700 font-bold font-display text-sm flex items-center justify-center">
                      {activeTestimonial.init}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-display font-bold text-slate-900 text-sm">
                        {activeTestimonial.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase font-sans">
                        {activeTestimonial.role}
                      </span>
                    </div>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevTestimonial}
                      className="w-9 h-9 rounded-full bg-white hover:bg-gold-500 text-slate-700 hover:text-white border border-slate-200 hover:border-gold-500 transition-colors flex items-center justify-center shadow-sm active:scale-90"
                      aria-label="Previous Review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-9 h-9 rounded-full bg-white hover:bg-gold-500 text-slate-700 hover:text-white border border-slate-200 hover:border-gold-500 transition-colors flex items-center justify-center shadow-sm active:scale-90"
                      aria-label="Next Review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
