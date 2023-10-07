"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThmeContextType {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}
const ThemeContext = createContext<ThmeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<string>("light");

  // eslint-disable-next-line no-unused-vars
  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (ctx === undefined)
    throw new Error("useTheme must be within a ThemeProvider");
  return ctx;
}
export default ThemeProvider;
