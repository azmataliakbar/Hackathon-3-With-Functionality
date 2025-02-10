import Link from "next/link";
export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-red-400 text-center">Payment Canceled</h1>
      <br />
      <p className="text-xl font-bold text-white text-center">Your payment was not processed. Try again.</p>
      <br />
      <Link href="/" className="text-xl font-bold text-yellow-300 text-center">Got to Home Page</Link>
    </div>
  );
}
