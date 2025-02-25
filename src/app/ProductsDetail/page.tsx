

import { client } from "@/sanity/lib/client"
import ProductGrid from "@/app/components/ProductGrid"
import Header1 from "../components/Header1"
import ShopImages from "../components/ShopImages"
import OurPromise from "../components/OurPromise"
import Last from "../components/Footer"

interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number | string
  discountPercentage: number | string
  image: string
  category: string
  stockLevel: number
  isFeaturedProduct: boolean
}

export default async function Home() {
  let products = []
  try {
    products = await client.fetch(`
      *[_type == "product"] {
        id,
        name,
        "slug": slug.current,
        description,
        price,
        discountPercentage,
        "image": image.asset->url,
        category,
        stockLevel,
        isFeaturedProduct,
      }
    `)

    // Deduplicate products based on id
    const uniqueProducts = Array.from(new Map(products.map((item: Product) => [item.id, item])).values())
    products = uniqueProducts

    console.log(`Fetched ${products.length} unique products`)
  } catch (error) {
    console.error("Error fetching products:", error)
  }

  return (
    <div className="bg-gray-300">
      <Header1 />
      <ShopImages />

      <div className="flex justify-center items-center">
        <h1 className="text-3xl text-center lg:text-5xl font-bold mt-4 text-gray-800 hover:scale-y-150 hover:text-orange-500">
          HEAVEN HILLS PRODUCTS
        </h1>
      </div>
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <p className="text-center text-white mt-10">No products found.</p>
      )}
      <OurPromise />
      <Last />
    </div>
  )
}

