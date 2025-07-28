import { UserDialogWrapper } from './user-dialog-wrapper'
import { useStoreUser } from '@/store/user'
import { useEffect, useId, useState } from 'react'
import { UserField } from '@/types/user'
import { InputProcess } from '@/types/process'
import { UserDialogMain } from './user-dialog-main'

const initialField = {
  name: '',
  error: null,
}

const inputValidation = (val: string) => val.length > 2

export default function UserDialog() {
  const [popUser, setPopUser] = useState<boolean>(false)
  const [mount, setMount] = useState<boolean>(false)
  const [field, setField] = useState<UserField>(initialField)

  const { user, setUser } = useStoreUser()
  const uId = useId()

  useEffect(() => {
    setMount(true)
    return () => resetState()
  }, [mount])

  useEffect(() => {
    if (mount) {
      if (!user?.id) {
        setPopUser(true)
      }
    }
  }, [mount, user])

  const handlePopChange = (): void => setPopUser((prev) => !prev)

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

    console.log(field.name)
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
    setPopUser(false)
    setMount(false)
    setField(initialField)
  }

  return (
    popUser && (
      <form onSubmit={handleSubmit} className="absolute">
        <UserDialogWrapper
          open={popUser}
          showTrigger={false}
          onOpenChange={handlePopChange}
          headerText={`And who’s to blame today?`}
          headerDescription={`Enter your name so we know who to ping when nothing's done.`}
          Main={
            <UserDialogMain
              onSubmit={handleSubmit}
              onChange={handleFieldChange}
              data={{ name: field.name, error: field.error }}
            />
          }
          trigger={''}
        />
      </form>
    )
  )
}
