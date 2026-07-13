import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { AboutView } from './views/AboutView';
import { GalleryView } from './views/GalleryView';
import { HowItWorksView } from './views/HowItWorksView';
import { ContactView } from './views/ContactView';

const VALID_PAGES = ["home", "shop", "about", "gallery", "how-it-works", "contact"];

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    return VALID_PAGES.includes(hash) ? hash : "home";
  });

  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentView = () => {
    switch (currentPage) {
      case "home":
        return <HomeView onNavigate={handleNavigate} />;
      case "shop":
        return <ShopView />;
      case "about":
        return <AboutView onNavigate={handleNavigate} />;
      case "gallery":
        return <GalleryView onNavigate={handleNavigate} />;
      case "how-it-works":
        return <HowItWorksView onNavigate={handleNavigate} />;
      case "contact":
        return <ContactView />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-warm-white text-charcoal select-none antialiased">
      {/* Header / Navigation bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      {/* Main Content View Container */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>
      
      {/* Footer Details */}
      <Footer onNavigate={handleNavigate} />
      
      {/* Floating Action WhatsApp Help Link */}
      <WhatsAppButton />
    </div>
  );
}
