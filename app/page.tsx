"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/About";
import WhatWeDo from "./components/WhatWeDo";
import ClientsSection from "./components/ClientsSection";
import WhyChooseUs from "./components/Whyus";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <ClientsSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
      <Footer />
      <WhatsappIcon />
    </div>
  );
}
