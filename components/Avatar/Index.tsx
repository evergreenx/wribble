"use client";
import React from "react";
import * as Avatar from "@radix-ui/react-avatar";

const AvatarUser = ({ userImage }: any) => (
  <div className="flex gap-5">
    
    <Avatar.Root className="bg-blackA3 inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={userImage && userImage?.user_metadata?.avatar_url}
        alt="avatar"
      />
    </Avatar.Root>
  </div>
);

export default AvatarUser;
