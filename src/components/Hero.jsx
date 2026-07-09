'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Award, Shield, ArrowRight } from 'lucide-react';

const phrases = [
  '4-Wheeler Care & 2-Wheeler EV Scooter Hub'
];

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[loopIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setTypingSpeed(40);
      }, typingSpeed);

      if (currentText === '') {
        setIsDeleting(false);
        setLoopIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(80);
      }
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        setTypingSpeed(80);
      }, typingSpeed);

      if (currentText === currentPhrase) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopIndex, typingSpeed]);

  const renderTypedText = () => {
    const ampersandIndex = currentText.indexOf(' &');
    if (ampersandIndex === -1) {
      return <span className="text-slate-500">{currentText}</span>;
    } else {
      const greenPart = currentText.slice(0, ampersandIndex + 2);
      const redPart = currentText.slice(ampersandIndex + 2);
      return (
        <>
          <span className="text-slate-500">{greenPart}</span>
          <span className="text-gold-600">{redPart}</span>
        </>
      );
    }
  };

  const handleButtonClick = (e, targetId) => {
    e.preventDefault();
    setIsButtonClicked(true);

    // Navigate to target section after animation duration (500ms)
    setTimeout(() => {
      const element = document.getElementById(targetId);
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
    }, 500);

    // Reset button animations after transition completion
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 2000);
  };

  return (
    <section id="home" className="relative bg-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-slate-100">
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
                <Image src="/brand.png" alt="Balaji Autoss Emblem Logo" fill className="object-cover" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600 font-sans">
                Sales & Service Hub
              </span>
            </div>

            {/* Title / Headline with dynamic typewriter effect */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight min-h-[3.6em] sm:min-h-[2.4em] lg:min-h-[3em]">
              {renderTypedText()}
              <span className="typewriter-cursor text-gold-600 ml-1" />
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-slate-500 leading-relaxed max-w-xl">
              Keep your ride running at peak performance. <strong className="text-slate-600 font-semibold">Balaji Autoss</strong> is Sector 42 Attawa&apos;s leading automotive hub, offering certified wheel alignment, battery load tests for both 2-wheelers & 4-wheelers, and authorized sales & service for electric scooters.
            </p>

            {/* Action Buttons with parting-away click animation */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#products"
                onClick={(e) => handleButtonClick(e, 'products')}
                className={`inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-2xl text-sm transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) shadow-lg shadow-slate-900/10 active:scale-95 group
                  ${isButtonClicked 
                    ? '-translate-x-[120px] opacity-0 scale-90 shadow-[0_0_30px_rgba(71,162,105,0.8)]' 
                    : 'translate-x-0 opacity-100 scale-100'
                  }`}
              >
                Schedule Service
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleButtonClick(e, 'contact')}
                className={`inline-flex items-center justify-center border border-gold-300 text-gold-700 hover:bg-gold-50 font-semibold py-3 px-6 rounded-2xl text-sm transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) active:scale-95 shadow-sm
                  ${isButtonClicked 
                    ? 'translate-x-[120px] opacity-0 scale-90 shadow-[0_0_30px_rgba(211,47,47,0.8)]' 
                    : 'translate-x-0 opacity-100 scale-100'
                  }`}
              >
                Book Consultation
              </a>
            </div>

            {/* Small trust anchors */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 mt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Award className="w-4.5 h-4.5 text-gold-500" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">2 & 4-Wheel</span>
                </div>
                <span className="text-[11px] text-slate-600 leading-tight">Full Service Alignment</span>
              </div>
              
              <div className="flex flex-col gap-1 border-x border-slate-100 px-4">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <Shield className="w-4.5 h-4.5 text-gold-500" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">Certified Care</span>
                </div>
                <span className="text-[11px] text-slate-600 leading-tight">Expert Trained Staff</span>
              </div>

              <div className="flex flex-col gap-1 pl-2">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span className="text-gold-500 font-bold text-sm">5★</span>
                  <span className="text-xs font-bold font-display uppercase tracking-wider">Rated Trust</span>
                </div>
                <span className="text-[11px] text-slate-600 leading-tight">10k+ Vehicles Serviced</span>
              </div>
            </div>
          </div>

          {/* Graphical / Image Area with floating animation */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[450px] lg:h-[500px] reveal delay-200 active animate-float">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-400 via-emerald-400 to-red-400 rounded-[2.5rem] filter blur-2xl opacity-30 animate-rotate-glow -z-10" />
            
            {/* Image Container with golden border */}
            <div className="relative w-full h-full border border-gold-300/30 rounded-[2rem] overflow-hidden shadow-2xl bg-black transition-all duration-500 hover:scale-[1.01] hover:border-gold-400 z-10">
              <Image
                src="/home.png"
                alt="Balaji Autoss Premium Showroom & Service Garage with Tyres, Batteries, and EV Scooters"
                fill
                priority
                className="object-contain transition-transform duration-700 hover:scale-105"
                sizes="(max-w-768px) 100vw, 50vw"
              />
            </div>
            
            {/* Quick stats floating tag */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:-bottom-8 lg:-left-8 z-20 bg-white border border-gold-200 shadow-xl px-5 py-3 rounded-2xl flex items-center gap-3">
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
