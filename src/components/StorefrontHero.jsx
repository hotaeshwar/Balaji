'use client';

import Image from 'next/image';

export default function StorefrontHero() {
  return (
    <section id="storefront" className="w-full relative bg-white pt-24 md:pt-28 xl:pt-0 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-50/50 rounded-full filter blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-50/30 rounded-full filter blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      {/* Storefront Full Screen Image with exact aspect ratio to prevent zoom */}
      <div className="relative w-full aspect-[990/465] shadow-lg bg-slate-100">
        <Image 
          src="/balaji.png" 
          alt="Balaji Autoss Storefront Workshop and Service Center" 
          fill 
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}
