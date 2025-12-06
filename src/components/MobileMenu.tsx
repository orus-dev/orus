import { AnimatePresence } from "framer-motion";
import { Menu, MessageSquare, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right
      });
    }
  }, [open]);

  const menuContent = (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ zIndex: 999999 }}
            className="fixed inset-0 bg-black/20 md:hidden"
            onClick={() => setOpen(false)}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: `${buttonPosition.top}px`,
              right: `${buttonPosition.right}px`,
              zIndex: 1000000
            }}
            className="w-44 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-4 flex flex-col gap-4 md:hidden"
          >
            {["Blog", "Projects", "About"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-slate-200 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              href="https://discord.gg/HFRsNxfCqT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-sm text-white"
              onClick={() => setOpen(false)}
            >
              <MessageSquare className="w-4 h-4" />
              Join Discord
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="md:hidden">
        <button
          ref={buttonRef}
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 text-slate-200"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mounted && createPortal(menuContent, document.body)}
    </>
  );
}