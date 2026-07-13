import React from 'react';
import { Product } from '../types';
import { getOrderWhatsAppLink } from '../data';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <div id={`product-card-${product.id}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-dark/50 flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        {product.badge && (
          <div className={`absolute z-10 top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
            product.badge === "Best Seller" ? "bg-burgundy text-white" :
            product.badge === "New Arrival" ? "bg-rose-gold text-white" :
            product.badge === "Premium" ? "bg-charcoal text-white" :
            "bg-blush text-burgundy"
          }`}>
            {product.badge}
          </div>
        )}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          aria-label={`Quick view ${product.name}`}
          className="group/quick absolute inset-0 flex items-end sm:items-center justify-center bg-gradient-to-t from-charcoal/45 via-transparent to-transparent sm:bg-burgundy/0 sm:group-hover:bg-burgundy/40 transition-all duration-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-blush cursor-pointer"
        >
          <span className="mb-4 sm:mb-0 flex items-center gap-2 bg-white group-hover/quick:bg-burgundy text-charcoal group-hover/quick:text-white font-semibold text-sm px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-lg transition-all duration-300 sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-focus-visible/quick:opacity-100 sm:group-focus-visible/quick:translate-y-0">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Quick View
          </span>
        </button>
      </div>
      
      <div className="p-4 lg:p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-medium text-rose-gold bg-blush-light px-2 py-0.5 rounded-full">
            {product.type}
          </span>
          <span className="text-[11px] text-warm-gray">
            {product.material}
          </span>
        </div>
        
        <h3 className="font-display text-lg font-semibold text-charcoal mb-1 leading-tight">
          {product.name}
        </h3>
        
        <p className="text-sm text-warm-gray leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-3 mb-4 text-xs text-charcoal-light mt-auto">
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {product.length}
          </span>
          <span className="w-px h-3 bg-cream-dark" />
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            {product.color}
          </span>
        </div>
        
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-cream-dark/30">
          <div>
            <span className="text-2xl font-display font-bold text-burgundy">
              R{product.price.toLocaleString()}
            </span>
          </div>
          
          <a
            href={getOrderWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 cursor-pointer"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order
          </a>
        </div>
      </div>
    </div>
  );
};
