import { ThemeContext } from "@/context/theme-context";
import { useContext } from "react";

export default function useTheme() {
    const context = useContext(ThemeContext);
  
    if (context === null) {
      throw new Error("useTheme must be used within a ThemeContextProvider");
    }
  
    return context;
  }