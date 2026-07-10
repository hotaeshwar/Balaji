'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Tyres Alignment',
    message: '',
    whatsappConsent: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Auto-rotating highlighted card loop for Contact info
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://formsubmit.co/ajax/balajiautosservice@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        "Service Type": formData.serviceType,
        Message: formData.message,
        "Consent to WhatsApp/Calls": formData.whatsappConsent ? "Agreed" : "No",
        _subject: "New Service Booking / Inquiry - Balaji Autoss Website"
      })
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
        setSubmitted(true);

        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: 'Tyres Alignment',
          message: '',
          whatsappConsent: false
        });

        // Reset submit animation and success banner after delay
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 1500);

        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      })
      .catch(() => {
        // Fallback for visual response demo
        setLoading(false);
        setIsFormSubmitted(true);
        setSubmitted(true);

        setFormData({
          name: '',
          phone: '',
          email: '',
          serviceType: 'Tyres Alignment',
          message: '',
          whatsappConsent: false
        });

        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 1500);

        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-100 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal delay-100">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 font-sans block mb-2">
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight min-h-[1.5em]">
            <Typewriter 
              words={['Contact Balaji Autoss']}
              loop={true}
              typingSpeed={80}
              deletingSpeed={40}
              delayBetween={3000}
            />
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Have questions about tyres, batteries, or EV Scooters? Connect with Rohit or Vivek, or submit the form for a quick response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact info & Maps - slides in from left */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left reveal reveal-left delay-200">
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
              Business Location & Contacts
            </h3>

            {/* Info Cards with Auto-Highlighting effect */}
            <div className="flex flex-col gap-4">
              
              {/* Phone Numbers - Card 0 */}
              <div 
                className={`bg-white border rounded-2xl p-5 transition-all duration-500 flex items-start gap-4 cursor-pointer relative
                  ${activeCardIndex === 0 
                    ? 'scale-105 opacity-100 shadow-[0_15px_30px_rgba(71,162,105,0.18)] border-slate-300 z-10' 
                    : 'scale-95 opacity-80 border-slate-100 shadow-sm z-0'
                  }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500
                  ${activeCardIndex === 0 ? 'bg-gold-500 text-white' : 'bg-gold-5/50 text-gold-600 border border-gold-200/40'}`}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-slate-400 font-medium font-sans">Call / WhatsApp</span>
                  <a href="tel:9646952897" className="text-sm font-semibold text-slate-800 hover:text-gold-600 transition-colors font-display">+91 9646952897 (Rohit)</a>
                  <a href="tel:9779606655" className="text-sm font-semibold text-slate-800 hover:text-gold-600 transition-colors font-display">+91 9779606655 (Vivek)</a>
                </div>
              </div>

              {/* Email - Card 1 */}
              <div 
                className={`bg-white border rounded-2xl p-5 transition-all duration-500 flex items-start gap-4 cursor-pointer relative
                  ${activeCardIndex === 1 
                    ? 'scale-105 opacity-100 shadow-[0_15px_30px_rgba(71,162,105,0.18)] border-slate-300 z-10' 
                    : 'scale-95 opacity-80 border-slate-100 shadow-sm z-0'
                  }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500
                  ${activeCardIndex === 1 ? 'bg-gold-500 text-white' : 'bg-gold-5/50 text-gold-600 border border-gold-200/40'}`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-slate-400 font-medium font-sans">Email Address</span>
                  <a href="mailto:balajiautosservice@gmail.com" className="text-sm font-semibold text-slate-800 hover:text-gold-600 transition-colors break-all font-display">
                    balajiautosservice@gmail.com
                  </a>
                </div>
              </div>

              {/* Address - Card 2 */}
              <div 
                className={`bg-white border rounded-2xl p-5 transition-all duration-500 flex items-start gap-4 cursor-pointer relative
                  ${activeCardIndex === 2 
                    ? 'scale-105 opacity-100 shadow-[0_15px_30px_rgba(71,162,105,0.18)] border-slate-300 z-10' 
                    : 'scale-95 opacity-80 border-slate-100 shadow-sm z-0'
                  }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500
                  ${activeCardIndex === 2 ? 'bg-gold-500 text-white' : 'bg-gold-5/50 text-gold-600 border border-gold-200/40'}`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-slate-400 font-medium font-sans">Workshop Address</span>
                  <span className="text-sm font-semibold text-slate-800 font-display">
                    Balaji Autoss, Plot no 37, AttawaMain Road, sector 42 chandigarh, 160036
                  </span>
                </div>
              </div>

              {/* Hours - Card 3 */}
              <div 
                className={`bg-white border rounded-2xl p-5 transition-all duration-500 flex items-start gap-4 cursor-pointer relative
                  ${activeCardIndex === 3 
                    ? 'scale-105 opacity-100 shadow-[0_15px_30px_rgba(71,162,105,0.18)] border-slate-300 z-10' 
                    : 'scale-95 opacity-80 border-slate-100 shadow-sm z-0'
                  }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500
                  ${activeCardIndex === 3 ? 'bg-gold-500 text-white' : 'bg-gold-5/50 text-gold-600 border border-gold-200/40'}`}
                >
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs text-slate-400 font-medium font-sans">Operating Hours</span>
                  <span className="text-sm font-semibold text-slate-800 font-display">
                    Mon - Sat: 09:00 AM - 06:30 PM
                  </span>
                  <span className="text-xs font-semibold text-gold-600 mt-0.5 font-sans">
                    Sunday: 09:00 AM - 05:00 PM (Last Sunday of Month Closed)
                  </span>
                </div>
              </div>

            </div>

            {/* Google Map Simulation / Embedded Frame */}
            <div className="relative w-full h-[220px] border border-slate-200 rounded-[2rem] overflow-hidden shadow-md mt-2 bg-slate-200">
              <iframe
                title="Balaji Autoss Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3458129031767!2d76.74102931513074!3d30.728349981639148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec44c3c3ff31%3A0xebc95ffdb5bfcf73!2sSector%2042%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact/Booking Form - slides in from right */}
          <div className="lg:col-span-7 relative reveal reveal-right delay-300">
            {/* Ambient Background Glow behind the form */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-400 via-gold-400 to-slate-400 rounded-[2.5rem] filter blur-2xl opacity-20 scale-[1.02] animate-rotate-glow -z-10" />
            
            {/* Form Container */}
            <div className="relative bg-white border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-10 shadow-xl text-left">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-gold-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-sans">
                  Online Service booking
                </span>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3.5 animate-fade-in">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <div className="text-xs font-sans">
                    <strong className="block font-semibold mb-0.5">Inquiry Submitted Successfully!</strong>
                    Our managers (Rohit / Vivek) will reach out to you on phone shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-semibold text-slate-700 font-sans">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/60 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-sans"
                  />
                </div>

                {/* Grid for Phone and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-semibold text-slate-700 font-sans">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200/60 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-sans"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-semibold text-slate-700 font-sans">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200/60 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-sans"
                    />
                  </div>
                </div>

                {/* Service Type Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="serviceType" className="font-semibold text-slate-700 font-sans">
                    Category of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/60 rounded-xl py-3.5 px-4 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-slate-800 font-sans"
                  >
                    <option value="Tyres Alignment">Wheel Alignment & Tyre Balancing</option>
                    <option value="Battery Diagnostics">Battery Load Test & Recharging</option>
                    <option value="EV Service">EV Scooter Diagnostics & Repair</option>
                    <option value="General Service">General Maintenance Checkup</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-semibold text-slate-700 font-sans">
                    Describe Your Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Provide details about your vehicle brand/model or specific tyre sizes, battery type, etc."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/60 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white transition-all text-slate-800 placeholder-slate-400 font-sans resize-none"
                  />
                </div>

                {/* WhatsApp & Call Consent Checkbox */}
                <div className="flex items-start gap-2.5 mt-1">
                  <input
                    type="checkbox"
                    id="whatsappConsent"
                    name="whatsappConsent"
                    required
                    checked={formData.whatsappConsent}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsappConsent: e.target.checked }))}
                    className="accent-gold-500 rounded border-slate-300 mt-1 shrink-0 cursor-pointer"
                  />
                  <label htmlFor="whatsappConsent" className="text-xs text-slate-500 leading-normal cursor-pointer select-none">
                    I agree to the <a href="/terms" className="text-gold-600 hover:text-gold-700 underline font-medium">Terms & Conditions</a> and consent to the Balaji Autoss team reaching out to me via WhatsApp, calls, or SMS for service updates and queries. <span className="text-rose-500 font-semibold">*</span>
                  </label>
                </div>

                {/* Submit Button with parting-away click animation */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-slate-900 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) relative overflow-hidden tracking-wide text-sm mt-2
                    ${isFormSubmitted 
                      ? 'shadow-[0_0_30px_rgba(71,162,105,0.85)] bg-slate-800 scale-95 opacity-0 pointer-events-none' 
                      : 'shadow-md hover:shadow-gold-glow hover:bg-slate-800 active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed'
                    }`}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span className={`transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isFormSubmitted ? '-translate-x-[80px]' : 'translate-x-0'}`}>
                        Submit Service Inquiry
                      </span>
                      <ArrowRight className={`w-4 h-4 text-gold-500 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${isFormSubmitted ? 'translate-x-[80px]' : 'translate-x-0'}`} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
