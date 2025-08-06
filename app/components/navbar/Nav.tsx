'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from 'react-icons/io';
import { AnimatePresence, motion } from 'framer-motion';

interface NavItem {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Catechetical', href: '/catechetical' },
  {
    label: 'Our People',
    href: '/people',
    subItems: [
      { label: 'Our Bishiop', href: '/bishop' },
      { label: 'Priets and Religious', href: '/clergy' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setDropdownOpen((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="w-full bg-gray-100 py-2 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">Catholic Diocese of katsina.</h1>
      </div>

      <div className={`transition-all duration-300 ease-in-out w-full ${isSticky ? 'bg-white shadow-md' : 'bg-[#CFAB7A6E]'}`}>
        <nav className="flex items-center justify-between px-4 py-4 lg:px-12">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Image src="/assets/logo.jpg" alt="Logo" width={40} height={40} className="h-8 w-8 object-contain rounded-full" />
            <span className="sr-only">Home</span>
          </Link>

          <button className="md:hidden text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>

          <ul className="hidden md:flex items-center gap-6 text-lg font-bold text-gray-800">
            {navLinks.map((item) => (
              <li key={item.label} className="relative group">
                {item.subItems ? (
                  <>
                    <div className="flex items-center gap-1 cursor-pointer">
                      <Link href={item.href || '#'}>{item.label}</Link>
                      <button onClick={() => toggleDropdown(item.label)} aria-label="toggle submenu">
                        <IoIosArrowDown />
                      </button>
                    </div>
                    <AnimatePresence>
                      {dropdownOpen === item.label && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-44 rounded bg-white shadow-md z-10"
                        >
                          {item.subItems.map((sub) => (
                            <li key={sub.href} className="px-4 py-2 hover:bg-gray-100">
                              <Link href={sub.href}>{sub.label}</Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.href!}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4 text-lg">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 text-gray-800 text-base font-medium">
              {navLinks.map((item) => (
                <li key={item.label} className="relative">
                  {item.subItems ? (
                    <>
                      <div className="flex justify-between items-center">
                        <Link href={item.href || '#'} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                        <button onClick={() => toggleDropdown(item.label)}>
                          <IoIosArrowDown />
                        </button>
                      </div>
                      <AnimatePresence>
                        {dropdownOpen === item.label && (
                          <motion.ul
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-1 border-l border-gray-300"
                          >
                            {item.subItems.map((sub) => (
                              <li key={sub.href}>
                                <Link href={sub.href} className="block py-1" onClick={() => setMobileOpen(false)}>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.href!} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <div className="flex gap-4 pt-4 border-t border-gray-300">
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
