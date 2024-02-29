export type UploadFileStatus = "Waiting" | "Loading" | "Success" | "Failed";
export interface ImagesProps {
  name: string;
  size: number;
  data: string;
  type: string;
}
export type DownloadFileBase64Props = {
  file: string;
  fileName: string;
};
