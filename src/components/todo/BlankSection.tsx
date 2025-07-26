'use client'
import { InputLabel } from '@/shared/InputLabel'
import { InputProcess } from '@/types/process'
import { useState } from 'react'

type FieldType = {
  value: string
  error: null | string
}

const initialField = { value: '', error: null }

export function BlankSection() {
  const [field, setField] = useState<FieldType>(initialField)

  const handleSubmit = (e: InputProcess<HTMLFormElement>) => {
    e.preventDefault()

    if (field.value.length <= 2) {
      setField((prev) => ({ ...prev, error: 'min length is 3 characters' }))
      return
    }

    setField(initialField)
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
    <form onSubmit={handleSubmit} className="p-2">
      <InputLabel
        value={field.value}
        error={field.error}
        id={'table'}
        label={'Table Name'}
        onChange={handleChange}
      />
    </form>
  )
}
