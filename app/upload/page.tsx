"use client";
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion"; // Import the motion module

import { useDropzone } from "react-dropzone";
import Upload from "@/components/Upload/Index";

export default function page() {
  const [shotsTitle, setShotsTitle] = useState<string>("");
  const [shotsDesc, setShotsDesc] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");

  const postData = async (e: React.FormEvent<HTMLFormElement>) => {
    // "use server";

    e.preventDefault();

    let formData = new FormData();
    console.log("work");

    const titlex = formData.append("title", shotsTitle);
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();

    // if (user) {
    //   await supabase.from("shots").insert({
    //     desc: "hello",
    //     title,
    //     image_url: "dsdjsd",
    //     user_id: user.id,
    //   });
    // }

    console.log(shotsTitle);
    console.log(shotsDesc);
  };

  //   const acceptedFileItems = acceptedFiles.map((file:any) => (
  //     <li key={file.path}>
  //       {file.path} - {file.size} bytes
  //     </li>
  //   ));

  return (
    <>
      <form onSubmit={postData}>
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on load
          exit={{ opacity: 0, y: -20 }} // Animation on exit
          transition={{ duration: 0.5 }} // Animation duration
          className="flex justify-between items-center p-3"
        >
          <Link
            href="/"
            className="border-gray-200 border flex justify-center items-center font-semibold rounded-full px-[24px] text-sm h-[48px]  transition duration-200 ease-in-out"
          >
            Cancel
          </Link>

          <motion.button
            initial={{ scale: 0.8 }} // Initial animation values
            whileHover={{ scale: 1 }} // Animation on hover
            className="bg-black font-semibold rounded-full px-[20px] text-sm h-[48px] text-ghostWhite  hover:bg-brandblack transition duration-200 ease-in-out"
            type="submit"
          >
            Continue
          </motion.button>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }} // Initial animation values
          animate={{ opacity: 1, y: 0 }} // Animation on load
          exit={{ opacity: 0, y: -20 }} // Animation on exit
          transition={{ duration: 0.5 }} // Animation duration
          className="lg:text-3xl text-xl font-extrabold text-center"
        >
          What have you been working on?
        </motion.h1>

        <div className="create_shot_container lg:w-[50%] my-10 mx-[14px] lg:mx-auto">
          <motion.input
            initial={{ opacity: 0, y: -20 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation on load
            exit={{ opacity: 0, y: -20 }} // Animation on exit
            transition={{ duration: 0.5 }} // Animation duration
            type="text"
            name="title"
            onChange={(e) => setShotsTitle(e.target.value)}
            placeholder="Give shot a name "
            className="bg-white w-full text-4xl my-[20px] font-semibold text-[#0d0c22] border-none outline-none mx-auto justify-center flex"
          />

          <Upload
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation values
            animate={{ opacity: 1, y: 0 }} // Animation on load
            exit={{ opacity: 0, y: 20 }} // Animation on exit
            transition={{ duration: 0.5 }} // Animation duration
            className="desc"
          >
            <textarea
              className="resize-none placeholder:text-gray-400 min-h-[50px] text-lg w-full text-[#0d0c22] rounded-xl p-2  outline-[#0d0c22] "
              rows={1}
              onChange={(e) => setShotsDesc(e.target.value)}
              placeholder="Write what went into this design "
            ></textarea>
          </motion.div>
        </div>
      </form>
    </>
  );
}