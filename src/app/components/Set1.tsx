import Image from 'next/image';
import Link from "next/link";

export default function Set1() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <main className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-black hover:scale-150 hover:text-red-500">
          Top Picks For You
        </h2>
        <p className="text-center mb-8 text-black hover:scale-150 hover:text-blue-500">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Image
              src="/sofa3.png"
              alt="Trenton modular sofa, 3 seater"
              width={300}
              height={300}
              className="mb-3 hover:scale-125 mx-auto"
            />
            <h3 className="text-sm font-bold mt-0 text-black hover:scale-125 hover:text-blue-500">
              Trenton modular sofa, 3_seater
            </h3>
            <p className="text-lg font-bold text-black hover:scale-150">$ 500</p>
          </div>

          <div className="text-center">
            <Image
              src="/chairset1.png"
              alt="Granite dining table with dining chair"
              width={300}
              height={300}
              className="mt-8 hover:scale-125 mx-auto"
            />
            <h3 className="text-sm font-bold mt-11 text-black hover:scale-125 hover:text-blue-500">
              Granite dining table with dining chair
            </h3>
            <p className="text-lg font-bold text-black hover:scale-150">$ 550</p>
          </div>

          <div className="text-center">
            <Image
              src="/stoolset1.png"
              alt="Outdoor bar table and stool"
              width={250}
              height={250}
              className="hover:scale-125 mb-14 mx-auto"
            />
            <h3 className="text-sm font-bold mt-4 text-black hover:scale-125 hover:text-blue-500">
              Outdoor bar table and stool
            </h3>
            <p className="text-lg font-bold text-black hover:scale-150">$ 400</p>
          </div>

          <div className="text-center">
            <Image
              src="/mirror1.png"
              alt="Plain console with teak mirror"
              width={300}
              height={300}
              className="hover:scale-125 mx-auto"
            />
            <h3 className="text-sm font-bold mt-4 text-black hover:scale-125 hover:text-blue-500">
              Plain console with teak mirror
            </h3>
            <p className="text-lg font-bold text-black hover:scale-150">$ 300</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/ProductsDetail">
            <button className="underline hover:scale-150 hover:text-blue-500 font-bold py-2 px-4 rounded text-black">
              View More
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
