import { colors } from '@/mocks/todo.json'

export const useColors = () => {
  const randomColor = () => Math.floor(Math.random() * colors.length)

  return colors[randomColor()]
}
