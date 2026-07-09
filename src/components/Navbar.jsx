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
      if (pathname === '/gallery') {
        setActiveSection('gallery');
        setScrolled(window.scrollY > 20);
        return;
      }

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
  }, [activeSection, pathname]);

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
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    if (id === 'gallery') {
      router.push('/gallery');
      return;
    }

    const targetPath = id === 'home' ? '/' : `/${id}`;

    if (pathname === '/gallery') {
      router.push(targetPath);
      return;
    }

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-slate-100/95 backdrop-blur-md shadow-md py-1.5 border-b border-slate-200/70'
        : 'bg-transparent py-4 border-b border-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section - transparent Brand PNG logo */}
          <a href="/" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center group shrink-0">
            <div className={`relative transition-all duration-300 group-hover:scale-[1.05]
              ${scrolled
                ? 'w-[70px] h-[70px] md:w-[80px] md:h-[80px] xl:w-[100px] xl:h-[100px]'
                : 'w-[90px] h-[90px] md:w-[110px] md:h-[110px] xl:w-[140px] xl:h-[140px]'
              }`}
            >
              <Image
                src="/brand.png"
                alt="Balaji Autoss Brand Logo"
                fill
                sizes="(max-w-768px) 90px, (max-w-1280px) 110px, 140px"
                className="object-contain transition-transform duration-300"
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
                className={`relative px-3 lg:px-4 py-1.5 lg:py-2 font-display text-xs lg:text-sm font-medium rounded-full transition-colors duration-300 z-10 ${activeSection === link.id
                    ? 'text-gold-700 font-semibold'
                    : 'text-slate-600 hover:text-gold-600'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile/Tablet/iPad Pro Menu Button (Includes iPad mini, Air, and Pro) */}
          <div className="xl:hidden flex items-center">
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
                className={`px-4 py-3 rounded-xl text-base font-medium font-display transition-colors ${activeSection === link.id
                    ? 'bg-gold-50 text-gold-700 font-semibold border-l-4 border-gold-500'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-gold-600'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}