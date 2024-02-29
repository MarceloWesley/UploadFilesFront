"use client";
import { Text } from "@/components/Text/Text";
import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function FileInfoPercentage() {
  const { uploadProgress }: any = useUploadContext();

  return <Text>{uploadProgress}%</Text>;
}
