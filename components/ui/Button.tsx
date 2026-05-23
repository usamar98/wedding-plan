"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: ButtonVariant;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-mutedGold/70 bg-mutedGold text-obsidian hover:bg-sand hover:border-sand",
  secondary:
    "border-mutedGold/45 bg-transparent text-pearl hover:bg-pearl/8 hover:border-mutedGold",
  ghost:
    "border-transparent bg-transparent text-sand hover:text-pearl hover:bg-pearl/6"
};

export function Button({
  variant = "primary",
  className = "",
  children,
  onMouseMove,
  onMouseLeave,
  ...props
}: ButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.35 });

  return (
    <motion.button
      {...props}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={(event) => {
        if (window.innerWidth >= 768) {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set((event.clientX - rect.left - rect.width / 2) * 0.12);
          y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
        }
        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        x.set(0);
        y.set(0);
        onMouseLeave?.(event);
      }}
      className={`inline-flex min-h-12 items-center justify-center border px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
