import Image from 'next/image';
import Link from "next/link";

export default function Misc() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <main className="container mx-auto py-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-black hover:text-red-500 hover:scale-150">Our Blogs</h2>
        <p className="text-center text-sm md:text-lg lg:text-xl mb-8 text-black hover:text-blue-600 hover:scale-y-150 md:hover:scale-150 lg:hover:scale-150">Find a bright idea to suit your taste with our great selection</p>

        {/* Adjust the grid layout for mobile screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* First blog post */}
          <div className="text-center">
            <Image src="/comp1.png" alt="Blog Image 1" width={250} height={250} className='mx-auto hover:scale-110' />
            <h3 className="text-sm md:text-lg  lg:text-lg font-bold mt-4 text-black hover:text-blue-600 hover:scale-125">Going all-in with millennial design</h3>
            <Link href="/Blog">
              <h2 className="text-sm underline mt-0 text-black hover:text-blue-600 hover:scale-125">Read More</h2>
            </Link>
            <div className='flex justify-center mt-4 gap-4'>
              <div className='flex'>
                <Image src="/clock1.png" alt="clock" width={25} height={1} className='hover:scale-110 ' />
                <p className="text-gray-500 hover:text-red-500 hover:scale-y-125 ml-1">5 min</p>
              </div>
              <div className='flex'>
                <Image src="/notbook1.png" alt="clock" width={25} height={1} className='hover:scale-110 ' />
                <p className="text-gray-500 hover:text-red-500 hover:scale-y-125 text-sm">12th Oct 2022</p>
              </div>
            </div>
          </div>

          {/* Second blog post */}
          <div className="text-center">
            <Image src="/comp2.png" alt="Blog Image 2" width={250} height={250} className='mx-auto hover:scale-110' />
            <h3 className="text-sm md:text-lg  lg:text-lg font-bold mt-4 text-black hover:text-blue-600 hover:scale-110">Exploring new ways of decorating</h3>
            <Link href="/Blog">
              <h2 className="text-sm underline mt-0 text-black hover:text-blue-600 hover:scale-125">Read More</h2>
            </Link>
            <div className='flex justify-center mt-4 gap-4'>
              <div className='flex'>
                <Image src="/clock1.png" alt="clock" width={25} height={1} className='hover:scale-150 ' />
                <p className="text-gray-500 hover:text-red-500 hover:scale-125 ml-2">5 min</p>
              </div>
              <div className='flex'>
                <Image src="/notbook1.png" alt="clock" width={25} height={1} className='hover:scale-110 ' />
                <p className="text-gray-500 hover:text-red-500 hover:scale-y-125 text-sm">12th Oct 2022</p>
              </div>
            </div>
          </div>

          {/* Third blog post */}
          <div className="text-center">
            <Image src="/comp3.png" alt="Blog Image 3" width={250} height={250} className='mx-auto hover:scale-110 md:hover:scale-110 lg:hover:scale-110 ' />
            <h3 className="text-sm md:text-lg  lg:text-lg font-bold mt-4 text-black hover:text-blue-600 hover:scale-105">Handmade pieces that took time to make</h3>
            <Link href="/Blog">
              <h2 className="text-sm underline mt-0 text-black hover:text-blue-600 hover:scale-150">Read More</h2>
            </Link>
            <div className='flex justify-center mt-4 gap-4'>
              <div className='flex'>
                <Image src="/clock1.png" alt="clock" width={25} height={1} className='hover:scale-125 ' />
                <p className="text-gray-500 hover:text-red-500 hover:scale-125 ml-2">5 min</p>
              </div>
              <div className='flex'>
                <Image src="/notbook1.png" alt="clock" width={25} height={1} className='hover:scale-125 ' />
                <p className="text-gray-500 hover:text-red-500 hover:scale-y-150 text-sm">12th Oct 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Posts button */}
        <div className="text-center mt-8">
          <Link href="/Blog">
            <button className="underline text-black font-bold hover:text-blue-600 hover:scale-125">View All Posts</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
