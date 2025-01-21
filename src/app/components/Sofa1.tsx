"use client"

import Image from 'next/image';
import Link from "next/link";

export default function Sofa1() {
  return (
    <div>
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <main className="bg-gray-200">
        <div className="container mx-auto py-2 flex flex-col md:flex-row justify-center md:justify-around items-center">
          <div className="flex flex-col justify-center md:ml-32 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black hover:scale-y-150 hover:text-red-500">
              Rocket Single Seater
            </h2>
            <Link href="/ProductsDetail">
              <button className="text-black underline font-bold hover:scale-150">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <Image
              src="/sofa1.png"
              alt="Rocket Single Seater"
              width={300}
              height={300}
              className="md:w-[500px] md:h-[500px] mb-10 md:mr-32 hover:scale-150"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

