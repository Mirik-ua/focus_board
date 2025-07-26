import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import {SectionsType} from '@/types/todo'

export const useStoreTodo = create()(
    devtools((set) => ({
        sections: [],
        addSection: (data) => set((state) => ({...state, sections: ([ ...state.sections, data ])})),
        addTodo: ({ sectionId, value, uId }) => set((state) => ({
            ...state,
            sections: state.sections.map((s) => {
                if(s.id === sectionId) {
                    return {...s, todos: [...s.todos, {name: value, id: uId}]}
                }else {
                    return s
                }
            })
            }))
    }), { name: 'SectionStore' }))