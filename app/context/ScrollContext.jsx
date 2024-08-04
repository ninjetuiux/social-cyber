'use client';
// app/context/ScrollContext.jsx
import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  return useContext(ScrollContext);
}
