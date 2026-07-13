import { Product, GalleryItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Platinum Blonde Straight",
    description: "Ultra-smooth straight wig in stunning platinum blonde, with a natural-looking lace front hairline. Lightweight and breathable for all-day comfort.",
    price: 2499,
    length: "22 inches",
    material: "100% Human Hair",
    type: "Lace Front",
    color: "Platinum Blonde",
    image: image: "/images/blonde_wig_product_1783981875691.jpg",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Sun-kissed Highlights Wavy",
    description: "Stunning wavy curls with gorgeous honey-blonde and warm chestnut highlights. Styled with rich volume and depth.",
    price: 1899,
    length: "18 inches",
    material: "100% Human Hair",
    type: "4x4 Closure",
    color: "Dark Brown with Honey Highlights",
    image: image: "/images/wavy_highlight_wig_1783982199129.jpg",
    badge: "New Arrival"
  },
  {
    id: 3,
    name: "Copper Ginger Straight",
    description: "Ultra-smooth, luxurious straight lace wig in a vibrant copper ginger auburn shade. Silky, layered ends with supreme natural shine.",
    price: 3299,
    length: "26 inches",
    material: "100% Virgin Human Hair",
    type: "360 Lace",
    color: "Copper Ginger Auburn",
    image: image: "/images/copper_straight_wig_1783982209511.jpg",
    badge: "Best Seller"
  },
  {
    id: 4,
    name: "Chic Bob Lace Front",
    description: "Trendy shoulder-length bob with a flawless lace front. Pre-plucked hairline for instant style.",
    price: 1599,
    length: "12 inches",
    material: "100% Human Hair",
    type: "Lace Front",
    color: "Jet Black (#1)",
    image: "https://images.pexels.com/photos/14916525/pexels-photo-14916525.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
  },
  {
    id: 5,
    name: "Chocolate Brown Wavy",
    description: "Effortless, romantic waves cascading in a beautiful rich chocolate brown tone. Soft, bouncy, and highly versatile.",
    price: 2799,
    length: "20 inches",
    material: "100% Virgin Human Hair",
    type: "Full Lace",
    color: "Chocolate Brown",
    image: image: "/images/chocolate_wavy_wig_1783982220468.jpg",
    badge: "New Arrival"
  },
  {
    id: 6,
    name: "Honey Blonde Straight",
    description: "Stunning honey blonde with dark roots for a modern balayage effect. Silky straight texture.",
    price: 2199,
    length: "24 inches",
    material: "100% Human Hair",
    type: "Lace Front",
    color: "Honey Blonde (#27)",
    image: "https://images.pexels.com/photos/6654715/pexels-photo-6654715.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
  },
  {
    id: 7,
    name: "Water Wave Closure Wig",
    description: "Elegant water wave pattern with a 5x5 HD lace closure. Melts into the skin for an undetectable finish.",
    price: 2099,
    length: "20 inches",
    material: "100% Human Hair",
    type: "5x5 HD Closure",
    color: "Off Black (#1B)",
    image: "https://images.pexels.com/photos/7153216/pexels-photo-7153216.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
  },
  {
    id: 8,
    name: "Long Straight Lace Front",
    description: "Dramatic floor-length straight wig with invisible lace front. For the woman who loves to turn heads.",
    price: 3499,
    length: "30 inches",
    material: "100% Virgin Human Hair",
    type: "13x6 Lace Front",
    color: "Natural Black",
    image: "https://images.pexels.com/photos/12062664/pexels-photo-12062664.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    badge: "Premium"
  },
  {
    id: 9,
    name: "Pixie Cut Lace Front",
    description: "Bold and beautiful pixie cut with lace front. Low maintenance, high impact. Perfect for summer.",
    price: 1299,
    length: "6 inches",
    material: "100% Human Hair",
    type: "Lace Front",
    color: "Jet Black (#1)",
    image: "https://images.pexels.com/photos/16658734/pexels-photo-16658734.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
  },
  {
    id: 10,
    name: "Loose Wave HD Lace",
    description: "Romantic loose waves with premium HD lace that's invisible on all skin tones. Red carpet ready.",
    price: 2899,
    length: "22 inches",
    material: "100% Virgin Human Hair",
    type: "13x4 HD Lace",
    color: "Dark Brown (#2)",
    image: "https://images.pexels.com/photos/10883267/pexels-photo-10883267.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
  },
  {
    id: 11,
    name: "Burgundy Body Wave",
    description: "Rich burgundy colour with gorgeous body wave texture. Stand out from the crowd with this showstopper.",
    price: 2399,
    length: "20 inches",
    material: "100% Human Hair",
    type: "Lace Front",
    color: "Burgundy (#99J)",
    image: "https://images.pexels.com/photos/6757349/pexels-photo-6757349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    badge: "Trending"
  },
  {
    id: 12,
    name: "Natural Afro Curly",
    description: "Celebrate natural beauty with this stunning afro curly wig. Full, bouncy, and absolutely gorgeous.",
    price: 1999,
    length: "16 inches",
    material: "100% Human Hair",
    type: "Full Lace",
    color: "Natural Black",
    image: "https://images.pexels.com/photos/1852947/pexels-photo-1852947.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/37982905/pexels-photo-37982905.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Woman with flowing hair in elegant black dress",
    caption: "Silky Straight Perfection",
    style: "Straight Lace Front"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/34534599/pexels-photo-34534599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Elegant woman in warm toned fashion portrait",
    caption: "Everyday Elegance",
    style: "Body Wave"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/20644320/pexels-photo-20644320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Black woman with elegant braid looking thoughtful",
    caption: "Natural Beauty",
    style: "Braided Style"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/34151769/pexels-photo-34151769.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Portrait of woman with modern jewelry",
    caption: "Glamour Night Out",
    style: "Closure Wig"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/7194457/pexels-photo-7194457.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Stylish Black woman in studio",
    caption: "Bold & Beautiful",
    style: "Straight Bob"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/7466287/pexels-photo-7466287.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "African American woman posing elegantly",
    caption: "Queen Energy",
    style: "Long Curly"
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/20756313/pexels-photo-20756313.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Stunning portrait of woman with confidence",
    caption: "Effortless Beauty",
    style: "Deep Wave"
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/5620190/pexels-photo-5620190.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Woman posing with elegance and confidence",
    caption: "Timeless Glamour",
    style: "Body Wave Lace Front"
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/15868320/pexels-photo-15868320.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
    alt: "Fashionable woman displaying hair extensions",
    caption: "The Wig Life",
    style: "Hair Extensions"
  }
];

export const getOrderWhatsAppLink = (product: Product) => {
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `${window.location.origin}${product.image}`;

  const text = encodeURIComponent(`Hi! I would like to order:
👑 Wig: ${product.name}
🎨 Color: ${product.color}
📏 Length: ${product.length}
💰 Price: R${product.price.toLocaleString()}

📷 View Product Image: ${imageUrl}

Please send me payment and delivery details. 🙏`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};
