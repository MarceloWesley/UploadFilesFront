"use client";

import { useUploadContext } from "@/contexts/FilesInfoProvider";
import { useVerifyFileType } from "@/hooks/Validation/VerifyFileType";
import Image from "next/image";
import { useEffect } from "react";

export function PreviewContent() {
  const { inputFile, expanded, setExpanded }: any = useUploadContext();
  const { verifyTypeForPreview } = useVerifyFileType();
  const defaultImage =
    "https://cdn.icon-icons.com/icons2/1859/PNG/512/images_117937.png";
  const File = verifyTypeForPreview(inputFile) ?? defaultImage;

  useEffect(() => {
    const closeOnEsc = (event: any) => {
      if (expanded && event.key === "Escape") {
        setExpanded(!expanded);
      }
    };

    window.addEventListener("keydown", closeOnEsc);

    return () => {
      window.removeEventListener("keydown", closeOnEsc);
    };
  }, [expanded, setExpanded]);

  const handleClickOutsideImage = () => {
    if (expanded) {
      setExpanded(!expanded);
    }
  };

  return (
    <div
      onClick={handleClickOutsideImage}
      className={`${
        expanded
          ? "fixed top-0 left-0 right-0 bottom-0 z-40 items-center justify-center bg-black bg-opacity-80 flex"
          : ""
      }`}
    >
      <Image
        className={`${
          expanded
            ? "aspect-[4/3] rounded-lg m-auto max-w-[500px] max-h-[500px]"
            : ""
        }`}
        src={File}
        alt="image"
        fill
        placeholder="blur"
        quality={100}
        blurDataURL={defaultImage}
      />
    </div>
  );
}
