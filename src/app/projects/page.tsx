"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  MessageSquare,
  Sparkles,
  ExternalLink,
  Star,
  GitFork,
} from "lucide-react";
import WebStuff from "@/components/Web";
import projects from "@/lib/projects";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "security", label: "Security" },
    { id: "devtools", label: "Dev Tools" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "communication", label: "Communication" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
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
              Open Source Projects
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Building the Future
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Explore our collection of open-source projects designed to empower
            developers and enhance security across the ecosystem.
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

      {/* Projects Grid */}
      <motion.section
        className="relative z-10 px-6 py-12 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              layout
              className="relative group"
              whileHover={{ y: -8 }}
              viewport={{ once: false }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-slate-900/80 backdrop-blur border border-slate-700 hover:border-purple-500/50 rounded-2xl p-6 transition-all h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl">
                    <project.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Active"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed grow">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-800/50 border border-slate-700 rounded-md text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-slate-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 rounded-lg text-sm font-medium text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative z-10 px-6 py-20 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="bg-slate-900/30 backdrop-blur border border-slate-800 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects", value: `${projects.length}+` },
              { label: "Contributors", value: "180+" },
              { label: "Stars", value: "12.5K+" },
              { label: "Forks", value: "2.1K+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative z-10 px-6 py-20 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden bg-linear-to-r from-purple-500/10 to-blue-500/10 backdrop-blur border border-purple-500/20 rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-linear-to-r from-purple-500/5 to-blue-500/5" />

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Want to Contribute?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              All our projects are open source and welcoming to contributors.
              Join us in building tools that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/orus-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold text-lg transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </motion.a>

              <motion.a
                href="https://discord.gg/HFRsNxfCqT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold text-lg transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5" />
                Join Discord
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </WebStuff>
  );
}
