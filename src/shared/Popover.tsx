import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ReactNode, ComponentType } from 'react'

type Props = {
  children: ReactNode
  Content: ReactNode
  contentClassName: string
}

export function CustomPopover({ children, Content, contentClassName }: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className={contentClassName}>{Content}</PopoverContent>
    </Popover>
  )
}
