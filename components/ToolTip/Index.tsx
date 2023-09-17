"use client";

import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PlusIcon } from "@radix-ui/react-icons";
import AvatarUser from "../Avatar/Index";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import Image from "next/image";

import * as Separator from "@radix-ui/react-separator";

const TooltipUser = ({ user }: any) => {
  const supabase = createClientComponentClient();

  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button className="rounded-full bg-white">
              <AvatarUser user={user} />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade top-2 select-none bg-white min-w-[250px] min-h-[100px] px-[15px] py-[15px] rounded-xl leading-none will-change-[transform,opacity] border"
              sideOffset={30}
              collisionPadding={20}
            >
              <div className="flex justify-center items-center">
                <Image
                  className="rounded-full h-[70px] w-[70px]"
                  width={200}
                  height={200}
                  alt="user"
                  src={user && user?.user_metadata?.avatar_url}
                />
              </div>

              <h3 className="text-[13px] text-[#0d0c22] text-center my-[14px]">
                <Link href="/profile">
                  {user && user?.user_metadata?.full_name}
                </Link>
              </h3>

              <Separator.Root className="bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px] h-[20px]" />
              <form action="/auth/sign-out" method="post">
                <button className="text-[13px] text-[#0d0c22] cursor-pointer my-[13px]">
                  Sign out
                </button>
              </form>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
};

export default TooltipUser;
