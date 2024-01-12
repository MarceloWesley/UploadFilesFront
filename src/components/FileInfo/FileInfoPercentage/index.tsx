'use client'
import { Text } from "@/components/Text/Text";
import { useUploadContext } from "@/contexts/FilesInfoProvider";
import { useUploadFile } from "@/hooks/Api/UploadFile";

export function FileInfoPercentage(){
    const { uploadProgress }: any = useUploadContext();

    console.log('dentro da percentage',uploadProgress)

    return (
    <Text>
        {uploadProgress}%
    </Text>
    )
}