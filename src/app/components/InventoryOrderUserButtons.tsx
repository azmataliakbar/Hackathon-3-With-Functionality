
import Link from "next/link"

export default function Buttons() {


  return (

    <div>
      {/* Admin Navigation Bar */}
      <nav className="mt-4 mb-4">
          <ul className="flex flex-col lg:flex-row gap-2 ml-4 items-center justify-center ">
            <li>
              <Link href="/admin/inventory">
              <button
                className="px-4 py-2 font-bold bg-blue-500 text-white rounded hover:bg-blue-600 hover:scale-y-110">
                Inventory
              </button>
              </Link>
            </li>
            <li>
            <Link href="/admin/orders">
              <button
                className="px-6 py-2 font-bold bg-green-500 text-white rounded hover:bg-green-600 hover:scale-y-110">
                Orders
              </button>
              </Link>
            </li>
            <li>
            <Link href="/admin/users">
              <button
                className="px-7 py-2 font-bold bg-purple-500 text-white rounded hover:bg-purple-600 hover:scale-y-110">
                Users
              </button>
              </Link>
            </li>
          </ul>
        </nav>
        </div>

  )

}