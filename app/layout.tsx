import Footer  from "@/components/Footer/Index";
import Header  from "@/components/Header/Index";

import "./globals.css";
import { Head } from "next/document";

export const metadata = {
  title: "Wribble - The best way to share your ideas",
  description: "Wribble is the best way to share your ideas",
};

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen w-full bg-background flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
