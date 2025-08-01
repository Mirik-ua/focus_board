import { X } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

type Props = {
  popover?: boolean
  sectionName?: string
  onDelete: () => Promise<void>
}

export function AlertPopover({ sectionName, onDelete }: Props) {
  const [open, setOpen] = useState(false)

  const handleOpenChange = () => setOpen(!open)

  const handleDelete = async (): Promise<void> => {
    await onDelete()
    handleOpenChange()
  }

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger>
        <X className="w-5 h-5 cursor-pointer transition-transform hover:rotate-220" />
      </PopoverTrigger>
      <PopoverContent>
        <h3 className={'font-bold break-words pb-4'}>
          Are u sure u wanna remove {sectionName} section?
        </h3>
        <div className="border-t-2 pt-4 flex items-center justify-between border-white">
          <Button
            className="px-4 py-2 rounded-lg border border-white/10 dark:bg-white/5 bg-black/30 text-white dark:hover:bg-white/10 hover:bg-black/50 transition"
            onClick={handleOpenChange}
          >
            Cancel
          </Button>
          <Button
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition shadow-md"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
