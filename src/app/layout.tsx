import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import {ReduxProvider} from "@/redux/ReduxProvider";
import "./globals.css";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";

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
  title: "Soar",
  description: "Next Gen Fintech Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lato.variable} font-sans flex h-screen`}
      >
      <ReduxProvider>
          {/* SideNav */}
          <SideNav />

          <div className="flex flex-col flex-1 overflow-hidden">
              {/* TopNav */}
              <Header />

              {/* Page Content */}
              <main className="p-6 overflow-auto bg-background h-full">
                  {children}
              </main>
          </div>
      </ReduxProvider>
      </body>
    </html>
  );
}
