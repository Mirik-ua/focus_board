import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useStoreTodo = create()(
    devtools(
        persist( 
            (set) => ({
        sections: [],
        addSection: (data) => set((state) => ({...state, sections: ([ ...state.sections, data ])})),
        addTodo: ({ sectionId, value, id, done }) => set((state) => ({
            ...state,
            sections: state.sections.map((s) => {
                if(s.id === sectionId) {
                    return {...s, todos: [...s.todos, {name: value, done, id}]}
                }else {
                    return s
                }
            })
            })),
        updateTodoCheckbox: (sectionId, todoId) => set((state) => ({
            ...state,
            sections: state.sections.map((s) => {
                if(s.id === sectionId) {
                    return {...s,
                        todos: s.todos.map(todo => {
                        if (todo.id === todoId) {
                            return {
                                ...todo,
                                done: !todo.done
                            }
                        }else {
                            return todo
                        }
                    })}
                } else {
                    return s
                }
            })
            })),
    }), { name: 'SectionStore' })))