"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 md:px-12 py-5">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 md:w-16 md:h-16">
            <Image
              src="/images/cf-logo.png"
              alt="Content Feeds Logo"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-semibold">Content Feeds</h1>
            <p className="text-sm md:text-base text-gray-500">Digital Agency</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 font-medium text-gray-700">
          <a href="#" className="hover:text-yellow-500 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-yellow-500 transition-colors">
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-yellow-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Call Button (desktop only) */}
        <a
          href="tel:+919159505951"
          className="hidden md:flex bg-yellow-400 px-6 py-3 rounded-md font-semibold items-center gap-2 shadow-sm hover:bg-yellow-500 transition-colors"
        >
          📞 +91 91595 05951
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (pushes content down) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 border-t border-gray-200 bg-white shadow-inner">
          <a
            href="#"
            className="text-gray-700 hover:text-yellow-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-yellow-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-yellow-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-yellow-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          {/* Call Button in mobile menu */}
          <a
            href="tel:+919159505951"
            className="bg-yellow-400 px-6 py-3 rounded-md font-semibold flex items-center gap-2 shadow-sm hover:bg-yellow-500 transition-colors"
          >
            📞 +91 91595 05951
          </a>
        </div>
      )}
    </header>
  );
}
