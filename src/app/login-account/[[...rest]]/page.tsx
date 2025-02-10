// src/app/loin-account/[[... rest]]/page.tsx

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser, SignIn } from "@clerk/nextjs";
import Header from "../../components/Header";
import OurPromise from "../../components/OurPromise";
import Footer from "../../components/Footer";

export default function LoginAccountPage() {
  const { isSignedIn, user, isLoaded } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && user) {
      const userRole = user.publicMetadata?.role;
      
      // Ensure role is a valid string
      if (typeof userRole === "string") {
        setRole(userRole);
      } else {
        console.warn("Role is missing or not a string:", user.publicMetadata);
      }
    }
  }, [user, isLoaded]);

  useEffect(() => {
    if (isSignedIn && role) {
      if (role === "admin") {
        router.replace("/admin"); // Redirect admins to /admin
      } else {
        router.replace(redirectTo); // Redirect other users
      }
    }
  }, [isSignedIn, role, redirectTo, router]);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-white">
        <SignIn routing="path" path="/login-account" />
      </div>
      <OurPromise />
      <Footer />
    </>
  );
}





