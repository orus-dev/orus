"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  MessageSquare,
  Shield,
  Code2,
  Rocket,
  Users,
  Heart,
  ArrowRight,
  Lock,
  Sparkles,
} from "lucide-react";
import WebStuff from "@/components/Web";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Heart,
      title: "Open Source First",
      description:
        "We love the open source community and all our projects are completely open source for everyone to use and contribute.",
    },
    {
      icon: Users,
      title: "Growing Community",
      description:
        "Join our thriving community full of beginners and pros. Learn, collaborate, and grow together.",
    },
    {
      icon: Shield,
      title: "Cybersecurity & Dev",
      description:
        "Building tools for developers and cybersecurity enthusiasts. Security-first approach to everything we create.",
    },
  ];

  const values = [
    {
      icon: Rocket,
      title: "Ecosystem Growth",
      description:
        "Expanding a network of internally-built startups through innovation and collaboration",
    },
    {
      icon: Code2,
      title: "Developer Tools",
      description:
        "Creating powerful, intuitive tools that make developers' lives easier",
    },
    {
      icon: Lock,
      title: "Security Focused",
      description:
        "Building with security in mind from day one, every single time",
    },
  ];

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
        className="relative z-10 px-6 py-20 lg:py-32 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
              <Sparkles className="w-4 h-4" />
              Cybersecurity & Development Organization
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-linear-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Hello, World!
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-slate-300 mb-4 leading-relaxed"
          >
            Welcome to{" "}
            <span className="text-purple-400 font-semibold">ORUS</span>, a
            cybersecurity & dev organization,
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-2xl lg:text-3xl font-bold text-white mb-12"
          >
            Simply for developers.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://github.com/orus-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-lg font-semibold text-lg shadow-lg shadow-purple-500/50"
              whileHover={{
                scale: 1.01,
                boxShadow: "0 20px 50px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Github className="w-5 h-5" />
              View Our Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://discord.gg/HFRsNxfCqT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/15 rounded-lg font-semibold text-lg transition-all"
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              Join Community
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="relative z-10 px-6 py-20 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-slate-900/50 backdrop-blur border border-slate-700 hover:border-purple-500/50 rounded-2xl p-8 transition-all h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-500/10 rounded-xl mb-6">
                  <feature.icon className="w-7 h-7 text-purple-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        className="relative z-10 px-6 py-20 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
            An Organization Built to Launch Startups
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ORUS is an organization focused on building and structuring multiple
            startups under one ecosystem, from cybersecurity to developer tools,
            with a strong foundation in engineering and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-slate-900/30 backdrop-blur border border-slate-800 hover:border-purple-500/30 rounded-xl p-6 transition-colors"
            >
              <value.icon className="w-10 h-10 text-purple-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-slate-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
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
              Ready to Join ORUS?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or a pro, there's a place for you in our
              community. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://discord.gg/HFRsNxfCqT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold text-lg transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5" />
                Join Discord Community
              </motion.a>

              <motion.a
                href="https://github.com/orus-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 hover:border-slate-400 rounded-lg font-semibold text-lg transition-colors"
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Explore on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </WebStuff>
  );
}
