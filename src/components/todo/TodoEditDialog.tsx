import { memo, useEffect, useState } from 'react'
import { TodoEditMode } from '@/types/todo'
import { InputLabel } from '@/shared/InputLabel'
import { InputProcess } from '@/types/process'
import { inputValidation } from '../user'
import { UserField } from '@/types/user'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@radix-ui/react-dialog'

type Props = {
  active: boolean
  editTodo: TodoEditMode
  onClose: () => void
  onSubmit: (data: TodoEditMode) => void
}

const initField = {
  error: null,
  name: '',
}

export const TodoEditDialog = memo(function TodoEditDialog({
  active,
  editTodo,
  onClose,
  onSubmit,
}: Props) {
  const [field, setField] = useState<UserField>({
    error: null,
    name: editTodo.value ?? '',
  })

  useEffect(() => {
    setField({ name: editTodo.value, error: null })
  }, [editTodo.value])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValidation(field.name)) {
      setField((prev) => {
        return { ...prev, error: 'Please fulfill todo name' }
      })
      return
    }
    if (field.name.trim() === editTodo.value.trim()) {
      return
    }
    onSubmit({ ...editTodo, value: field.name })
    setField(initField)
  }

  const handleChange = (e: InputProcess<HTMLInputElement>) => {
    const val = e.target.value
    setField((prev) => {
      if (inputValidation(field.name)) {
        return { error: null, name: val }
      } else {
        return { ...prev, name: val }
      }
    })
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    active && (
      <Dialog open={active} modal>
        <DialogContent
          className="p-0 bg-transparent border-none shadow-none"
          asChild
        >
          <div className="absolute z-50 top-[15vh] left-1/2 -translate-x-1/2 w-[90vw] max-w-md rounded-2xl bg-zinc-900 border border-white/10 p-6 shadow-xl backdrop-blur-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <DialogTitle className="text-xl font-bold text-white">
                  Make your changes below
                </DialogTitle>
                <DialogDescription className="text-sm text-zinc-400">
                  {editTodo.value}
                </DialogDescription>
              </div>

              <InputLabel
                value={field.name}
                onChange={handleChange}
                label="Todo Editing…"
                error={field.error}
                id="edit_todo_input"
              />

              <div className="flex justify-between gap-3 pt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  className="bg-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-zinc-700 transition"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-lime-500 text-black px-4 py-2 rounded-lg font-semibold hover:brightness-110 transition"
                >
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    )
  )
})
