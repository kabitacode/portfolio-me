import { ActiveContext } from "@/context/active-section"
import { useContext } from "react"

export default function useActiveSectionContext() {
    const context = useContext(ActiveContext)
  
    if (context === null) {
      throw new Error(
        "useActiveSectionContext mus be within a ActiveSectionContextProvider"
      )
    }
  
    return context
  }
  