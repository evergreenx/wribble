"use client";
import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className={
        "bg-black font-semibold rounded-full px-[24px] text-sm h-[48px] text-ghostWhite  hover:bg-brandblack transition duration-200 ease-in-out"
      }
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
