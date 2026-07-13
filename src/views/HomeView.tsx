import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, getGeneralWhatsAppLink } from '../data';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';

interface HomeViewProps {
  onNavigate: (page: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };

  // Features benefits array
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Handpicked Quality",
      description: "Every wig is carefully selected and quality-checked before it reaches you."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Local Delivery",
      description: "3-5 day delivery across South Africa. Same-day collection in Joburg."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Easy WhatsApp Ordering",
      description: "No complicated checkout. Just message us on WhatsApp and we'll sort you out."
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Satisfaction Guaranteed",
      description: "We stand behind every wig. Not happy? We'll make it right."
    }
  ];

  // Best Sellers and New Arrivals filter
  const bestSellers = PRODUCTS.filter(p => p.badge === "Best Seller" || p.badge === "New Arrival").slice(0, 4);

  return (
    <div id="home-view" className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/hero_wig_1783981547711.jpg"
            alt="Premium brown wavy wig styled on mannequin by honeydollarblends"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-2xl text-left">
            <div className="animate-fade-in-up">
              <span className="inline-block text-rose-gold-light text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Premium Quality Wigs
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
              Wear Your
              <br />
              <span className="text-blush italic">Crown</span> with
              <br />
              Confidence
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-8 max-w-lg animate-fade-in-up animation-delay-200">
              Discover handpicked, premium quality wigs that make every woman feel like royalty. Delivered across South Africa with love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <button
                onClick={() => {
                  onNavigate("shop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-burgundy/30 text-base cursor-pointer"
              >
                Shop Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/20 text-base cursor-pointer"
              >
                Chat With Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-xs tracking-widest uppercase font-semibold">Scroll</span>
          <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl bg-white/70 hover:bg-white transition-all duration-300 hover:shadow-md group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blush-light flex items-center justify-center text-burgundy group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
              Curated for You
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-4">
              Best Sellers & New Arrivals
            </h2>
            <p className="text-warm-gray max-w-xl mx-auto text-base">
              Our most loved wigs, handpicked by real women just like you. Premium quality that speaks for itself.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button
              onClick={() => {
                onNavigate("shop");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              View All Wigs
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-burgundy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-left">
              <span className="text-rose-gold-light text-sm font-medium tracking-[0.2em] uppercase">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-6 leading-tight">
                Because Every Woman Deserves to Feel <span className="italic text-blush">Beautiful</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "100% Premium Human Hair",
                    desc: "We source only the finest quality human hair from trusted suppliers. No synthetic shortcuts."
                  },
                  {
                    title: "Personally Curated Collection",
                    desc: "Every wig in our collection is personally chosen and tested to meet our high standards."
                  },
                  {
                    title: "Real Support, Real People",
                    desc: "From choosing the right wig to styling tips — we're here for you every step of the way via WhatsApp."
                  },
                  {
                    title: "Affordable Luxury",
                    desc: "Premium quality doesn't have to break the bank. We believe every woman deserves her crown."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-rose-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-base">{item.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6923373/pexels-photo-6923373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
                  alt="honeydollarblends founder in her boutique"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-charcoal rounded-xl p-5 shadow-xl max-w-[220px] text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-display font-semibold">500+ Happy Customers</p>
                <p className="text-xs text-warm-gray">Trusted across South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mb-4">
            Ready to Find Your <span className="italic text-burgundy">Perfect</span> Wig?
          </h2>
          <p className="text-warm-gray text-lg mb-8 max-w-2xl mx-auto">
            Browse our collection or chat with us on WhatsApp. We'll help you find the perfect wig for your style, face shape, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                onNavigate("shop");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-base cursor-pointer"
            >
              Browse Collection
            </button>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl text-base cursor-pointer"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Render Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
