'use client'
import { TodoWrapper } from '@/components/todo/index'
import { FilterTypes, Todo, TodoField } from '@/types/todo'
import { useCallback, useState } from 'react'
import { SectionWrap } from '@/components/todo/SectionWrap'

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
    <div
      className="flex font-sans  pt-20  px-6 gap-16  pb-6"
      style={{
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
      }}
    >
      <main className="flex overflow-x-scroll gap-[32px] ">
        <SectionWrap />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
