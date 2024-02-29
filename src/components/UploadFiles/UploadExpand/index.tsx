"use client";

import { UploadExpandProps } from "@/components/types";
import { useUploadContext } from "@/contexts/FilesInfoProvider";
import { useEffect } from "react";

export function UploadExpand({ children }: UploadExpandProps) {
  const { expanded, setExpanded }: any = useUploadContext();

  const handleToggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  useEffect(() => {
    setExpanded((prev) => !prev);
  }, [setExpanded]);

  return (
    <button
      type="button"
      onClick={handleToggleExpanded}
      className="bg-slate-100 rounded-md p-1 text-cyan-400  hover:scale-90 transition-transform duration-300"
    >
      {children}
    </button>
  );
}
