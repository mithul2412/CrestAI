import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Crest AI Investor Demo",
  description:
    "Investor walkthrough for Crest AI, showing how the platform handles pre-content optimization, measurement, diagnosis, action, proof, and monitoring for AI visibility.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
