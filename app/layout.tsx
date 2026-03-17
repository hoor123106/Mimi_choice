import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { Providers } from "@/app/components/Providers";
import { CursorFollower } from "@/app/components/CursorFollower";

export const metadata: Metadata = {
  title: "Mimi Choice - Premium Baby Products",
  description: "Discover our premium range of baby essentials designed with love, care, and the highest safety standards.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CursorFollower />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
