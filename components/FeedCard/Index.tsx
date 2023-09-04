import React from "react";
import Image from "next/image";
import image from "../../assets/1.png";

export default function Index() {
  return (
    <div>
      <div className="imgcover">
        <Image src={image} alt="cover" 
        className="rounded-xl object-contain w-full"
        
        />
      </div>

      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 4.95833C5.87242 4.95833 4.95833 5.87242 4.95833 7C4.95833 8.12758 5.87242 9.04167 7 9.04167C8.12758 9.04167 9.04167 8.12758 9.04167 7C9.04167 5.87242 8.12758 4.95833 7 4.95833ZM7 1.75C3.13425 1.75 0 6.125 0 7C0 7.875 3.13425 12.25 7 12.25C10.8657 12.25 14 7.875 14 7C14 6.125 10.8657 1.75 7 1.75ZM7 10.2083C5.22783 10.2083 3.79167 8.77217 3.79167 7C3.79167 5.22783 5.22783 3.79167 7 3.79167C8.77217 3.79167 10.2083 5.22783 10.2083 7C10.2083 8.77217 8.77217 10.2083 7 10.2083Z"
          fill="#9E9EA7"
        />
      </svg>
    </div>
  );
}
