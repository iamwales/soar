import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";

// Configure Inter as the base font
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

// Configure Lato as a secondary font
const lato = Lato({
    variable: "--font-lato",
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
