import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useStoreTodo = create()(
    devtools(
        persist( 
            (set) => ({
        sections: [],
        addSection: (data) => set((state) => ({...state, sections: ([ ...state.sections, data ])})),
        addTodo: ({ sectionId, value, id }) => set((state) => ({
            ...state,
            sections: state.sections.map((s) => {
                if(s.id === sectionId) {
                    return {...s, todos: [...s.todos, {name: value, id}]}
                }else {
                    return s
                }
            })
            }))
    }), { name: 'SectionStore' })))