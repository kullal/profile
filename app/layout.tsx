import type { Metadata } from "next";
import { VT323 } from "next/font/google"; // Import font retro
import "./globals.css";

// Setup font
const pixelFont = VT323({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel", // Variable CSS untuk font ini
});

export const metadata: Metadata = {
  title: "Riski Yuniar Pratama | Portfolio",
  description: "Computer Science Student & AI/ML Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${pixelFont.className} bg-slate-950 text-green-400 antialiased`}>
        {children}
      </body>
    </html>
  );
}
