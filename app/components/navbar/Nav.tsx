"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import DonateButton from "../button/DonateButton";

interface NavItem {
  id: number;
  label: string;
  href?: string;
}

const navLinks: NavItem[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "About", href: "/about" },
  { id: 3, label: "Catechetical", href: "/catechetical" },
  { id: 4, label: "Our People", href: "/people" },
  { id: 5, label: "News", href: "/blog" },
  { id: 6, label: "Contact", href: "/contact" },
  { id: 7, label: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar: Logo + Socials */}
      <div className="w-full bg-gray-100 px-6 md:px-12 lg:px-16 flex justify-between items-center py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Image
            src="/assets/kat3.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain rounded-full w-16 h-16"
          />
        </Link>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-lg text-gray-700">
          <a href="https://www.facebook.com/share/1649DPp6zj/" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/cathdiokatcom?igsh=aGtmNzZpZmd5Ynln" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@katsinacatholicdiocese?si=YWujbpQeJGRAAKn4" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Bottom Nav: Links */}
      <div className={`transition-all duration-300 ease-in-out ${isSticky ? "bg-white shadow-md" : "bg-[#CFAB7A6E]"}`}>
        <nav className="flex items-center justify-center px-4 py-3 lg:px-12">
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-6 text-lg font-bold text-gray-800">
            {navLinks.map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  href={item.href || "#"}
                  className="transition-colors duration-300 hover:text-[#800000]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 text-gray-800 text-base font-medium">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href || "#"}
                    onClick={() => setMobileOpen(false)}
                    className="transition-colors duration-300 hover:text-[#800000]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Donate button for mobile */}
              <li>
                <DonateButton className="w-full mt-2 bg-yellow-600 text-white py-2 rounded text-center font-semibold" />
              </li>

              {/* Socials for mobile */}
              <div className="flex gap-4 pt-4 border-t border-gray-300">
                <a href="https://www.facebook.com/share/1649DPp6zj/" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/cathdiokatcom?igsh=aGtmNzZpZmd5Ynln" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/@katsinacatholicdiocese?si=YWujbpQeJGRAAKn4" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
