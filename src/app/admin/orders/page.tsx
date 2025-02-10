import Header1 from "../../components/Header1";
import Buttons from "../../components/InventoryOrderUserButtons";
import OurPromise from '../../components/OurPromise';
import Footer from "../../components/Footer";

const OrdersList = () => {
  // Mock data - replace with actual API calls in a real application
  const orders = [
    { id: 1, customer: "John Doe", date: "2025-01-15", total: 599.98, status: "Shipped" },
    { id: 2, customer: "Jane Smith", date: "2025-01-16", total: 149.99, status: "Processing" },
    { id: 3, customer: "Bob Johnson", date: "2025-01-17", total: 999.97, status: "Delivered" },
    { id: 4, customer: "Joseph Anthony", date: "2025-01-18", total: 599.98, status: "Shipped" },
    { id: 5, customer: "Philip Cant", date: "2025-01-19", total: 149.99, status: "Processing" },
    { id: 6, customer: "Kelvin Butler", date: "2025-01-20", total: 999.97, status: "Delivered" },
    { id: 7, customer: "Paul Daniel", date: "2025-01-21", total: 599.98, status: "Shipped" },
    { id: 8, customer: "Bob Baker", date: "2025-01-22", total: 149.99, status: "Processing" },
    { id: 9, customer: "Ashly Hamton", date: "2025-01-23", total: 999.97, status: "Delivered" },
    { id: 10, customer: "Domnic Filnay", date: "2025-01-24", total: 599.98, status: "Shipped" },
    { id: 11, customer: "Keneth Willis", date: "2025-01-25", total: 149.99, status: "Processing" },
    { id: 12, customer: "Robin Johnathon", date: "2025-01-26", total: 999.97, status: "Delivered" },
  ];

  return (
    <div className="bg-gray-200">
      <Header1 />
      <Buttons />
      <div className="px-4 py-6 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-4 hover:text-green-500">
          Recent Orders
        </h2>

        {/* Horizontally Scrollable Container */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px]">
            {/* Table Header */}
            <div className="flex bg-yellow-100 rounded border-2 border-gray-300">
              <div className="flex-1 text-red-500 font-bold text-base md:text-xl p-3 min-w-[120px]">
                Order ID
              </div>
              <div className="flex-1 text-red-500 font-bold text-base md:text-xl p-3 min-w-[150px]">
                Customer
              </div>
              <div className="flex-1 text-red-500 font-bold text-base md:text-xl p-3 min-w-[120px]">
                Date
              </div>
              <div className="flex-1 text-red-500 font-bold text-base md:text-xl p-3 min-w-[120px]">
                Total
              </div>
              <div className="flex-1 text-red-500 font-bold text-base md:text-xl p-3 min-w-[120px]">
                Status
              </div>
            </div>

            {/* Table Rows */}
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex bg-yellow-50 hover:bg-white transition-colors border-2 border-gray-300"
              >
                <div className="flex-1 text-black font-bold text-sm md:text-lg p-3 min-w-[120px]">
                  {order.id}
                </div>
                <div className="flex-1 text-black font-bold text-sm md:text-lg p-3 min-w-[150px]">
                  {order.customer}
                </div>
                <div className="flex-1 text-black font-bold text-sm md:text-lg p-3 min-w-[120px]">
                  {order.date}
                </div>
                <div className="flex-1 text-black font-bold text-sm md:text-lg p-3 min-w-[120px]">
                  $ {order.total.toFixed(2)}
                </div>
                <div className="flex-1 text-black font-bold text-[13px] md:text-lg p-3 min-w-[120px]">
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h6 className="text-gray-500 text-center mt-4">Author: Azmat Ali</h6>
      </div>
      <OurPromise />
      <Footer />
    </div>
  );
};

export default OrdersList;