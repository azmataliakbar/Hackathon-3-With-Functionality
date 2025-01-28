// src/app/admin/inventory/page.tsx

"use client";

import { useEffect, useState } from "react";
import Header1 from '../../components/Header1';
import OurPromise from '../../components/OurPromise';
import Footer from '../../components/Footer'
import axios from "axios";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number | string;
  category?: string;
  stockLevel?: number;
  isFeaturedProduct?: boolean;
}

export default function InventoryPage() {
  // State to store the list of products
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from the API when the component mounts
  

useEffect(() => {
  axios.get("https://template-0-beta.vercel.app/api/product")
    .then((response) => {
      console.log(response.data); // Log the data
      setProducts(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}, []);


  return (
    <>
    <Header1 />
    <div className="p-6">
      <h1 className="lg:text-3xl text-lg font-bold text-yellow-200">Inventory Management: Under Construction</h1>
      <ul className="mt-6">
        {products.map((product) => (
          <li key={product.id} className="mb-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-600">Price: ${product.price}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                // Add functionality to edit the product
                console.log("Edit product:", product.id);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
    <OurPromise />
    <Footer />
    </>
  );
}