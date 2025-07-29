"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        <div>
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={40}
              height={40}
              className="h-15 w-15 rounded-full mb-4"
            />
          </Link>
          <p className="text-md text-center">
         Catholic <br /> Diocese Of Kastina.
          </p>
          
        </div>

        <div>
          <h2 className="text-white text-lg font-bold mb-2">Catholic Diocese of kastina</h2>
          <p className="text-sm mb-4">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa magnam quod. Quia hic atque dolorum nobis eum, nostrum accusanti
          </p>
         
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Cathedral</h3>
          <ul className="space-y-2 text-sm">
            <li>Parishes</li>
            <li>Schools</li>
            <li>Chaplaincies</li>
            {/* <li></li>
            <li>Volunteer</li> */}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
            <li>History</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Get in Touch with Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>1 - 3 Kastina street</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit</li>
            <li>+23490577888757</li>
            <li>example@kastina.com</li>
          </ul>
           <div className="flex gap-4 mt-2 text-center items-center justify-center">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-300 mt-12">
        &copy; {new Date().getFullYear()} Catholic Diocese Of Kastina. All rights
        reserved — Website Devloped by 
          <Link href="https://verbumnetworksenugu.com" target="_blank" className="text-red-300 italic"> Verbum Networks Limited Enugu.</Link>
      </p>
    </footer>
  );
};
