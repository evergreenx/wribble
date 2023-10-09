import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import Image from "next/image";
import AnimatedMulti from "../MultiSelect/Index";
import SwitchFeedBack from "../Switch/Index";
import Button from "../Button/Index";
import Link from "next/link";

const PreviewDialog = ({
  open,
  setOpen,
  imagePreview,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imagePreview: string;
}) => (
  <Dialog.Root open={open} modal={true}>
    <Dialog.Trigger asChild></Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#00000072] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow overflow-y-auto fixed top-[50%] h-[60%] left-[50%] max-h-[85vh] w-[90vw] max-w-[860px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[48px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className=" m-0 text-2xl font-bold text-[#0d0c22]">
          Final Touches
        </Dialog.Title>

        <div className="flex lg:flex-row flex-col space-y-6 lg:space-y-0 lg:space-x-14">
          <div className="preview ">
            <h3 className="text-[14px] my-4">Thumbnail preview</h3>
            <Image
              src={imagePreview}
              alt="preview"
              width={400}
              height={400}
              className="rounded-xl"
            />
          </div>
          <div className="controls w-full ">
            <label className=" text-[14px] text-[#0d0c22]">
              Tags
              <AnimatedMulti />
            </label>

            <SwitchFeedBack />

            <div className="actions flex space-x-5 my-10">
              <Link
                href="/"
                className="border-gray-200 border flex justify-center items-center font-semibold rounded-full px-[24px] text-sm h-[48px]  transition duration-200 ease-in-out"
              >
                Cancel
              </Link>

              <Button text="publish now" onClick={() => {}} />
            </div>
          </div>
        </div>
        <Dialog.Close asChild>
          <button
            onClick={() => setOpen(false)}
            className=" hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none border-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default PreviewDialog;
