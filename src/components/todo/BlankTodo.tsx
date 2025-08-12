'use client'
import { InputProcess } from '@/types/process'
import { useState } from 'react'
import { useStoreTodo } from '@/store/todo'
import { InputLabel } from '@/shared/InputLabel'
import { useUId } from '@/hooks/useUid'
import { parsedValue } from '@/utils/index'

type SectionsType = {
  sectionId: string
  sectionName: string
}

type InitInput = {
  value: string
  error: string | null
}

const initInput: InitInput = {
  value: '',
  error: null,
}

export function BlankTodo({ sectionId, sectionName }: SectionsType) {
  const [field, setField] = useState<InitInput>(initInput)
  const { addTodo } = useStoreTodo()
  const uId = useUId()

  const handleSubmit = (e: InputProcess<HTMLFormElement>) => {
    e.preventDefault()

    const { success, error } = parsedValue(field.value)

    if (success) {
      addTodo({ sectionId, name: field.value, id: uId(), done: false })
      setField(initInput)
    } else if (error) {
      setField((prev) => ({ ...prev, error }))
    }
  }

  const handleChange = (e: InputProcess<HTMLInputElement>): void => {
    const { value } = e.target
    const { success } = parsedValue(value)

    if (!success) {
      setField((prev) => ({ ...prev, value: value }))
    } else {
      setField({ error: null, value: value })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputLabel
        value={field.value}
        id={sectionName + sectionId}
        autoComplete={'off'}
        error={field.error}
        label={'todo...'}
        onChange={handleChange}
      />
    </form>
  )
}
