import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Vow Studio | Luxury Destination Wedding Planner",
  description:
    "Premium animated website demo for luxury wedding planners, destination wedding brands, and event design studios."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
