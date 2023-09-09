import { Footer, Header } from "@/components";

import { Head } from "next/document";

export const metadata = {
  title: "Wribble - The best way to share your ideas",
  description: "Wribble is the best way to share your ideas",
};

export default function ShotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
}
