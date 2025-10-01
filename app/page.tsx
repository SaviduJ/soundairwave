"use client";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  const router = useRouter();

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

  // 👇 Blog posts (same as in /blog/page.tsx)
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

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

      {/* Services Slider */}
      <section className="mt-12 relative">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Our Services
        </h2>

        <Slider {...settings}>
          {services.map((service) => (
            <div
              key={service.title}
              className="px-4 cursor-pointer"
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
        </Slider>
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
              className="block p-6 rounded-xl bg-white shadow hover:shadow-lg 
                         transition-all border border-gray-100 hover:border-green-200"
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
            className="inline-block px-6 py-2 rounded-full bg-green-600 
                       text-white hover:bg-green-700 transition"
          >
            View All Posts →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
