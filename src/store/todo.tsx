import { SectionType, TodoType } from '@/types/todo'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Store = {
  sections: SectionType[]
  addTodo: ({
    sectionId,
    name,
    id,
    done,
  }: TodoType & { sectionId: string }) => void
  addSection: (data: SectionType) => void
  updateTodoCheckbox: (sectionId: string, todoId: string) => void
  deleteSection: (sectionId: string) => void
}

export const useStoreTodo = create<Store>()(
  devtools(
    persist(
      (set) => ({
        sections: [],
        addSection: (data: SectionType) =>
          set((state) => ({ ...state, sections: [...state.sections, data] })),
        addTodo: ({
          sectionId,
          name,
          id,
          done,
        }: TodoType & { sectionId: string }) =>
          set((state) => ({
            ...state,
            sections: state.sections.map((s) => {
              if (s.id === sectionId) {
                return { ...s, todos: [...s.todos, { name, done, id }] }
              } else {
                return s
              }
            }),
          })),
        updateTodoCheckbox: (sectionId: string, todoId: string) =>
          set((state) => ({
            ...state,
            sections: state.sections.map((s) => {
              if (s.id === sectionId) {
                return {
                  ...s,
                  todos: s.todos.map((todo) => {
                    if (todo.id === todoId) {
                      return {
                        ...todo,
                        done: !todo.done,
                      }
                    } else {
                      return todo
                    }
                  }),
                }
              } else {
                return s
              }
            }),
          })),
        deleteSection: (sectionId: string) =>
          set((state) => ({
            ...state,
            sections: state.sections.filter((s) => {
              if (s.id !== sectionId) {
                return s
              }
            }),
          })),
      }),
      { name: 'SectionStore' }
    )
  )
)
