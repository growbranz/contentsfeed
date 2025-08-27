"use client";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-400 p-2 rounded">
          <span className="text-black font-bold text-xl">CF</span>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Content Feeds</h1>
          <p className="text-sm text-gray-500">Digital Agency</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="hidden md:flex gap-8 font-medium text-gray-700">
        <a href="#">Home</a>
        <a href="#about">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>

      {/* Call Button */}
      <a
        href="tel:+919159505951"
        className="bg-yellow-400 px-4 py-2 rounded-md font-semibold flex items-center gap-2"
      >
        📞 +91 91595 05951
      </a>
    </header>
  );
}
