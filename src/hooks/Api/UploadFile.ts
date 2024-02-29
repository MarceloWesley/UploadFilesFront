import { useUploadContext } from "@/contexts/FilesInfoProvider";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { api } from "@/services/axios";
import Swal from "sweetalert2";
import { useCleaner } from "../Cleaner/cleaner";
import { useVerifyFileType } from "../Validation/VerifyFileType";

export function useUploadFile() {
  const { setUploadProgress } = useUploadContext();
  const { cleanUploadFiles } = useCleaner();
  const queryClient = useQueryClient();

  const config = {
    onUploadProgress: function (progressEvent: any) {
      const completed = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setUploadProgress(completed);
    },
  };

  const postFile = async (file: FormData) => {
    const response = await api.post("/images", file, config);
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: postFile,
    mutationKey: ["upFile"],
    onSuccess: () => {
      Swal.fire({
        title: "Image sent successfully",
        icon: "success",
      }).then(() => {
        cleanUploadFiles();
      });
      queryClient.invalidateQueries({
        queryKey: ["files"],
      });
    },
    onError: (error: any) => {
      Swal.fire({
        title: "Error",
        text: `${error.response.data.error}`,
        icon: "error",
      }).then(() => {
        cleanUploadFiles();
      });
    },
  });

  return {
    mutation,
  };
}
