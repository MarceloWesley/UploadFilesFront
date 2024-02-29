import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function useCleaner() {
  const { setInputFile, fileInputRef, setUploadProgress, setUploadFileStatus } =
    useUploadContext();

  const cleanUploadFiles = () => {
    setInputFile("");
    setUploadProgress(0);
    setUploadFileStatus("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return {
    cleanUploadFiles,
  };
}
