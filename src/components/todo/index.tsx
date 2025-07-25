'use client'
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
  return <></>
}
