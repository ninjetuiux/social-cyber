'use client'
// ImageContext.js

import { createContext, useContext, useState } from "react";

const ImageContext = createContext();
// Generating Global Image Src And Alt Values to be rendered on the editor
export const ImageProvider = ({ children }) => {
  const [imageData, setImageData] = useState(null); // Store image URL and alt text

  return (
    <ImageContext.Provider value={{ imageData, setImageData }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);