'use client'

import { ToggleBtn } from './ToggleBtn'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme])

  const handleTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <header
      className="fixed t-0 l-0 z-50 w-full px-4 py-3 flex justify-between items-center bg-background shadow-md"
      style={{
        boxShadow: isDark
          ? '0 10px 15px rgba(255, 255, 240, 0.05)'
          : '0 10px 30px rgba(23, 23, 23, 0.08)',
      }}
    >
      <div className="flex w-[100%] justify-end items-center gap-2">
        <ToggleBtn
          text={isDark ? '🌞' : '🌙'}
          handleClick={handleTheme}
          classname={`${
            isDark
              ? 'border-[#fffff0] bg-[#fffff0] text-black hover:bg-[#171717]'
              : 'border-[#171717] bg-[#171717] text-white hover:bg-[#fffff0] hover:text-[#171717]'
          }`}
        />
      </div>
    </header>
  )
}
