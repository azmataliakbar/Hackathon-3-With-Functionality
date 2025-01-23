// src/app/products/[slug]/page.tsx
// src/app/products/[slug]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductClient from "./ProductClient"
import type { Product } from "@/app/types/product"

// Mock Product Data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Chair Wibe",
    slug: "chair-wibe",
    image:
      "https://plus.unsplash.com/premium_photo-1668073439372-2ceafa1222b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
    description: "A sleek outdoor chair with natural wooden elements and a modern look.",
    discountPercentage: 10,
    isFeaturedProduct: true,
    stockLevel: 25,
    category: "Chair",
  },
  {
    id: "2",
    name: "Armchair Chair Set",
    slug: "armchair-chair-set",
    image:
      "https://plus.unsplash.com/premium_photo-1681022527718-81786d7873bd?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 850,
    description: "An elegant armchair with plush cushions and a curved design for comfort.",
    discountPercentage: 0,
    isFeaturedProduct: false,
    stockLevel: 10,
    category: "Chair",
  },
  {
    id: "3",
    name: "Pink Lounge Chair",
    slug: "pink-lounge-chair",
    image:
      "https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1600,
    description: "A spacious lounge chair with a quilted back and soft cushioning.",
    discountPercentage: 20,
    isFeaturedProduct: true,
    stockLevel: 5,
    category: "Chair",
  },
  {
    id: "4",
    name: "Stylish Armchair",
    slug: "stylish-armchair",
    image:
      "https://plus.unsplash.com/premium_photo-1690971631361-a55009aa2c7a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 780,
    description: "A luxurious armchair with velvet fabric and golden metal legs.",
    discountPercentage: 0,
    isFeaturedProduct: false,
    stockLevel: 12,
    category: "Sofa",
  },
  {
    id: "5",
    name: "Hans Wegner Style Three-Legged Shell Chair",
    slug: "hans-wegner-style-three-legged-shell-chair",
    image: "https://next-ecommerce-template-4.vercel.app/product/Chair%20(4).png",
    price: 990,
    description: "Iconic three-legged chair with faux leather and ash plywood frame.",
    discountPercentage: 10,
    isFeaturedProduct: false,
    stockLevel: 8,
    category: "Chair",
  },
  {
    id: "6",
    name: "Rapson Thirty-Nine Sofa",
    slug: "rapson-thirty-nine-sofa",
    image:
      "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1300,
    description: "A mid-century modern chair with clean lines and durable materials.",
    discountPercentage: 15,
    isFeaturedProduct: true,
    stockLevel: 20,
    category: "Sofa",
  },
  {
    id: "7",
    name: "Nautilus Lounge Chair",
    slug: "nautilus-lounge-chair",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1450,
    description: "A lounge chair with a shell-inspired design and premium upholstery.",
    discountPercentage: 12,
    isFeaturedProduct: true,
    stockLevel: 10,
    category: "Sofa",
  },
  {
    id: "8",
    name: "High Quality Modern Sofa",
    slug: "high-quality-modern-sofa",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 150,
    description: "A simple and lightweight chair ideal for dining or casual use.",
    discountPercentage: 0,
    isFeaturedProduct: false,
    stockLevel: 50,
    category: "Sofa",
  },
  {
    id: "9",
    name: "Cozy Sofa",
    slug: "cozy-sofa",
    image:
      "https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 520,
    description: "Compact armchair with a cozy design for small spaces.",
    discountPercentage: 8,
    isFeaturedProduct: false,
    stockLevel: 15,
    category: "Sofa",
  },
  {
    id: "10",
    name: "Alpha Table",
    slug: "alpha-table",
    image:
      "https://plus.unsplash.com/premium_photo-1681412205470-77848a519359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 900,
    description: "A sturdy oak chair with a sleek and minimalist design.",
    discountPercentage: 10,
    isFeaturedProduct: false,
    stockLevel: 18,
    category: "Table",
  },
  {
    id: "11",
    name: "Replica Table",
    slug: "replica-table",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 750,
    description: "Classic wishbone chair with a dark walnut frame and cord seat.",
    discountPercentage: 10,
    isFeaturedProduct: false,
    stockLevel: 25,
    category: "Table",
  },
  {
    id: "12",
    name: "Sleek Modern Table",
    slug: "sleek-modern-table",
    image:
      "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000,
    description: "A modern chair with a carbon fiber frame and bold red accents.",
    discountPercentage: 0,
    isFeaturedProduct: true,
    stockLevel: 3,
    category: "Table",
  },
  {
    id: "13",
    name: "Liberty Center",
    slug: "liberty-center",
    image:
      "https://plus.unsplash.com/premium_photo-1661962827359-b165dec0850f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1100,
    description: "Versatile entertainment chair for modern interiors.",
    discountPercentage: 8,
    isFeaturedProduct: false,
    stockLevel: 7,
    category: "Table",
  },
  {
    id: "14",
    name: "Leisure Sofa Chair Set",
    slug: "leisure-sofa-chair-set",
    image:
      "https://plus.unsplash.com/premium_photo-1681487485258-26aaa059d967?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1800,
    description: "A comfortable set of chairs with soft cushions for relaxation.",
    discountPercentage: 18,
    isFeaturedProduct: true,
    stockLevel: 6,
    category: "Sofa",
  },
  {
    id: "15",
    name: "Diondre Chair",
    slug: "diondre-chair",
    image:
      "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 720,
    description: "A tufted chair with acrylic legs for a chic, modern touch.",
    discountPercentage: 7,
    isFeaturedProduct: false,
    stockLevel: 10,
    category: "Chair",
  },
  {
    id: "16",
    name: "Matilda Velvet Bed",
    slug: "matilda-velvet-bed",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 600,
    description: "A vibrant pink velvet chair with a retro-inspired design.",
    discountPercentage: 15,
    isFeaturedProduct: true,
    stockLevel: 12,
    category: "Bed",
  },
  {
    id: "17",
    name: "Solid Bed",
    slug: "solid-bed",
    image:
      "https://plus.unsplash.com/premium_photo-1683120852623-143817d6400b?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 100,
    description: "Durable and lightweight plastic chair for everyday use.",
    discountPercentage: 25,
    isFeaturedProduct: false,
    stockLevel: 100,
    category: "Bed",
  },
  {
    id: "18",
    name: "White Bed",
    slug: "white-bed",
    image:
      "https://plus.unsplash.com/premium_photo-1661595077028-9ff236368cb5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 120,
    description: "A foldable wooden bed with a padded seat for extra comfort.",
    discountPercentage: 12,
    isFeaturedProduct: false,
    stockLevel: 30,
    category: "Bed",
  },
  {
    id: "19",
    name: "Red Bed",
    slug: "red-bed",
    image:
      "https://plus.unsplash.com/premium_photo-1670869816720-de59bfc2be74?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 320,
    description: "An acrylic dining chair with a sleek and minimalist Nordic design.",
    discountPercentage: 10,
    isFeaturedProduct: true,
    stockLevel: 20,
    category: "Bed",
  },
  {
    id: "20",
    name: "Blue Bed",
    slug: "blue-bed",
    image:
      "https://plus.unsplash.com/premium_photo-1692130314358-30f911957d7f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 780,
    description: "A modern cantilever chair with a unique floating effect.",
    discountPercentage: 15,
    isFeaturedProduct: true,
    stockLevel: 5,
    category: "Bed",
  },
  {
    id: "21",
    name: "Luxury Flower Bed",
    slug: "luxury-flower-bed",
    image:
      "https://plus.unsplash.com/premium_photo-1661886455585-03ddf4347796?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2500,
    description: "A luxurious shell-shaped chair with gold brass metal legs.",
    discountPercentage: 0,
    isFeaturedProduct: true,
    stockLevel: 2,
    category: "Bed",
  },
]

async function fetchProduct(identifier: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100)) // Simulating API delay
  return mockProducts.find((product) => product.slug === identifier || product.id === identifier) || null
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await fetchProduct(params.slug)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const product = await fetchProduct(params.slug)

  if (!product) {
    notFound()
  }

  return <ProductClient product={product} />
}

