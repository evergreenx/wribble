"use client";

import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PlusIcon } from "@radix-ui/react-icons";
import AvatarUser from "../Avatar/Index";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const TooltipUser = ({ userImage }: any) => {
  const supabase = createClientComponentClient();

  const signOutUser = async () => {
   await supabase.auth.signOut();
  };

  console.log(userImage);
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="rounded-full bg-white shadow-[0_2px_10px]">
            <AvatarUser userImage={userImage} />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none bg-white w-[250px] h-[100px] px-[15px] py-[10px] text-[15px] rounded-xl leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            <h3 className="text-[15px] text-[#0d0c22]">
              {userImage && userImage?.user_metadata?.full_name}
            </h3>

            <form action="/auth/sign-out" method="post">

            <button
              className="text-[15px] text-[#0d0c22] cursor-pointer"
           
            >

              Sign out
              </button>

              </form>

            {/* <Tooltip.Arrow className="fill-white" /> */}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipUser;
