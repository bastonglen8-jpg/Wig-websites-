import React, { useState } from 'react';
import { getGeneralWhatsAppLink } from '../data';

export const ContactView: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In local development or static app, we simulate submission successfully
    // We can also let it POST if desired, but a simulated success page is perfect.
    setIsSubmitted(true);
  };

  return (
    <div id="contact-view" className="pt-20 lg:pt-24">
      {/* Header Banner */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            Contact Us
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            Have a question, need help choosing a wig, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Form and Info */}
      <section className="py-16 lg:py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 text-left">
            {/* Left Column: Info cards */}
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-6">
                Let's Connect
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-8">
                The fastest way to reach us is via WhatsApp. We typically respond within 30 minutes during business hours. For general enquiries, you can also use the contact form.
              </p>
              
              {/* WhatsApp direct card */}
              <a
                href={getGeneralWhatsAppLink("Hi! I have a question about your wigs.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-2xl p-5 mb-8 hover:bg-green-100 transition-colors group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-semibold text-green-800 text-lg">Chat on WhatsApp</p>
                  <p className="text-green-700 text-sm">Fastest response • Usually within 30 mins</p>
                </div>
                <svg className="w-5 h-5 text-green-600 ml-auto hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              
              {/* Detailed info items */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blush-light flex items-center justify-center flex-shrink-0 text-burgundy">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Phone</p>
                    <p className="text-charcoal-light text-sm">+27 67 359 8840</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blush-light flex items-center justify-center flex-shrink-0 text-burgundy">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Email</p>
                    <p className="text-charcoal-light text-sm">hello@honeydollarblends.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blush-light flex items-center justify-center flex-shrink-0 text-burgundy">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Location</p>
                    <p className="text-charcoal-light text-sm">
                      Sandton, Johannesburg
                      <br />
                      Gauteng, South Africa
                    </p>
                    <p className="text-xs text-warm-gray mt-1">Collection by appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blush-light flex items-center justify-center flex-shrink-0 text-burgundy">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">Business Hours</p>
                    <p className="text-charcoal-light text-sm">
                      Mon – Fri: 9:00 AM – 6:00 PM
                      <br />
                      Sat: 9:00 AM – 2:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Contact form box */}
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-cream-dark/50 p-6 lg:p-8">
                <h3 className="font-display text-xl font-semibold text-charcoal mb-6">
                  Send Us a Message
                </h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-charcoal mb-2">Message Sent!</h4>
                    <p className="text-warm-gray text-sm lg:text-base">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all text-sm"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="e.g. 082 123 4567"
                          className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all text-sm"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-1.5">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all text-sm"
                      >
                        <option value="">Select a topic</option>
                        <option value="order">Order Enquiry</option>
                        <option value="product">Product Question</option>
                        <option value="custom">Custom Wig Request</option>
                        <option value="returns">Returns & Exchanges</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/30 text-charcoal placeholder:text-warm-gray/50 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-all text-sm resize-none"
                      />
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 rounded border-cream-dark text-burgundy focus:ring-burgundy cursor-pointer"
                      />
                      <label htmlFor="consent" className="text-xs text-warm-gray leading-relaxed text-left cursor-pointer">
                        I consent to honeydollarblends collecting my information to respond to my enquiry, in accordance with POPIA (Protection of Personal Information Act).
                      </label>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-burgundy hover:bg-burgundy-dark text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg text-sm cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
