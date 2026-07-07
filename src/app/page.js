'use client';

import { useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useIntersectionObserver';
import { useRouter, usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedProducts from '@/components/FeaturedProducts';
import EVShowcase from '@/components/EVShowcase';
import TrustBenefits from '@/components/TrustBenefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { X, Calendar, Sparkles, MessageSquareDot, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      router.replace('/home');
    }
  }, [pathname, router]);

  // Activate scroll-reveal animations
  useScrollReveal();

  // Inquiry Modal State
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', message: '' });

  // Test Ride Modal State
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);
  const [selectedScooter, setSelectedScooter] = useState('');
  const [testRideSubmitted, setTestRideSubmitted] = useState(false);
  const [testRideForm, setTestRideForm] = useState({ name: '', phone: '', date: '', time: 'Morning (09:00 AM - 12:00 PM)' });

  // Handlers
  const handleOpenInquiry = (product) => {
    setSelectedProduct(product);
    setInquiryForm({ 
      name: '', 
      phone: '', 
      message: `I would like to book the service package: "${product.name}" (${product.brand}). Please contact me to confirm my appointment slot.` 
    });
    setInquirySubmitted(false);
    setIsInquiryOpen(true);
  };

  const handleOpenTestRide = (scooterName) => {
    setSelectedScooter(scooterName);
    setTestRideForm({ name: '', phone: '', date: '', time: 'Morning (09:00 AM - 12:00 PM)' });
    setTestRideSubmitted(false);
    setIsTestRideOpen(true);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/balajiautosservice@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: inquiryForm.name,
        Phone: inquiryForm.phone,
        Message: inquiryForm.message,
        "Selected Package": selectedProduct?.name,
        _subject: `New Service Package Booking - ${selectedProduct?.name}`
      })
    })
      .then(() => {
        setInquirySubmitted(true);
        setTimeout(() => {
          setIsInquiryOpen(false);
          setInquirySubmitted(false);
        }, 3000);
      })
      .catch(() => {
        setInquirySubmitted(true);
        setTimeout(() => {
          setIsInquiryOpen(false);
          setInquirySubmitted(false);
        }, 3000);
      });
  };

  const handleTestRideSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/balajiautosservice@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: testRideForm.name,
        Phone: testRideForm.phone,
        Date: testRideForm.date,
        "Time Slot": testRideForm.time,
        "EV Scooter / Service Name": selectedScooter,
        _subject: `New EV Scooter Booking/Service Request - ${selectedScooter}`
      })
    })
      .then(() => {
        setTestRideSubmitted(true);
        setTimeout(() => {
          setIsTestRideOpen(false);
          setTestRideSubmitted(false);
        }, 3000);
      })
      .catch(() => {
        setTestRideSubmitted(true);
        setTimeout(() => {
          setIsTestRideOpen(false);
          setTestRideSubmitted(false);
        }, 3000);
      });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <div className="reveal delay-100">
        <Services />
      </div>

      {/* Why Choose Us Section */}
      <div className="reveal delay-100">
        <WhyChooseUs />
      </div>

      {/* Featured Products Section */}
      <div className="reveal delay-100">
        <FeaturedProducts onInquire={handleOpenInquiry} />
      </div>

      {/* EV Showcase Section */}
      <div className="reveal delay-100">
        <EVShowcase onBookTestRide={handleOpenTestRide} />
      </div>

      {/* Trust & Benefits Section */}
      <div className="reveal delay-100">
        <TrustBenefits />
      </div>

      {/* Contact Section */}
      <div className="reveal delay-100">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

      {/* Product Inquiry Modal */}
      {isInquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsInquiryOpen(false)} />
          
          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-md rounded-[2rem] border border-gold-200/50 shadow-2xl p-8 z-10 animate-slide-down text-left font-sans">
            <button
              onClick={() => setIsInquiryOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-bold text-xl text-slate-900">Appointment Requested!</h3>
                  <p className="text-xs text-slate-500 max-w-xs leading-normal">
                    Thank you. We have received your booking request for <strong className="text-slate-800 font-semibold">{selectedProduct?.name}</strong>. Rohit or Vivek will contact you on your mobile shortly to confirm the scheduled slot.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center gap-2">
                  <MessageSquareDot className="w-5 h-5 text-gold-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Service Booking</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 leading-tight">
                    Book: {selectedProduct?.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-gold-600 mt-1 uppercase tracking-wider">
                    Balaji Autoss Service Clinic - {selectedProduct?.brand}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4 text-xs">
                  
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-inq-name" className="font-semibold text-slate-600">Full Name *</label>
                    <input
                      type="text"
                      id="modal-inq-name"
                      required
                      placeholder="Your full name"
                      value={inquiryForm.name}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:bg-white text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-inq-phone" className="font-semibold text-slate-600">Phone Number *</label>
                    <input
                      type="tel"
                      id="modal-inq-phone"
                      required
                      placeholder="Your mobile number"
                      value={inquiryForm.phone}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:bg-white text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-inq-msg" className="font-semibold text-slate-600">Requirements / Message</label>
                    <textarea
                      id="modal-inq-msg"
                      rows="3"
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:bg-white text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-gold-glow flex items-center justify-center gap-1.5 transition-all text-xs tracking-wider uppercase mt-2 active:scale-95"
                  >
                    Confirm Service Booking
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* EV Service Booking Modal */}
      {isTestRideOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsTestRideOpen(false)} />
          
          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-md rounded-[2rem] border border-gold-200/50 shadow-2xl p-8 z-10 animate-slide-down text-left font-sans">
            <button
              onClick={() => setIsTestRideOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {testRideSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 gap-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-display font-bold text-xl text-slate-900">Service Booked!</h3>
                  <p className="text-xs text-slate-500 max-w-xs leading-normal">
                    Excellent choice. Your diagnostic service session for <strong className="text-slate-800 font-semibold">{selectedScooter}</strong> is provisionally booked. Vivek will contact you on your mobile shortly to confirm your check-in slot.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">EV Scooter Diagnostics</span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 leading-tight">
                    Book Service: {selectedScooter}
                  </h3>
                  <p className="text-[11px] font-semibold text-gold-600 mt-1 uppercase tracking-wider">
                    ECU & Mechanical Diagnostics
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleTestRideSubmit} className="flex flex-col gap-4 text-xs">
                  
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-tr-name" className="font-semibold text-slate-600">Full Name *</label>
                    <input
                      type="text"
                      id="modal-tr-name"
                      required
                      placeholder="Your full name"
                      value={testRideForm.name}
                      onChange={(e) => setTestRideForm({ ...testRideForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:bg-white text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="modal-tr-phone" className="font-semibold text-slate-600">Phone Number *</label>
                    <input
                      type="tel"
                      id="modal-tr-phone"
                      required
                      placeholder="Your mobile number"
                      value={testRideForm.phone}
                      onChange={(e) => setTestRideForm({ ...testRideForm, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:bg-white text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  {/* Date and Time slots */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Date */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="modal-tr-date" className="font-semibold text-slate-600">Preferred Date *</label>
                      <input
                        type="date"
                        id="modal-tr-date"
                        required
                        value={testRideForm.date}
                        onChange={(e) => setTestRideForm({ ...testRideForm, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:bg-white text-slate-800"
                      />
                    </div>

                    {/* Time */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="modal-tr-time" className="font-semibold text-slate-600">Time Slot *</label>
                      <select
                        id="modal-tr-time"
                        value={testRideForm.time}
                        onChange={(e) => setTestRideForm({ ...testRideForm, time: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-gold-400 focus:bg-white text-slate-800 font-sans"
                      >
                        <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                        <option value="Midday (12:00 PM - 03:00 PM)">Midday (12:00 PM - 03:00 PM)</option>
                        <option value="Evening (03:00 PM - 06:00 PM)">Evening (03:00 PM - 06:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Checkbox confirmation */}
                  <div className="flex items-start gap-2.5 mt-1">
                    <input
                      type="checkbox"
                      id="modal-tr-check"
                      required
                      className="accent-gold-500 rounded border-slate-300 mt-0.5 shrink-0"
                    />
                    <label htmlFor="modal-tr-check" className="text-[10px] text-slate-500 leading-normal">
                      I confirm that I will bring my electric two-wheeler to the G.T. Road workshop on the scheduled date.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-gold-glow flex items-center justify-center gap-1.5 transition-all text-xs tracking-wider uppercase mt-3 active:scale-95"
                  >
                    Confirm Service Appointment
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919646952897?text=Hello%20Balaji%20Autoss!%20I%20would%20like%20to%20inquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-11 h-11 bg-[#25D366] hover:bg-[#20ba56] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-white">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </main>
  );
}
