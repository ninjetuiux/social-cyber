'use client';
// app/context/ScrollContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const SmallScreenContext = createContext();

export function SmallScreenProvider({ children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  return (
    <SmallScreenContext.Provider value={{ isSmallScreen, setIsSmallScreen }}>
      {children}
    </SmallScreenContext.Provider>
  );
}

export function useSmallScreenContext() {
  return useContext(SmallScreenContext);
}