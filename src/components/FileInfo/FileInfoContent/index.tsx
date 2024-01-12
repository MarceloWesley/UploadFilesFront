import { FileInfocontentProps } from "../types";

export function FileInfocontent({children}: FileInfocontentProps){

    return (
        <div className="flex gap-3 items-center">
            {children}
        </div>
    )
}