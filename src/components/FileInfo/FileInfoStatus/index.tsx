import { IoCloseCircleOutline } from "react-icons/io5";
import { GoVerified } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { VscLoading } from "react-icons/vsc";
import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function FileInfoStatus() {
  const { uploadFileStatus } = useUploadContext();

  const status =
    uploadFileStatus === "pending" ? (
      <VscLoading />
    ) : uploadFileStatus === "success" ? (
      <GoVerified />
    ) : uploadFileStatus === "error" ? (
      <IoCloseCircleOutline />
    ) : (
      <CiClock2 />
    );

  const statusStyle =
    uploadFileStatus === "pending"
      ? "animate-spin text-yellow-500"
      : uploadFileStatus === "success"
      ? "text-green-500"
      : uploadFileStatus === "error"
      ? "text-red-500"
      : "text-gray-400 ";

  return <span className={`text-3xl ${statusStyle} self-end`}>{status}</span>;
}
