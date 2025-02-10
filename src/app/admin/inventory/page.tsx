"use client";
import { useState } from "react";
import Image from "next/image";
import Header1 from "../../components/Header1";
import Buttons from "../../components/InventoryOrderUserButtons";
import OurPromise from '../../components/OurPromise';
import Footer from "../../components/Footer";

interface Product {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  price: number | string;
  category?: string;
  stockLevel?: number;
  isFeaturedProduct?: boolean;
  discountPercentage: number;
}

const mockProducts: Product[] = [
  {
    "id": "1",
    "name": "Chair Wibe",
    "imagePath": "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1200",
    "description": "A sleek outdoor chair with natural wooden elements and a modern look.",
    "discountPercentage": 10,
    "isFeaturedProduct": true,
    "stockLevel": 25,
    "category": "Chair"
  },
  {
    "id": "2",
    "name": "Armchair Chair Set",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "850",
    "description": "An elegant armchair with plush cushions and a curved design for comfort.",
    "discountPercentage": 0,
    "isFeaturedProduct": false,
    "stockLevel": 10,
    "category": "Chair"
  },
  {
    "id": "3",
    "name": "Pink Lounge Chair",
    "imagePath": "https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1600",
    "description": "A spacious lounge chair with a quilted back and soft cushioning.",
    "discountPercentage": 20,
    "isFeaturedProduct": true,
    "stockLevel": 5,
    "category": "Chair"
  },
  {
    "id": "4",
    "name": "Stylish Armchair",
    "imagePath": "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "780",
    "description": "A luxurious armchair with velvet fabric and golden metal legs.",
    "discountPercentage": 0,
    "isFeaturedProduct": false,
    "stockLevel": 12,
    "category": "Sofa"
  },
  {
    "id": "5",
    "name": "Hans Wegner Style Three-Legged Shell Chair",
    "imagePath": "https://next-ecommerce-template-4.vercel.app/product/Chair (4).png",
    "price": "990",
    "description": "Iconic three-legged chair with faux leather and ash plywood frame.",
    "discountPercentage": 10,
    "isFeaturedProduct": false,
    "stockLevel": 8,
    "category": "Chair"
  },
  {
    "id": "6",
    "name": "Rapson Thirty-Nine Sofa",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1300",
    "description": "A mid-century modern chair with clean lines and durable materials.",
    "discountPercentage": 15,
    "isFeaturedProduct": true,
    "stockLevel": 20,
    "category": "Sofa"
  },
  {
    "id": "7",
    "name": "Nautilus Lounge Chair",
    "imagePath": "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1450",
    "description": "A lounge chair with a shell-inspired design and premium upholstery.",
    "discountPercentage": 12,
    "isFeaturedProduct": true,
    "stockLevel": 10,
    "category": "Sofa"
  },
  {
    "id": "8",
    "name": "High Quality Modern Sofa",
    "imagePath": "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "150",
    "description": "A simple and lightweight chair ideal for dining or casual use.",
    "discountPercentage": 0,
    "isFeaturedProduct": false,
    "stockLevel": 50,
    "category": "Sofa"
  },
  {
    "id": "9",
    "name": "Cozy Sofa",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "520",
    "description": "Compact armchair with a cozy design for small spaces.",
    "discountPercentage": 8,
    "isFeaturedProduct": false,
    "stockLevel": 15,
    "category": "Sofa"
  },
  {
    "id": "10",
    "name": "Alpha Table",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "900",
    "description": "A sturdy oak chair with a sleek and minimalist design.",
    "discountPercentage": 10,
    "isFeaturedProduct": false,
    "stockLevel": 18,
    "category": "Table"
  },
  {
    "id": "11",
    "name": "Replica Table",
    "imagePath": "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "750",
    "description": "Classic wishbone chair with a dark walnut frame and cord seat.",
    "discountPercentage": 10,
    "isFeaturedProduct": false,
    "stockLevel": 25,
    "category": "Table"
  },
  {
    "id": "12",
    "name": "Sleek Modern Table",
    "imagePath": "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "2000",
    "description": "A modern chair with a carbon fiber frame and bold red accents.",
    "discountPercentage": 0,
    "isFeaturedProduct": true,
    "stockLevel": 3,
    "category": "Table"
  },
  {
    "id": "13",
    "name": "Liberty Center",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661962827359-b165dec0850f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1100",
    "description": "Versatile entertainment chair for modern interiors.",
    "discountPercentage": 8,
    "isFeaturedProduct": false,
    "stockLevel": 7,
    "category": "Table"
  },
  {
    "id": "14",
    "name": "Leisure Sofa Chair Set",
    "imagePath": "https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "1800",
    "description": "A comfortable set of chairs with soft cushions for relaxation.",
    "discountPercentage": 18,
    "isFeaturedProduct": true,
    "stockLevel": 6,
    "category": "Sofa"
  },
  {
    "id": "15",
    "name": "Diondre Chair",
    "imagePath": "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "720",
    "description": "A tufted chair with acrylic legs for a chic, modern touch.",
    "discountPercentage": 7,
    "isFeaturedProduct": false,
    "stockLevel": 10,
    "category": "Chair"
  },
  {
    "id": "16",
    "name": "Matilda Velvet Bed",
    "imagePath": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "600",
    "description": "A vibrant pink velvet chair with a retro-inspired design.",
    "discountPercentage": 15,
    "isFeaturedProduct": true,
    "stockLevel": 12,
    "category": "Bed"
  },
  {
    "id": "17",
    "name": "Solid Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "100",
    "description": "Durable and lightweight plastic chair for everyday use.",
    "discountPercentage": 25,
    "isFeaturedProduct": false,
    "stockLevel": 100,
    "category": "Bed"
  },
  {
    "id": "18",
    "name": "White Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661595077028-9ff236368cb5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "120",
    "description": "A foldable wooden bed with a padded seat for extra comfort.",
    "discountPercentage": 12,
    "isFeaturedProduct": false,
    "stockLevel": 30,
    "category": "Bed"
  },
  {
    "id": "19",
    "name": "Red Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1670869816720-de59bfc2be74?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "320",
    "description": "An acrylic dining chair with a sleek and minimalist Nordic design.",
    "discountPercentage": 10,
    "isFeaturedProduct": true,
    "stockLevel": 20,
    "category": "Bed"
  },
  {
    "id": "20",
    "name": "Blue Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1692130314358-30f911957d7f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "780",
    "description": "A modern cantilever chair with a unique floating effect.",
    "discountPercentage": 15,
    "isFeaturedProduct": true,
    "stockLevel": 5,
    "category": "Bed"
  },
  {
    "id": "21",
    "name": "Luxury Flower Bed",
    "imagePath": "https://plus.unsplash.com/premium_photo-1661886455585-03ddf4347796?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "price": "2500",
    "description": "A luxurious shell-shaped chair with gold brass metal legs.",
    "discountPercentage": 0,
    "isFeaturedProduct": true,
    "stockLevel": 2,
    "category": "Bed"
  }
];

