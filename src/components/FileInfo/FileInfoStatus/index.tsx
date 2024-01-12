import { FiMinusCircle } from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoVerified } from "react-icons/go";



export function FileInfoStatus(status?: any) {


    return (
        <span className="text-3xl text-green-500 self-end">
            <GoVerified/>
        </span>
    )
}