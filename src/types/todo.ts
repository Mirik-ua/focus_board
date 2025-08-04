
export type TodoType = {
  id: string
  name: string
  done: boolean
}

export type FilterTypes = 'active' | 'all' | 'completed'


export type SectionsType = {
  sections: []
}

export type SectionType = {
  id: string
  name: string
  color: string
  todos: TodoType[]
}

export type TodoEditMode = {
  active: boolean,
  todoId: string | null,
  sectionId: string | null,
  value: string,
}

export enum TodoEvent {
  delete = 'delete',
  edit = 'edit',
}