"use client";

import { UploadTriggerProps } from "@/components/types";
import { useUploadContext } from "@/contexts/FilesInfoProvider";
import { MakeAccessible } from "@/helpers/MakeAccessible";
import { useState } from "react";

export function UploadInput({ children }: UploadTriggerProps) {
  const { setInputFile, inputFile, fileInputRef }: any = useUploadContext();
  const [dragging, setDragging] = useState(false);

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setInputFile(file);
    }
  };

  const handleDropImage = (file: any) => {
    if (file) {
      setInputFile(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file: any) => {
    handleDropImage(file);
  };

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`${
          inputFile ? "" : "w-full h-full"
        } flex items-center justify-center ${
          dragging ? "border-dashed border-green-500 border-2" : ""
        }`}
      >
        {!inputFile && (
          <label
            onKeyDown={(e) => MakeAccessible(fileInputRef, e)}
            className="cursor-pointer "
            htmlFor="file"
            tabIndex={0}
          >
            {children}
          </label>
        )}
        <input
          className="hidden"
          type="file"
          ref={fileInputRef}
          name="file"
          id="file"
          onChange={handleAddImage}
        />
      </div>
    </>
  );
}
