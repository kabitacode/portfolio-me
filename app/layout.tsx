import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section'
import { Toaster } from "react-hot-toast";
import ThemeSwitch from '@/components/theme-switch'
import Footer from '@/components/footer'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Front End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:text-gray-50 dark:text-opacity-90 dark:bg-gray-900`}>
        <div className="bg-[#B4D4FF] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.2rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5691de]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-6rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#f5f5f5]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        
      </body>
    </html>
  )
}
