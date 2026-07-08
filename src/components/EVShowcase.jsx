'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

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
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight">
            Authorized EV Scooter Showroom
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Step into the green future of urban mobility. We are Chandigarh&apos;s leading showroom for premium, high-performance smart electric scooters. Explore our showroom models below.
          </p>
        </div>

        {/* Showcase Carousel */}
        <div className="max-w-4xl mx-auto relative w-full h-[280px] sm:h-[400px] lg:h-[500px] reveal reveal-up delay-300 group/carousel">
          {/* Ambient Background Glow */}
          <div className="absolute inset-0 bg-gold-200/10 rounded-[2rem] filter blur-xl opacity-30 scale-95" />
          
          {/* Image Wrapper */}
          <div className="relative w-full h-full border border-gold-300/30 rounded-[2rem] overflow-hidden shadow-2xl bg-white transition-transform duration-500">
            {evImages.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={src}
                  alt={`EV Scooter Model ${index + 1}`}
                  fill
                  className="object-cover object-center p-0"
                  sizes="(max-w-1024px) 100vw, 80vw"
                  priority={index === 0}
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
