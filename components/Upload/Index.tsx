import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import UploadIcon from "@/assets/upload.svg";
import { motion } from "framer-motion";

interface UploadProps {
  selectedImage: string;
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
}

const Upload: React.FC<UploadProps> = ({ selectedImage, setSelectedImage }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result as ArrayBuffer;
        const imageUrl = URL.createObjectURL(file);

        // Check image dimensions
        const image = document.createElement("img"); 
        image.src = imageUrl;
        image.onload = () => {
          if (image.width < 400 || image.height < 300) {
            setErrorMessage(
              "Go big or go home. Your file's dimensions should be at least 400x300."
            );
          } else {
            setSelectedImage(imageUrl);
            setErrorMessage(""); // Clear any previous error message
          }
        };
      };
      reader.readAsArrayBuffer(file);
    });
  }, [setSelectedImage]);

  const maxSizeBytes = 5 * 1024 * 1024; // 5MB max size
  const minSizeBytes = 1024; // 1KB min size

  const validateFile = (file: File) => {
    if (file.size > maxSizeBytes) {
      alert("File is too large. Maximum size is 5MB.");
      return false;
    }
    if (file.size < minSizeBytes) {
      alert("File is too small. Minimum size is 1KB.");
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
        'image/jpeg': [],
        'image/png': []
      },
    maxSize: maxSizeBytes,
  });

  return (
    <div className="w-full p-2">
      {selectedImage ? (
        // Animation for the selected image
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="selected-image "
        >
          <Image src={selectedImage} alt="Selected" className="rounded-2xl w-full h-auto" 
          

         

          width={600}
          height={600}
          quality={100}
          priority={true}
          placeholder ='blur'
          blurDataURL= {selectedImage}

    
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
              <Image src={UploadIcon} alt="upload"

              
              />
            </div>
            <p className="text-sm my-3">
              {isDragActive
                ? "Drop the image here"
                : "Drag 'n' drop an image file, or "}
              <span className="underline"> browse</span>
            </p>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Upload;
