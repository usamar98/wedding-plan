"use client";

import { Modal } from "@/components/ui/Modal";
import { blogArticles } from "@/data/siteData";
import type { BlogArticle } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";

export function BlogPreview() {
  const [article, setArticle] = useState<BlogArticle | null>(null);

  return (
    <section className="section-padding bg-[oklch(0.10_0.012_48_/_0.72)]">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1fr] md:items-end">
          <div>
            <p className="eyebrow mb-5">Editorial notes</p>
            <h2 className="display text-5xl text-pearl md:text-7xl">
              Three articles for the consultation mindset.
            </h2>
          </div>
          <p className="copy max-w-2xl md:justify-self-end">
            Frontend-only article previews help planners pitch strategy and taste
            without needing a CMS for the demo.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-4 md:grid-cols-[1fr_0.82fr_1fr]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {blogArticles.map((item, index) => (
            <motion.article
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              className={`border border-mutedGold/24 p-6 ${index === 1 ? "md:mt-14" : ""}`}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
                {item.category}
              </p>
              <h3 className="mt-7 font-display text-4xl text-pearl">{item.title}</h3>
              <p className="copy mt-5">{item.excerpt}</p>
              <button
                type="button"
                onClick={() => setArticle(item)}
                className="mt-8 border border-mutedGold/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-pearl transition hover:bg-mutedGold hover:text-obsidian"
              >
                Read Preview
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Modal open={Boolean(article)} onClose={() => setArticle(null)} title={article?.title ?? ""}>
        {article ? (
          <article>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-mutedGold">
              {article.category}
            </p>
            <p className="copy mt-5 text-lg">{article.body}</p>
          </article>
        ) : null}
      </Modal>
    </section>
  );
}
