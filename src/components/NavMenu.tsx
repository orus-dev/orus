import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { MessageSquare } from "lucide-react";

export default function NavMenu() {
  return (
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
            duration: 0.8,
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

      <MobileMenu />
    </motion.div>
  );
}
