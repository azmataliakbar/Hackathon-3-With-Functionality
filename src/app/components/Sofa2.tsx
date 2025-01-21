import Image from 'next/image';
import Link from "next/link";

export default function Sofa2() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black hover:text-red-500 hover:scale-150">
            Our Products
          </h2>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-center">
  <div className="flex flex-col items-center">
    <Image
      src="/table1.png"
      alt="Side Table 1"
      width={300}
      height={250}
      className="hover:scale-125 md:w-[400px] md:h-[300px] transition-transform duration-300 ease-in-out pr-12"
    />
    <h3 className="text-lg md:text-xl font-bold mt-4 text-black hover:scale-150 hover:text-blue-600">
      Side Table
    </h3>
    <Link href="/ProductsDetail">
      <button className="text-black underline font-bold py-2 px-4 rounded mt-4 hover:scale-150">
        View More
      </button>
    </Link>
  </div>
  <div className="flex flex-col items-center">
    <Image
      src="/sofa2.png"
      alt="Side Sofa 2"
      width={320}
      height={250}
      className="hover:scale-125 md:w-[430px] md:h-[300px] transition-transform duration-300 ease-in-out pr-16"
    />
    <h3 className="text-lg md:text-xl font-bold mt-4 text-black hover:scale-150 hover:text-blue-600">
      Side Sofa
    </h3>
    <Link href="/ProductsDetail">
      <button className="text-black underline font-bold py-2 px-4 rounded mt-4 hover:scale-150">
        View More
      </button>
    </Link>
  </div>
</div>

        </div>
      </main>
    </div>
  );
}
