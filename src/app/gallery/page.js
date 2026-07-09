'use client';

import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Spacing to clear the fixed transparent-to-green navbar */}
      <div className="h-[96px] md:h-[112px] xl:h-[115px] bg-slate-50" />

      {/* Main Video Gallery Grid */}
      <Gallery />

      {/* Footer */}
      <Footer />
    </main>
  );
}
