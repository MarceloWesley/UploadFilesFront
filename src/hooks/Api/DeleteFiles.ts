import { api } from "@/services/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function deleteFile(id: string | number) {
  const response = api.delete(`/images/${id}`);
  return response;
}
export function useDeleteFiles() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id: string | number) => deleteFile(id),
    mutationKey: ["deleteFile"],
    onSuccess: () => {
      toast.success("image deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },
    onError: () => {
      toast.error("An error occurred when trying to delete the image");
    },
  });

  return {
    mutation,
  };
}
