export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  icon: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-resume-screening-guide",
    title: "How AI Resume Screening Actually Saves Recruiters Time",
    excerpt:
      "A practical look at how automated resume shortlisting cuts first-pass screening time without losing candidate quality.",
    date: "2026-07-15",
    readTime: "5 min read",
    category: "Recruiting",
    icon: "fa-file-user",
    content: [
      "Manual resume screening is one of the most time-consuming parts of hiring. Recruiters often spend hours scanning hundreds of resumes for a single role, most of which don't match the core requirements.",
      "AI-based shortlisting tools parse resumes for structured signals — skills, experience level, and qualifications — and score them against a job description. This doesn't replace human judgment; it removes the repetitive first pass so recruiters can spend their time on the candidates who are actually a fit.",
      "The key is transparency: a good shortlisting tool should show why a candidate was scored the way they were, not just spit out a ranked list. That way recruiters stay in control of the final decision.",
    ],
  },
  {
    slug: "micro-saas-vs-custom-ai",
    title: "Micro-SaaS Tools vs Custom AI Builds: What Should You Pick?",
    excerpt:
      "Not every business problem needs a custom AI pipeline. Here's how to decide between an off-the-shelf micro-tool and a custom build.",
    date: "2026-07-08",
    readTime: "6 min read",
    category: "Strategy",
    icon: "fa-wand-magic-sparkles",
    content: [
      "When a team hits a repetitive workflow problem, the instinct is often to build something custom. But custom AI pipelines take time, engineering resources, and ongoing maintenance.",
      "Micro-SaaS tools are built for a specific, well-defined use case — resume screening, chat digests, note-taking — and can usually be integrated in days rather than months.",
      "The general rule: if your use case matches an existing tool closely, start there. Only invest in a custom build once you've validated the workflow and need deeper customization than an off-the-shelf tool allows.",
    ],
  },
  {
    slug: "community-chat-digest-usecases",
    title: "5 Ways Community Managers Use Chat Digest Tools",
    excerpt:
      "From WhatsApp groups to Discord servers — how automated summaries help community managers stay on top of conversations.",
    date: "2026-06-28",
    readTime: "4 min read",
    category: "Community",
    icon: "fa-comments",
    content: [
      "Community managers running active WhatsApp or Discord groups often lose track of important discussions buried in hundreds of daily messages.",
      "A chat digest tool processes those logs and extracts action items, decisions, and recurring topics — turning noisy group chats into a scannable weekly summary.",
      "This is especially useful for reporting up to leadership, identifying recurring member complaints, and catching decisions that were made informally in chat but never documented anywhere else.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}