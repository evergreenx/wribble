import React from "react";

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();



  return (
    <div>
      hello
      <h1>{data?.session?.user.email}</h1>
    </div>
  );
}
