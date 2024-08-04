'use client'
import { createContext, useContext, useState } from 'react';

const ToggledContext = createContext();

export function ToggledProvider({ children }) {
    const [isToggled, setIsToggled] = useState(false);
  
    return (
      <ToggledContext.Provider value={{ isToggled, setIsToggled }}>
        {children}
      </ToggledContext.Provider>
    );
  }

  export function useToggledContext() {
    return useContext(ToggledContext);
  }
  