export default function InventoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter products by selected category
  const filteredProducts = selectedCategory === "All"
    ? mockProducts
    : mockProducts.filter((product) => product.category === selectedCategory);

  return (
    <>
      <div className="bg-gray-300">
        <Header1 />
        <Buttons />

        {/* Inventory Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 px-2">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow hover:bg-gray-200">
            <h2 className="text-xl text-gray-500 md:text-2xl font-bold mb-2">
              Total Inventory Value
            </h2>
            <p className="text-2xl md:text-4xl font-bold text-orange-500">
              $ 411,470
            </p>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-lg shadow hover:bg-gray-200">
            <h2 className="text-xl text-gray-500 md:text-2xl font-bold mb-2">
              Total Stock Items
            </h2>
            <p className="text-2xl md:text-4xl font-bold text-blue-500">500</p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow mt-4 mx-2">
          <h2 className="text-2xl md:text-4xl text-fuchsia-500 font-bold mb-4">
            Categories
          </h2>
          <div className="space-y-2 md:space-y-4">
            {[
              { name: "Bed", value: 36100 },
              { name: "Chair", value: 149260 },
              { name: "Sofa", value: 75960 },
              { name: "Table", value: 30150 },
              { name: "Uncategorized", value: 120000 },
            ].map((category) => (
              <div
                key={category.name}
                className="flex justify-between items-center p-2 md:p-3 bg-gray-100 rounded hover:bg-gray-200"
              >
                <span className="font-bold text-green-500 text-lg md:text-2xl">
                  {category.name}
                </span>
                <span className="text-red-500 text-lg md:text-2xl font-bold">
                  $ {category.value.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 my-4 font-bold px-2">
          {["All", "Bed", "Chair", "Sofa", "Table"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-gray-200">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md bg-white"
            >
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src={product.imagePath || "https://via.placeholder.com/200"}
                  alt={product.name}
                  fill
                  className="rounded object-cover"
                />
              </div>
              <h2 className="text-lg text-gray-400 font-semibold mt-2">
                {product.name}
              </h2>
              <p className="text-sm text-black">{product.description}</p>
              <p className="font-bold text-red-400">Price: ${product.price}</p>
              {product.discountPercentage > 0 && (
                <p className="text-green-500 font-bold">
                  Discount: {product.discountPercentage}% OFF
                </p>
              )}
              {product.stockLevel !== undefined && (
                <p className="text-sm text-blue-500 font-bold">
                  Stock: {product.stockLevel}
                </p>
              )}
              {product.isFeaturedProduct && (
                <p className="text-fuchsia-500 font-semibold">
                  🌟 Featured Product
                </p>
              )}
            </div>
          ))}
        </div>

        <OurPromise />
        <Footer />
      </div>
    </>
  );
}
