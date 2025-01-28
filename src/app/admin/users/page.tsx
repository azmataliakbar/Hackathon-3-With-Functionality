"use client";

import { useEffect, useState } from "react";
import Header1 from '../../components/Header1';
import OurPromise from '../../components/OurPromise';
import Footer from '../../components/Footer'

// Define the type for a user
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]); 

  useEffect(() => {
    fetch("/api/users") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
            <Header1 />
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-100">User Management: Under Construction</h1>
      <ul className="mt-6">
        {users.map((user) => (
          <li key={user.id} className="mb-4 p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Role: {user.role}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit Role
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