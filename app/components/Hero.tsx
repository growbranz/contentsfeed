"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-yellow-50 px-4 sm:px-8 md:px-20 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20">
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left order-1 md:order-none">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            We Are Best <br />
            <span className="text-yellow-400">Digital Marketing</span> <br />
            Agency
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Digital marketing is the component of marketing that utilize
            internet and online based digital technologies, platforms to promote
            products and services.
          </p>
          <button className="mt-6 sm:mt-8 bg-yellow-400 hover:bg-yellow-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-base sm:text-lg shadow transition">
            Enquire Now!
          </button>
        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center w-full md:w-auto order-2">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[480px] md:h-[400px] lg:w-[590px] lg:h-[440px] flex items-center justify-center relative">
            <Image
              src="/logos/apollo.png"
              alt="Working on laptop"
              width={2050}
              height={2050}
              className="relative z-10 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
