// First create a loading.tsx file in the same directory
export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen text-yellow-300 font-bold text-5xl">Loading ...
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500"></div>
    </div>
  );
}