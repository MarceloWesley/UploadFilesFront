"use client";
import { UploadPreviewProps } from "@/components/types";
import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function UploadPreview({ children }: UploadPreviewProps) {
  const { inputFile }: any = useUploadContext();

  return (
    <>
      {inputFile && (
        <div className="relative w-[100%] h-[100%]">
          {children}
        </div>
      )}
    </>
  );
}
