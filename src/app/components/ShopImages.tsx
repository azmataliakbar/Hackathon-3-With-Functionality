import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
           {/* Shop section - 1 */}
      <div className="relative">
        <Image
          src="/shop11.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image src="/shop1logo.png" alt="Shop1logo" width={60} height={60} className='hover:scale-150 ml-10'/>
          <h1 className="text-4xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Shop</h1>
          <p className="text-lg sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Shop</p>
        </div>
      </div>

      {/* Shop section - 2 */}
      <div className="bg-gray-200 p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center space-x-4">
            <Image
              src="/shopfilter1.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <Link href="/ProductFilter" >
            <button className="text-black text-xl sm:text-2xl font-bold hover:scale-125 hover:text-blue-600">
              Filter
            </button>
            </Link>
            <Image
              src="/shopfilter2.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <Image
              src="/shopfilter3.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <Image
              src="/shopfilter4.png"
              alt="Shop Banner"
              width={4}
              height={2}
              className="hover:scale-125"
            />
          </div>
          <div className="text-black font-bold hover:scale-150 hover:text-blue-600">
            Showing 1-21 of 42 results
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-4 gap-4 sm:gap-0">
            <button className="text-black font-bold hover:scale-125 hover:text-blue-600">Show</button>
            <input type="text" placeholder="16" className="border border-gray-300 px-1 py-1 w-[40px] rounded-md text-center text-sm" />
            <button className="text-black font-bold hover:scale-125 hover:text-blue-600">Sort By</button>
            <input type="text" placeholder="Default" className="border border-gray-300 px-1 py-1 w-[80px] rounded-md text-center text-sm" />
          </div>
        </div>
      </div>
      
    </div>

  )

}