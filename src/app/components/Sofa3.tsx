import Image from 'next/image';
import Link from "next/link";

export default function Sofa3() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-10">
        <div className="relative flex flex-col md:flex-row items-center md:items-start">
          {/* Image Section */}
          <div className="w-full md:w-[800px]">
            <Image 
              src="/sofa4.png" 
              alt="Asgaard Sofa" 
              width={800} 
              height={400} 
              className="hover:scale-105 w-full"
            />
          </div>

          {/* Text Section */}
          <div className="mt-10 md:mt-40 md:ml-20 text-center md:text-left">
            <h2 className="text-xl font-bold mb-4 text-black hover:scale-150 hover:text-red-500">
              New Arrivals
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black hover:scale-y-150 hover:text-red-500">
              Asgaard Sofa
            </h1>
            <div className="flex justify-center md:justify-start">
              <Link href="/SingleProduct">
                <button className="hover:scale-150 text-black font-bold py-2 px-8 md:px-10 border-2 border-gray-700 text-sm mt-2">
                  View Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
