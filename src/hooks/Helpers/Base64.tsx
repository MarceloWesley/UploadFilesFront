'use client'

import { Result } from "postcss";
import { useEffect, useState } from "react";

export function useBase64(file: any) {
    const [result, setResult] = useState<typeof file | null>();

    useEffect(() => {
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
    
          reader.onload = () => {
            setResult(reader.result);
          };
    
          reader.onerror = (error) => {
            console.error('Error converting image to base64:', error);
          };
        }
      }, [file]);
    
      return result;
    };
