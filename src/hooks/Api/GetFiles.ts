import { api } from "@/services/axios";
import { ImagesProps } from "@/types/globalTypes";
import { useQuery } from "@tanstack/react-query";

export const getImages = async (): Promise<ImagesProps[]> => {
  const response = await api.get("/images");
  return response.data;
};

export function useGetFiles() {
  return useQuery({
    queryFn: async () => getImages(),
    queryKey: ["files"],
  });
}
