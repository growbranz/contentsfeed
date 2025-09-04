"use client";
import { ArrowRight } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section id="services" className="px-8 py-20 bg-[#fffef8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <p className="text-yellow-500 font-semibold">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Choose What You Like <br />
            Our <span className="text-yellow-500">Best Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Digital marketing is the component of marketing that utilize
            internet and online based digital technologies, platforms to promote
            products and services.
          </p>
          <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-lg w-fit shadow hover:bg-yellow-500 transition">
            Explore all services
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="font-bold text-lg mb-2">Digital Marketing</h3>
            <p className="text-gray-600 text-sm mb-4">
              Digital marketing is the component of marketing that utilize
              internet and online based digital technologies
            </p>
            <a
              href="#"
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black"
            >
              See More <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2">SEO</h3>
            <p className="text-gray-600 text-sm mb-4">
              Digital marketing is the component of marketing that utilize
              internet and online based digital technologies
            </p>
            <a
              href="#"
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black"
            >
              See More <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">📢</div>
            <h3 className="font-bold text-lg mb-2">Influencer Marketing</h3>
            <p className="text-gray-600 text-sm mb-4">
              Digital marketing is the component of marketing that utilize
              internet and online based digital technologies
            </p>
            <a
              href="#"
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black"
            >
              See More <ArrowRight size={16} />
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-yellow-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-bold text-lg mb-2">SMM</h3>
            <p className="text-gray-600 text-sm mb-4">
              Digital marketing is the component of marketing that utilize
              internet and online based digital technologies
            </p>
            <a
              href="#"
              className="flex items-center gap-2 font-semibold text-gray-800 hover:text-black"
            >
              See More <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
