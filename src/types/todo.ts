
export type Todo = {
  id: string
  label: string
  completed: boolean
}

export type FilterTypes = 'active' | 'all' | 'completed'

export type FilterCheckboxType = {
  handleChangeRadio: (name: FilterTypes) => void
  name: FilterTypes
  activeValue: FilterTypes
}

export type TodoMapType = Todo & {
  handleChange: (id: string) => void
}

export type TodoField = {
  error: string | null
  value: string
}
