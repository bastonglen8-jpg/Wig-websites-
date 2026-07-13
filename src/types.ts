import React from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  length: string;
  material: string;
  type: string;
  color: string;
  image: string;
  badge?: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  alt: string;
  caption: string;
  style: string;
}

export interface FAQItem {
  q: string;
  a: string;
}
