
export type TodoType = {
  id: string
  name: string
}

export type FilterTypes = 'active' | 'all' | 'completed'

export type FilterCheckboxType = {
  handleChangeRadio: (name: FilterTypes) => void
  name: FilterTypes
  activeValue: FilterTypes
}

export type TodoMapType = TodoType & {
  handleChange: (id: string) => void
}

export type TodoField = {
  error: string | null
  value: string
}

export type SectionsType = {
  sections: []
}

export type SectionType = {
  id: string
  name: string
  color: string
  todos: TodoType[]
}