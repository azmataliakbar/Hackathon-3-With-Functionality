"use client"
import Header1 from '../components/Header1';
import OurPromise from '../components/OurPromise';
import Footer from '../components/Footer'




//app/admin/page.tsx

// "use client";

// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// //Define proper types for user and product
// interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
// }

// interface Product {
//   id: string;
//   name: string;
//   price: number;
// }

// Extend ActJWTClaim to include publicMetadata
// interface ActJWTClaim {
//   firstName?: string;
//   publicMetadata?: {
//     role?: string;
//   };
// }

// const AdminPage = () => {
//   const { actor, isLoaded, isSignedIn } = useAuth();
//   const router = useRouter();
//   const [users, setUsers] = useState<User[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);

  // Show loading state until Clerk data is loaded
  // if (!isLoaded) return <div>Loading...</div>;

  // // Type assertion for actor
  // const currentActor = actor as ActJWTClaim;

  // //Redirect to login if the user is not signed in or not an admin
  // if (!isSignedIn || !actor || currentActor?.publicMetadata?.role !== "admin") {
  //   console.log("Redirecting to /login-account");
  //   router.push("/login-account");
  //   return null;
  // }



  // Fetch users for user management
  // const fetchUsers = async () => {
  //   const fetchedUsers = await fetch("/api/users");
  //   const data = await fetchedUsers.json();
  //   setUsers(data);
  // };

  // // Fetch products for product management
  // const fetchProducts = async () => {
  //   const fetchedProducts = await fetch("/api/products");
  //   const data = await fetchedProducts.json();
  //   setProducts(data);
  // };

  // Handle adding a new user (example logic)
  // const handleAddUser = async () => {
  //   console.log("Add user logic here");
  //   await fetchUsers();
  // };

  // // Handle adding a new product (example logic)
  // const handleAddProduct = async () => {
  //   console.log("Add product logic here");
  //   await fetchProducts();
  // };

  // Admin Panel Content
//   return (
//     <>
//     <div className="mt-10 ml-10">
//       <h1 className="mb-10 text-3xl font-bold text-yellow-300">Admin Panel:  Under Construction</h1>
//       <p className="text-2xl font-bold text-green-500">Welcome, {currentActor?.firstName || "Guest"}!</p>
//       <p className="text-xl text-red-500">Role: {currentActor?.publicMetadata?.role || "No role assigned"}</p>

//       <div className="mt-10">
//         <h2 className="text-xl font-bold text-blue-500">User Management: Under Construction</h2>
//         <button onClick={handleAddUser} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-orange-500 mb-2">Add User : Under Construction</button>
//           <br />
//         <button onClick={fetchUsers} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-blue-500">Fetch Users : Under Construction</button>
//           <ul>
//             {users.length > 0 ? (
//             users.map((user) => (
//               <li key={user.id}>
//                 {user.firstName} {user.lastName}
//               </li>
//             ))
//           ) : (
//             <li className="text-xl text-red-500">No users found</li>
//           )}
//         </ul>
//       </div>

//         <div className="mt-10">
//           <h2 className="text-xl font-bold text-blue-500">Product Management: Under Construction</h2>
//           <button onClick={handleAddProduct} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-orange-500 mb-2">Add Product: Under Construction</button>
//           <br />
//           <button onClick={fetchProducts} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-blue-500">Fetch Products: Under Construction</button>
//           <ul>
//             {products.length > 0 ? (
//             products.map((product) => (
//               <li key={product.id}>
//                 {product.name} - ${product.price}
//               </li>
//             ))
//           ) : (
//             <li className="mb-10 text-xl text-red-500">No products found</li>
//           )}
//         </ul>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AdminPage;



// "use client";

// import { useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// // Define proper types for user and product
// interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
// }

// interface Product {
//   id: string;
//   name: string;
//   price: number;
// }

// // Extend ActJWTClaim to include publicMetadata
// interface ActJWTClaim {
//   firstName?: string;
//   publicMetadata?: {
//     role?: string;
//   };
// }

// const AdminPage = () => {
//   const { actor, isLoaded, isSignedIn } = useAuth();
//   const router = useRouter();
//   const [users, setUsers] = useState<User[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);

//   // Show loading state until Clerk data is loaded
//   if (!isLoaded) return <div>Loading...</div>;

//   // Type assertion for actor
//   const currentActor = actor as ActJWTClaim;

//   // Commented out the redirect check and usage of 'isSignedIn' and 'router' to remove errors
//   if (!isSignedIn || !actor || currentActor?.publicMetadata?.role !== "admin") {
//     console.log("Redirecting to /login-account");
//     router.push("/login-account");
//     return null;
//   }

//   // Fetch users for user management
//   const fetchUsers = async () => {
//     const fetchedUsers = await fetch("/api/users");
//     const data = await fetchedUsers.json();
//     setUsers(data);
//   };

//   // Fetch products for product management
//   const fetchProducts = async () => {
//     const fetchedProducts = await fetch("/api/products");
//     const data = await fetchedProducts.json();
//     setProducts(data);
//   };

//   // Handle adding a new user (example logic)
//   const handleAddUser = async () => {
//     console.log("Add user logic here");
//     await fetchUsers();
//   };

//   // Handle adding a new product (example logic)
//   const handleAddProduct = async () => {
//     console.log("Add product logic here");
//     await fetchProducts();
//   };

//   // Admin Panel Content
//   return (
//     <div className="mt-10 ml-10">
//       <h1 className="mb-10 text-3xl font-bold text-yellow-300">Admin Panel: Under Construction</h1>
//       <p className="text-2xl font-bold text-green-500">Welcome, {currentActor?.firstName || "Guest"}!</p>
//       <p className="text-xl text-red-500">Role: {currentActor?.publicMetadata?.role || "No role assigned"}</p>

