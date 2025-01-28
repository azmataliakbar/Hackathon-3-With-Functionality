// src/app/login-account/page.tsx

import Header from '../../components/Header';
import OurPromise from '../../components/OurPromise';
import Footer from '../../components/Footer';
import { SignIn } from "@clerk/nextjs";

export default function LoginAccountPage() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-white">
        <SignIn routing="path" path="/login-account" forceRedirectUrl="/admin" />
      </div>
      <OurPromise />
      <Footer />
    </>
  );
}



