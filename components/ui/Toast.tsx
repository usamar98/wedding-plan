"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

type ToastProps = {
  message: string;
  onClose: () => void;
};

export function Toast({ message, onClose }: ToastProps) {
  useEffect(() => {
    if (!message) return;

    const timer = window.setTimeout(onClose, 2800);
    return () => window.clearTimeout(timer);
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 border border-mutedGold/40 bg-[oklch(0.16_0.018_50_/_0.96)] px-5 py-4 text-center text-sm font-semibold text-pearl shadow-soft backdrop-blur md:bottom-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          role="status"
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
