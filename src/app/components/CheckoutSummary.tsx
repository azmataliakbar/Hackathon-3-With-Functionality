// src/app/components/CheckoutSummary.tsx


"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Update the customerInfo state to include 'phone'
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "", // Added phone field
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Check if the button should be disabled
  const isOrderDisabled =
    cart.length === 0 || !customerInfo.name.trim() || !customerInfo.phone.trim();

  return (
    <div className="bg-white">
      <div className="p-4 bg-gray-200">
        <h2 className="text-3xl lg:text-5xl text-orange-800 lg:underline font-bold mb-4 text-center sm:text-left">
          Checkout Summary
        </h2>
        {cart.length === 0 ? (
          <p className="text-center font-bold text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between border-b border-t py-4"
              >
                <div className="flex items-center justify-between w-full sm:w-auto gap-4 px-2">
                  <div className="flex flex-col gap-2 w-full sm:w-2/3">
                    <p className="text-blue-600 text-lg font-bold">{item.name}</p>
                    <p className="text-green-600 font-bold">ID: {item.id}</p>
                    <span className="text-red-600 text-2xl">★★★★★</span>
                    <p className="text-green-600 font-bold text-2xl">Price: $ {item.price.toFixed(2)}</p>
                  </div>
                  <div className="relative h-[150px] w-[150px] sm:h-[150px] sm:w-[150px] md:h-[150px] md:w-[150px] lg:h-[150px] lg:w-[150px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
                  <p className="text-fuchsia-600 text-2xl font-bold">Quantity</p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 font-bold text-2xl text-black px-4 rounded-md"
                    >
                      -
                    </button>
                    <span className="text-orange-800 font-bold text-2xl">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 font-bold text-2xl text-black px-3 rounded-md"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-3xl text-orange-800 font-bold">Total: $ {subtotal.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>

      {/* Customer Information */}
      <div className="px-2 mt-6">
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Customer Information</h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={customerInfo.name}
            onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
            className="text-gray-500 font-bold border p-2 rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={customerInfo.phone}
            onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
            className="text-gray-500 font-bold border p-2 rounded-lg w-full"
          />
        </div>
      </div>

      {/* Payment and Place Order Button */}
      <div className="mt-8 mb-4 flex justify-center items-center">
        <Link href={isOrderDisabled ? "#" : "/Payment"}>
          <button
            className={`text-black font-bold px-10 py-3 mt-4 mb-4 bg-green-300 border-2 border-gray-400 rounded-2xl hover:bg-orange-300 hover:scale-110 ${
              isOrderDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isOrderDisabled}
            onClick={() =>
              !isOrderDisabled && alert("Thank you for placing your order!")
            }
          >
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;

