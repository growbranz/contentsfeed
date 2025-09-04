"use client";

import { useState } from "react";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // 🔑 Replace with your Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setIsSubmitting(false);

    if (result.success) {
      setMessage("✅ Thank you! Your message has been sent.");
      e.currentTarget.reset();
    } else {
      setMessage("❌ Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-white to-yellow-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-gray-500 font-semibold uppercase">Contact Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Let’s <span className="text-yellow-500">Keep in Touch</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We are ready to serve you 24 hours, please contact us.
          </p>
          <p className="mt-2 text-gray-600">
            Morbi non arcu risus quis varius quam. Facilisis sed odio morbi quis
            commodo odio. At consectetur lorem donec massa sapien faucibus et
            molestie ac. Sit amet cursus sit amet. Faucibus pulvinar elementum
            integer enim.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-gray-600 text-xl">
            <a href="#" className="hover:text-yellow-500">
              G
            </a>
            <a href="#" className="hover:text-yellow-500">
              IG
            </a>
            <a href="#" className="hover:text-yellow-500">
              FB
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-yellow-100 rounded-3xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                First Name*
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="Eg.Content"
                required
                className="p-3 rounded-xl w-full focus:outline-none border border-gray-200 bg-white"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Last Name*
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Eg.Feeds"
                required
                className="p-3 rounded-xl w-full focus:outline-none border border-gray-200 bg-white"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
              Mobile Number*
            </label>
            <input
              type="tel"
              name="mobile"
              placeholder="Eg.123456789"
              required
              className="p-3 rounded-xl w-full focus:outline-none border border-gray-200 bg-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Eg.contentfeeds.kgi@.com"
              required
              className="p-3 rounded-xl w-full focus:outline-none border border-gray-200 bg-white"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2">
              Message*
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="How can we help you?"
              required
              className="p-3 rounded-xl w-full focus:outline-none border border-gray-200 bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition w-full"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>

          <p className="text-xs text-gray-500 text-center mt-3">
            Terms & Conditions*
          </p>

          {message && (
            <p className="text-center mt-4 text-sm font-medium text-green-600">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
