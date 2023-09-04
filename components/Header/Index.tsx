"use client";

import React from "react";
import Button from "../Button/Index";
import { motion } from "framer-motion";
import { Navigation } from "..";

const links = ["Find Talent", "For Designers", "Learn Design", "Go Pro"];

function Index() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  return (

    <>
    <motion.div
      className="flex p-[24px] items-center justify-between"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="flex" variants={itemVariants}>
        {links.map((link) => (
          <div
            className=" text-brandblack p-[16px]
          text-sm font-medium "
          >
            <a href="#">{link}</a>
          </div>
        ))}
      </motion.div>

      <motion.div className="logo" variants={itemVariants}>
        <svg
          width="100"
          height="24"
          viewBox="0 0 100 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_315_1211)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M99.4959 18.9733C95.3317 25.8962 88.7368 23.8874 86.7561 22.3146C85.9132 22.8755 84.4351 24.1047 82.4641 23.9628C78.2666 23.6606 76.7634 17.7788 76.7634 17.7788C76.7936 17.8023 75.5131 18.212 74.821 18.2047C74.8121 19.9296 73.2915 24.0501 69.1878 23.9974C64.5827 23.9385 63.6466 17.2111 63.6466 17.2111C63.6466 17.2111 63.1883 17.8351 61.4459 18.4566C61.5336 17.1314 61.4695 23.7956 55.9501 23.8936C51.5868 23.9711 50.4089 17.1074 50.4089 17.1074C50.4089 17.1074 49.652 17.8784 48.185 18.1458C48.2782 16.799 48.1267 23.9162 42.6067 23.8936C38.8764 23.8784 37.6016 19.6655 37.7007 19.0808C37.8273 18.3356 36.44 23.9984 32.8166 23.9102C31.3213 23.8671 30.2065 22.8055 29.507 21.3902C28.5705 22.4409 27.211 23.9102 25.6858 23.9102C22.948 23.9102 21.7411 21.6648 21.9455 15.2517C21.9629 14.4911 21.907 14.1919 21.1358 14.0781C20.673 14.0024 20.199 13.859 19.6975 13.7834C19.5367 14.3094 18.1733 23.7391 13.4852 23.918C11.9124 23.9781 11.0524 22.6421 10.3461 21.6506C9.26351 23.0549 7.83437 23.9628 5.79843 23.9628C2.34971 23.9628 0 21.229 0 17.8567C0 14.4842 2.34971 11.7507 5.79843 11.7507C6.4082 11.7507 6.57937 11.8364 7.13643 11.9958C5.99082 1.76794 8.6963 0.16947 11.063 0.16947C13.3352 0.16947 17.217 5.34068 11.755 18.4576C12.9676 22.37 15.5819 22.1488 16.8382 14.0948C17.0938 12.4577 16.4102 10.2484 17.4736 9.94011C19.4174 9.3766 19.6236 11.0673 20.5351 11.349C21.4988 11.6467 22.0613 11.6176 22.9864 11.8071C24.5673 12.1098 25.1843 12.9426 24.9917 14.7973C24.7604 17.1441 24.3557 20.5599 25.5894 20.9762C26.4791 21.2786 28.1034 19.4695 28.3884 18.4796C28.6733 17.4897 28.7329 17.1509 28.7582 16.4249C28.7967 14.8732 28.8451 13.7357 29.1149 12.5622C29.2305 12.1081 29.3621 11.8073 29.8861 11.7868C30.3172 11.776 31.1056 11.6487 31.4527 11.9136C31.9153 12.2544 31.8574 12.6002 31.8043 13.5104C31.2663 26.4877 35.4071 20.0093 36.6417 14.8221C36.2021 8.95661 36.5039 0.276877 40.2523 0.131303C42.2018 0.0555954 43.0636 1.587 43.1584 2.73005C43.4266 5.95845 41.9246 11.3062 39.9493 14.9026C38.8204 22.2408 44.8853 23.6918 45.8552 17.8344C44.2684 17.0946 42.5535 14.1002 43.949 12.6409C44.732 11.822 47.9915 12.9985 48.0448 15.5645C49.6437 15.1452 49.8572 14.26 49.8793 14.4067C49.4398 8.54118 49.8475 0.276953 53.5962 0.131377C55.5454 0.0556704 56.4071 1.58708 56.5019 2.73013C56.77 5.95852 55.2681 11.3063 53.293 14.9027C52.1639 22.2408 58.229 23.6919 59.1986 17.8346C58.0238 17.6123 55.5438 14.4273 56.9747 12.641C57.7394 11.6865 60.9869 13.6715 61.3505 15.6495C62.8865 15.2233 63.0951 14.3662 63.1171 14.5105C62.6774 8.64513 63.0851 0.380903 66.8338 0.235328C68.783 0.159621 69.6447 1.69103 69.7395 2.83408C70.0077 6.06247 68.5057 11.4104 66.5304 15.0068C65.4016 22.345 71.4665 23.7956 72.4364 17.9383C70.8219 17.6747 68.5275 14.3118 70.3741 12.5915C71.1119 11.9041 73.9311 13.6884 74.591 15.7241C75.508 15.6895 76.0787 15.3794 76.2011 15.3481C74.7372 8.46235 75.827 0.200444 79.8595 0.131478C82.0391 0.0942388 84.1699 1.28691 83.2347 7.8378C82.3419 14.0881 79.1327 16.7111 79.1402 16.7512C79.3269 17.5 80.9737 23.7666 85.1204 20.4601C84.9058 19.9835 84.6909 19.4966 84.5708 18.9067C83.8834 15.4706 85.2334 11.5896 88.9028 10.9623C91.0052 10.6029 92.9856 11.6066 93.2987 13.8693C93.8139 17.5718 90.4044 20.2531 89.1079 20.8348C88.5271 20.5113 94.3717 24.1869 97.8404 16.8209C98.0415 16.4003 98.284 16.436 98.5981 16.6527C98.82 16.8059 100.084 17.9797 99.4959 18.9733ZM8.30706 16.9469C8.13058 16.4295 7.76839 15.2895 7.64031 14.7955C6.93494 14.1941 6.43147 14.0963 5.52607 14.0963C3.51399 14.0963 2.32971 15.9205 2.32971 17.8875C2.32971 19.8544 3.61989 21.6788 5.63199 21.6788C7.3757 21.6788 8.70282 20.5163 9.10771 18.8706C8.82431 18.229 8.54318 17.6394 8.30706 16.9469ZM11.0137 2.87685C9.59991 2.87685 9.12031 6.18397 9.21338 9.00525C9.29571 11.4996 8.73898 11.657 9.10771 12.641C9.20133 12.7643 10.4515 14.7226 10.5351 14.8534C12.9899 9.57928 11.9717 2.87685 11.0137 2.87685ZM40.4542 2.98074C38.627 2.77524 38.6388 10.2393 38.8656 11.9136C39.8146 10.4249 41.4632 3.38157 40.4542 2.98074ZM53.7977 2.98074C51.9704 2.77524 51.9822 10.2393 52.2092 11.9136C53.1581 10.4249 54.8068 3.38157 53.7977 2.98074ZM67.0355 3.08459C65.208 2.87909 65.2198 10.3432 65.4468 12.0176C66.3957 10.5288 68.0444 3.4854 67.0355 3.08459ZM80.0612 2.5438C77.2142 3.1044 77.8771 12.4123 78.3096 14.0448C81.6631 9.52827 81.7322 2.37415 80.0612 2.5438ZM90.731 14.1755C90.5862 13.5821 89.8625 13.2649 89.3629 13.343C87.9334 13.5345 86.547 15.2802 87.0837 17.9381C87.2031 18.53 87.5021 19.0749 87.4972 19.0568C90.6964 16.9522 90.9683 15.2937 90.731 14.1755ZM30.4465 9.73235C30.0379 9.73242 29.6385 9.61369 29.2988 9.39117C28.959 9.16864 28.6942 8.85233 28.5378 8.48221C28.3813 8.1121 28.3404 7.70481 28.4201 7.31189C28.4997 6.91895 28.6965 6.55801 28.9854 6.2747C29.2743 5.99139 29.6423 5.79846 30.043 5.72029C30.4437 5.64212 30.8591 5.68222 31.2366 5.83554C31.6141 5.98885 31.9366 6.24849 32.1636 6.5816C32.3906 6.91472 32.5117 7.30636 32.5117 7.70697C32.5117 7.97294 32.4583 8.2363 32.3545 8.48202C32.2508 8.72774 32.0987 8.95101 31.9069 9.13908C31.715 9.32716 31.4874 9.47635 31.2368 9.57814C30.9863 9.67994 30.7177 9.73234 30.4465 9.73235Z"
              fill="#0D0C22"
            />
          </g>
          <defs>
            <clipPath id="clip0_315_1211">
              <rect width="100" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>

      <motion.div className="flex space-x-4 " variants={itemVariants}>
        <div className="search p-2 rounded-full space-x-2 bg-[#F3F3F4] flex items-center">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_315_1221)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.6002 12.5498C9.49758 13.3568 8.13777 13.8333 6.66667 13.8333C2.98477 13.8333 0 10.8486 0 7.16667C0 3.48477 2.98477 0.5 6.66667 0.5C10.3486 0.5 13.3333 3.48477 13.3333 7.16667C13.3333 8.65637 12.8447 10.0319 12.019 11.1419C12.0265 11.1489 12.0338 11.156 12.0411 11.1633L15.2935 14.4157C15.6841 14.8063 15.6841 15.4394 15.2935 15.83C14.903 16.2205 14.2699 16.2205 13.8793 15.83L10.6269 12.5775C10.6178 12.5684 10.6089 12.5592 10.6002 12.5498ZM11.3333 7.16667C11.3333 9.744 9.244 11.8333 6.66667 11.8333C4.08934 11.8333 2 9.744 2 7.16667C2 4.58934 4.08934 2.5 6.66667 2.5C9.244 2.5 11.3333 4.58934 11.3333 7.16667Z"
                fill="#9E9EA7"
              />
            </g>
            <defs>
              <clipPath id="clip0_315_1221">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <input
            type="text"
            placeholder="Search "
            className="border-2 border-none outline-none bg-[#F3F3F4]
0 rounded-full p-1 "
          />
        </div>
        <Button text="Share work" onClick={() => {}} />
      </motion.div>



















    </motion.div>

<Navigation />

</>

  );
}

export default Index;
