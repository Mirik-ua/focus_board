'use client'
import { JSX } from 'react'

export function SectionBlock({ children }: { children: JSX.Element }) {
  return (
    <div
      className="min-w-[280px] overflow-hidden p-4 max-w-[min-content] h-max rounded-2xl
        shadow-md bg-muted/50 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      {children}
    </div>
  )
}
