"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter, // Twitter (X) icon
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 items-center text-center md:text-left">
        {/* Left Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/cf-logo.png"
              alt="Content Feeds Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <div>
              <h3 className="font-bold text-lg">Content Feeds</h3>
              <p className="text-gray-400 text-sm">Digital Agency</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Content Feeds. All rights reserved.
          </p>
        </div>

        {/* Middle Contact Section */}
        <div className="flex flex-col items-center">
          <h4 className="font-semibold text-lg">Contact Us</h4>
          <p className="mt-1 text-gray-300 text-sm sm:text-base">
            +91 91595 05951
          </p>
          <h4 className="font-semibold mt-3">Mail ID</h4>
          <p className="text-gray-300 text-sm sm:text-base">
            info@contentfeed.in
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-5 text-xl sm:text-2xl text-gray-300">
            <a href="#" className="hover:text-yellow-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-500">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Right QR Code */}
        <div className="flex flex-col items-center md:items-end">
          <p className="mb-3 text-gray-300 text-sm sm:text-base text-center md:text-right">
            Scan the QR code to download the app
          </p>
          <Image
            src="/images/qr-code.png"
            alt="QR Code"
            width={120}
            height={120}
            className="mx-auto md:mx-0"
          />
        </div>
      </div>
    </footer>
  );
}
