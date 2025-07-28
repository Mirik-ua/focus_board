'use client'

import { useStoreUser } from '@/store/user'
import { ToggleBtn } from './ToggleBtn'
import { useTheme } from 'next-themes'
import { useMemo, useState } from 'react'
import { Settings } from 'lucide-react'
import { Button } from '../ui/button'
import UserDialog from '../user/index'

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme()

  const { user, togglePopover, setMode } = useStoreUser()

  const isDark = useMemo(() => resolvedTheme === 'dark', [resolvedTheme])

  const handleTheme = () => setTheme(isDark ? 'light' : 'dark')

  const handleUserPopover = () => {
    togglePopover(true)
    setMode('edit')
  }

  return (
    <header
      className="fixed t-0 l-0 z-50 w-full px-4 py-3 flex justify-between items-center bg-background shadow-md"
      style={{
        boxShadow: isDark
          ? '0 10px 15px rgba(255, 255, 240, 0.05)'
          : '0 10px 30px rgba(23, 23, 23, 0.08)',
      }}
    >
      {user?.id ? (
        <h3 className={'font-bold break-words w-fit'}>Hey, {user.name}</h3>
      ) : null}
      <div
        className={`flex ${
          user?.id ? 'w-max' : 'w-[100%]'
        } justify-end items-center gap-2`}
      >
        <Button
          className="rounded-xl border border-white/10 hover:border-[#3b82f6]/30 bg-black/60 text-white hover:text-[#3b82f6] shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] transition"
          onClick={handleUserPopover}
        >
          <Settings className="w-5 h-5" />
        </Button>

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
