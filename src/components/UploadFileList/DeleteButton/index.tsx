import { DeleteButtonProps } from "@/components/types";
import { useDeleteFiles } from "@/hooks/Api/DeleteFiles";

export function DeleteButton({ children, name }: DeleteButtonProps) {
  const { mutation } = useDeleteFiles();
  const id = name.split("-")[0];

  const handleDeleteFile = () => {
    mutation.mutate(id);
  };

  return (
    <button
      onClick={handleDeleteFile}
      type="button"
      className=" bg-slate-100 rounded-md p-1 text-red-500  hover:scale-90 transition-transform duration-300"
    >
      {children}
    </button>
  );
}
