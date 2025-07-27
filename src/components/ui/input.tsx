import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({
  className,
  type = 'text',
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'bg-background text-foreground placeholder:text-muted-foreground',
        'file:text-foreground selection:bg-primary selection:text-primary-foreground',

        'file:bg-transparent file:border-0 file:inline-flex file:h-7 file:text-sm file:font-medium',

        'flex h-9 w-full min-w-0 rounded-md border border-input px-3 py-1 text-base shadow-xs outline-none md:text-sm',

        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',

        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Input }
