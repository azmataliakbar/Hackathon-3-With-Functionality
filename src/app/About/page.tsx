import Image from 'next/image';
import Header1 from '../components/Header1';
import Last from '../components/Footer'

function ProductPage() {
  return (
    <div className="bg-gray-200">
      <Header1 />
      
      {/* Blog section - 1A */}
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
          <h1 className="text-4xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Blog</h1>
          <p className="text-lg sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Blog</p>
        </div>
      </div>

      {/* Blog Section - 1B */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-[1200px] h-auto">
            <div className="w-full md:w-2/3">
              <Image
                src="/blog1.png"
                alt="Product Image"
                width={650}
                height={400}
                className="rounded-lg shadow-lg mb-4 hover:scale-110"
              />
            </div>

            <div className="flex items-center space-x-4 text-gray-500">
              <Image
                src="/blog2.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-xs md:text-sm lg:text-sm ">Admin</span>
              
              <Image
                src="/blog3.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-[12px] md:text-sm lg:text-sm ">14 Oct 2022</span>
              
              <Image
                src="/blog4.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-xs md:text-sm lg:text-sm">Wood</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <div className="flex justify-between items-center mb-4">
              <input type="text" placeholder="Search" className="border border-gray-300 p-2 w-full md:w-[450px] rounded-lg " />
            </div>

            <div className="mb-4">
              <h2 className="text-xl sm:text-lg font-bold text-black mb-4 hover:text-red-500 hover:scale-y-150">Categories</h2>
              <ul>
                <li className="flex items-center justify-between mb-2 text-gray-400">
                  <span className='font-bold hover:text-blue-500 hover:scale-125'>Crafts</span>
                  <span className="ml-2 font-bold hover:text-red-500 hover:scale-150">2</span>
                </li>
                <li className="flex items-center justify-between mb-2 text-gray-400">
                  <span className='font-bold hover:text-blue-500 hover:scale-125'>Design</span>
                  <span className="ml-2 font-bold hover:text-red-500 hover:scale-150">8</span>
                </li>
                <li className="flex items-center justify-between mb-2 text-gray-400">
                  <span className='font-bold hover:text-blue-500 hover:scale-125'>Handmade</span>
                  <span className="ml-2 font-bold hover:text-red-500 hover:scale-150">7</span>
                </li>
                <li className="flex items-center justify-between mb-2 text-gray-400">
                  <span className='font-bold hover:text-blue-500 hover:scale-125'>Interior</span>
                  <span className="ml-2 font-bold hover:text-red-500 hover:scale-150">1</span>
                </li>
                <li className="flex items-center justify-between text-gray-400">
                  <span className='font-bold hover:text-blue-500 hover:scale-125'>Wood</span>
                  <span className="ml-2 font-bold hover:text-red-500 hover:scale-150">6</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-xl font-bold mb-4 text-black hover:text-red-500 hover:scale-y-150">Going all-in with Millennial Design</h1>
            <p className="text-gray-700 mb-6 text-justify hover:text-blue-500 hover:scale-y-150">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi blandit cursus risus.
            </p>
            <a href="#" className="text-blue-500 underline hover:text-red-500">Read more</a>
            <Image
              src="/blog5.png"
              alt="Product Image"
              width={650}
              height={400}
              className="rounded-lg shadow-lg hover:scale-125 transition-transform mb-4"
            />
            <div className="flex items-center space-x-4 text-gray-500">
              <Image
                src="/blog2.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-xs md:text-sm lg:text-sm ">Admin</span>
              
              <Image
                src="/blog3.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-[12px] md:text-sm lg:text-sm ">14 Oct 2022</span>
              
              <Image
                src="/blog4.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-xs md:text-sm lg:text-sm">Wood</span>
            </div>

          </div>

          






          {/* Right Section */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl sm:text-xl font-bold mb-4 text-black hover:text-red-500 hover:scale-y-150">Recent Posts</h2>
            {[{title: "Post 1", img: "/blog6.png"}, {title: "Post 2", img: "/blog7.png"}].map((post, index) => (
              <div key={index} className="mb-4 flex items-center gap-4">
                <Image
                  src={post.img}
                  alt="Post Image"
                  width={100}
                  height={100}
                  className="rounded-lg hover:scale-125"
                />
                <div>
                  <h3 className="text-base font-bold text-black hover:text-blue-500 hover:scale-y-150">{post.title}</h3>
                  <p className="text-gray-600 hover:text-green-500 hover:scale-y-150">03 Aug 2022</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section - 3 */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-xl font-bold mb-4 text-black hover:text-red-500 hover:scale-y-150">Exploring new ways of decorating</h2>
        <p className="text-gray-700 mb-4 text-justify w-full sm:w-[650px] hover:text-blue-500 hover:scale-y-150">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae ultricies leo integer malesuada nunc.
        </p>
        <a href="#" className="text-blue-500 underline hover:text-red-500 mt-2">Read more</a>
        <Image
          src="/blog11.png"
          alt="Post Image"
          width={650}
          height={400}
          className="rounded-lg mt-4 mb-4"
        />
        <div className="flex items-center space-x-4 text-gray-500">
              <Image
                src="/blog2.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-xs md:text-sm lg:text-sm ">Admin</span>
              
              <Image
                src="/blog3.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-[12px] md:text-sm lg:text-sm ">14 Oct 2022</span>
              
              <Image
                src="/blog4.png"
                alt="Shop1logo"
                width={20}
                height={10}
                className="hover:scale-150 transition-transform duration-300"
              />
              <span className="font-bold hover:text-blue-500 text-xs md:text-sm lg:text-sm">Handmade</span>
            </div>
            <h2 className="text-2xl sm:text-xl font-bold mt-2 mb-4 text-black hover:text-red-500 hover:scale-y-150">Handmade pieces that took time to make</h2>
        <p className="text-gray-700 mb-4 text-justify w-full sm:w-[650px] hover:text-blue-500 hover:scale-y-150">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae ultricies leo integer malesuada nunc.
        </p>
        <a href="#" className="text-blue-500 underline hover:text-red-500 mt-2">Read more</a>
      </div>

      <Last />
    </div>
  );
}

export default ProductPage;
