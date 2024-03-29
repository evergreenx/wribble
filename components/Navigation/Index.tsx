"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";
import Select  from "../Select/Index";

interface NavLinkProps {
  name: string;
  url: string;
}

const navLinks = [
  {
    name: "discover",
    url: "/discover",
  },

  {
    name: "animation",
    url: "/shots/animation",
  },

  {
    name: "learn design",
    url: "/shots/branding",
  },

  {
    name: "illustration",
    url: "/shots/illustration",
  },
  {
    name: "mobile",
    url: "/shots/mobile",
  },
  {
    name: "print",
    url: "/shots/print",
  },
  {
    name: "web design",
    url: "/shots/web",
  },
  {
    name: "photography",
    url: "/photography",
  },
];
function Index() {
  const pathname = usePathname();

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className=" flex items-center justify-between lg:px-14 w-full mt-[31px]  mb-[32px]  lg:h-[40%]">

      <Select />
      <motion.div
        className=" hidden lg:flex  "
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.url, 0);

          return (
            <motion.div
              key={link.url}
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className={`${
                isActive ? "text-brandblack bg-[#f8f7f4]" : "text-brandblack"
              } font-semibold text-sm px-4 py-2 capitalize hover:text-brandblack transition duration-200 ease-in-out rounded-full`}
            >
              <Link href={link.url}>{link.name}</Link>
            </motion.div>
          );
        })}
      </motion.div>

      <Select />
    </div>
  );
}

export default Index;
