"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "💧 Water Quality Solutions",
      description:
        "Comprehensive analysis and solutions for water treatment and safety.",
      image: "/images/water.jpg",
      link: "/services/water-quality",
    },
    {
      title: "🔊 Sound Quality Solutions",
      description:
        "Advanced monitoring and consulting for noise pollution and sound-level control.",
      image: "/images/sound.jpg",
      link: "/services/sound-quality",
    },
    {
      title: "🌬️ Air Pollution Control",
      description:
        "Strategies to reduce emissions and ensure cleaner, healthier air.",
      image: "/images/air.jpg",
      link: "/services/air-pollution",
    },
  ];

  const posts = [
    {
      id: 1,
      title: "5 Simple Ways to Improve Air Quality at Home",
      excerpt: "Learn how small changes can make your indoor air healthier...",
      date: "2025-09-30",
      slug: "improve-air-quality",
    },
    {
      id: 2,
      title: "The Importance of Clean Water in Daily Life",
      excerpt: "Water purity affects more than just taste — here’s why...",
      date: "2025-09-25",
      slug: "clean-water-daily-life",
    },
  ];

  // Auto-slide for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sustainable Solutions for a Better Tomorrow
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          At Sound Air & Water Solutions, we provide expert environmental
          consultancy services to protect our planet’s air and water resources.
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-12 relative px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Our Services
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center cursor-pointer"
              onClick={() => router.push(service.link)}
            >
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="rounded-md mx-auto mb-4 object-cover h-64 w-full"
              />
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="block md:hidden relative overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full cursor-pointer px-2"
                onClick={() => router.push(service.link)}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 text-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="rounded-md mx-auto mb-4 object-cover h-64 w-full"
                  />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-green-700" : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
            }
            className="absolute top-0 left-0 h-full px-3 flex items-center justify-center cursor-pointer text-2xl font-bold text-green-700"
          >
            ◀
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % services.length)}
            className="absolute top-0 right-0 h-full px-3 flex items-center justify-center cursor-pointer text-2xl font-bold text-green-700"
          >
            ▶
          </button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.slice(0, 2).map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-xl bg-white shadow hover:shadow-lg transition-all border border-gray-100 hover:border-green-200"
            >
              <h3 className="text-2xl font-semibold text-green-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
          >
            View All Posts →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
