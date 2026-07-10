'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

// Custom inline SVG Icons to guarantee compatibility on all devices and package versions
const ShieldCheckIcon = () => (
  <svg className="w-3.5 h-3.5 text-gold-400 shrink-0 inline-block mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FileTextIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CompassIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ScaleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h18" />
  </svg>
);

const sections = [
  { id: 'welcome', label: 'Welcome & Acceptance' },
  { id: 'about', label: '1. About Balaji Autoss' },
  { id: 'acceptance', label: '2. Acceptance of Terms' },
  { id: 'usage', label: '3. Website Usage' },
  { id: 'services', label: '4. Services' },
  { id: 'estimates', label: '5. Service Estimates' },
  { id: 'appointments', label: '6. Appointments & Enquiries' },
  { id: 'availability', label: '7. Product Availability' },
  { id: 'pricing', label: '8. Pricing' },
  { id: 'responsibilities', label: '9. Customer Responsibilities' },
  { id: 'warranty', label: '10. Warranty' },
  { id: 'inspection', label: '11. Vehicle Inspection' },
  { id: 'intellectual-property', label: '12. Intellectual Property' },
  { id: 'third-party-links', label: '13. Third-Party Links' },
  { id: 'disclaimer', label: '14. Disclaimer' },
  { id: 'liability', label: '15. Limitation of Liability' },
  { id: 'privacy', label: '16. Privacy' },
  { id: 'changes-to-terms', label: '17. Changes to Terms' },
  { id: 'governing-law', label: '18. Governing Law' },
  { id: 'contact-us', label: '19. Contact Us' }
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('welcome');

  useEffect(() => {
    document.title = 'Terms & Conditions | Balaji Autoss';
    window.scrollTo(0, 0);
  }, []);

  const handleScrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <Navbar />

      {/* Spacing for Fixed Navbar */}
      <div className="h-[96px] md:h-[112px] xl:h-[120px] bg-slate-900" />

      {/* Hero Header Section */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 border-b border-gold-400/25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-gold-400/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheckIcon /> Legal Framework
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-none">
            Terms & <span className="text-gold-500">Conditions</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Welcome to Balaji Autoss. Please read these terms carefully before accessing or using our services. Your trust and safety are our utmost priority.
          </p>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Sticky Navigation List */}
          <aside className="lg:col-span-4 sticky top-32 hidden lg:block bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm max-h-[calc(100vh-160px)] overflow-y-auto">
            <h2 className="font-display font-bold text-slate-900 text-lg mb-4 flex items-center gap-2 pb-3 border-b border-slate-100">
              <FileTextIcon className="w-5 h-5 text-gold-600" />
              Document Index
            </h2>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleScrollTo(sec.id)}
                  className={`text-left text-xs py-2 px-3.5 rounded-xl font-medium transition-all flex items-center justify-between group ${
                    activeSection === sec.id
                      ? 'bg-gold-50 text-gold-800 shadow-sm border-l-4 border-gold-500 pl-4 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950 hover:pl-4'
                  }`}
                >
                  <span>{sec.label}</span>
                  <ArrowRightIcon className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeSection === sec.id 
                      ? 'opacity-100 translate-x-0 text-gold-600' 
                      : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-slate-400'
                  }`} />
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Column: Terms Text Content */}
          <article className="lg:col-span-8 bg-white border border-slate-200/80 rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm leading-relaxed text-sm sm:text-base text-slate-600">
            
            {/* Welcome Message */}
            <section id="welcome" className="scroll-mt-36 mb-12">
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 sm:p-8">
                <h2 className="font-display font-bold text-xl text-slate-900 mb-3 flex items-center gap-2">
                  <CompassIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                  Website Terms of Use
                </h2>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  Welcome to the Balaji Autoss website. By accessing or using this website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these Terms, please refrain from using this website.
                </p>
              </div>
            </section>

            <div className="space-y-12">
              
              {/* 1. About Balaji Autoss */}
              <section id="about" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  1. About Balaji Autoss
                </h3>
                <p>
                  Balaji Autoss is an automotive service provider offering multi-brand car servicing, tyres & batteries, electric mobility solutions, vehicle washing, denting & painting, insurance assistance, vehicle fitness certificate assistance, and other related automotive services.
                </p>
              </section>

              {/* 2. Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  2. Acceptance of Terms
                </h3>
                <p>
                  By accessing this website, submitting an enquiry, requesting a quotation, booking a service, or communicating with Balaji Autoss through this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
                </p>
              </section>

              {/* 3. Website Usage */}
              <section id="usage" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  3. Website Usage
                </h3>
                <p className="mb-4">Users agree to:</p>
                <ul className="grid grid-cols-1 gap-3.5 pl-1.5">
                  {[
                    "Use the website only for lawful purposes.",
                    "Provide accurate and complete information while submitting enquiries or booking services.",
                    "Not misuse, damage, or interfere with the website or its functionality.",
                    "Not attempt unauthorized access to any part of the website or its servers.",
                    "Not copy, reproduce, or distribute website content without written permission."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3 text-emerald-600" />
                      </span>
                      <span className="text-slate-700 text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 4. Services */}
              <section id="services" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  4. Services
                </h3>
                <p className="mb-4">Balaji Autoss offers automotive-related services, including but not limited to:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1.5">
                  {[
                    "Multi-brand car servicing",
                    "Vehicle maintenance",
                    "Tyres available at Balaji Autoss",
                    "Batteries available at Balaji Autoss",
                    "Electric scooters available at Balaji Autoss",
                    "Car washing",
                    "Denting & painting",
                    "Insurance assistance",
                    "Vehicle fitness certificate assistance"
                  ].map((srv, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                      <span className="text-slate-700 text-sm sm:text-base">{srv}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-500 italic">
                  Availability of services may vary depending on stock, appointments, technician availability, and operational requirements.
                </p>
              </section>

              {/* 5. Service Estimates */}
              <section id="estimates" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  5. Service Estimates
                </h3>
                <p className="mb-3">
                  Any quotation, estimate, or approximate pricing provided through the website, phone, WhatsApp, email, or in person is an estimate only.
                </p>
                <p className="mb-3">
                  Final charges may vary after physical inspection of the vehicle or identification of additional repair requirements.
                </p>
                <p>
                  No additional work will be carried out without informing the customer wherever reasonably possible.
                </p>
              </section>

              {/* 6. Appointments & Enquiries */}
              <section id="appointments" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  6. Appointments & Enquiries
                </h3>
                <p className="mb-3">
                  Appointment requests submitted through the website are considered requests only and are subject to confirmation by Balaji Autoss.
                </p>
                <p>
                  Balaji Autoss reserves the right to reschedule or decline appointments due to operational requirements or unforeseen circumstances.
                </p>
              </section>

              {/* 7. Product Availability */}
              <section id="availability" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  7. Product Availability
                </h3>
                <p className="mb-3">
                  Products displayed on this website are subject to availability.
                </p>
                <p className="mb-3">
                  Any reference to tyres, batteries, electric scooters, or other automotive products indicates their availability at Balaji Autoss and does not constitute a guarantee of stock at all times.
                </p>
                <p>
                  Product specifications, pricing, colours, and availability may change without prior notice.
                </p>
              </section>

              {/* 8. Pricing */}
              <section id="pricing" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  8. Pricing
                </h3>
                <p className="mb-3">
                  Prices displayed on the website, advertisements, or promotional materials are subject to change without prior notice.
                </p>
                <p>
                  Taxes and additional charges, where applicable, may apply.
                </p>
              </section>

              {/* 9. Customer Responsibilities */}
              <section id="responsibilities" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  9. Customer Responsibilities
                </h3>
                <p className="mb-3">Customers are responsible for:</p>
                <ul className="grid grid-cols-1 gap-2.5 pl-1.5 text-sm sm:text-base text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>Providing accurate vehicle information.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>Removing personal belongings before handing over the vehicle.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>Informing Balaji Autoss about any known mechanical or electrical issues.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-gold-500 font-bold shrink-0 mt-0.5">•</span>
                    <span>Collecting the vehicle within the agreed timeline after service completion.</span>
                  </li>
                </ul>
              </section>

              {/* 10. Warranty */}
              <section id="warranty" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  10. Warranty
                </h3>
                <p className="mb-3">
                  Manufacturer warranties, where applicable, shall apply to eligible products available through Balaji Autoss.
                </p>
                <p className="mb-3">
                  Service warranties, if provided, shall be governed by the specific terms communicated at the time of service.
                </p>
                <p>
                  Normal wear and tear, misuse, accidents, unauthorized modifications, or improper maintenance are not covered.
                </p>
              </section>

              {/* 11. Vehicle Inspection */}
              <section id="inspection" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  11. Vehicle Inspection
                </h3>
                <p className="mb-3">
                  Certain repairs or servicing may require additional inspection after work has commenced.
                </p>
                <p>
                  If further repairs become necessary, Balaji Autoss will make reasonable efforts to obtain customer approval before proceeding.
                </p>
              </section>

              {/* 12. Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  12. Intellectual Property
                </h3>
                <p className="mb-3">
                  All website content, including text, graphics, photographs, logos, branding, designs, layouts, and other materials, is the property of Balaji Autoss unless otherwise stated.
                </p>
                <p>
                  No content may be copied, reproduced, modified, or distributed without prior written permission.
                </p>
              </section>

              {/* 13. Third-Party Links */}
              <section id="third-party-links" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  13. Third-Party Links
                </h3>
                <p className="mb-3">
                  This website may contain links to third-party websites for customer convenience.
                </p>
                <p>
                  Balaji Autoss is not responsible for the content, privacy practices, products, or services offered on third-party websites.
                </p>
              </section>

              {/* 14. Disclaimer */}
              <section id="disclaimer" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  14. Disclaimer
                </h3>
                <p className="mb-3">
                  The information provided on this website is for general informational purposes only.
                </p>
                <p className="mb-3">
                  While Balaji Autoss strives to keep all information accurate and up to date, no warranty is made regarding the completeness, reliability, or accuracy of any information.
                </p>
                <p>
                  Vehicle images, product images, and graphics are for illustrative purposes only and may differ from actual products or services.
                </p>
              </section>

              {/* 15. Limitation of Liability */}
              <section id="liability" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  15. Limitation of Liability
                </h3>
                <p className="mb-3">
                  To the maximum extent permitted by law, Balaji Autoss shall not be liable for any indirect, incidental, special, or consequential damages arising from:
                </p>
                <ul className="grid grid-cols-1 gap-2.5 pl-1.5 text-sm sm:text-base text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Use of this website.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Service delays.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Temporary website unavailability.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Inaccurate information provided by users.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold shrink-0">•</span>
                    <span>Third-party products or services.</span>
                  </li>
                </ul>
              </section>

              {/* 16. Privacy */}
              <section id="privacy" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  16. Privacy
                </h3>
                <p className="mb-3">
                  Your use of this website is also governed by our Privacy Policy.
                </p>
                <p>
                  By using this website, you consent to the collection and use of information as described in the Privacy Policy.
                </p>
              </section>

              {/* 17. Changes to Terms */}
              <section id="changes-to-terms" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  17. Changes to Terms
                </h3>
                <p className="mb-3">
                  Balaji Autoss reserves the right to modify or update these Terms & Conditions at any time without prior notice.
                </p>
                <p className="mb-3">
                  Any changes become effective immediately upon publication on this website.
                </p>
                <p>
                  Continued use of the website after changes constitutes acceptance of the revised Terms.
                </p>
              </section>

              {/* 18. Governing Law */}
              <section id="governing-law" className="scroll-mt-36 border-b border-slate-100 pb-10">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-4 tracking-wide">
                  18. Governing Law
                </h3>
                <p className="mb-3">
                  These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.
                </p>
                <p>
                  Any disputes arising from the use of this website shall be subject to the jurisdiction of the competent courts in Chandigarh.
                </p>
              </section>

              {/* 19. Contact Us */}
              <section id="contact-us" className="scroll-mt-36">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 mb-5 tracking-wide flex items-center gap-2">
                  <ScaleIcon className="w-5 h-5 text-gold-600 shrink-0" />
                  19. Contact Us
                </h3>
                
                {/* Premium Contact Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-6 sm:p-8 space-y-6">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-display font-bold text-slate-900 text-lg">Balaji Autoss</h4>
                    <p className="text-xs text-gold-600 uppercase font-semibold tracking-wider">Automotive Sales & Service Hub</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    {/* Address block */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0 border border-gold-100">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">Visit Showroom / Workshop</span>
                        <span className="text-slate-600 mt-1 leading-relaxed">
                          Plot No. 37, Main Road,<br />
                          Sector 42, Attawa,<br />
                          Chandigarh – 160036
                        </span>
                      </div>
                    </div>

                    {/* Phones block */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center shrink-0 border border-gold-100">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800">Call & WhatsApp Support</span>
                        <div className="flex flex-col mt-1 gap-1 text-slate-600">
                          <a href="tel:+919646952897" className="hover:text-gold-600 transition-colors">
                            +91 96469 52897 (Rohit)
                          </a>
                          <a href="tel:+919779606655" className="hover:text-gold-600 transition-colors">
                            +91 97796 06655 (Vivek)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
                    <p>For any questions regarding these Terms & Conditions, please contact us.</p>
                    <a
                      href="mailto:balajiautosservice@gmail.com"
                      className="inline-flex items-center gap-1.5 font-bold text-gold-600 hover:text-gold-700 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" /> balajiautosservice@gmail.com
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </article>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
