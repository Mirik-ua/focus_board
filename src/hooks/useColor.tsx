import data from '@/mocks/todo.json'
import { useStoreTodo } from '@/store/todo'
import { SectionType } from '@/types/todo'
import { useCallback, useMemo } from 'react'

export const useColors = () => {
  const { sections } = useStoreTodo()

  const randomized = (length: number) => Math.floor(Math.random() * length)

  const usedColor: string[] = useMemo(
    () => sections.map((s: SectionType) => s.color),
    [sections]
  )

  const getRandomColor = useCallback(
    () => data.colors[randomized(data.colors.length)],
    []
  )

  const getUniqueColor = useMemo(
    () => data.colors.find((color) => !usedColor.includes(color)),
    [usedColor]
  )

  const getColor = useCallback(
    () => getUniqueColor ?? getRandomColor(),
    [getUniqueColor, getRandomColor]
  )

  return getColor()
}
