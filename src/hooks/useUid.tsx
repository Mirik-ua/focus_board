'use client'
import { useCallback } from 'react'

export const useUId = () => {
  return useCallback(() => Date.now().toString(), [])
}
