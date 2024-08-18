"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadImg from "@/assets/upload_file.svg";
import { Button } from "./button";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "@/constants";

const FileUpload = ({ setFile }) => {

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
    if (!storedFiles) return;
    setFile(storedFiles);
  }, [setFile]);

  const onDrop = (acceptedFiles) => {
    const validFiles = acceptedFiles.filter(
      (file) =>
        file.size <= MAX_FILE_SIZE * 1024 * 1024 &&
        ACCEPTED_FILE_TYPES.includes(file.type)
    ); // 25 MB limit
    setFile(validFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      [ACCEPTED_FILE_TYPES.join(",")]: [],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-light-pink p-6 rounded-lg cursor-pointer text-center hover:border-blue-500 transition"
    >
      <input {...getInputProps()} />
      <div className="flex justify-center">
        <Image src={FileUploadImg} alt="File-upload" />
      </div>
      <p className="text-lg text-gray-500">Drag and drop a PDF  </p>
      <p className="text-xs text-gray-500">*Limit 25 MB per file.</p>
      <div className="mt-5">
        <Button variant="primary">Upload your file</Button>
      </div>
    </div>
  );
};

export default FileUpload;
