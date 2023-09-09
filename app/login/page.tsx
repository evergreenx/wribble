"use client";
import Link from "next/link";
import Messages from "./messages";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import GHLogo from "../../assets/gh.svg";
import GoogleIcon from "../../assets/google.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3, // Delay before starting the animation of children
      staggerChildren: 0.2, // Delay between each child animation
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const inputVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Login() {
  const supabase = createClientComponentClient();

  const handleSign = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <div className="flex w-full h-full">
      <div className=" h-full border  hidden lg:block  w-[600px]">
        <video muted loop autoPlay className=" h-full object-cover">
          <source
            src={
              "https://res.cloudinary.com/evergreenx/video/upload/v1694272683/original-d57221a0aacb19ce91d7648a653007f6_hntxwc.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className=" flex flex-col w-full  px-8  justify-center gap-2"
      >
        <motion.form
          className=" flex flex-col justify-center gap-2 text-foreground lg:ml-[100px]"
          action="/auth/sign-in"
          method="post"
          initial={{ opacity: 0 }} // Initial state (hidden)
          animate={{ opacity: 1 }} // Animation when it becomes visible
        >
          <motion.h1 className="text-lg font-bold my-[20px]">Sign in</motion.h1>

          <motion.button
            variants={inputVariants}
            className="border rounded-full lg:w-[400px] border-[#ddd] font-medium px-6 py-3 text-black mb-2 flex justify-center items-center space-x-3"
            onClick={() => {
              handleSign();
            }}
          >
            <Image src={GHLogo} className="mr-2" width={18} alt="ghlogo" />
            Sign In with Github
          </motion.button>

          <motion.button
            variants={inputVariants}
            className="border rounded-full lg:w-[400px] border-[#ddd] font-medium px-6 py-3 text-black mb-2 flex justify-center items-center space-x-3"
            onClick={() => {
              handleSign();
            }}
          >
            <Image
              src={GoogleIcon}
              className="mr-2"
              width={18}
              alt="googleicon"
            />
            Sign In with Google
          </motion.button>

          <Messages />
        </motion.form>
      </motion.div>
    </div>
  );
}
