'use client'

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMount, setMount] = useState<boolean>(false)

  useEffect(() => {
    setMount(true)

    return () => {
      setMount(false)
    }
  }, [])

  return (
    isMount && (
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        {...props}
      >
        {children}
      </NextThemesProvider>
    )
  )
}
