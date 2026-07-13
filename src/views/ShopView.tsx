import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, getGeneralWhatsAppLink } from '../data';
import { ProductCard } from '../components/ProductCard';
import { QuickViewModal } from '../components/QuickViewModal';

export const ShopView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "Lace Front", "Closure", "Full Lace", "360 Lace", "HD Lace"];

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.type.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
  };

  return (
    <div id="shop-view" className="pt-20 lg:pt-24">
      {/* Header Banner */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-rose-gold text-sm font-medium tracking-[0.2em] uppercase">
            Our Collection
          </span>
          <h1 className="font-display text-3xl lg:text-5xl font-bold text-charcoal mt-2 mb-4">
            Shop Premium Wigs
          </h1>
          <p className="text-warm-gray max-w-2xl mx-auto text-lg">
            Explore our curated collection of premium quality wigs. From sleek straight to bouncy curls — find your perfect match.
          </p>
        </div>
      </section>

      {/* Grid and Filters */}
      <section className="py-10 lg:py-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories bar */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-burgundy text-white shadow-md"
                    : "bg-cream text-charcoal-light hover:bg-blush-light hover:text-burgundy"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
              />
            ))}
          </div>

          {/* No products found feedback */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-warm-gray text-lg">
                No wigs found in this category. Try a different filter.
              </p>
            </div>
          )}

          {/* Custom wig request CTA card */}
          <div className="mt-16 bg-burgundy rounded-2xl p-8 lg:p-12 text-center text-white">
            <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              We can source custom wigs in any length, colour, or style. Just tell us what you want!
            </p>
            <a
              href={getGeneralWhatsAppLink("Hi! I'm looking for a custom wig. Can you help me find what I need? 💕")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Request Custom Wig
            </a>
          </div>
        </div>
      </section>

      {/* Quick view modal */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
