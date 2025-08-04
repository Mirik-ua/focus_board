import { SectionType, TodoType, FilterTypes, TodoEditMode } from '@/types/todo'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Store = {
  sections: SectionType[]
  activeFilter: FilterTypes
  todoEditMode: TodoEditMode
  updateFilter: (filter: FilterTypes) => void
  editModeOn: (data: Omit<TodoEditMode, 'value'>) => void
  editModeOff: () => void
  editModeSubmit: (data: TodoEditMode) => void
  addTodo: ({
    sectionId,
    name,
    id,
    done,
  }: TodoType & { sectionId: string }) => void
  addSection: (data: SectionType) => void
  deleteTodo: (sectionId: string, todoId: string) => void
  updateTodoCheckbox: (sectionId: string, todoId: string) => void
  deleteSection: (sectionId: string) => void
  updateSectionIndex: (sections: SectionType[]) => void
}

const initialTodoEditMode = {
  active: false,
  todoId: null,
  sectionId: null,
  value: '',
}

export const useStoreTodo = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        sections: [],
        activeFilter: 'all',
        todoEditMode: initialTodoEditMode,
        updateFilter: (filter) =>
          set((state) => ({ ...state, activeFilter: filter })),
        editModeOn: (data: Omit<TodoEditMode, 'value'>) => {
          return set((state) => ({
            ...state,
            todoEditMode: {
              ...data,
              value:
                get()
                  .sections.find((i: SectionType) => data.sectionId === i.id)
                  ?.todos.find((i) => i.id === data.todoId)?.name ?? '',
            },
          }))
        },
        editModeSubmit: (data: TodoEditMode) => {
          return set((state) => ({
            ...state,
            todoEditMode: initialTodoEditMode,
            sections: state.sections.map((s) => {
              if (s.id === data.sectionId) {
                return {
                  ...s,
                  todos: s.todos.map((t) => {
                    if (t.id === data.todoId) {
                      return { ...t, name: data.value }
                    } else {
                      return t
                    }
                  }),
                }
              } else {
                return s
              }
            }),
          }))
        },
        editModeOff: () =>
          set((state) => ({ ...state, todoEditMode: initialTodoEditMode })),
        addSection: (data: SectionType) =>
          set((state) => ({ ...state, sections: [...state.sections, data] })),
        deleteTodo: (sectionId: string, todoId: string) =>
          set((state) => ({
            ...state,
            sections: state.sections.map((s) => {
              if (s.id === sectionId) {
                return { ...s, todos: s.todos.filter((t) => t.id !== todoId) }
              } else {
                return s
              }
            }),
          })),
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
