// app/blog/page.tsx
import Link from "next/link";
import Layout from "@/components/Layout";

export default function BlogPage() {
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

  return (
    <Layout>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-8">🌱 Our Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-xl bg-white shadow hover:shadow-lg 
                       transition-all border border-gray-100 hover:border-green-200"
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  );
}
