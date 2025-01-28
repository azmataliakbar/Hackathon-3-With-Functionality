"use client"

import Header1 from "../components/Header1"
import Footer from "../components/Footer"

export default function ReceiptPage() {
  // In a real application, you would fetch this data from your server
  const receiptData = {
    receiptNumber: "R12345",
    orderDate: new Date().toLocaleDateString(),
    totalAmount: 299.99,
    paymentMethod: "Visa **** 1234",
    items: [
      { name: "Dining Table", price: 199.99 },
      { name: "Chairs (set of 4)", price: 100.0 },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header1 />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg border-2 border-gray-300 px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center hover:text-green-500 hover:scale-y-150">Heaven Hills Furniture</h2>
          <h2 className="text-2xl text-gray-700 font-bold mb-6 text-center hover:text-red-500 hover:scale-y-150">
            Order Confirmation
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-400 text-lg hover:text-blue-500 hover:scale-y-150">Receipt Number:</h3>
              <p className="text-orange-500 text-lg font-bold">{receiptData.receiptNumber}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-400 text-lg hover:text-blue-500 hover:scale-y-150">Order Date:</h3>
              <p className="text-emerald-500 text-lg font-bold">{receiptData.orderDate}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-400 text-lg hover:text-blue-500 hover:scale-y-150">Payment Method:</h3>
              <p className="text-fuchsia-500 text-lg font-bold">{receiptData.paymentMethod}</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-400 text-lg hover:text-blue-500 hover:scale-y-150">Items:</h3>
              <ul>
                {receiptData.items.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="text-blue-400 text-lg font-bold">{item.name}</span>
                    <span className="text-red-500 text-lg font-bold">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t pt-4">
              <h3 className="font-bold text-gray-700 text-lg hover:text-blue-500 hover:scale-y-150">Total Amount:</h3>
              <p className="text-red-500 text-lg font-bold">$ {receiptData.totalAmount.toFixed(2)}</p>
              <p className="text-green-500 text-xs lg:text-lg font-bold">( Note: Delivery is within 7 days. )</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}





