import { X } from 'lucide-react'
import { AlertPopover } from '@/shared/AlertPopover'

type Props = {
  popover?: boolean
  sectionName?: string
  onDelete: () => Promise<void>
}

export function RemoveX({ popover = false, sectionName, onDelete }: Props) {
  return popover ? (
    <AlertPopover onDelete={onDelete} sectionName={sectionName} />
  ) : (
    <X className="w-5 h-5 cursor-pointer transition-transform hover:rotate-220" />
  )
}
