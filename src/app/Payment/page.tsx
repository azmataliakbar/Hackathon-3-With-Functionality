// src/app/payment/page.tsx
"use client";

import { useState } from "react";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", { method: "POST" });
      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        console.error("Error:", data);
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header1 />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-yellow-50 shadow-lg rounded-lg border-2 border-gray-300 px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">
            Heaven Hills Furniture
          </h2>
          <h2 className="text-2xl font-bold mb-6 text-red-500 text-center">
            Secure Payment via Stripe
          </h2>

          <div className="flex items-center justify-center">
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`text-white text-sm lg:text-xl font-bold px-6 py-3 rounded-lg transition-all ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

