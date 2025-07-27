'use client'
import { InputLabel } from '@/shared/InputLabel'
import { InputProcess } from '@/types/process'
import { useState } from 'react'
import { useStoreTodo } from '@/store/todo'
import { useUId } from '@/hooks/useUid'

type FieldType = {
  value: string
  error: null | string
}

type PropsType = {
  color: string
}

const initialField = { value: '', error: null }

export function BlankSection({ color }: PropsType) {
  const [field, setField] = useState<FieldType>(initialField)
  const { addSection } = useStoreTodo()
  const uId = useUId()

  const handleSubmit = (e: InputProcess<HTMLFormElement>) => {
    e.preventDefault()

    if (field.value.length <= 2) {
      setField((prev) => ({ ...prev, error: 'min length is 3 characters' }))
      return
    }

    const firstInput = e.currentTarget.elements[0] as HTMLInputElement

    firstInput.blur()

    setField(initialField)
    addSection({ color, id: uId, name: field.value, todos: [] })
  }

  const handleChange = (e: InputProcess<HTMLInputElement>): void => {
    const { value } = e.target
    setField((prev) => {
      if (value.length > 2) {
        return { error: null, value }
      }
      return { ...prev, value }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 ">
      <InputLabel
        value={field.value}
        error={field.error}
        id={'table'}
        autoComplete={'off'}
        label={'Section Name'}
        onChange={handleChange}
      />
    </form>
  )
}
