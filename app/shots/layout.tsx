import Header from "@/components/Header/Index";
import Navigation from "@/components/Navigation/Index";
import Footer from "@/components/Footer/Index";

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

      <Navigation />

      <section className=" ">{children}</section>

      <Footer />
    </>
  );
}
