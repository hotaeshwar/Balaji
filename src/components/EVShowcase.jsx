'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import Typewriter from './Typewriter';

const evImages = ['/ev1.png', '/ev2.png', '/ev4.png'];

export default function EVShowcase({ onBookTestRide, isModalOpen }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isModalOpen) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % evImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isModalOpen]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + evImages.length) % evImages.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % evImages.length);
  };

  return (
    <section id="ev-showcase" className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal delay-100">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
            Eco-Friendly Mobility Hub
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-500 leading-tight">
            <Typewriter 
              words={['Authorized EV Scooter Showroom']}
              loop={true}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetween={3000}
            />
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Step into the green future of urban mobility. We are Chandigarh&apos;s leading showroom for premium, high-performance smart electric scooters. Explore our showroom models below.
          </p>
        </div>

        {/* Showcase Carousel Container */}
        <div className="max-w-4xl mx-auto relative w-full reveal reveal-up delay-300 group/carousel z-10">
          {/* Ambient Rotating Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 via-gold-400 to-slate-400 rounded-[2rem] filter blur-2xl opacity-40 scale-[1.03] animate-rotate-glow -z-10" />
          
          {/* Image Wrapper */}
          <div className="relative w-full border border-slate-200/60 rounded-[2rem] overflow-hidden shadow-2xl bg-white z-10">
            {/* Invisible spacer image to set the dynamic aspect ratio naturally */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={evImages[currentImageIndex]}
              alt="Spacer"
              className="w-full h-auto opacity-0 block pointer-events-none"
            />

            {evImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`EV Scooter Model ${index + 1}`}
                  className="w-full h-full object-contain block rounded-[2rem]"
                />
              </div>
            ))}
            
            {/* Prev / Next Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-20 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/40 hover:bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 z-20 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Centered CTA Button */}
        {onBookTestRide && (
          <div className="text-center mt-12 reveal delay-400">
            <button
              onClick={() => onBookTestRide('Smart EV Scooter')}
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-gold-glow-lg transition-all duration-300 text-sm sm:text-base active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-5 h-5" />
              Book Test Ride / Consult Sales
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
