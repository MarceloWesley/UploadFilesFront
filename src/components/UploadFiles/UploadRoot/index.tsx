"use client";

import { UploadRootProps } from "@/components/types";
import { useUploadContext } from "@/contexts/FilesInfoProvider";
import { useVerifyFileType } from "@/hooks/Validation/VerifyFileType";
import { useUploadFile } from "@/hooks/Api/UploadFile";
import { FormEvent, useEffect } from "react";

export function UploadRoot({ children }: UploadRootProps) {
  const { setUploadFileStatus } = useUploadContext();
  const { mutation } = useUploadFile();
  const { verifyTypeFileToSendRequest } = useVerifyFileType();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const form = event.target as HTMLFormElement;
    formData.append("file", form.file.files[0]);

    const error = verifyTypeFileToSendRequest(form.file.files[0]);

    if (error) {
      return;
    } else {
      mutation.mutate(formData);
    }
  };

  useEffect(() => {
    if (mutation.status !== "idle") {
      setUploadFileStatus(mutation.status);
    }
  }, [mutation.status, setUploadFileStatus]);

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="flex flex-wrap gap-5"
    >
      {children}
    </form>
  );
}
