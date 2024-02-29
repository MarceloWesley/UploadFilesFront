"use client";

import { useState } from "react";

export function useBase64() {
  const [result, setResult] = useState<string>();

  const toBase64 = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setResult(reader.result as string);
      };

      reader.onerror = (error) => {
        console.error("Error converting image to base64:", error);
      };
    }
    return result;
  };

  return {
    toBase64,
  };
}
