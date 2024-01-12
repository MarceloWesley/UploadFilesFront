'use client'
import { FileInfoRootProps } from "../types";
import { UploadProvider, useUploadContext } from "@/contexts/FilesInfoProvider";

export function FileInfoRoot({children}: FileInfoRootProps) {
    const { setInputImage, inputImage }: any = useUploadContext();

    return (
        <UploadProvider>
        <section className=" p-1 border-solid flex-1 flex-col rounded-md shadow-md border-2  h-[10.5rem]">
             {children}   
        </section>
        </UploadProvider>
    )
}