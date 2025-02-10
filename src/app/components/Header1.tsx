"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from '../context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useCart();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <header className="bg-[#FFFFFF] relative">
        <div className="container mx-auto py-4 flex justify-between items-center">
          {/* Hamburger button for mobile on the left */}
          <button
            type="button"
            className="lg:hidden block text-gray-700 font-bold focus:outline-none absolute right-4 top-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // Cross icon for close
                    : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon for open
                }
              />
            </svg>
          </button>

          {/* Header Title */}
          <div className="flex gap-8 lg:gap-4 items-center">
            <Link href="/" >
            <div>
              <Image
                src="/hhf1.png"
                alt="Logo Shopping"
                width={100}
                height={100}
                className="hover:scale-125 ml-6 rounded-full"
              />
            </div>
              </Link>
              <Link href="/" >
            <div>
              <h2 className="text-2xl mt-1 lg:mt-2 text-yellow-600 hover:text-yellow-800 font-bold text-bg-yellow-100 hover:scale-y-150">Heaven Hills Furniture</h2>
            </div>
            </Link>
          </div>

          {/* Navigation for large screens */}
          <nav className="hidden lg:flex gap-10">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 text-xl font-bold hover:underline hover:scale-125"
            >
              Home
            </Link>
            <Link
                  href="/ProductsDetail"
                  className="text-gray-700 hover:text-blue-600 text-xl font-bold hover:underline hover:scale-125"
                >
                  Shop
            </Link>
            <Link
              href="/About"
              className="text-gray-700 hover:text-blue-600 text-xl font-bold hover:underline hover:scale-125"
            >
              About
            </Link>
            <Link
                  href="/admin"
                  className="text-gray-700 hover:text-blue-600 font-bold text-xl hover:underline hover:scale-125"
                >
                  Admin
                </Link>
            <Link
              href="/Contact"
              className="text-gray-700 hover:text-blue-600 text-xl font-bold hover:underline hover:scale-125"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden lg:flex gap-4 pr-10">
            <Link href="https://moral-longhorn-69.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F">
              <Image
                src="/icon1.png"
                alt="Login Account"
                width={30}
                height={20}
                className="hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icon2.png"
                alt="Search"
                width={30}
                height={20}
                className="hover:scale-125"
              />
            </Link>
            <Link href="/ProductsDetail">
              <Image
                src="/icon3.png"
                alt="Favorite"
                width={30}
                height={20}
                className="hover:scale-125"
              />
              </Link>
            <Link href="/cart" className="relative">
              <Image
                src="/icon4.png"
                alt="Add to Bag"
                width={30}
                height={20}
                className="hover:scale-125"
              />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white font-extrabold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation links */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full bg-gray-300 z-50 mt-24">
            <div className="container mx-auto py-4">
              <button
                type="button"
                className="block ml-auto mb-4 text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Mobile Menu */}
              <nav className="flex flex-col gap-4 pl-2 bg-gray-200">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-500 font-bold text-lg hover:underline hover:scale-y-125"
                >
                  Home
                </Link>
                <Link
                  href="/ProductsDetail"
                  className="text-gray-700 hover:text-blue-500 font-bold text-lg hover:underline hover:scale-y-125"
                >
                  Shop
                </Link>

                <Link
                  href="/About"
                  className="text-gray-700 hover:text-blue-500 font-bold text-lg hover:underline hover:scale-y-125"
                >
                  About
                </Link>
                <Link
                  href="/admin"
                  className="text-gray-700 hover:text-blue-500 font-bold text-lg hover:underline hover:scale-y-125"
                >
                  Admin
                </Link>
                <Link
                  href="/Contact"
                  className="text-gray-700 hover:text-blue-500 font-bold text-lg hover:underline hover:scale-y-125"
                >
                  Contact
                </Link>

                {/* Mobile Icons (Login & Cart) */}
                <div className="flex gap-4 mt-4">
                  <Link href="https://moral-longhorn-69.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F">
                    <Image
                      src="/icon1.png"
                      alt="Login Account"
                      width={30}
                      height={20}
                      className="hover:scale-125"
                    />
                  </Link>
                  <Link href="/cart" className="relative">
                    <Image
                      src="/icon4.png"
                      alt="Add to Bag"
                      width={30}
                      height={20}
                      className="hover:scale-125"
                    />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-white font-extrabold rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

