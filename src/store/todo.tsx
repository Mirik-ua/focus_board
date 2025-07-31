import { SectionType, TodoType, FilterTypes } from '@/types/todo'
import { arrayMove } from '@dnd-kit/sortable'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Store = {
  sections: SectionType[]
  activeFilter: FilterTypes
  updateFilter: (filter: FilterTypes) => void
  addTodo: ({
    sectionId,
    name,
    id,
    done,
  }: TodoType & { sectionId: string }) => void
  addSection: (data: SectionType) => void
  updateTodoCheckbox: (sectionId: string, todoId: string) => void
  deleteSection: (sectionId: string) => void
  updateSectionIndex: (sections: SectionType[]) => void
}

export const useStoreTodo = create<Store>()(
  devtools(
    persist(
      (set) => ({
        sections: [],
        activeFilter: 'all',
        updateFilter: (filter) =>
          set((state) => ({ ...state, activeFilter: filter })),
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
        updateSectionIndex: (newSections: SectionType[]) => {
          return set((state) => ({ ...state, sections: newSections }))
        },
      }),
      { name: 'SectionStore' }
    )
  )
)
