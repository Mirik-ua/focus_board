import { UserDialogWrapper } from './user-dialog-wrapper'
import { useStoreUser } from '@/store/user'
import { useEffect, useId, useMemo, useState } from 'react'
import { UserField } from '@/types/user'
import { InputProcess } from '@/types/process'
import { UserDialogMain } from './user-dialog-main'

const initialField = {
  name: '',
  error: null,
}

const inputValidation = (val: string) => val.length > 2

export default function UserDialog() {
  const { user, mode, isPopShow, setUser, setMode, togglePopover } =
    useStoreUser()

  const [mount, setMount] = useState<boolean>(false)
  const [field, setField] = useState<UserField>(initialField)

  const uId = useId()

  useEffect(() => {
    setMount(true)
  }, [])

  useEffect(() => {
    if (isPopShow && user?.name) {
      setField({ error: null, name: user.name })
    }
  }, [isPopShow, user])

  useEffect(() => {
    if (mount) {
      if (!user?.id) {
        togglePopover(true)
        setMode('create')
      }
    }
  }, [mount, user])

  const handlePopChange = (): void => togglePopover(!isPopShow)

  const handleFieldChange = (e: InputProcess<HTMLInputElement>): void => {
    const { value } = e.target
    setField((prev) => {
      if (value.length > 2) {
        return { error: null, name: value }
      } else {
        return { ...prev, name: value }
      }
    })
  }

  const handleSubmit = (e: InputProcess<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputValidation(field.name)) {
      setField((prev) => {
        return { ...prev, error: 'Please fulfill your name' }
      })
      return
    }

    setUser({ name: field.name, id: uId.toString(), avatar: null })
    resetState()
  }

  const resetState = () => {
    togglePopover(false)
    setMount(false)
    setMode(null)
    setField(initialField)
  }

  const getHeaderText = useMemo(() => {
    switch (mode) {
      case 'create': {
        return 'And who’s to blame today?'
      }
      case 'edit': {
        return 'Edit your name'
      }
      default:
        return ' '
    }
  }, [mode])

  const getDescriptionText = useMemo(() => {
    switch (mode) {
      case 'create': {
        return `Enter your name so we know who to ping when nothing's done.`
      }
      default:
        return ' '
    }
  }, [mode])

  return (
    <form onSubmit={handleSubmit} className="absolute">
      <UserDialogWrapper
        open={isPopShow}
        showTrigger={false}
        showCloseButton={mode === 'edit'}
        onInteractOutside={
          mode === 'create' ? (e) => e.preventDefault() : undefined
        }
        onOpenChange={handlePopChange}
        headerText={getHeaderText}
        headerDescription={getDescriptionText}
        Main={
          <UserDialogMain
            onSubmit={handleSubmit}
            onChange={handleFieldChange}
            data={{ name: field.name, error: field.error }}
          />
        }
      />
    </form>
  )
}
