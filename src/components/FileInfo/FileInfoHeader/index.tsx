"use client";
import { Text } from "@/components/Text/Text";
import * as FileInfoStatus from "@/components/FileInfo";
import { useUploadContext } from "@/contexts/FilesInfoProvider";

export function FileInfoHeader() {
    const { inputFile }: any = useUploadContext();
    const imageTitle = inputFile.name ?  inputFile.name?.replace(/\.(jpeg|png)$/i, '') : 'Aguardando Imagem'
    const imageSize = inputFile.size ?? '0';

  return (
    <header className="flex justify-between gap-5 items-center shadow-md rounded-xl border-solid border-2 mt-4 p-2">
      <Text className={`whitespace-nowrap overflow-hidden overflow-ellipsis ${inputFile.name ? '' : 'text-slate-300'}`} size="1.2rem">{imageTitle}</Text>

      <div className="flex self-end items-center gap-5">
        <Text className={`${inputFile.size ? '' : 'text-slate-300'}`}>{imageSize}Kb</Text>
        <FileInfoStatus.Status />
      </div>
    </header>
  );
}
