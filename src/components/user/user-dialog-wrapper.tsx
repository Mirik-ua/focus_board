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

  headerDescription: string
  headerText: string
  Main: React.ReactNode

  onOpenChange: (open: boolean) => void
}

export function UserDialogWrapper({
  open,
  onOpenChange,
  showTrigger,
  headerText,
  headerDescription,
  Main,
}: Props) {
  return (
    <Dialog modal={true} open={open} onOpenChange={onOpenChange}>
      {showTrigger ? (
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
      ) : null}
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => e.preventDefault()}
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
