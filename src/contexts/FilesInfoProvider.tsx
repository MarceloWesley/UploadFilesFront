"use client";

import React, { createContext, useState, useContext, useRef } from "react";

const Info = createContext({});

export function UploadProvider({ children }: any) {
  const [inputFile, setInputFile] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
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
      }}
    >
      {children}
    </Info.Provider>
  );
}

export function useUploadContext() {
  return useContext(Info);
}
