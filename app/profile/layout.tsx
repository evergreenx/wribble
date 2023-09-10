import Footer from "@/components/Footer/Index";
import Header from "@/components/Header/Index";

import { Head } from "next/document";

export const metadata = {
  title: "Wribble - The best way to share your ideas",
  description: "Wribble is the best way to share your ideas",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
}
