"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import FileUploadImg from "@/assets/upload_file.svg";
import { Button } from "./button";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles"));
    if (!storedFiles) return;
    setFiles(storedFiles);
  }, []);

  const onDrop = (acceptedFiles) => {
    const validFiles = acceptedFiles.filter(
      (file) => file.size <= 25 * 1024 * 1024
    ); // 25 MB limit
    const updatedFiles = [...files, ...validFiles];
    setFiles(updatedFiles);
    localStorage.setItem("uploadedFiles", JSON.stringify(updatedFiles));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
      <ul className="mt-4 space-y-2">
        {files.map((file, index) => (
          <li key={index} className="text-gray-800">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
