'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { JSX } from 'react'

type Props = {
  open?: boolean
  showTrigger?: boolean
  trigger?: JSX.Element | string
  showCloseButton: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInteractOutside: ((e: any) => void) | undefined

  headerDescription: string
  headerText: string
  Main: React.ReactNode

  onOpenChange: (open: boolean) => void
}

export function UserDialogWrapper({
  open,
  showCloseButton,
  showTrigger,
  headerText,
  headerDescription,

  Main,
  onOpenChange,
  onInteractOutside,
}: Props) {
  return (
    <Dialog modal={true} open={open} onOpenChange={onOpenChange}>
      {showTrigger ? (
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
      ) : null}
      <DialogContent
        showCloseButton={showCloseButton}
        className="sm:max-w-[425px]"
        onInteractOutside={onInteractOutside}
      >
        <DialogHeader>
          <DialogTitle>{headerText}</DialogTitle>
          <DialogDescription>{headerDescription}</DialogDescription>
        </DialogHeader>
        {Main}
      </DialogContent>
    </Dialog>
  )
}
