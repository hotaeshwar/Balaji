'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Typewriter from './Typewriter';

// Sub-component for individual video cards designed for high-performance viewport autoplay
function GalleryCard({ video, onClick }) {
  const containerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '200px', // Preload and start playing 200px before scrolling into view to avoid lag
        threshold: 0.1,      // Trigger as soon as the card is slightly visible
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="relative group cursor-pointer aspect-video w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/20 hover:scale-[1.03] transition-all duration-500 bg-slate-950 flex flex-col justify-between"
    >
      {/* Background Gold-Slate Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 via-transparent to-slate-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
      
      {isIntersecting ? (
        /* Video element: mounted and played ONLY when near or in viewport, then unmounted to release all decoder memory */
        <video
          src={video.src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          className="video-preview absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none transform translate-z-0 backface-hidden"
        />
      ) : (
        /* Static placeholder with soft golden spinning loader to prevent blank frames */
        <div className="absolute inset-0 w-full h-full bg-slate-950/40 flex items-center justify-center">
          <div className="relative w-8 h-8 opacity-30">
            <div className="absolute inset-0 rounded-full border border-slate-800" />
            <div className="absolute inset-0 rounded-full border border-t-gold-500 animate-spin" />
          </div>
        </div>
      )}

      {/* Decorative Corner Decals */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-500/20 group-hover:border-gold-500/60 rounded-tl-xl transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-500/20 group-hover:border-gold-500/60 rounded-tr-xl transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-500/20 group-hover:border-gold-500/60 rounded-bl-xl transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-500/20 group-hover:border-gold-500/60 rounded-br-xl transition-colors duration-300" />

      {/* Hover Light overlay */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
    </div>
  );
}

export default function Gallery() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(null);

  // Explicit list of showroom videos
  const videos = [
    { id: 1, src: '/gallery/evvideo.mp4', title: 'Balaji Autoss EV Service Showcase' },
    { id: 2, src: '/gallery/tyre.mp4', title: 'Balaji Autoss Premium Tyre Care' },
    { id: 3, src: '/gallery/video_003_wash.mp4', title: 'Balaji Autoss Premium Car Wash' },
    { id: 4, src: '/gallery/wash2.mp4', title: 'Balaji Autoss Foam Wash Care' },
    { id: 5, src: '/gallery/wash3.mp4', title: 'Balaji Autoss Deep Clean Wash' },
    { id: 6, src: '/gallery/galary8.mp4', title: 'Balaji Autoss Workshop - Video 6' },
    { id: 7, src: '/gallery/galary9.mp4', title: 'Balaji Autoss Workshop - Video 7' },
    { id: 8, src: '/gallery/galary10.mp4', title: 'Balaji Autoss Workshop - Video 8' },
    { id: 9, src: '/gallery/galary11.mp4', title: 'Balaji Autoss Workshop - Video 9' },
    { id: 10, src: '/gallery/galary12.mp4', title: 'Balaji Autoss Workshop - Video 10' },
    { id: 11, src: '/gallery/galary13.mp4', title: 'Balaji Autoss Workshop - Video 11' },
    { id: 12, src: '/gallery/galary14.mp4', title: 'Balaji Autoss Workshop - Video 12' },
    { id: 13, src: '/gallery/galary15.mp4', title: 'Balaji Autoss Workshop - Video 13' },
    { id: 14, src: '/gallery/galary16.mp4', title: 'Balaji Autoss Workshop - Video 14' },
    { id: 15, src: '/gallery/galary17.mp4', title: 'Balaji Autoss Workshop - Video 15' }
  ];

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

  // Lock body scroll when video modal lightbox is active
  useEffect(() => {
    if (activeVideoIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [activeVideoIdx]);

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
              playsInline
              className="max-h-[75vh] max-w-full rounded-xl"
            />
            
            {/* Overlay indicators */}
            <div className="absolute bottom-16 left-6 bg-black/60 px-3 py-1.5 rounded-lg border border-white/10 text-left pointer-events-none hidden sm:block">
              <span className="text-[9px] uppercase font-bold text-gold-400 tracking-wider">
                Now Playing ({activeVideoIdx + 1}/{videos.length})
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
