"use client"

import { links } from '@/lib/data'
import React, { useState, createContext, useContext } from 'react'

type SectionName = typeof links[number]['name']

type ActiveProps = {
    children: React.ReactNode
}

type ActiveContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const ActiveContext = createContext<ActiveContextType | null>(null)

export default function ActiveSectionContextProvider({children} : ActiveProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')

  return (
    <ActiveContext.Provider value={{
      activeSection,
      setActiveSection
    }}>
      {children}
    </ActiveContext.Provider>
  )
}
