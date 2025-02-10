import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-green-500 text-center">Payment Successful!</h1>
      <br />
      <p className="text-xl text-white font-bold text-center">Thank you for your purchase.</p>
      <br />
      <Link href="/" className="text-xl text-yellow-300 text-center font-bold">Go to home page!</Link>
    </div>
  );
}
