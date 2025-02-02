// src/app/components/ProductGrid.tsx

'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id:string,
  name: string;
  slug: string;
  image: string;
  description: string;
  price: number | string;
  discountPercentage: number | string;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10 px-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const shortDescription = product.description.slice(0, 30);
  const fullDescription = product.description;
  const productSlug = product.slug || product.id;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
      
      <Link href={`/products/${productSlug}`}>
        <div className="relative flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            height={600}
            width={600}
            className="object-fill h-60 w-96 rounded-lg mt-4"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>

        <p className="text-slate-500 text-base mt-2">
          {isExpanded ? fullDescription : `${shortDescription}...`}
        </p>
        <button
          onClick={handleToggle}
          className="text-blue-500 text-sm mt-2 mb-4"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>

            <div className="text-sm text-gray-600 mt-auto mb-4">

            <p className="text-lg font-bold text-gray-400">ID: {product.id}</p>
            <p className="text-xl font-bold mb-1 text-red-500">
              Price: $ {typeof product.price === 'number' ? product.price.toFixed(2) : parseFloat(product.price as string).toFixed(2) || 'N/A'}
            </p>
            <p className="text-lg font-bold text-fuchsia-500 mb-1">Discount: {product.discountPercentage || 0}% off</p>
            
            <p className="text-lg font-bold text-green-500 mb-1">Category: {product.category || 'Uncategorized'}</p>
            <p className="text-lg font-bold text-blue-500 mb-1">Stock Level: {typeof product.stockLevel === 'number' ? product.stockLevel : 'N/A'}</p>
            <p className="text-lg font-bold text-yellow-600">Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>

            </div>
        
        <Link href={`/products/${productSlug}`}>
          <button className="bg-blue-500 font-bold text-white py-2 px-4 rounded-md w-full hover:bg-orange-400">
            Order Now
          </button>
        </Link>
      </div>
      
    </div>
  );
}


