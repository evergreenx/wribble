import FeedCard from "@/components/FeedCard/Index";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { profile } from "console";


export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  let { data: shots, error } = await supabase.from("shots").select("* ,profiles(*)");

  console.log(shots, "shots");

  return (
    <div className="w-full lg:px-14 px-[20px]">
      <div className="grid lg:grid-cols-4  gap-[24px]  w-full">
        {/* {/* <FeedCard /> */}

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
