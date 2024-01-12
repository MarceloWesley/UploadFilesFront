"use client";
import { UploadRootProps } from "@/components/types";
import { UploadProvider } from "@/contexts/FilesInfoProvider";
import { useUploadFile } from "@/hooks/Api/UploadFile";
import { useEffect, useState } from "react";

export function UploadRoot({ children }: UploadRootProps) {
  const [file, setFile] = useState<any>();
  const { uploadFile, data, error } = useUploadFile();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", event.target.file.files[0]);

    uploadFile(formData);

    if (error) {
      console.log("error", error);
    }
  };

  return (
    <UploadProvider>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-5"
      >
        {children}
      </form>
    </UploadProvider>
  );
}
