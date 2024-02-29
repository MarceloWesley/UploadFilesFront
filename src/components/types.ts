import { ReactNode } from "react";

export type UploadRootProps = {
  children: ReactNode;
};

export type UploadTriggerProps = {
  children?: ReactNode;
};

export type UploadPlaceholderProps = {
  children?: ReactNode;
};

export type UploadPreviewProps = {
  children?: ReactNode;
};

export type UploadSaveProps = {
  children?: ReactNode;
};

export type UploadRemoveProps = {
  children?: ReactNode;
};

export type DeleteButtonProps = {
  children?: ReactNode;
  name: string;
};

export type DownloadButtonProps = {
  children?: ReactNode;
  file: string;
  fileName: string;
};

export type UploadExpandProps = {
  children?: ReactNode;
};

export type UploadImageActionsProps = {
  children?: ReactNode;
};
