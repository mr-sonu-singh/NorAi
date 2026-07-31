import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "NorAI Technologies",
            },
          }),
        }}
      />

      <section className="page-hero blog-post-hero">
        <Link href="/blog" className="blog-back-link">
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i>
          Back to Blog
        </Link>
        <span className="blog-card-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blog-card-meta blog-post-meta">
          <span>{formatDate(post.date)}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
      </section>

      <section className="section">
        <article className="blog-post-content">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        {related.length > 0 && (
          <div className="blog-related">
            <h2>More from the blog</h2>
            <div className="blog-grid">
              {related.map((p) => (
                <Link href={`/blog/${p.slug}`} className="blog-card" key={p.slug}>
                  <div className="blog-card-icon">
                    <i className={`fa-solid ${p.icon}`} aria-hidden="true"></i>
                  </div>
                  <span className="blog-card-category">{p.category}</span>
                  <h2>{p.title}</h2>
                  <p>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}