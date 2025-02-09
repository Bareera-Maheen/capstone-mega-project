"use client"; // Add this directive to mark the component as a Client Component

import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import MobileNav from "./mobilenav";
import { usePathname } from "next/navigation"; // Import usePathname

const Header = () => {
  const pathname = usePathname(); // Get the current route
  const isHomePage = pathname === "/"; // Check if the current route is the home page

  return (
    <div
      style={{ backgroundColor: isHomePage ? "#FBEBB5" : "white" }}
      className="h-[100px] wrapper flex flex-col items-center"
    >
      {/* Header */}
      <header className="w-full py-4 sticky top-5">
        <div className="max-w-7xl mx-auto px-20">
        <nav className="flex justify-between items-center space-x-4 md:space-x-7 sm:space-x-5">
            {/* Navigation Links */}
            <div>
            <ul className="hidden lg:flex xl:flex  items-center justify-center space-x-16">
                <li className="text-[#000000] font-medium">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-[#000000] font-medium">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="text-[#000000] font-medium">
                  <Link href="/about">About</Link>
                </li>
                <li className="text-[#000000] font-medium">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden md:show ">
              <MobileNav />
            </div>

            {/* Icons */}
            <div className="flex space-x-8 items-center text-xl">
              <Link href="/Account">
                <FaRegUser />
              </Link>
              <Link href="/Search">
                <IoSearch />
              </Link>
              <Link href="/Wishlist">
                <FaRegHeart />
              </Link>
              <Link href="/cart">
                <FiShoppingCart />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;