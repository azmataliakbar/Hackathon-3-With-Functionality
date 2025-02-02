import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-300 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div className="text-gray-700 mt-10 text-base font-bold hover:scale-y-150 hover:text-blue-500 text-center md:text-left">
            <p>
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>

          {/* Links and Help Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-40 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-700 hover:scale-y-150 hover:text-blue-500">
                Links
              </h3>
              <ul>
                <li className="hover:scale-y-150 font-bold text-gray-500 hover:underline hover:text-orange-400">
                  <Link href="/">Home</Link>
                </li>
                
                <li className="hover:scale-y-150 font-bold text-gray-500 hover:underline hover:text-orange-400">
                  <Link href="/About">About</Link>
                </li>
                <li className="hover:scale-y-150 font-bold text-gray-500 hover:underline hover:text-orange-400">
                  <Link href="/Contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-700 hover:scale-y-150 hover:text-blue-500">
                Help
              </h3>
              <ul>
                <li className="text-gray-500 hover:text-orange-400 hover:scale-y-150 font-bold">
                  <Link href="">PaymentOption</Link>
                </li>
                <li className="text-gray-500 hover:text-orange-400 hover:scale-y-150 font-bold">
                  <Link href="">Returns</Link>
                </li>
                <li className="text-gray-500 hover:text-orange-400 hover:scale-y-150 font-bold">
                  <Link href="">PrivatePolicies</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 text-gray-700 hover:scale-y-150 hover:text-blue-500">
              Newsletter
            </h3>
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border-b-2 text-gray-500 border-gray-300 rounded text-base focus:placeholder-gray-300 w-full md:w-auto"
              />
              <div className=" flex justify-center items-center">
              <Link href="/Contact">
                <button className="underline font-bold text-gray-500 hover:text-orange-400 mt-2 md:mt-0 text-sm hover:scale-y-150 ">
                  SUBSCRIBE
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-400 my-4 w-3/4 mx-auto" />
        <p className="flex justify-center items-center gap-x-8 text-xs mt-8 text-gray-900 hover:scale-110 md:hover:scale-150 lg:hover:scale-150 hover:text-blue-500">
        <span>© 2025 Heaven Hills Furniture.</span>
        <span>All rights reserved.</span>
        </p>
          <p className="text-center text-gray-400 text-xs font-bold">Author: Azmat Ali</p>
      </div>
    </footer>
  );
}