//       <div className="mt-10">
//         <h2 className="text-xl font-bold text-blue-500">User Management: Under Construction</h2>
//         <button onClick={handleAddUser} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-orange-500 mb-2">Add User : Under Construction</button>
//         <br />
//         <button onClick={fetchUsers} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-blue-500">Fetch Users : Under Construction</button>
//         <ul>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <li key={user.id}>
//                 {user.firstName} {user.lastName}
//               </li>
//             ))
//           ) : (
//             <li className="text-xl text-red-500">No users found</li>
//           )}
//         </ul>
//       </div>

//       <div className="mt-10">
//         <h2 className="text-xl font-bold text-blue-500">Product Management: Under Construction</h2>
//         <button onClick={handleAddProduct} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-orange-500 mb-2">Add Product: Under Construction</button>
//         <br />
//         <button onClick={fetchProducts} className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-blue-500">Fetch Products: Under Construction</button>
//         <ul>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <li key={product.id}>
//                 {product.name} - ${product.price}
//               </li>
//             ))
//           ) : (
//             <li className="mb-10 text-xl text-red-500">No products found</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;



import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const { user, isSignedIn, isLoaded } = useUser(); // Destructure isLoaded from useUser
  const router = useRouter();

  // Show loading state while Clerk is loading the user data
  if (!isLoaded) return <div>Loading...</div>;

  // Handle redirect to login page if not signed in or role is not admin
  if (!isSignedIn || user?.publicMetadata?.role !== "admin") {
    router.replace("/login-account"); // Use replace to avoid pushing to history
    return null; // Render nothing while redirecting
  }

  return (
    <>
    <Header1 />
    <div className="p-6 bg-gray-300">
      <h1 className="text-3xl font-bold text-gray-800">Welcome Admin</h1>
      <h2 className="mb-10 mt-4 text-3xl font-bold text-orange-500">Admin Panel: Under Construction</h2>
      <p className="mb-10 mt-4 text-xl font-bold text-purple-500">Admin-specific content goes here.</p>
    </div>
      <OurPromise />
      <Footer />
    </>
  );
}



// "use client";

// import { useUser, useAuth } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// // Define proper types for user and product
// interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
// }

// interface Product {
//   id: string;
//   name: string;
//   price: number;
// }

// // Extend ActJWTClaim to include publicMetadata
// interface ActJWTClaim {
//   firstName?: string;
//   publicMetadata?: {
//     role?: string;
//   };
// }

// export default function AdminPage() {
//   const { isSignedIn } = useUser();
//   const { actor, isLoaded } = useAuth();
//   const router = useRouter();
//   const [users, setUsers] = useState<User[]>([]);
//   const [products, setProducts] = useState<Product[]>([]);

//   // Show loading state until Clerk data is loaded
//   if (!isLoaded) return <div>Loading...</div>;

//   // Type assertion for actor
//   const currentActor = actor as ActJWTClaim;

//   // Check if the user is signed in and has the correct role
//   if (!isSignedIn || !actor || currentActor?.publicMetadata?.role !== "admin") {
//     router.replace("/login-account");
//     return null;
//   }

//   // Fetch users for user management
//   const fetchUsers = async () => {
//     const fetchedUsers = await fetch("/api/users");
//     const data = await fetchedUsers.json();
//     setUsers(data);
//   };

//   // Fetch products for product management
//   const fetchProducts = async () => {
//     const fetchedProducts = await fetch("/api/products");
//     const data = await fetchedProducts.json();
//     setProducts(data);
//   };

//   // Handle adding a new user (example logic)
//   const handleAddUser = async () => {
//     console.log("Add user logic here");
//     await fetchUsers();
//   };

//   // Handle adding a new product (example logic)
//   const handleAddProduct = async () => {
//     console.log("Add product logic here");
//     await fetchProducts();
//   };

//   return (
//     <div className="mt-10 ml-10">
//       <h1 className="mb-10 text-3xl font-bold text-yellow-300">Admin Panel: Under Construction</h1>
//       <p className="text-2xl font-bold text-green-500">Welcome, {currentActor?.firstName || "Guest"}!</p>
//       <p className="text-xl text-red-500">Role: {currentActor?.publicMetadata?.role || "No role assigned"}</p>

//       <div className="mt-10">
//         <h2 className="text-xl font-bold text-blue-500">User Management: Under Construction</h2>
//         <button
//           onClick={handleAddUser}
//           className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-orange-500 mb-2"
//         >
//           Add User : Under Construction
//         </button>
//         <br />
//         <button
//           onClick={fetchUsers}
//           className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-blue-500"
//         >
//           Fetch Users : Under Construction
//         </button>
//         <ul>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <li key={user.id}>
//                 {user.firstName} {user.lastName}
//               </li>
//             ))
//           ) : (
//             <li className="text-xl text-red-500">No users found</li>
//           )}
//         </ul>
//       </div>

//       <div className="mt-10">
//         <h2 className="text-xl font-bold text-blue-500">Product Management: Under Construction</h2>
//         <button
//           onClick={handleAddProduct}
//           className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-orange-500 mb-2"
//         >
//           Add Product: Under Construction
//         </button>
//         <br />
//         <button
//           onClick={fetchProducts}
//           className="font-bold border-2 rounded-lg bg-gray-500 px-2 py-2 hover:bg-blue-500"
//         >
//           Fetch Products: Under Construction
//         </button>
//         <ul>
//           {products.length > 0 ? (
//             products.map((product) => (
//               <li key={product.id}>
//                 {product.name} - ${product.price}
//               </li>
//             ))
//           ) : (
//             <li className="mb-10 text-xl text-red-500">No products found</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }
