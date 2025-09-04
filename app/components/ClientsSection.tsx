"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const clients = [
  "/logos/aapolo.png",
  "/logos/24_grids.png",
  "/logos/jk_builders.png",
  "/logos/kpbuild.png",
  "/logos/sleek.png",
];

const influencerBrands = [
  "/logos/arignar_anna.png",
  "/logos/bajaj.png",
  "/logos/dk_samy.png",
  "/logos/darling.png",
  "/logos/deep.png",
  "/logos/derby.png",
  "/logos/kk.png",
  "/logos/gir.png",
  "/logos/locakart.png",
  "/logos/monica.png",
  "/logos/sample.png",
  "/logos/swigg.png",
  "/logos/tumble.png",
  "/logos/unlimite.png",
  "/logos/verand.png",
  "/logos/zomat.png",
];

// Use a plain object for variants and type it explicitly
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientsSection() {
  return (
    <section className="px-8 py-20 bg-[#fcfdf7]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase text-gray-600 font-semibold tracking-wider"
        >
          Our Clients
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mt-2"
        >
          In Collaboration With
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Dive into an enriching experience where every moment is cherished and
          celebrated.
        </motion.p>

        {/* Clients Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-12 items-center">
          {clients.map((logo, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <Image
                src={logo}
                alt={`client-${i}`}
                width={150}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Influencer Marketing Brands */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl font-semibold mt-16 mb-6"
        >
          Influencer Marketing Brands
        </motion.h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {influencerBrands.map((logo, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
            >
              <Image
                src={logo}
                alt={`influencer-${i}`}
                width={150}
                height={80}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
