// /app/admin/page.tsx

"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define proper types for user and product
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
}

// Extend ActJWTClaim to include publicMetadata
interface ActJWTClaim {
  firstName?: string;
  publicMetadata?: {
    role?: string;
  };
}

const AdminPage = () => {
  const { actor, isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  // Show loading state until Clerk data is loaded
  if (!isLoaded) return <div>Loading...</div>;

  // Type assertion for actor
  const currentActor = actor as ActJWTClaim;

  // Redirect to login if the user is not signed in or not an admin
  if (!isSignedIn || !actor || currentActor?.publicMetadata?.role !== "admin") {
    router.push("/login-account");
    return null;
  }

  // Fetch users for user management
  const fetchUsers = async () => {
    const fetchedUsers = await fetch("/api/users");
    const data = await fetchedUsers.json();
    setUsers(data);
  };

  // Fetch products for product management
  const fetchProducts = async () => {
    const fetchedProducts = await fetch("/api/products");
    const data = await fetchedProducts.json();
    setProducts(data);
  };

  // Handle adding a new user (example logic)
  const handleAddUser = async () => {
    console.log("Add user logic here");
    await fetchUsers();
  };

  // Handle adding a new product (example logic)
  const handleAddProduct = async () => {
    console.log("Add product logic here");
    await fetchProducts();
  };

  // Admin Panel Content
  return (
    <div>
      <h1>Admin Panel</h1>
      <p>Welcome, {currentActor?.firstName || "Guest"}!</p>
      <p>Role: {currentActor?.publicMetadata?.role || "No role assigned"}</p>

      <div>
        <h2>User Management</h2>
        <button onClick={handleAddUser}>Add User</button>
        <button onClick={fetchUsers}>Fetch Users</button>
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id}>
                {user.firstName} {user.lastName}
              </li>
            ))
          ) : (
            <li>No users found</li>
          )}
        </ul>
      </div>

      <div>
        <h2>Product Management</h2>
        <button onClick={handleAddProduct}>Add Product</button>
        <button onClick={fetchProducts}>Fetch Products</button>
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))
          ) : (
            <li>No products found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;






