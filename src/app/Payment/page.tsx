// src/app/Payment/page.tsx

"use client";
//import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

export default function PaymentPage() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    cardType: "visa", // Default to visa
  });
  const router = useRouter();

  // Check if all fields are filled
  const formIsValid =
    paymentInfo.cardNumber &&
    paymentInfo.expiryDate &&
    paymentInfo.cvv &&
    paymentInfo.cardholderName;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formIsValid) {
      router.push("/Receipt");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header1 />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg border-2 border-gray-300 px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center hover:text-green-500 hover:scale-y-150">
            Heaven Hills Furniture
          </h2>
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center hover:text-red-500 hover:scale-y-150">
            Payment Details
          </h2>

          {/* Card Type Selection */}
          <div className="mb-6 ">
            <h3 className="block text-gray-500 text-sm font-bold mb-4 hover:text-blue-500 hover:scale-y-150">
              Select Card Type
            </h3>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 ml-6 lg:ml-0 lg:space-x-4 justify-center mb-4">
              <label className="relative flex items-center group">
                <input
                  type="radio"
                  name="cardType"
                  value="visa"
                  checked={paymentInfo.cardType === "visa"}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-40 h-24 rounded-xl flex items-center justify-center cursor-pointer border-2 transition-all duration-200 ${
                    paymentInfo.cardType === "visa"
                      ? "bg-blue-500 border-blue-600"
                      : "bg-white border-gray-300 group-hover:border-blue-400"
                  }`}
                >
                  <span
                    className={`text-lg font-bold ${
                      paymentInfo.cardType === "visa"
                        ? "text-white"
                        : "text-blue-600"
                    }`}
                  >
                    VISA
                  </span>
                </div>
              </label>

              <label className="relative flex items-center group">
                <input
                  type="radio"
                  name="cardType"
                  value="mastercard"
                  checked={paymentInfo.cardType === "mastercard"}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`w-40 h-24 rounded-xl flex items-center justify-center cursor-pointer border-2 transition-all duration-200 ${
                    paymentInfo.cardType === "mastercard"
                      ? "bg-red-500 border-red-600"
                      : "bg-white border-gray-300 group-hover:border-red-400"
                  }`}
                >
                  <span
                    className={`text-lg font-bold ${
                      paymentInfo.cardType === "mastercard"
                        ? "text-white"
                        : "text-red-600"
                    }`}
                  >
                    MASTER
                  </span>
                </div>
              </label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-600 text-sm font-bold mb-2 hover:text-blue-500 hover:scale-y-150"
                htmlFor="cardNumber"
              >
                Card Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardNumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label
                  className="block text-red-600 text-sm font-bold mb-2 hover:text-blue-500 hover:scale-y-150"
                  htmlFor="expiryDate"
                >
                  Expiry Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  name="expiryDate"
                  value={paymentInfo.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block text-blue-600 text-sm font-bold mb-2 hover:text-blue-500 hover:scale-y-150"
                  htmlFor="cvv"
                >
                  CVV
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cvv"
                  type="text"
                  placeholder="123"
                  name="cvv"
                  value={paymentInfo.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-green-600 text-sm font-bold mb-2 hover:text-blue-500 hover:scale-y-150"
                htmlFor="cardholderName"
              >
                Cardholder Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cardholderName"
                type="text"
                placeholder="John Doe"
                name="cardholderName"
                value={paymentInfo.cardholderName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`text-black font-bold px-10 py-3 border-2 rounded-2xl transition-all ${
                  formIsValid
                    ? "bg-blue-300 border-gray-400 hover:bg-orange-300 hover:scale-110"
                    : "bg-gray-200 border-gray-300 cursor-not-allowed"
                }`}
                type="submit"
                disabled={!formIsValid}
              >
                Submit Payment
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}



