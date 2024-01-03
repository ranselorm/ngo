"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
// import { FaInstagram } from "react-icons/fa";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  //   { name: "Volunteer", href: "/volunteer" },
];

const Navbar = () => {
  const NavItem = ({ href, name }) => (
    <Link
      href={href}
      className="py-4 px-2 border-b-2 border-transparent hover:border-secondary transition duration-300"
    >
      {name}
    </Link>
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       // Set the scroll threshold (e.g., height of the hero section)
  //       const scrollThreshold = 50;
  //       setIsScrolled(window.scrollY > scrollThreshold);
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-colors duration-300 py-3 bg-white shadow-lg bg-transparent text-black text-[19px]
      }`}
    >
      <div className="mx-auto px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center py-4 px-2">
            <span className="font-semibold text-lg">Brand</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path> // X icon
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path> // Hamburger icon
                )}
              </svg>
            </button>
          </div>

          {/* Primary Navbar items */}
          <div className="hidden md:flex items-center gap-6 space-x-1">
            {menuItems.map((item) => (
              <NavItem key={item.name} href={item.href} name={item.name} />
            ))}
          </div>
          <button className="bg-secondary text-white py-2.5 px-5 rounded-md border-2 border-secondary hover:bg-transparent hover:text-black transition hover:border-secondary hidden md:flex">
            Donate Now
          </button>
          {/* <div className="hidden md:flex">
            <FaInstagram
              className={`${
                isScrolled ? "text-black" : "text-[#FAC97A]"
              } text-[22px]`}
            />
          </div> */}
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            {item.name}
          </Link>
        ))}
        <button className="bg-secondary text-white py-2.5 px-5 rounded-md border-2 border-secondary hover:bg-transparent hover:text-black transition hover:border-secondary">
          Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
