"use client";
import Image from "next/image";
import { useState } from "react";
import Header1 from '../components/Header1';
import OurPromise from '../components/OurPromise';
import Last from '../components/Footer';
import { useRouter } from 'next/navigation'; // For redirection
import { useSignIn } from '@clerk/nextjs'; // Clerk's SignIn hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewLogin, setIsNewLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // To handle error messages
  const router = useRouter(); // To redirect to the admin page after login

  // Access Clerk's useSignIn hook
  const { signIn } = useSignIn(); // Clerk's useSignIn hook

  const handleToggle = () => {
    setIsNewLogin((prev) => !prev);
  };

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Reset error message
    setErrorMessage('');

    if (!signIn) {
      console.error("SignIn hook is not available");
      setErrorMessage('An error occurred, please try again later.');
      return;
    }

    try {
      const res = await signIn.create({
        identifier: email,
        password: password,
      });

      if (res.status === "complete") {
        // If sign-in is successful, redirect to the admin page
        router.push('https://moral-longhorn-69.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F');   // redirected to signin link instead of admin
      } else {
        console.error("Login failed", res);
        setErrorMessage('Invalid email or password');
      }
    } catch (err) {
      console.error("Login error", err);
      setErrorMessage('Login failed: Invalid email or password');
    }
  };

  return (
    <>
      <Header1 />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
        {/* Header Section with Image */}
        <div className="mb-6">
          <Image
            src="/log1.jpeg" // Replace with your image path
            alt="Global Shopping Store"
            width={1000}
            height={600}
            className="rounded-full object-cover"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl font-bold text-white mb-2">
          Welcome to Global Online Shopping Store
        </h2>
        <p className="text-gray-200 text-center mb-6">
          Login or register to explore a wide range of products including jackets, coats, electronics, jewelry, dresses, and more.
        </p>

        {/* Login Form */}
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            {isNewLogin ? "Create New Account" : "Login"}
          </h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full text-black font-bold px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Capture email
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border text-xl text-black font-bold border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Capture password
              />
            </div>

            {isNewLogin && (
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border text-xl text-black font-bold border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your phone number"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              {isNewLogin ? "Register" : "Login"}
            </button>
          </form>

          {/* Display error message if login fails */}
          {errorMessage && (
            <div className="text-red-500 text-center mt-4">
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Toggle between Login and Register */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              {isNewLogin ? "Already registered?" : "New user?"}{" "}
              <button
                onClick={handleToggle}
                className="text-blue-500 hover:underline font-medium"
              >
                {isNewLogin ? "Login here" : "Create an account"}
              </button>
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center mt-8">
          <p className="text-white text-sm">
            For any issues, contact us at:{" "}
            <span className="font-bold text-yellow-300">email: support@heavenhills.com</span> or{" "}
            <br />
            <span className="font-bold text-yellow-300">ph: +92-333-223-6799</span>
          </p>
        </div>
      </main>
      <OurPromise />
      <Last />
    </>
  );
};

export default LoginPage;


