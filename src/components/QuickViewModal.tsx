import React, { useEffect, useRef } from 'react';
import { Product } from '../types';
import { getOrderWhatsAppLink } from '../data';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !product) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm cursor-default w-full h-full border-none"
        onClick={onClose}
        aria-label="Close quick view"
      />
      
      <div
        ref={modalRef}
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fade-in-up"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-charcoal hover:text-burgundy hover:bg-white transition-all duration-200 hover:scale-110 cursor-pointer"
          aria-label="Close quick view"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
          <div className="md:w-1/2 relative flex-shrink-0">
            <div className="aspect-[3/4] md:aspect-auto md:h-full bg-cream">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.badge && (
              <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-md ${
                product.badge === "Best Seller" ? "bg-burgundy text-white" :
                product.badge === "New Arrival" ? "bg-rose-gold text-white" :
                product.badge === "Premium" ? "bg-charcoal text-white" :
                "bg-blush text-burgundy"
              }`}>
                {product.badge}
              </div>
            )}
          </div>
          
          <div className="md:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-rose-gold bg-blush-light px-3 py-1 rounded-full">
                  {product.type}
                </span>
                <span className="text-xs text-warm-gray">
                  {product.material}
                </span>
              </div>
              
              <h2 id="quick-view-title" className="font-display text-2xl lg:text-3xl font-bold text-charcoal mb-3 leading-tight">
                {product.name}
              </h2>
              
              <div className="mb-4">
                <span className="text-3xl font-display font-bold text-burgundy">
                  R{product.price.toLocaleString()}
                </span>
              </div>
              
              <p className="text-charcoal-light leading-relaxed mb-6 text-sm lg:text-base">
                {product.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-cream/70 rounded-xl p-3">
                  <p className="text-[11px] text-warm-gray uppercase tracking-wider mb-0.5">Length</p>
                  <p className="text-sm font-semibold text-charcoal">{product.length}</p>
                </div>
                <div className="bg-cream/70 rounded-xl p-3">
                  <p className="text-[11px] text-warm-gray uppercase tracking-wider mb-0.5">Color</p>
                  <p className="text-sm font-semibold text-charcoal">{product.color}</p>
                </div>
                <div className="bg-cream/70 rounded-xl p-3">
                  <p className="text-[11px] text-warm-gray uppercase tracking-wider mb-0.5">Material</p>
                  <p className="text-sm font-semibold text-charcoal">{product.material}</p>
                </div>
                <div className="bg-cream/70 rounded-xl p-3">
                  <p className="text-[11px] text-warm-gray uppercase tracking-wider mb-0.5">Style</p>
                  <p className="text-sm font-semibold text-charcoal">{product.type}</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mb-6 text-xs text-warm-gray">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  In Stock
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Ships in 3-5 days
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Free shipping over R2000
                </span>
              </div>
            </div>
            
            <div className="mt-auto space-y-3">
              <a
                href={getOrderWhatsAppLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-6 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25 text-base cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-cream hover:bg-cream-dark text-charcoal font-medium py-3 px-6 rounded-full transition-all duration-200 text-sm cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
