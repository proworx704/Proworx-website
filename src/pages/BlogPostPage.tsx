import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { BookNowLink } from "@/components/BookNowLink";
import { Button } from "@/components/ui/button";
import { getBlogPost, BLOG_POSTS } from "@/data/blogPosts";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Find next/prev posts for navigation
  const currentIdx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIdx > 0 ? BLOG_POSTS[currentIdx - 1] : null;
  const nextPost =
    currentIdx < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIdx + 1] : null;

  // Related posts (same category, excluding current)
  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 2);
  // If not enough same-category, fill with other posts
  const relatedPosts =
    related.length >= 2
      ? related
      : [
          ...related,
          ...BLOG_POSTS.filter(
            (p) =>
              p.slug !== post.slug && !related.some((r) => r.slug === p.slug)
          ).slice(0, 2 - related.length),
        ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.proworxdetailing.com${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Tyler York",
      jobTitle: "Owner & Lead Detailer",
      url: "https://www.proworxdetailing.com",
    },
    publisher: {
      "@type": "LocalBusiness",
      name: "ProWorx Mobile Detailing",
      url: "https://www.proworxdetailing.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.proworxdetailing.com/images/logo-horizontal.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.proworxdetailing.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, auto detailing, ${post.title.toLowerCase().split(" ").slice(0, 5).join(", ")}, ProWorx Charlotte NC`}
        ogImage={`https://www.proworxdetailing.com${post.image}`}
        schema={articleSchema}
      />

      {/* Hero image */}
      <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        {/* Breadcrumb overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container pb-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* Article content */}
      <article className="py-10 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
              <span className="px-2.5 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5" />
                {formatDate(post.publishedAt)}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5" />
                {post.readingTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 mb-8 border-b border-border">
              <div className="size-10 rounded-full bg-gold flex items-center justify-center">
                <span className="text-gold-foreground font-bold text-sm">
                  TY
                </span>
              </div>
              <div>
                <p className="font-semibold text-sm">Tyler York</p>
                <p className="text-xs text-muted-foreground">
                  Owner & Lead Detailer · 12+ Years Experience
                </p>
              </div>
            </div>

            {/* Article body */}
            <div className="prose-custom">
              {post.content.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                      {section.heading}
                    </h2>
                  )}
                  <div dangerouslySetInnerHTML={{ __html: section.body }} />
                </div>
              ))}
            </div>

            {/* Share + CTA */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="rounded-2xl bg-gold/5 border border-gold/20 p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  Ready to Experience the ProWorx Difference?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  We're Charlotte's premier mobile detailing service — Gyeon &
                  IGL certified, 51 five-star reviews, and 12+ years of
                  experience. We come to you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <BookNowLink>
                    <Button
                      size="lg"
                      className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold"
                    >
                      Book a Detail <ArrowRight className="size-4 ml-1" />
                    </Button>
                  </BookNowLink>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-border p-4 hover:border-gold/30 transition-colors"
                >
                  <ArrowLeft className="size-5 text-muted-foreground mt-0.5 group-hover:text-gold transition-colors shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Previous Article
                    </p>
                    <p className="font-semibold text-sm leading-snug group-hover:text-gold transition-colors">
                      {prevPost.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.slug}`}
                  className="group flex items-start gap-3 rounded-xl border border-border p-4 hover:border-gold/30 transition-colors text-right sm:justify-end"
                >
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Next Article
                    </p>
                    <p className="font-semibold text-sm leading-snug group-hover:text-gold transition-colors">
                      {nextPost.title}
                    </p>
                  </div>
                  <ArrowRight className="size-5 text-muted-foreground mt-0.5 group-hover:text-gold transition-colors shrink-0" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-20 bg-card border-t border-border">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">
              More Articles You'll Love
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group rounded-2xl bg-background border border-border overflow-hidden hover:border-gold/30 transition-colors flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={rp.image}
                      alt={rp.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold font-semibold">
                        {rp.category}
                      </span>
                      <span>{rp.readingTime}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors leading-snug">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {rp.excerpt.length > 120
                        ? rp.excerpt.slice(0, 120) + "…"
                        : rp.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/blog">
                  View All Articles <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
