import { UploadPlaceholderProps } from "@/components/types";


export function UploadPlaceholderContent({children}: UploadPlaceholderProps){
    return (
        <div className="border-solid border-2 h-[100%] bg-[url('https://pictures.abebooks.com/isbn/9783942597449-us.jpg')] bg-cover bg-center">
            {children}
        </div>
    )
}