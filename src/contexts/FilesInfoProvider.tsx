"use client";

import React, {
  createContext,
  useState,
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

interface UploadContextType {
  uploadProgress: number;
  setUploadProgress: Dispatch<SetStateAction<number>>;
  inputFile: string;
  setInputFile: React.Dispatch<React.SetStateAction<string>>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  uploadFileStatus: string;
  setUploadFileStatus: React.Dispatch<React.SetStateAction<string>>;
}

const Info = createContext<UploadContextType>({
  uploadProgress: 0,
  setUploadProgress: () => {},
  inputFile: "",
  setInputFile: () => {},
  fileInputRef: { current: null },
  expanded: false,
  uploadFileStatus: "",
  setExpanded: () => {},
  setUploadFileStatus: () => {},
});

export function UploadProvider({ children }: any) {
  const [inputFile, setInputFile] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadFileStatus, setUploadFileStatus] = useState("");
  const fileInputRef = useRef(null);

  return (
    <Info.Provider
      value={{
        setUploadProgress,
        uploadProgress,
        inputFile,
        setInputFile,
        fileInputRef,
        expanded,
        setExpanded,
        setUploadFileStatus,
        uploadFileStatus,
      }}
    >
      {children}
    </Info.Provider>
  );
}

export function useUploadContext(): UploadContextType {
  return useContext(Info);
}
