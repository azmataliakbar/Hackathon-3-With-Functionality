// src/app/types/products.ts

export interface Product {
  
  id: string;
  name: string;
  slug: string;
  imagePath?: string;
  description: string;
  price: number ;
  discountPercentage: number;
  image: string;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}