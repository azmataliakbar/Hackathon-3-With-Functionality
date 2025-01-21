//'use client';

//import { useState } from "react";

import Header1 from './components/Header1';
import OurPromise from './components/OurPromise';
import Footer from './components/Footer'
import { client } from '../sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number | string;
  discountPercentage: number | string;
  image: string;
  category: string;
  stockLevel: number;
  isFeaturedProduct: boolean;
};

export default async function Home() {
  const products: Product[] = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    slug,
    description,
    price,
    discountPercentage,
    "image": image.asset->url,
    category,
    stockLevel,
    isFeaturedProduct
  }`);

  return (
    <div>
      <Header1 />
      
    <div className="container mx-auto px-4 py-8">
      <div className='flex justify-center items-center'>
      <h1 className=" text-orange-500 text-5xl font-bold text-shadow-lg  mb-6">
        <Link href="/AllProducts" >
        All Products
      </Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-md text-blue-300">
            <h2 className="text-xl font-semibold mb-2">{product.name || 'Unnamed Product'}</h2>
            {product.image && (
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name || 'Product Image'}
                  layout="fill"
                  className="object-cover object-center rounded-lg"
                />
              </div>
            )}
            <p className="text-gray-300 mb-2">{product.description || 'No description available'}</p>
            <p className="font-bold mb-1 text-yellow-300">
              Price: ${typeof product.price === 'number' ? product.price.toFixed(2) : parseFloat(product.price as string).toFixed(2) || 'N/A'}
            </p>
            <p className="text-sm text-fuchsia-400 mb-1">Discount: {product.discountPercentage || 0}% off</p>
            
            <p className="text-sm text-green-400 mb-1">Category: {product.category || 'Uncategorized'}</p>
            <p className="text-sm text-gray-300 mb-1">Stock Level: {typeof product.stockLevel === 'number' ? product.stockLevel : 'N/A'}</p>
            <p className="text-sm text-gray-300">Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
            
          <button className="bg-blue-500 font-bold text-white py-2 px-4 rounded-md w-full hover:bg-orange-400">
            Order Now
          </button>
        
          </div>
        ))}

          
      </div>
      
    </div>
    <OurPromise />
    <Footer />
    </div>
  );
}
