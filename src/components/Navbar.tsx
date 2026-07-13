import React, { useState, useEffect } from 'react';

interface NavLink {
  id: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Shop" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "how-it-works", label: "How It Works" },
  { id: "contact", label: "Contact" }
];

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 group text-left cursor-pointer border-none bg-transparent p-0 focus:outline-none"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-burgundy flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-display text-sm lg:text-base font-bold">H</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg lg:text-xl font-semibold tracking-tight transition-colors text-charcoal">
                honeydollarblends
              </span>
              <span className="text-[10px] lg:text-xs tracking-[0.2em] uppercase transition-colors text-rose-gold font-semibold">
                Premium Wigs & Blends
              </span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  currentPage === link.id
                    ? "bg-burgundy text-white shadow-sm"
                    : isScrolled
                    ? "text-charcoal hover:text-burgundy hover:bg-blush-light"
                    : "text-charcoal hover:text-burgundy hover:bg-blush-light/50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-blush-light transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-charcoal transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-t border-cream-dark animate-slide-down">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  currentPage === link.id
                    ? "bg-burgundy text-white shadow-sm"
                    : "text-charcoal hover:bg-blush-light hover:text-burgundy"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
