import { FileInfoLoadingContainerProps } from "../types";

export function FileInfoProgressBarContainer({
  children,
}: FileInfoLoadingContainerProps) {
  return (
    <div className="gap-2 p-[0.1rem] pl-1 flex justify-between items-center border-solid border-2 rounded-[8px] shadow-md">
      {children}
    </div>
  );
}
