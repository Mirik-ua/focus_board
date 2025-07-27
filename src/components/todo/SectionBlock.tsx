'use client'
import { JSX } from 'react'

type SectionBlockType = {
  children: JSX.Element
  color: string
}

export function SectionBlock({ children, color }: SectionBlockType) {
  return (
    <div
      className={`min-w-[280px] overflow-hidden p-4 max-w-[min-content] h-max rounded-2xl
        shadow-md  transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      style={{
        border: `2px solid ${color}`,
        boxShadow: `0 6px 12px -2px ${color}`,
      }}
    >
      {children}
    </div>
  )
}
