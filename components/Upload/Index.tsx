import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import UploadIcon from "@/assets/upload.svg";
import { motion } from "framer-motion";
import * as Toast from "@radix-ui/react-toast";

interface UploadProps {
  selectedImage: any
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

const Upload: React.FC<UploadProps> = ({ selectedImage, setSelectedImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [open, setOpen] = React.useState(false);

  const [clientImage , setClientImage] = useState('')
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file: File) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = () => {
          const binaryStr = reader.result as ArrayBuffer;
          console
          const imageUrl = URL.createObjectURL(file);

          // Check image dimensions
          const image = document.createElement("img");
          image.src = imageUrl;
          image.onload = () => {
            if (image.width < 400 || image.height < 300) {
              setOpen(true);
              setErrorMessage(
                "Go big or go home. Your file's dimensions should be at least 400x300."
              );
            } else {
              setClientImage(imageUrl);
              setSelectedImage(file)
              setErrorMessage(""); // Clear any previous error message
            }
          };
        };
        reader.readAsArrayBuffer(file);
      });
    },
    [clientImage , selectedImage]
  );

  const maxSizeBytes = 5 * 1024 * 1024; // 5MB max size
  const minSizeBytes = 1024; // 1KB min size

  const validateFile = (file: File) => {
    if (file.size > maxSizeBytes) {
      setOpen(true);

  
      setSizeError("File is too large. Maximum size is 5MB.");

      return false;
    }
    if (file.size < minSizeBytes) {
      setOpen(true);

      setSizeError("File is too small. Minimum size is 1KB.");

      return false;
    }
    return true;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      const validFiles = acceptedFiles.filter(validateFile);
      if (validFiles.length > 0) {
        onDrop(validFiles);
      }
    },
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxSize: maxSizeBytes,
  });

  return (
    <div className="w-full p-2">
      {clientImage ? (
        // Animation for the selected image
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="selected-image "
        >
          <Image
            src={clientImage}
            alt="Selected"
            className="rounded-2xl w-full h-auto"
            width={600}
            height={600}
            quality={100}
            priority={true}
            placeholder="blur"
            blurDataURL={clientImage}
          />
        </motion.div>
      ) : (
        // Animation for the upload area
        <div {...getRootProps()}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              borderColor: isHovered ? "black" : "gray", // Change border color when hovered
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`upload border-2 flex flex-col justify-center items-center border-dashed w-full bg-white h-[300px] rounded-2xl mt-14 mb-14 ${
              isDragActive ? "border-green-500 border" : ""
            }`}
          >
            <input {...getInputProps()} />

            <div className="justify-center items-center mx-auto flex">
              <Image src={UploadIcon} alt="upload" />
            </div>
            <p className="text-sm my-3">
              {isDragActive
                ? "Drop the image here"
                : "Drag 'n' drop an image file, or "}
              <span className="underline"> browse</span>
            </p>
          </motion.div>
        </div>
      )}

      <Toast.Provider duration={2000} swipeDirection="up">
        <Toast.Root
          className="text-[#fff] bg-black rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-[#fff] text-[13px]">
            {errorMessage || sizeError}
          </Toast.Title>
          <Toast.Close aria-label="Close">
            <span aria-hidden>×</span>
          </Toast.Close>
          <Toast.Description asChild></Toast.Description>
          <Toast.Action
            className="[grid-area:_action]"
            asChild
            altText="Goto schedule to undo"
          ></Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col p-4 gap-4 w-80 max-w-full m-0 list-none z-50 outline-none" />

        {/* <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 left-[50%] right-[50$] flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" /> */}
      </Toast.Provider>
    </div>
  );
};

export default Upload;
