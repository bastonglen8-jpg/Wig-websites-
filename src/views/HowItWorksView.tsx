import React from 'react';
import { getGeneralWhatsAppLink } from '../data';

interface HowItWorksViewProps {
  onNavigate: (page: string) => void;
}

export const HowItWorksView: React.FC<HowItWorksViewProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Browse & Choose",
      description: "Explore our collection on the website or ask us for recommendations via WhatsApp. We'll help you find the perfect wig based on your style, face shape, and budget.",
      tip: "Not sure what suits you? Send us a photo and we'll give you personalised suggestions!"
    },
    {
      number: "02",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Order via WhatsApp",
      description: "Click the 'Order on WhatsApp' button on any product. A pre-filled message will open in WhatsApp. Simply send it and we'll confirm your order, answer any questions, and send you payment details.",
      tip: "We accept EFT, Capitec Pay, and instant bank transfers."
    },
    {
      number: "03",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Secure Payment",
      description: "Once you've confirmed your order, we'll send you our banking details. Make a secure payment via EFT or instant transfer. Send us proof of payment and you're all set!",
      tip: "We'll send you a payment confirmation within 30 minutes."
    },
    {
      number: "04",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Delivery or Pickup",
      description: "We ship nationwide via courier (3-5 business days). Or collect for free from our location in Sandton, Johannesburg. Your wig arrives beautifully packaged and ready to slay!",
      tip: "Free shipping on all orders over R2,000! 🎉"
    }
  ];

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Nationwide delivery takes 3-5 business days. Same-day collection is available in Sandton, Johannesburg."
    },
    {
      q: "Can I return or exchange a wig?",
      a: "Yes! We accept returns within 7 days of delivery, provided the wig is unworn and in its original packaging. Exchanges are also welcome."
    },
    {
      q: "Are your wigs really human hair?",
      a: "Absolutely. Every wig in our collection is made from 100% human hair. We never sell synthetic wigs or misrepresent our products."
    },
    {
      q: "Do you offer payment plans?",
      a: "We're working on lay-by options. For now, we accept full payment via EFT. Chat with us on WhatsApp to discuss options."
    },
    {
      q: "Can you help me choose the right wig?",
      a: "Of course! Send us a photo of yourself on WhatsApp and we'll give you personalised recommendations based on your face shape, skin tone, and style preferences."
    }
  ];

  return (
    <div id="how-it-works-view" className="pt-20 lg:pt-24">
      {/* Header Banner */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
            Simple & Easy
          </span>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            How It Works
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            Getting your dream wig is easier than you think. Just 4 simple steps and you're ready to slay.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 text-left">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-burgundy flex items-center justify-center text-white shadow-lg shadow-burgundy/20">
                    <span className="font-display text-2xl lg:text-3xl font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-rose-gold">
                      {step.icon}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-charcoal">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-charcoal-light leading-relaxed mb-4 text-base">
                    {step.description}
                  </p>
                  
                  <div className="bg-blush-light/50 rounded-xl p-4 border border-blush/30">
                    <p className="text-sm text-burgundy flex items-start gap-2">
                      <span className="text-base mt-px">💡</span>
                      <span className="italic">{step.tip}</span>
                    </p>
                  </div>
                </div>
                
                {/* Connecting Line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute left-8 lg:left-10 top-20 lg:top-24 w-0.5 h-[calc(100%-2rem)] bg-gradient-to-b from-burgundy/30 to-transparent" />
                )}
              </div>
            ))}
          </div>

          {/* Quick CTA Box */}
          <div className="mt-16 text-center bg-cream rounded-2xl p-8 lg:p-12">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-warm-gray mb-6 max-w-lg mx-auto">
              It's as simple as sending a message. Click below to start shopping or chat with us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  onNavigate("shop");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Browse Wigs
              </button>
              <a
                href={getGeneralWhatsAppLink("Hi! I'd like to order a wig. Can you walk me through the process? 😊")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Start on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-charcoal mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl shadow-sm border border-cream-dark/50 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 lg:p-6 font-display font-semibold text-charcoal hover:text-burgundy transition-colors list-none focus:outline-none">
                  <span className="pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 text-warm-gray group-open:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-charcoal-light leading-relaxed text-sm lg:text-base border-t border-cream/50 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
