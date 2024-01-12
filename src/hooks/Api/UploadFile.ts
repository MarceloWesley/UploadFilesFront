"use client";

import { useCallback, useState } from "react";
import axios from "axios";
import { useUploadContext } from "@/contexts/FilesInfoProvider";
const BaseUrl = "localhost:3333";

export function useUploadFile() {
  const { setUploadProgress, inputFile }: any = useUploadContext();

  const [data, setData] = useState<any>();
  const [error, setError] = useState();

  const uploadFile = async (file: any) => {
    try {
      const response = await axios.post("http://localhost:3333/upload", file, {
        onUploadProgress: (progressEvent: any) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(
            (prevProgress: number) => prevProgress + percentCompleted
          );
          console.log(`A imagem  está ${percentCompleted}% carregada... `);
        },
      });
      if (response) {
        setData(response);
      }
    } catch (err: any) {
      setError(err);
    }
  };

  return {
    uploadFile,
    data,
    error,
  };
}
