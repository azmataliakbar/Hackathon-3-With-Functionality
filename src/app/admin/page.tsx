"use client";


import { useUser, useClerk } from "@clerk/nextjs"; // Import useClerk
import { useRouter } from "next/navigation";
import Header1 from "@/app/components/Header1"; // Adjust the import path as needed
import OurPromise from "@/app/components/OurPromise"; // Adjust the import path as needed
import Footer from "@/app/components/Footer"; // Adjust the import path as needed

export default function AdminPage() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { signOut } = useClerk(); // Use the useClerk hook to access signOut
  const router = useRouter();

  // Show loading state while Clerk is loading the user data
  if (!isLoaded) return <div>Loading...</div>;

  // Handle redirect to login page if not signed in or role is not admin
  if (!isSignedIn || user?.publicMetadata?.role !== "admin") {
    router.replace("/login-account");
    return null;
  }

  // Handle sign-out
  const handleSignOut = () => {
    signOut(() => router.push("/")); // Sign out and redirect to the homepage
  };

  return (
    <>
      <Header1 />
      <div className="p-6 bg-gray-300">
        <h1 className="text-3xl font-bold text-blue-600 hover:text-red-600 hover:scale-y-150">Welcome Admin</h1>
        <h2 className="mb-10 mt-4 text-3xl underline text-center font-bold text-yellow-700 hover:text-black hover:scale-y-150">Admin Dashboard</h2>

        {/* Admin Navigation Bar */}
        <nav className="mb-10">
          <ul className="flex flex-col lg:flex-row gap-2 ml-4 items-center justify-center ">
            <li>
              <button
                className="px-4 py-2 font-bold bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-y-150"
                onClick={() => router.push("/admin/inventory")}
              >
                Inventory
              </button>
            </li>
            <li>
              <button
                className="px-6 py-2 font-bold bg-green-500 text-white rounded hover:bg-green-600 hover:scale-y-150"
                onClick={() => router.push("/admin/orders")}
              >
                Orders
              </button>
            </li>
            <li>
              <button
                className="px-7 py-2 font-bold bg-purple-500 text-white rounded hover:bg-purple-600 hover:scale-y-150"
                onClick={() => router.push("/admin/users")}
              >
                Users
              </button>
            </li>
            <li>
              <button
                className="px-6 py-2 font-bold bg-red-500 text-white rounded hover:bg-red-600 hover:scale-y-150"
                onClick={handleSignOut} // Call handleSignOut on click
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>

        {/* Admin Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Inventory Summary */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 hover:scale-y-150 hover:text-red-500">Inventory</h3>
            <p className="text-gray-600">Total Products: 21</p>
            <button
              className="mt-2 px-4 py-2 font-bold bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-y-150"
              onClick={() => router.push("/admin/inventory")}
            >
              Manage Inventory
            </button>
          </div>

          {/* Orders Summary */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 hover:scale-y-150 hover:text-red-500">Orders</h3>
            <p className="text-gray-600">Total Orders: 15</p>
            <button
              className="mt-2 px-4 py-2 font-bold bg-green-500 text-white rounded hover:bg-green-600 hover:scale-y-150"
              onClick={() => router.push("/admin/orders")}
            >
              Manage Orders
            </button>
          </div>

          {/* Users Summary */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-800 hover:scale-y-150 hover:text-red-500">Users</h3>
            <p className="text-gray-600">Total Users: 50</p>
            <button
              className="mt-2 px-4 py-2 font-bold bg-purple-500 text-white rounded hover:bg-purple-600 hover:scale-y-150"
              onClick={() => router.push("/admin/users")}
            >
              Manage Users
            </button>
          </div>
        </div>
      </div>
      <OurPromise />
      <Footer />
    </>
  );
}