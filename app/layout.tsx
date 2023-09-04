import { Header } from "@/components";
import "./globals.css";
import { Head } from "next/document";

export const metadata = {
  title: "Wribble - The best way to share your ideas",
  description: "Wribble is the best way to share your ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
