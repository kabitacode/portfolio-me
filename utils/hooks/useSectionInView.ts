import { useEffect } from "react";
import useActiveSectionContext from '@/utils/hooks/useActiveSectionContext';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from "@/lib/types";

export function UseSectionInView(sectionName: SectionName) {
    const { ref, inView } = useInView();
    const { setActiveSection, timeLastClick } = useActiveSectionContext()
  
    useEffect(() => {
      if (inView && Date.now() - timeLastClick > 1000) {
        setActiveSection(sectionName)
      }
    }, [inView, setActiveSection, timeLastClick, sectionName])

    return {
        ref,
    }
}