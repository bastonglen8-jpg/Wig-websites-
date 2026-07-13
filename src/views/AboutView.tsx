import React from 'react';
import { getGeneralWhatsAppLink } from '../data';

interface AboutViewProps {
  onNavigate: (page: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const handleShopClick = () => {
    onNavigate("shop");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="about-view" className="pt-20 lg:pt-24">
      {/* Header Banner */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
            Our Story
          </span>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            About honeydollarblends
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            Built with love, passion, and a mission to make every woman feel like royalty.
          </p>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/6923373/pexels-photo-6923373.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
                  alt="Founder of honeydollarblends in her boutique"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
              </div>
              <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl border-2 border-blush" />
            </div>
            
            <div className="text-left">
              <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
                Meet the Founder
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2 mb-6">
                From a Dream to a <span className="italic text-burgundy">Movement</span>
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed text-base">
                <p>
                  honeydollarblends started as a passion project in 2019 when I noticed how hard it was for South African women to find premium quality wigs at fair prices. I was tired of seeing women settle for low-quality wigs that didn't make them feel confident.
                </p>
                <p>
                  As a woman who understands the transformative power of a great wig, I made it my mission to source the finest human hair wigs from trusted suppliers and bring them directly to South African women — without the outrageous markups.
                </p>
                <p>
                  Every wig in our collection is personally handpicked and quality-checked by me. I test them myself before they go to you. Because I believe that every woman deserves to feel beautiful, confident, and empowered — and it starts with wearing your crown.
                </p>
                <p className="font-display text-lg italic text-burgundy font-semibold pt-2">
                  "When you look good, you feel good. And when you feel good, you can conquer the world."
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-cream-dark">
                <p className="font-display text-xl font-semibold text-charcoal">Thandi M.</p>
                <p className="text-warm-gray text-sm">Founder & Owner, honeydollarblends</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2">
              Our Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Quality First",
                description: "We never compromise on quality. Every wig is 100% human hair, carefully sourced and quality-tested. We'd rather have fewer products than sell something we don't believe in."
              },
              {
                icon: "💕",
                title: "Women Empowering Women",
                description: "As a woman-owned business, we understand our customers on a personal level. We're not just selling wigs — we're building confidence and celebrating beauty in all its forms."
              },
              {
                icon: "🤝",
                title: "Honest & Transparent",
                description: "No hidden costs, no bait-and-switch. What you see is what you get. We're upfront about our products, pricing, and policies because trust is everything."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center">
                <span className="text-4xl block mb-4">{value.icon}</span>
                <h3 className="font-display text-xl font-semibold text-charcoal mb-3">{value.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Customers" },
              { number: "1,000+", label: "Wigs Sold" },
              { number: "4.9", label: "Average Rating" },
              { number: "5+", label: "Years in Business" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="font-display text-3xl lg:text-4xl font-bold text-blush">{stat.number}</p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Let's Get You Crowned
          </h2>
          <p className="text-warm-gray text-lg mb-8">
            Ready to experience the honeydollarblends difference? Browse our collection or reach out — we'd love to help you find your perfect wig.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleShopClick}
              className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Shop Now
            </button>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Chat With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
