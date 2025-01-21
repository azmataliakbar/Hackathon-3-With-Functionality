"use client";

import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
import Link from "next/link";
//import Header1 from './Header1';
//import OurPromise from './OurPromise';
//import Last from './Footer';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-white">
      {/* <Header1 /> */}
      <div className="p-4 bg-gray-200">
        <h2 className="text-3xl  lg:text-5xl text-orange-800 lg:underline font-bold mb-4 text-center sm:text-left">Checkout Summary</h2>
        {cart.length === 0 ? (
          <p className="text-center text-white">Your cart is empty.</p>
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
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-10 mt-6">
              {/* <Link href="/">
                <button className="text-2xl font-bold bg-green-500 text-white py-3 px-6 rounded-md hover:bg-orange-400 transition duration-300 w-full sm:w-auto">
                  All Products
                </button>
              </Link>
              <Link href="/Message">
                <button className="text-2xl font-bold bg-green-500 text-white py-3 px-10 rounded-md hover:bg-orange-400 transition duration-300 w-full sm:w-auto">
                  Checkout
                </button>
              </Link> */}
            </div>
          </div>
        )}
      </div>

      <div className="px-2">
        <h4 className="text-sm md:text-2xl lg:text-2xl  text-gray-700 font-bold hover:text-blue-500 hover:scale-y-150 md:text-left lg:text-left text-center mt-10">
        Direct Bank Transfer
        </h4>
        <p className="text-gray-700 hover:scale-y-125 text-sm mt-2 mb-4 text-justify">
        Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <p className="text-gray-700 hover:scale-y-125 font-bold text-sm hover:text-blue-500 text-center md:text-left lg:text-left ">Direct Bank Transfer</p>
        <p className="text-gray-700 hover:scale-y-125 font-bold text-sm hover:text-blue-500 text-center md:text-left lg:text-left">Cash On Delivery</p>
        <p className="text-gray-700 hover:scale-y-125 text-sm mt-4 text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
      </div>

      <div className="mt-8 mb-4 flex justify-center items-center  ">
        <Link href="Message" >
        <button
          className=" text-black font-bold px-10 py-3 mt-4 mb-4 bg-green-300 border-2 border-gray-400 rounded-2xl hover:bg-orange-300 hover:scale-110"
          onClick={() => alert("Thank you for placing your order!")}
        >
          Place Order
        </button>
        </Link>
      </div>

      {/* <OurPromise /> */}
      {/* <Last /> */}
    </div>
  );
};

export default CartPage;