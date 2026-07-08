'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, PhoneCall } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [coords, setCoords] = useState({ left: 0, width: 0, opacity: 0 });

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if user scrolled to the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15;
      if (isAtBottom) {
        if (activeSection !== 'contact') {
          setActiveSection('contact');
          window.history.pushState(null, '', '/contact');
        }
        return;
      }

      // Section spy
      const sections = ['home', 'services', 'why-choose-us', 'products', 'ev-showcase', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (activeSection !== section) {
              setActiveSection(section);
              const path = section === 'home' ? '/' : `/${section}`;
              window.history.pushState(null, '', path);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    const updateCoords = () => {
      const activeEl = document.querySelector(`[data-nav-id="${activeSection}"]`);
      if (activeEl) {
        const parent = activeEl.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const rect = activeEl.getBoundingClientRect();
        setCoords({
          left: rect.left - parentRect.left,
          width: rect.width,
          opacity: 1
        });
      } else {
        setCoords((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updateCoords();
    
    // Delayed fallback to handle post-render layout shifts
    const timer = setTimeout(updateCoords, 100);

    window.addEventListener('resize', updateCoords);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateCoords);
    };
  }, [activeSection]);

  useEffect(() => {
    const path = pathname.replace(/^\//, ''); // e.g. "services"
    const section = path === '' || path === 'home' ? 'home' : path;
    setActiveSection(section);
  }, [pathname]);

  // Smooth scroll to the target section on initial load only
  useEffect(() => {
    const path = window.location.pathname.replace(/^\//, '');
    const section = path === '' || path === 'home' ? 'home' : path;
    if (section && section !== 'home') {
      const element = document.getElementById(section);
      if (element) {
        const timer = setTimeout(() => {
          const offset = 76;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Why Us' },
    { id: 'products', label: 'Packages' },
    { id: 'ev-showcase', label: 'EV Care' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetPath = id === 'home' ? '/' : `/${id}`;
    router.push(targetPath, { scroll: false });

    // Smooth scroll to section directly upon clicking
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 76;
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

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-1.5 border-b border-gold-100' 
        : 'bg-white py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="/" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center group shrink-0">
            <div className={`relative transition-all duration-300 group-hover:scale-[1.02] ${
              scrolled 
                ? 'w-[190px] xs:w-[220px] sm:w-[250px] md:w-[200px] lg:w-[260px] xl:w-[290px] h-10 xs:h-11 sm:h-12 md:h-11 lg:h-14 xl:h-16'
                : 'w-[260px] xs:w-[300px] sm:w-[345px] md:w-[290px] lg:w-[370px] xl:w-[430px] h-14 xs:h-16 sm:h-18 md:h-16 lg:h-20 xl:h-24'
            }`}>
              <Image 
                src="/logo.jpeg" 
                alt="Balaji Autoss Logo Banner" 
                fill
                sizes="(max-w-768px) 345px, 430px"
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation Links with Sliding Tab Highlight */}
          <div className="relative hidden xl:flex items-center gap-0.5 lg:gap-1 bg-slate-50/80 border border-slate-100/50 p-1.5 rounded-full shrink-0">
            {/* Sliding Capsule Background */}
            <div 
              className="absolute bg-white shadow-sm border border-gold-200/50 rounded-full transition-all duration-300 ease-out z-0"
              style={{
                left: `${coords.left}px`,
                width: `${coords.width}px`,
                height: 'calc(100% - 12px)',
                top: '6px',
                opacity: coords.opacity
              }}
            />

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id === 'home' ? '/' : `/${link.id}`}
                data-nav-id={link.id}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative px-3 lg:px-4 py-1.5 lg:py-2 font-display text-xs lg:text-sm font-medium rounded-full transition-colors duration-300 z-10 ${
                  activeSection === link.id
                    ? 'text-gold-700 font-semibold'
                    : 'text-slate-600 hover:text-gold-600'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden xl:flex items-center gap-3 lg:gap-4 shrink-0">
            <a 
              href="tel:9646952897" 
              className="flex items-center gap-1.5 text-slate-700 hover:text-gold-600 font-medium text-xs lg:text-sm transition-colors duration-300 whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gold-500 animate-pulse" />
              <span className="hidden xl:inline">Call Rohit:</span> +91 9646952897
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="bg-gold-500 hover:bg-gold-600 active:scale-95 text-white font-semibold px-4 lg:px-5 py-2 lg:py-2.5 rounded-full shadow-sm hover:shadow-gold-glow transition-all duration-300 text-xs lg:text-sm tracking-wide whitespace-nowrap shrink-0 animate-fade-in"
            >
              Book Service
            </a>
          </div>

          {/* Mobile/Tablet/iPad Pro Menu Button (Includes iPad mini, Air, and Pro) */}
          <div className="xl:hidden flex items-center gap-2">
            <a 
              href="tel:9646952897" 
              className="p-2 text-gold-600 hover:bg-gold-50 rounded-full transition-colors duration-300"
              aria-label="Call Balaji Autoss"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-slate-600 hover:text-gold-600 hover:bg-gold-50/50 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet/iPad Pro Menu Panel (Includes iPad mini, Air, and Pro) */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-6 animate-slide-down">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.id === 'home' ? '/home' : `/${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-4 py-3 rounded-xl text-base font-medium font-display transition-colors ${
                  activeSection === link.id
                    ? 'bg-gold-50 text-gold-700 font-semibold border-l-4 border-gold-500'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-gold-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-100 pt-4 mt-2 flex flex-col gap-3">
              <a
                href="tel:9779606655"
                className="flex items-center gap-3 text-slate-700 hover:text-gold-600 font-medium px-4 py-2 rounded-lg"
              >
                <PhoneCall className="w-5 h-5 text-gold-500" />
                <div>
                  <p className="text-xs text-slate-400">Vivek (Mobile)</p>
                  <p className="text-sm">+91 9779606655</p>
                </div>
              </a>
              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-5 rounded-xl shadow-md text-center transition-all duration-300 block"
              >
                Book Service / Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
