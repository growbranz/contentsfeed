"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#fff8e1] px-8 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Illustration */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/about-cf.png" // replace with your illustration
            alt="About Us Illustration"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-yellow-500 font-semibold">About Us</p>
          <h3 className="text-3xl md:text-4xl font-bold leading-snug">
            We are here for Business{" "}
            <span className="text-yellow-500">Solutions & Ideas</span>
          </h3>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-center gap-3">
              <span>🔍</span> Best Search Engine Optimizers.
            </li>
            <li className="flex items-center gap-3">
              <span>✍️</span> Creative & Professional Content Writer.
            </li>
            <li className="flex items-center gap-3">
              <span>📢</span> Influencer & Media Marketing.
            </li>
          </ul>

          <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-lg w-fit shadow hover:bg-yellow-500 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center bg-yellow-400 mt-12 rounded-lg overflow-hidden">
        <div className="py-8">
          <h4 className="text-3xl font-bold">50+</h4>
          <p className="text-gray-700 font-medium">Clients</p>
        </div>
        <div className="py-8 border-t md:border-t-0 md:border-l md:border-r border-yellow-500/50">
          <h4 className="text-3xl font-bold">200+</h4>
          <p className="text-gray-700 font-medium">Positive Review</p>
        </div>
        <div className="py-8">
          <h4 className="text-3xl font-bold">100+</h4>
          <p className="text-gray-700 font-medium">Brands</p>
        </div>
      </div>
    </section>
  );
}
