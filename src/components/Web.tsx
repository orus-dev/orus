import { motion } from "framer-motion";
import { Github, MessageSquare } from "lucide-react";

export default function WebStuff({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
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
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: -40, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1], // smooth ease
            },
          },
        }}
        className="relative z-10 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto"
      >
        <motion.a
          className="flex items-center"
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src="orus2.svg" alt="Logo" className="h-4" />
        </motion.a>

        {/* Menu */}
        <motion.div
          className="flex gap-6 items-center"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15,
              },
            },
          }}
        >
          {["Blog", "Projects", "About"].map((item) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-slate-300 hover:text-white transition-colors hidden md:block"
              variants={{
                hidden: { opacity: 0, y: -12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.45,
                ease: [0.25, 0.1, 0.25, 1],
              }}
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
            variants={{
              hidden: { opacity: 0, y: -12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.45,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageSquare className="w-4 h-4" />
            Join Discord
          </motion.a>
        </motion.div>
      </motion.nav>

      {children}

      <footer className="relative z-10 px-6 py-12 border-t border-slate-800/50 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src="orus.svg" alt="Logo" className="h-4" />

            <div className="text-slate-400 text-center">
              © 2025 ORUS. Open source for everyone. Built with 💜 for
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
