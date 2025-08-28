"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-[#000] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-justify">
        <div>
          <h2 className="text-white text-lg font-bold mb-2">
            Catholic Diocese of katsina
          </h2>
          <p className="text-sm mb-4">
            The Catholic Diocese of Katsina was officially established on
            Monday, 16th October 2023, as announced from the Vatican. His
            Holiness Pope Benedict appointed Reverend Monsignor Gerald Mamman
            Musa as its first Bishop.
          </p>
        </div>
        {/* <div>
          <h3 className="text-white font-semibold mb-3">Cathedral</h3>
          <ul className="space-y-2 text-sm">
            <li>Parishes</li>
            <li>Schools</li>
            <li>Chaplaincies</li>
            <li></li>
            <li>Volunteer</li>
          </ul>
        </div> */}

        <div>
          <h3 className="text-white font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm ">
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
            <Link href="/ history">
              <li>History</li>
            </Link>
            <Link href="/people">
              <li>Offices</li>
            </Link>
            <Link href="/gallery">
              <li>Gallery</li>
            </Link>
            <Link href="/blog">
              <li>News</li>
            </Link>
            <Link href="/support">
              <li>Support</li>
            </Link>
            <Link href="/events">
              <li>Events</li>
            </Link>
            <Link href="/cathecatical">
              <li>Cathecatical</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm ">
            <Link href="/bishop">
              <li>Bishop</li>
            </Link>
            <Link href="/coat">
              <li>Coat Of Arm</li>
            </Link>
            <Link href="/clergy">
              <li>Clergy</li>
            </Link>
            <Link href="/people">
              <li>Offices</li>
            </Link>
            <Link href="/gallery">
              <li>Gallery</li>
            </Link>
            <Link href="/blog">
              <li>News</li>
            </Link>
            <Link href="/support">
              <li>Support</li>
            </Link>
            <Link href="/events">
              <li>Events</li>
            </Link>
            {/* <Link href="/organization">
              <li>Organizations</li>
            </Link> */}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Get in Touch with Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>1 - 3 katsina street</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit</li>
            <li>+234 810 646 4244</li>
            <li>cathdiokatcomm@gmail.com</li>
          </ul>
          <div className="flex gap-4 mt-2 text-center items-center justify-center">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400 mt-12 mb-0">
        &copy; {new Date().getFullYear()} Catholic Diocese Of katsina. All
        rights reserved — Website Devloped by
        <Link
          href="https://verbumnetworksenugu.com"
          target="_blank"
          className="text-red-200 italic text-xs font-extralight hover:underline"
        >
          {" "}
          Verbum Networks Limited Enugu.
        </Link>
      </p>
    </footer>
  );
};
