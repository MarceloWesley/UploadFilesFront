import { UploadImageActionsProps } from "@/components/types";


export function UploadFilesActions({children}: UploadImageActionsProps){
    return (
        <div className="absolute top-1 right-1 flex flex-col gap-2">
            {children}
        </div>
    )
}