// src/app/products/[slug]/ProductClient.tsx ( Display individual product page )

"use client";

import Header1 from '../../components/Header1';
import OurPromise from '../../components/OurPromise';
import Last from '../../components/Footer';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { Product } from "@/app/types/product";

type ProductClientProps = {
  product: Product;
};

export default function ProductClient({ product }: ProductClientProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    const notification = window.confirm(
      "Item added to cart! Would you like to view your cart?"
    );
    if (notification) {
      router.push('/cart');
    }
  };

  return (
    <div>
      <Header1 />
      <div className="p-4 sm:p-6 bg-gray-300">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-[300px] sm:h-[500px] w-full sm:w-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="rounded-lg object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl text-orange-800 font-bold">{product.name}</h2>
              <p className="text-gray-500 text-sm sm:text-base">{product.description}</p>
              <p className="text-fuchsia-600 font-bold text-lg sm:text-base">ID: {product.id}</p>
              <p className="text-2xl text-red-500 font-bold">
                Price: $ {product.price.toFixed(2)}
              </p>

              {/* Discount Percentage */}

                <div className="mt-2">
                  <p className="text-green-600 font-bold text-sm sm:text-base">Discount: {product.discountPercentage || 0}% off</p>
                </div>

              {/* Category / Stock Level / Is Featured Product */}

              <div className="flex flex-col  mt-4">
              <p className="text-red-600 text-2xl">★★★★★</p>
              <p className=" text-purple-600 font-bold mt-2">Category: {product.category}</p>
              <p className=" text-blue-600 font-bold text-sm sm:text-base mt-2">
              Stock Level: {typeof product.stockLevel === 'number' ? product.stockLevel : 'N/A'}
              </p>
              <p className=" text-blue-600 font-bold text-sm sm:text-base mt-2">
                Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}
              </p>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full font-bold bg-green-500 text-white py-3 px-6 rounded-md hover:bg-orange-400 transition duration-300 mt-6 sm:mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <OurPromise />
      <Last />
    </div>
  );
}
