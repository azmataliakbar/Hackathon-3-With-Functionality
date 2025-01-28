"use client";

import { useEffect, useState } from "react";
import Header1 from '../../components/Header1';
import OurPromise from '../../components/OurPromise';
import Footer from '../../components/Footer'

// Define the type for an order
interface Order {
  id: string;
  status: string;
  total: number | string;
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/orders") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <>
        <Header1 />
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-100">Order Management: Under Construction</h1>
      <ul className="mt-6">
        {orders.map((order) => (
          <li key={order.id} className="mb-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">Order ID: {order.id}</h2>
            <p className="text-gray-600">Status: {order.status}</p>
            <p className="text-gray-600">Total: ${order.total}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Update Status
            </button>
          </li>
        ))}
      </ul>
    </div>
    <OurPromise />
    <Footer />
        </>
  );
}