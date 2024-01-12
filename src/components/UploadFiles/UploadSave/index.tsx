import { UploadSaveProps } from "@/components/types";

export function UploadSave({children}: UploadSaveProps){

    return (
        <button type="submit" className="appearance-none border-none text-cyan-500  bg-slate-100 w-20 rounded-md absolute bottom-2 left-1/2 transform -translate-x-1/2  hover:scale-90 transition-transform duration-300 p-[0.20rem]">
          {children}
        </button>
    )
}