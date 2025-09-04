"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Podcaster",
    image: "/testimonials/sarah.jpg",
    text: "Yaavarum Kelir has revolutionized my podcasting experience—easy to use, reliable, and packed with features that truly elevate my content.",
    rating: 5,
  },
  {
    id: 2,
    name: "James P.",
    role: "Entrepreneur",
    image: "/testimonials/james.jpg",
    text: "An absolute game-changer! Their support and services have boosted my business beyond expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily R.",
    role: "Content Creator",
    image: "/testimonials/emily.jpg",
    text: "Seamless, modern, and professional. I’ve never worked with a more dedicated team.",
    rating: 4,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, current]);

  return (
    <section className="bg-gradient-to-br from-white to-yellow-50 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-gray-500 font-semibold tracking-wide uppercase">
          Testimonial
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Hear Something From{" "}
          <span className="text-yellow-500">Our Clients</span>
        </h2>

        {/* Testimonial Card */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            key={testimonials[current].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="bg-black text-white rounded-3xl shadow-lg p-10 mx-auto max-w-3xl"
          >
            {/* Profile Image */}
            <div className="flex justify-center">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md"
              />
            </div>

            {/* Quote */}
            <p className="mt-6 text-lg leading-relaxed italic">
              “{testimonials[current].text}”
            </p>

            {/* Rating */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                )
              )}
            </div>

            {/* Name */}
            <p className="mt-6 font-semibold text-yellow-400">
              - {testimonials[current].name}
            </p>
            <p className="text-sm text-gray-300">
              {testimonials[current].role}
            </p>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-yellow-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-yellow-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
