"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Paperclip, Sparkles } from "lucide-react";
import WebStuff from "@/components/Web";
import { useParams } from "next/navigation";
import { PostPreview } from "@/lib/posts";
import Markdown from "@/components/Markdown";

export default function BlogPost() {
  const [post, setPost] = useState<{
    content: string;
    meta: PostPreview;
  } | null>(null);
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
      {/* Hero Section */}
      <motion.section
        className="relative z-10 px-6 py-16 lg:py-24 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-4 w-full flex justify-between items-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
            <Sparkles className="w-4 h-4" />
            {post.meta.category}
          </span>

          <span
            className="px-3 py-2 bg-slate-500/10 border border-slate-500/20 rounded-full text-slate-400 transition-colors hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-400 text-sm"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://orus-dev.netlify.app${post.meta.url}`
              );
            }}
          >
            <Paperclip className="w-4 h-4" />
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-6xl font-bold mb-6"
        >
          <span className="bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {post.meta.title}
          </span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8"
        >
          <span>{post.meta.author}</span>
          <span>•</span>
          <span>{new Date(post.meta.date).toLocaleDateString()}</span>
          {post.meta.readingTime && (
            <>
              <span>•</span>
              <span>{post.meta.readingTime} min read</span>
            </>
          )}
          {post.meta.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-800/50 border border-slate-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Optional Featured Image */}
        {post.meta.image && (
          <motion.div
            variants={itemVariants}
            className="mb-8 overflow-hidden rounded-xl"
          >
            <img
              src={post.meta.image}
              alt={post.meta.title}
              className="w-full h-96 object-cover"
            />
          </motion.div>
        )}

        {/* Post Content */}
        <motion.section
          variants={itemVariants}
          className="prose prose-invert max-w-none text-slate-300"
        >
          <Markdown content={post.content} />
        </motion.section>
      </motion.section>
    </WebStuff>
  );
}
