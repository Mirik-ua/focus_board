import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { InputProcess } from '@/types/process'

type InputLabelType = {
  value: string
  onChange: (e: InputProcess<HTMLInputElement>) => void
  label: string
  id: string
  placeholder?: string
  error?: string | null
  props?: object
} & React.InputHTMLAttributes<HTMLInputElement>

export function InputLabel({
  value,
  id,
  onChange,
  placeholder = ' ',
  label,
  error,
  props,
}: InputLabelType) {
  return (
    <div className="relative w-full max-w-md">
      <Input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
        className={cn(
          'peer h-12 w-full rounded-xl border border-neutral-700 bg-background px-4 pt-5 pb-2 text-sm dark:text-white shadow-inner',
          'placeholder:text-white-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500'
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          'pointer-events-none absolute left-4 top-2 text-xs text-muted-foreground transition-all',
          'peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-muted-foreground',
          'peer-focus:top-2 peer-focus:text-xs peer-focus:text-purple-500'
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
