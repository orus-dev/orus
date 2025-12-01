"use client";

import React, { useState, useEffect } from "react";
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
  ExternalLink,
  Lock,
  Terminal,
  Sparkles,
} from "lucide-react";

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
      title: "For Startups",
      description:
        "Empowering startups with the tools and community they need to succeed",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(168, 85, 247) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 1,
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto"
      >
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <img src="orus.svg" alt="Logo" className="h-3.5"></img>
        </motion.div>

        <div className="flex gap-6 items-center">
          {["Community", "Projects", "About"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-colors hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="https://discord.gg/HFRsNxfCqT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-4 h-4" />
            Join Discord
          </motion.a>
        </div>
      </motion.nav>

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
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg font-semibold text-lg transition-all shadow-lg shadow-purple-500/50"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View Our Projects
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://discord.gg/HFRsNxfCqT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-purple-500 hover:bg-purple-500/10 rounded-lg font-semibold text-lg transition-all"
              whileHover={{ scale: 1.05 }}
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Empowering Startups
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            ORUS is an organization dedicated to supporting startups with
            cutting-edge tools, security expertise, and a collaborative
            community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-slate-900/30 backdrop-blur border border-slate-800 hover:border-purple-500/30 rounded-xl p-6 transition-all"
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
          className="relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur border border-purple-500/20 rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5" />

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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-lg transition-colors"
                whileHover={{ scale: 1.05 }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                Explore on GitHub
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-slate-800/50 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-semibold">ORUS</span>
            </div>

            <div className="text-slate-400 text-center">
              © 2024 ORUS. Open source for everyone. Built with 💜 for
              developers.
            </div>

            <div className="flex gap-6">
              <motion.a
                href="https://github.com/orus-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://discord.gg/HFRsNxfCqT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <MessageSquare className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
