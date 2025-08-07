"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import {IoMdMenu, IoMdClose } from "react-icons/io";
interface NavItem {
  label: string;
  href: string;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Catechetical", href: "/catechetical" },
  {
    label: "Our People",
    href: "/people",
  },
  { label: "Our Bishiop", href: "/bishop" },

  { label: "Priets and Religious", href: "/clergy" },
  { label: "Events", href: "/events" },

  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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
      <div className="w-full bg-gray-100 py-2 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Catholic Diocese of Katsina
        </h1>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out w-full ${
          isSticky ? "bg-white shadow-md" : "bg-[#CFAB7A6E]"
        }`}
      >
        <nav className="flex items-center justify-between px-4 py-4 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-8 object-contain rounded-full"
            />
            <span className="sr-only">Home</span>
          </Link>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>

          <ul className="hidden md:flex items-center gap-6 text-lg font-bold text-gray-800">
            {navLinks.map((item) => (
              <li key={item.label} className="relative group"></li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4 text-lg">
            <a
              href="https://www.facebook.com/share/1649DPp6zj/"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/cathdiokatcom?igsh=aGtmNzZpZmd5Ynln"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@katsinacatholicdiocese?si=YWujbpQeJGRAAKn4"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 text-gray-800 text-base font-medium">
              {navLinks.map((item) => (
                <li key={item.label} className="relative">
                  <Link href={item.href!} >
                    {item.label}
                  </Link>
                </li>
              ))}
              <div className="flex gap-4 pt-4 border-t border-gray-300">
                <a
                  href="https://www.facebook.com/share/1649DPp6zj/"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/cathdiokatcom?igsh=aGtmNzZpZmd5Ynln"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://youtube.com/@katsinacatholicdiocese?si=YWujbpQeJGRAAKn4"
                  aria-label="YouTube"
                >
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
