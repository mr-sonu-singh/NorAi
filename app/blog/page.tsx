import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI micro-SaaS tools, automation, and practical AI use cases from the NorAI Technologies team.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="page-hero">
        <h1>NorAI Blog</h1>
        <p>
          Practical insights on AI automation, micro-SaaS tools, and how
          teams are putting them to work.
        </p>
      </section>

      <section className="section">
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <ScrollReveal delay={i * 80} key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-card-icon">
                  <i className={`fa-solid ${post.icon}`} aria-hidden="true"></i>
                </div>
                <span className="blog-card-category">{post.category}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <div className="blog-card-meta">
                  <span>{formatDate(post.date)}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}