import { DownloadButtonProps } from "@/components/types";
import { downloadFileBase64 } from "@/helpers/DownloadFileBase64";

export function DownloadButton({
  children,
  file,
  fileName,
}: DownloadButtonProps) {
  const handleDownload = () => {
    downloadFileBase64({ file, fileName });
  };

  return (
    <button
      onClick={handleDownload}
      type="button"
      className=" bg-slate-100 rounded-md p-1 text-blue-500  hover:scale-90 transition-transform duration-300"
    >
      {children}
    </button>
  );
}
