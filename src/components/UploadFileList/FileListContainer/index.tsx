import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { FileListContainer } from "../types";
import { getImages } from "@/hooks/Api/GetFiles";

export async function FileListContainer({ children }: FileListContainer) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["files"],
    queryFn: getImages,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="border-solid w-full flex items-center justify-between gap-5 flex-wrap ">
          {children}
        </div>
      </HydrationBoundary>
    </>
  );
}
