"use client";

import { UploadRemoveProps } from "@/components/types";
import { useCleaner } from "@/hooks/Cleaner/cleaner";

export function UploadRemove({ children }: UploadRemoveProps) {
  const { cleanUploadFiles } = useCleaner();

  const handleRemovePreviewImage = () => {
    cleanUploadFiles();
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
