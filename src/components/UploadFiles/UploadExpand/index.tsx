"use client";

import { UploadExpandProps } from "@/components/types";
import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function UploadExpand({ children }: UploadExpandProps) {
  const { expanded, setExpanded }: any = useUploadContext();
console.log(expanded)
  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  };

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
