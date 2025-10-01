import Layout from "@/components/Layout";

// app/blog/[slug]/page.tsx
interface BlogPostProps {
  params: { slug: string };
}

export default function BlogPost({ params }: BlogPostProps) {
  return (<Layout>
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-4">
        {params.slug.replace(/-/g, " ")}
      </h1>
      <p className="text-gray-600">
        This is where the content for <strong>{params.slug}</strong> will go.
      </p>
    </div>
    </Layout>
  );
}
