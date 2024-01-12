"use client";

export function MakeAccessible(ref: any, e: any) {
  function handleLabelClick(ref: any) {
    if (ref.current) {
      ref.current.click();
    }
  }
  
  if (e.key === "Enter") {
    handleLabelClick(ref);
  }
}
