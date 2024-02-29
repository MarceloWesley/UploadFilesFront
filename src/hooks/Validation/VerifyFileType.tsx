"use client";
import Swal from "sweetalert2";
import { useBase64 } from "../../helpers/Base64";
import { useCleaner } from "../Cleaner/cleaner";

export function useVerifyFileType() {
  const { toBase64 } = useBase64();
  const { cleanUploadFiles } = useCleaner();

  const validFiles = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/svg+xml",
    "application/pdf",
  ];

  const pdfImage =
    "https://play-lh.googleusercontent.com/X3tnd7tQVy2EIMWUticGw60a1Orp5Eq7OTRSfOzuKWKtqmfY6GhCQIUFDSapfy3HAw=w240-h480-rw";

  const errorImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/2198px-Error.svg.png";

  const verifyTypeForPreview = (inputFile: File) => {
    const image64 = toBase64(inputFile);
    if (validFiles.includes(inputFile.type)) {
      if (inputFile.type === "application/pdf") {
        return pdfImage;
      } else {
        return image64;
      }
    } else {
      return errorImage;
    }
  };

  const verifyTypeFileToSendRequest = (inputFile: File) => {
    if (!validFiles.includes(inputFile.type)) {
      Swal.fire({
        title: "Error",
        text: "Invalid file type",
        icon: "error",
      }).then(() => {
        cleanUploadFiles();
      });
      return "Invalid file type";
    } else {
      return;
    }
  };

  return {
    verifyTypeForPreview,
    verifyTypeFileToSendRequest,
  };
}
