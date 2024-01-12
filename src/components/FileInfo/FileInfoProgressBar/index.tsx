"use client";

import { useUploadContext } from "@/contexts/FilesInfoProvider";
import { useEffect } from "react";

export function FileInfoProgressBar() {
  const { uploadProgress }: any = useUploadContext();

  return (
    <progress
      className="w-full"
      id="file"
      value={uploadProgress}
      max="100"
    ></progress>
  );
}
