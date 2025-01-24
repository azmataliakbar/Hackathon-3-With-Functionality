// src/app/protected-page/page.tsx

"use client";
import { useAuth, RedirectToSignIn } from '@clerk/nextjs';

const ProtectedPage = () => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>; // Show loading while Clerk checks auth state
  }

  // If the user is not authenticated, redirect them to the sign-in page
  if (!userId) {
    return <RedirectToSignIn />;
  }

  // If the user is authenticated, show the protected content
  return (
    <div>
      <h1>Protected Content</h1>
      <p>Only available for logged-in users!</p>
    </div>
  );
};

export default ProtectedPage;
