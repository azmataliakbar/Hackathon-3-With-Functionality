"use client";
import Link from "next/link";

import { useState } from "react";


export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Sri Lanka",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (

    
    <div className="bg-white p-6 w-full">
      

      <div className="w-full">
        <h2 className="text-3xl text-center font-bold mb-4 text-black hover:text-red-500 hover:scale-y-150">
          Billing Details
        </h2>

        <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <label htmlFor="firstName" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="lastName" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="companyName" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="country" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Country / Region
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Sri Lanka">Pakistan</option>
              {/* Add more country options as needed */}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="streetAddress" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Street address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="city" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Town / City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="province" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Province
            </label>
            <select
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            >
              <option value="Western Province">Western Province</option>
              {/* Add more province options as needed */}
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="zipCode" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              ZIP code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="phone" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="email" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="additionalInfo" className="block text-gray-700 hover:text-blue-500 hover:scale-y-150 font-bold">
              Additional information
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="border border-gray-300 p-2 w-full rounded h-24"
            />
          </div>
        </div>

        <div className="mt-4 mb-4 flex justify-center items-center  ">
        <Link href="Message" >
        <button
          className=" text-black font-bold px-10 py-3 mt-4 mb-4 bg-blue-300 border-2 border-gray-400 rounded-2xl hover:bg-orange-300 hover:scale-110"
          onClick={() => alert("Thank you for sending your information!")}
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