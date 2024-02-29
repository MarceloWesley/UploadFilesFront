"use client";
import { useGetFiles } from "@/hooks/Api/GetFiles";
import * as UploadFiles from "../../UploadFiles";

import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { DeleteButton } from "..";
import { DownloadButton } from "..";

export function FileList() {
  const { data: files, error } = useGetFiles();
  const pdfImage =
    "https://play-lh.googleusercontent.com/X3tnd7tQVy2EIMWUticGw60a1Orp5Eq7OTRSfOzuKWKtqmfY6GhCQIUFDSapfy3HAw=w240-h480-rw";

  return (
    <>
      {files?.map((file) => (
        <div
          key={file.name}
          className="w-64 h-64  border-solid border-2 relative rounded-md"
        >
          <Image
            className="rounded-md object-cover"
            src={`${
              file.type === ".pdf"
                ? pdfImage
                : `data:image/jpeg;base64,${file.data}`
            }`}
            alt="File"
            fill
          />
          <UploadFiles.Actions>
            <DeleteButton name={file.name}>
              <FaRegTrashAlt />
            </DeleteButton>

            <DownloadButton file={file.data} fileName={file.name}>
              <FaDownload />
            </DownloadButton>
          </UploadFiles.Actions>
        </div>
      ))}
    </>
  );
}
