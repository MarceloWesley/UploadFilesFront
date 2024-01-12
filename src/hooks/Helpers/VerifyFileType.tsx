'use client'
import { useBase64 } from "./Base64";

export function useVerifyFileType(inputFile: any) {
  const validFiles = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/bmp",
    "image/svg+xml",
    "application/pdf",
  ];
  const image64 = useBase64(inputFile);

  const pdfImage =
    "https://play-lh.googleusercontent.com/X3tnd7tQVy2EIMWUticGw60a1Orp5Eq7OTRSfOzuKWKtqmfY6GhCQIUFDSapfy3HAw=w240-h480-rw";
  const errorImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Error.svg/2198px-Error.svg.png";

  if (validFiles.includes(inputFile.type)) {
    if (inputFile.type === "application/pdf") {
      return pdfImage;
    } else {
      return image64;
    }
  } else {
    return errorImage;
  }
}
