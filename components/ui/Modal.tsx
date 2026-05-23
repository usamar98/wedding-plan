"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: "default" | "wide";
};

export function Modal({ open, onClose, title, children, size = "default" }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-obsidian/82 px-4 py-4 backdrop-blur-sm md:items-center md:py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onMouseDown={onClose}
        >
          <motion.div
            className={`max-h-[90dvh] w-full overflow-y-auto border border-mutedGold/30 bg-[oklch(0.16_0.018_50)] shadow-soft ${size === "wide" ? "max-w-5xl" : "max-w-2xl"}`}
            initial={{ y: 34, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-mutedGold/20 bg-[oklch(0.16_0.018_50_/_0.94)] px-5 py-4 backdrop-blur md:px-7">
              <h2 id="modal-title" className="font-display text-2xl text-pearl md:text-3xl">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center border border-mutedGold/30 text-xl text-sand transition hover:border-mutedGold hover:text-pearl"
                aria-label="Close modal"
              >
                x
              </button>
            </div>
            <div className="p-5 md:p-7">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
