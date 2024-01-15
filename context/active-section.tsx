"use client"

import { links } from '@/lib/data'
import type { SectionName } from '@/lib/types'
import React, { useState, createContext, useContext } from 'react'



type ActiveProps = {
    children: React.ReactNode
}

type ActiveContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeLastClick: number;
  setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveContext = createContext<ActiveContextType | null>(null)

export default function ActiveSectionContextProvider({children} : ActiveProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [timeLastClick, setTimeLastClick] = useState(0) // wee need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveContext.Provider value={{
      activeSection,
      setActiveSection,
      timeLastClick,
      setTimeLastClick
    }}>
      {children}
    </ActiveContext.Provider>
  )
}
