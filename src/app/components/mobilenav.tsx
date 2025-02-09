"use client";

import { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { usePathname } from "next/navigation";

// Define the links for the mobile nav menu
const links = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State to manage the sheet open/close
  const pathname = usePathname(); // Get the current pathname

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="relative">
      {/* Trigger button to open the menu */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-primary" />
      </button>

      {/* Menu (Sheet equivalent) */}
      <div
        className={`${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-gray-500 bg-opacity-50 z-50 transition-opacity duration-300`}
      >
        <div className="w-[300px] bg-white p-4 shadow-xl h-full relative">
          {/* Close the menu when clicked outside or on any link */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-500"
          >
            &times;
          </button>

          <div className="flex justify-center items-center mb-8">
            <h2 className="text-2xl font-semibold">
              Menu <span className="text-orange-200">.</span>
            </h2>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col items-center space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700"
                } py-2 px-4 text-lg font-semibold`}
                onClick={handleLinkClick} // Close the menu when a link is clicked
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Optional: Add a button for mobile-specific actions */}
          <div className="mt-8 text-center">
            <button
              className="w-full bg-primary text-white py-2 rounded-md font-semibold"
              onClick={handleLinkClick}
            >
              <Link href="/contact">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
