import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface GalleryViewProps {
  onNavigate: (page: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onNavigate }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = selectedId !== null
    ? GALLERY_ITEMS.find(item => item.id === selectedId)
    : null;

  return (
    <div id="gallery-view" className="pt-20 lg:pt-24">
      {/* Header Banner */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
            Inspiration
          </span>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            The Crown Gallery
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            Get inspired by our collection of stunning looks. Every queen deserves her crown moment.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 lg:py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedId(item.id)}
              >
                <div className={`relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                  idx % 3 === 0 ? "aspect-[3/4]" : idx % 3 === 1 ? "aspect-[4/5]" : "aspect-square"
                }`}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                      <p className="font-display text-lg font-semibold text-white">
                        {item.caption}
                      </p>
                      <p className="text-white/70 text-sm">
                        {item.style}
                      </p>
                    </div>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 text-center">
            <p className="text-warm-gray text-lg mb-6">
              Love what you see? These looks are all achievable with our premium wigs.
            </p>
            <button
              onClick={() => {
                onNavigate("shop");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              Shop These Looks
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors cursor-pointer focus:outline-none"
              aria-label="Close gallery lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <p className="font-display text-xl font-semibold text-white">
                {selectedItem.caption}
              </p>
              <p className="text-white/60 text-sm">
                {selectedItem.style}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
