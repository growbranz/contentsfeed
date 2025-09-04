"use client";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fffdf5] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left side - Big Question Mark */}
        <div className="flex justify-center md:justify-start">
          <div className="text-black font-extrabold text-[60px] sm:text-[90px] md:text-[120px] leading-tight">
            <img src="/images/why.png" alt="why" />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-center md:text-left">
          <h2 className="text-yellow-500 font-semibold text-lg">Choose Us</h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            Why <span className="text-yellow-500">Choose</span> Us?
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed max-w-lg">
            Digital marketing is the component of marketing that utilize
            internet and online based digital technologies, platforms to promote
            products and services.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-3xl font-bold text-blue-600">7+</h3>
              <p className="text-gray-700 font-medium mt-1">Years Experience</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-3xl font-bold text-red-600">500K+</h3>
              <p className="text-gray-700 font-medium mt-1">Projects Done</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-3xl font-bold text-green-600">100+</h3>
              <p className="text-gray-700 font-medium mt-1">Branded Clients</p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-3xl font-bold text-yellow-500">24/7</h3>
              <p className="text-gray-700 font-medium mt-1">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
