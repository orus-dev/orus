"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import WebStuff from "@/components/Web";
import { PostPreview } from "@/lib/posts";

export default function Blog() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState<PostPreview[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`/api/blog`);

      setProjects(await res.json());
    }

    fetchPosts();
  }, []);

  const filters = [
    { id: "all", label: "All Blogs" },
    { id: "news", label: "News" },
    { id: "guides", label: "Guides" },
    { id: "research", label: "Research" },
    { id: "journal", label: "Journal" },
  ];

  const filteredPosts =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <WebStuff>
      {/* Hero Section */}
      <motion.section
        className="relative z-10 px-6 py-16 lg:py-24 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
              <Sparkles className="w-4 h-4" />
              Latest Posts & Updates
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Project Updates
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Latest updates, articles, and guides from our team.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(() => filter.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts List */}
      <section className="relative z-10 px-6 py-12 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          {filteredPosts.map((post, i) => (
            <motion.div
              key={i}
              className="relative group bg-slate-900/40 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-colors"
              whileHover={{ y: -3, transition: { duration: 0.5 } }}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {post.image && (
                  <div className="shrink-0 w-full md:w-40 h-32 md:h-28 overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors cursor-pointer">
                      <a href={post.url}>{post.title}</a>
                    </h3>
                    <p className="text-slate-300 mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-4">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      {post.readingTime && (
                        <>
                          <span>•</span>
                          <span>{post.readingTime} min read</span>
                        </>
                      )}
                      {post.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={post.url}
                    className="self-start mt-auto inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg text-sm font-medium text-purple-400 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </WebStuff>
  );
}
