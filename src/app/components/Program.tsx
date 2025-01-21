import Image from 'next/image';
import Link from "next/link";

export default function Program() {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full">
        {/* Background image */}
        <Image
          src="/bg1.png"
          alt="Background Image"
          width={1520}
          height={300}
          className="w-full h-[300px] object-cover"
        />
        
        {/* Content inside the background image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 sm:px-8 md:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 hover:text-red-500 hover:scale-110 sm:hover:scale-125 md:hover:scale-150">
            Our Instagram
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 hover:text-blue-600 hover:scale-110 sm:hover:scale-125 md:hover:scale-150">
            Follow our store on Instagram
          </p>
          
          <Link href="/Contact">
            <button className="bg-white text-black font-bold py-2 px-6 sm:px-8 md:px-10 rounded-3xl shadow-xl hover:bg-blue-300 transform transition-all">
              Follow Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
