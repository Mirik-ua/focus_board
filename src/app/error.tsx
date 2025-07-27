'use client'

import { AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStoreTodo } from '@/store/todo'

interface ErrorProps {
  error?: Error
  reset?: () => void
  message?: string
}

export default function Error({ error, message }: ErrorProps) {
  const reset = () => {
    useStoreTodo.setState({ sections: [] })
    localStorage.clear()
    sessionStorage.clear()
    window.location.pathname = '/'
  }

  return (
    <div className="flex flex-col pt-6 items-center justify-center p-6 text-center text-destructive">
      <AlertTriangle className="w-10 h-10 mt-12 mb-4" />
      <h2 className="text-lg font-semibold">Opps… something went wrong</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm">
        {message ?? error?.message ?? 'Щось пішло не так. Спробуйте ще раз.'}
      </p>

      {reset && (
        <Button onClick={() => reset()} className="mt-4" variant="destructive">
          Reset
        </Button>
      )}
    </div>
  )
}
