'use client'
import { TodoWrapper } from '@/components/todo/index'
import { FilterTypes, Todo, TodoField } from '@/types/todo'
import { useCallback, useState } from 'react'

const initialVal = (label: string, id: number) => ({
  id: id.toString(),
  label,
  completed: false,
})

const initialField: TodoField = {
  value: '',
  error: null,
}

const initialFilter: FilterTypes = 'all'

export default function TodoList() {
  const [labelField, setLabelField] = useState<TodoField>(initialField)
  const [arr, setArr] = useState<Todo[] | []>([])
  const [filter, setFilter] = useState<FilterTypes>(initialFilter)

  const handleClick = (): void => {
    if (!labelField.value.length) return
    if (arr.find((i) => i.label === labelField.value)) {
      setLabelField((prev) => ({
        ...prev,
        error: 'You already have task with that name',
      }))
      return
    }
    setArr([...arr, initialVal(labelField.value, Date.now())])
    setLabelField(initialField)
  }

  const handleChange = (id: string): void => {
    setArr((prev) => {
      return prev.map((i) => {
        if (i.id === id) {
          return { ...i, completed: !i.completed }
        } else {
          return i
        }
      })
    })
  }

  const handleField = (e: { target: { value: string } }) => {
    setLabelField((prev) => ({ ...prev, value: e.target.value }))
  }

  const handleChangeRadio = useCallback((name: FilterTypes): void => {
    setFilter(name)
  }, [])

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <input
          className="border-2"
          type="text"
          value={labelField.value}
          onChange={handleField}
        />
        {labelField.error ? <p>{labelField.error}</p> : null}
        <button className="bg-black text-white" onClick={handleClick}>
          btn
        </button>
        <TodoWrapper
          arr={arr}
          filter={filter}
          handleChangeRadio={handleChangeRadio}
          handleChange={handleChange}
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
