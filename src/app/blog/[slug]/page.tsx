"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import WebStuff from "@/components/Web";
import { useParams } from "next/navigation";
import { PostPreview } from "@/lib/posts";

export default function BlogPost() {
  const [post, setPost] = useState<(PostPreview & { content: string }) | null>(
    null
  );
  const [mounted, setMounted] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/blog/${slug}`);
      const data = await res.json();
      setPost(data);
    }

    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <WebStuff>
        <div className="min-h-screen flex items-center justify-center text-slate-400">
          Loading post...
        </div>
      </WebStuff>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <WebStuff>
      Hero Section
      <motion.section
        className="relative z-10 px-6 py-16 lg:py-24 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
            <Sparkles className="w-4 h-4" />
            {post.category}
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {post.title}
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8"
        >
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
        </motion.div>

        {/* Optional Featured Image */}
        {post.image && (
          <motion.div
            variants={itemVariants}
            className="mb-8 overflow-hidden rounded-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover"
            />
          </motion.div>
        )}

        {/* Post Content */}
        <motion.article
          variants={itemVariants}
          className="prose prose-invert max-w-none text-slate-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.section>
    </WebStuff>
  );
}
