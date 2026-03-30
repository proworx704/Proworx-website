import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";
import { BookNowLink } from "@/components/BookNowLink";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/data/blogPosts";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <div className="flex-1 flex flex-col">
      <PageSEO
        title="Detailing Tips & Guides"
        description="Expert auto detailing tips, guides, and industry insights from ProWorx Mobile Detailing in Charlotte, NC. Learn about paint correction, ceramic coating, car care, and more."
        keywords="auto detailing tips, car care guide, ceramic coating guide, paint correction tips, mobile detailing Charlotte NC, how to maintain car detail"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "ProWorx Detailing Blog",
          description:
            "Expert auto detailing tips, guides, and industry insights from ProWorx Mobile Detailing.",
          url: "https://www.proworxdetailing.com/blog",
          publisher: {
            "@type": "LocalBusiness",
            name: "ProWorx Mobile Detailing",
            url: "https://www.proworxdetailing.com",
          },
        }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm text-gold mb-6">
              <BookOpen className="size-4" />
              Detailing Knowledge Base
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Tips, Guides &{" "}
              <span className="text-gradient-gold">Expert Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Everything you need to know about caring for your vehicle — from
              the professionals who do it every day. Free advice from 12+ years
              in the detailing business.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-12 md:pb-16">
        <div className="container">
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid md:grid-cols-2 gap-6 rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/30 transition-colors"
          >
            <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-gold/10 text-gold text-xs font-semibold">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3.5" />
                  {formatDate(featured.publishedAt)}
                </span>
                <span>·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm">
                Read Article <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/30 transition-colors flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 flex flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2.5">
                    <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold font-semibold">
                      {post.category}
                    </span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt.length > 140
                      ? post.excerpt.slice(0, 140) + "…"
                      : post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-gold font-semibold text-sm mt-3">
                    Read More <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-card border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Ready to See the Difference?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Reading about detailing is great — but nothing beats experiencing
              it. Book a mobile detail and we'll come right to your door.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <BookNowLink>
                <Button
                  size="lg"
                  className="bg-gold text-gold-foreground hover:bg-gold/90 font-semibold"
                >
                  Book Now <ArrowRight className="size-4 ml-1" />
                </Button>
              </BookNowLink>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
