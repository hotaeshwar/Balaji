'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Typewriter from './Typewriter';

// Sub-component for individual video cards to optimize performance (play on viewport intersection only)
function GalleryCard({ video, onClick }) {
  const videoRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '120px', // Load and start playing slightly before it scrolls into the viewport
        threshold: 0.05,
      }
    );

    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isIntersecting) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay was blocked or interrupted:", err);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isIntersecting]);

  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer aspect-video w-full rounded-3xl overflow-hidden shadow-lg border border-slate-100/50 hover:scale-[1.03] transition-all duration-500 bg-slate-950"
    >
      {/* Rotating glow halo at the backside */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 via-gold-400 to-slate-400 opacity-25 filter blur-xl scale-[1.02] animate-rotate-glow -z-10 group-hover:opacity-50 transition-opacity duration-500" />
      
      {/* Autoplay Video Element - only preloads metadata to prevent network choke, uses GPU acceleration */}
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-z-0 backface-hidden"
      />

      {/* Hover Light overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
    </div>
  );
}

export default function Gallery() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(null);

  // Generate array of 17 videos
  const videos = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/galary${i + 1}.mp4`,
    title: `Balaji Autoss Showroom - Video ${i + 1}`
  }));

  const handleVideoClick = (index) => {
    setActiveVideoIdx(index);
  };

  const handleClose = () => {
    setActiveVideoIdx(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveVideoIdx((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveVideoIdx((prev) => (prev + 1) % videos.length);
  };

  // Keyboard navigation inside modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeVideoIdx === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') setActiveVideoIdx((prev) => (prev - 1 + videos.length) % videos.length);
      if (e.key === 'ArrowRight') setActiveVideoIdx((prev) => (prev + 1) % videos.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoIdx, videos.length]);

  return (
    <section className="py-24 bg-white font-sans min-h-screen relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold-50/40 rounded-full filter blur-3xl -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-slate-50/40 rounded-full filter blur-3xl -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
            Our Showroom
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight min-h-[1.5em]">
            <Typewriter 
              words={['Showroom Video Gallery']}
              loop={true}
              typingSpeed={40}
              deletingSpeed={20}
              delayBetween={2000}
            />
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Take a virtual tour of our premium Sector 42 Attawa workshop and electric scooter showroom. Click on any video clip below to play in full screen.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <GalleryCard
              key={vid.id}
              video={vid}
              onClick={() => handleVideoClick(idx)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      {activeVideoIdx !== null && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-fade-in">
          {/* Backdrop Close */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-55 hover:scale-105 active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-55 active:scale-90 hover:scale-105"
            aria-label="Previous Video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-55 active:scale-90 hover:scale-105"
            aria-label="Next Video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Video Box */}
          <div className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center z-50 rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 p-1 sm:p-2">
            <video
              key={videos[activeVideoIdx].src}
              src={videos[activeVideoIdx].src}
              controls
              autoPlay
              className="max-h-[75vh] max-w-full rounded-xl"
            />
            
            {/* Overlay indicators */}
            <div className="absolute bottom-16 left-6 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-left pointer-events-none hidden sm:block">
              <span className="text-[9px] uppercase font-bold text-gold-400 tracking-wider">
                Now Playing ({activeVideoIdx + 1}/17)
              </span>
              <p className="text-xs text-white font-medium truncate max-w-xs mt-0.5">
                {videos[activeVideoIdx].title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
