'use client'
import React, { useState } from "react";
import Image from "next/image";
import image from "../../assets/1.png";

export default function Index() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="lg:mb-[50px] mb-[10px] relative">
      <div
        className="imgcover relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={image}
          alt="cover"
          className="rounded-xl object-fill w-full h-full"
        />
        {isHovered && (
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
            }}
            className="overlay absolute bottom-0 w-full rounded-xl h-[30%] text-white p-[20px] transition-opacity duration-300 ease-in-out"
          >
            <p className="font-medium overflow-hidden text-ellipsis text-base">
              Project Name
            </p>
          </div>
        )}
      </div>

      <div className="info flex items-center justify-between mt-[10px]">
        <div className="username flex items-center space-x-[8px]">
          <div className="userimage">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="24" height="24" rx="12" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_336_1108"
                    transform="scale(0.03125)"
                  />
                </pattern>
                <image
                  id="image0_336_1108"
                  width="32"
                  height="32"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADX0lEQVRYCcVXTU8TQRjeoL/Cf6AJnYIGOIonTTzogQSP2m5R5OSF6IGQyAU46EEx8WRijHyUAJp4ICofIokJGhNmGr4xCqFV2lKlirT0Nc90F7a77e62YNrkzXR2dt7nmfdzVlFc/M62jx2v9s+eZAHRwlQeZAExx1SeYKpIZ4UntGdYa8G72ONCtf0rUOIJiFqmikdM5atM5SmmcnIQvLOKPdhbMpGqa3MnmMo7mcojDoB2hLC3E7rsj2paZT5Rw1Q+yVSeOQS4Tgw6JqHTBJN/ygK8XvOnruBoRsRNgNfnR9WeypNnA+xoQM3xAt2FLAE/ef2zE3Ymr2oSdPq6VaqbBHn8XIrdfqwBwxoT7VShBZztyVsff6MHQxG6HwwfyGCYuno36FbPVzrfOm+730CuU2mnin13ePyhOqbysOEFiyKc8NnrTZqZT9LI+zi9MMp0dv50dJN83avkDTimagSYkkBDQ/8xr1/02IFjDQT6x6MU/5WmVx+2aHgqbhEQ6xuLUuPdJUd3ABPYSlWTOMVUvuKWABGR+PLHAq4TgmXuBcNU0ywsVjRhrABb0cqrY4WDBfrGo8Cn3zt7NP75Jw29y2OFqTg9fxOV8VDpt3VFCtiKV+UDJmZ5mRsJgMTaj116OZ3fFcGJGF1qWyQHAgRsWACNJS+o8bmZwN4e0ceFpMUKI1Nx6n0bpQu3FxwJAFvJdrXiCcAKiWSaRmcSOSQQA0jVupYQeZwPllC0dlq0BWQwENHy+o5MSwQhsmBwMkZXu1YcsyBrXZE+NIHdVIamxbYEH5iIyYKEaml0X+H/kgAuFqW5QLfC960UPRyOUGPHMsmy7EKfhpkoOQh1cIyZDEm/V/qcD5JzWARhqWloJID/4dguXelYpkrfrEvz8/00xD2vqEJkBtfnyIjamyGXAcizhaiYUqxXQh3QPP5NZajtyRq5dEW2FBfTjJwIgNDS+g5dvONchPabEVqi1o5tL5/mSmg+vXGOdDxzwzYVD9qx7MkuLiQg0N23QZ8WkzQzv11YFpKyUV227wW5FxKQcHMlQ4GpaQ7JVot2W0gQiIWKUf4rmTSDopT1UqpxUDx+cc5th8wpKk7VLyDmoFvHsR2lJcr1YaIzQ0yU7dNMJ1HWj1OdBEYQ+V+f5/8AHjLJ6Q1geMkAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </div>
          <p className="text-[#0D0C22] text-sm capitalize mr-[8px]">
            samuel chukwueze
          </p>
        </div>

        <div className="flex space-x-[6px]">
          <div className="flex">
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

            <p className="text-[10px] text-[#3d3da4] ml-[5px]">2</p>
          </div>
          <div className="text-[10px] flex ">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6161 1.18999C9.09592 1.02433 8.12992 1.75058 7 2.94466C5.80709 1.75058 4.90409 1.02433 3.38392 1.18999C1.31659 1.41633 -0.30333 3.77416 0.0484204 5.83333C0.61192 9.13441 3.51575 11.0833 7 12.8333C10.4843 11.0833 13.3881 9.13441 13.9516 5.83333C14.3033 3.77416 12.6834 1.41633 10.6161 1.18999Z"
                fill="#9E9EA7"
              />
            </svg>

            <p className="text-[#3d3da4] ml-[5px]">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
