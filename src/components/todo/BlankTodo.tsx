'use client'
import { InputProcess } from '@/types/process'
import { useState } from 'react'
import { useStoreTodo } from '@/store/todo'
import { InputLabel } from '@/shared/InputLabel'
import { useUId } from '@/hooks/useUid'

type SectionsType = {
  sectionId: string
  sectionName: string
}

export function BlankTodo({ sectionId, sectionName }: SectionsType) {
  const [value, setValue] = useState<string>('')
  const { addTodo } = useStoreTodo()
  const uId = useUId()

  const handleSubmit = (e: InputProcess<HTMLFormElement>) => {
    e.preventDefault()

    if (value.length > 1) {
      addTodo({ sectionId, sectionName, value, id: uId(), done: false })
      setValue('')
    }
  }

  const handleChange = (e: InputProcess<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel
        value={value}
        id={sectionName + sectionId}
        autoComplete={'off'}
        label={'todo...'}
        onChange={handleChange}
      />
    </form>
  )
}
