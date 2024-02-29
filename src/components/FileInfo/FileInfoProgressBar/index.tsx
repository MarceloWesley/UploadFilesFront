"use client";

import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function FileInfoProgressBar() {
  const { uploadProgress }: any = useUploadContext();

  return (
    <progress
      className="w-full [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-md  [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:bg-violet-400"
      id="file"
      value={uploadProgress}
      max="100"
    ></progress>
  );
}
