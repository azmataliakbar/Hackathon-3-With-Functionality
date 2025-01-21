"use client";
import Image from "next/image";
import CheckoutForm from "../components/CheckoutForm"; // Code-1
import CheckoutSummary from "../components/CheckoutSummary"; // Code-2
import Header1 from "../components/Header1"; // Header component
import Footer from "../components/Footer"; // Footer component

function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <Header1 />

      {/* Shop section - 1 */}
      <div className="relative">
        <Image
          src="/shop11.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/shop1logo.png" alt="Shop1logo" width={60} height={60} className='hover:scale-150 ml-16 md:ml-24 lg:ml-24'/>
          <h1 className="text-4xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Checkout</h1>
          <p className="text-lg sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Checkout</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow justify-center items-start gap-8 p-4 sm:p-6">
        {/* Left Section - Code-1 */}
        <div className="w-full md:w-1/2">
          <CheckoutForm />
        </div>

        {/* Right Section - Code-2 */}
        <div className="w-full md:w-1/2">
          <CheckoutSummary />
        </div>
      </div>

      {/* Shop section - 4 */}
      <div className="bg-[#FAF4F4] p-4">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="text-center w-full sm:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">
              Free Delivery
            </h3>
            <p className="text-sm sm:text-base text-gray-500 hover:text-blue-600 hover:scale-110">
              For all orders over $ 50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center w-full sm:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">
              90 Days Return
            </h3>
            <p className="text-sm sm:text-base text-gray-500 hover:text-blue-600 hover:scale-110">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center w-full sm:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-black hover:text-red-500 hover:scale-150">
              Secure Payment
            </h3>
            <p className="text-sm sm:text-base text-gray-500 hover:text-blue-600 hover:scale-110">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CheckoutPage;
