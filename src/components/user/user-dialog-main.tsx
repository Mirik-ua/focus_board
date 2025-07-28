import { InputLabel } from '@/shared/InputLabel'
import { Button } from '../ui/button'
import { UserField } from '@/types/user'
import { InputProcess } from '@/types/process'

type DialogContentType = {
  onChange: (e: InputProcess<HTMLInputElement>) => void
  data: UserField
}

type DialogContentWrapperType = {
  onSubmit: (e: InputProcess<HTMLFormElement>) => void
} & DialogContentType

function DialogContent({ onChange, data }: DialogContentType) {
  return (
    <InputLabel
      onChange={onChange}
      value={data.name}
      error={data.error}
      label={'Type your name'}
      id={'user_name'}
      maxLength={15}
    />
  )
}

function FooterContent() {
  return (
    <div className="pt-4 flex items-center justify-self-end">
      <Button
        type={'submit'}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-green-600 text-black hover:from-lime-600 hover:to-green-700 transition shadow-lg"
      >
        Apply
      </Button>
    </div>
  )
}

export function UserDialogMain({
  onSubmit,
  onChange,
  data,
}: DialogContentWrapperType) {
  return (
    <form onSubmit={onSubmit}>
      <DialogContent onChange={onChange} data={data} />
      <FooterContent />
    </form>
  )
}
