// src/app/components/CheckoutForm.tsx

"use client";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Pakistan",
    streetAddress: "",
    city: "",
    province: "Western Province",
    zipCode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation function: Check if all required fields are filled
  const isFormValid = () => {
    const { firstName, lastName, streetAddress, city, zipCode, phone, email } =
      formData;
    return (
      firstName &&
      lastName &&
      streetAddress &&
      city &&
      zipCode &&
      phone &&
      email
    );
  };

  return (
    <div className="bg-white p-6 w-full">
      <div className="w-full">
        <h2 className="text-2xl text-center font-bold mb-4 text-black hover:text-red-500 hover:scale-y-150">
          Customer Information For Billing Details
        </h2>

        <form>
          <div className="grid grid-cols-2 gap-4">
            {/* Fields */}
            <div className="col-span-1">
              <label
                htmlFor="firstName"
                className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="lastName"
                className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="streetAddress"
                className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="city"
                className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold"
              >
                Town / City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="zipCode"
                className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="phone"
                className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-2 w-full rounded"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-gray-500 border border-gray-300 p-2 w-full rounded"
              />
            </div>
          </div>

          <div className="mt-4 mb-4 flex justify-center items-center">
            <Link href={isFormValid() ? "/Payment" : "#"}>
              <button
                className={`text-black font-bold px-10 py-3 mt-4 mb-4 ${
                  isFormValid()
                    ? "bg-blue-300 hover:bg-orange-300 hover:scale-110"
                    : "bg-gray-300 cursor-not-allowed"
                } border-2 border-gray-400 rounded-2xl`}
                disabled={!isFormValid()}
              >
                Submit Information
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
