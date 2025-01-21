import Image from 'next/image';
import Header1 from '../components/Header1';
import Last from '../components/Footer';
import Link from "next/link";


export default function Shop() {
  const product = {
    name: 'Asgaard sofa',
    price: '$ 500',
    description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    image: '/sofasofa.png',
    sizes: ['L', 'XL', 'XS'],
    colors: ['Blue', 'Beige', 'Brown'],
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
  };


  return (
    <div className="bg-white min-h-screen">
      <Header1 />

      {/* Section - 1 */}
      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-row lg:flex-col gap-2 md:gap-4 lg:gap-4">
              <Image
                src="/sofa11.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
              <Image
                src="/sofa22.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
              <Image
                src="/sofa33.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
              <Image
                src="/sofa44.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
            </div>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="bg-[#FFF9E5] rounded-lg hover:scale-110 mx-auto"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-black hover:scale-y-150 hover:text-red-500">
              {product.name}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-black hover:scale-y-150 hover:text-blue-500">
              {product.price}
            </p>
            <div className="flex items-center gap-2">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/star1.png"
                  alt="Full Star"
                  width={25}
                  height={2}
                  className="hover:scale-150"
                />
              ))}
              <Image
                src="/star2.png"
                alt="Half Star"
                width={25}
                height={2}
                className="hover:scale-150"
              />
              <p className="text-gray-600 ml-6 hover:scale-125 hover:text-blue-500">
                5 Customer Reviews
              </p>
            </div>
            <p className="text-gray-500 mt-4 hover:text-blue-500 hover:scale-y-125">{product.description}</p>

            <div className="mt-4">
              <span className="text-gray-500 font-bold">Size:</span>
              <div className="flex flex-wrap gap-2 mt-2 ">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="border border-gray-300 px-2 py-1 text-gray-400 font-bold rounded-md hover:text-red-500 hover:bg-yellow-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 ">
              <span className="text-gray-500 font-bold">Color:</span>
              <div className="flex items-center gap-2 mt-2">
                {['/bluecircle.png', '/blackcircle.png', '/goldencircle.png'].map((color, i) => (
                  <Image key={i} src={color} alt={`Color ${i}`} width={20} height={20} />
                ))}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="quantity"
                className="text-gray-500 font-bold"
              >
                Quantity:
              </label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  defaultValue="1"
                  className="border border-gray-300 font-bold text-gray-500 px-2 py-1 rounded-md text-center w-16"
                />
                <Link href="/ProductsDetail">
                  <button
                  className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-110">
                    All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Last />
    </div>
  );
}
