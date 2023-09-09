'use client';
import { FeedCard } from "@/components";
import React from "react";

export default function Page() {
  return (
    <div className="w-full lg:px-14 px-[20px]">

      <div className="grid lg:grid-cols-4  gap-[24px]  w-full">
        <FeedCard />

        <FeedCard />
        <FeedCard />
        <FeedCard />

        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />

      </div>
    </div>
  );
}
