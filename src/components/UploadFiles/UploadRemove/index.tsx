"use client";

import { UploadRemoveProps } from "@/components/types";
import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function UploadRemove({ children }: UploadRemoveProps) {
  const { setInputFile, fileInputRef }: any = useUploadContext();

  const handleRemovePreviewImage = () => {
    setInputFile("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <button
      onClick={handleRemovePreviewImage}
      type="button"
      className=" bg-slate-100 rounded-md p-1 text-red-500  hover:scale-90 transition-transform duration-300"
    >
      {children}
    </button>
  );
}
