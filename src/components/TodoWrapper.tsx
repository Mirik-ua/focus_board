import { FilterTypes, Todo } from '@/types/todo'
import { useCallback } from 'react'
import { TodoMap } from './TodoMap'
import { todoFilters } from '@/mocks/todo.json'
import { FilterRadio } from './FilterRadio'

export const TodoWrapper = ({
  arr,
  filter,
  handleChange,
  handleChangeRadio,
}: {
  arr: Todo[]
  filter: FilterTypes
  handleChange: (id: string) => void
  handleChangeRadio: (name: FilterTypes) => void
}) => {
  const filtersMap: FilterTypes[] = todoFilters as FilterTypes[]

  const TodoFilter = useCallback(
    ({ ...i }) => {
      if (filter === 'all') {
        return (
          <TodoMap
            key={i.id}
            id={i.id}
            label={i.label}
            completed={i.completed}
            handleChange={() => handleChange(i.id)}
          />
        )
      }
      if (filter === 'active' && !i.completed) {
        return (
          <TodoMap
            key={i.id}
            id={i.id}
            label={i.label}
            completed={i.completed}
            handleChange={() => handleChange(i.id)}
          />
        )
      }
      if (filter === 'completed' && i.completed) {
        return (
          <TodoMap
            key={i.id}
            id={i.id}
            label={i.label}
            completed={i.completed}
            handleChange={() => handleChange(i.id)}
          />
        )
      }
    },
    [filter]
  )

  return (
    <>
      {arr.length
        ? filtersMap.map((i, index) => {
            return (
              <FilterRadio
                activeValue={filter}
                key={index}
                handleChangeRadio={handleChangeRadio}
                name={i}
              />
            )
          })
        : null}
      <hr />
      {arr.length
        ? arr.map((i) => {
            return <TodoFilter {...i} key={i.label} />
          })
        : null}
    </>
  )
}
