import { CustomPopover } from '@/shared/Popover'
import { EllipsisVertical } from 'lucide-react'
import { Trash } from 'lucide-react'

type Props = { id: string; sectionId: string }

export const TodoAction = ({ sectionId, id }: Props) => {
  return (
    <CustomPopover
      Content={<TodoActionsContent sectionId={sectionId} id={id} />}
      contentClassName={contentClassName}
    >
      <EllipsisVertical className="hover:bg-foreground/50 transition-all duration-500 rounded-xl" />
    </CustomPopover>
  )
}

const TodoActionsContent = ({ id, sectionId }: Props) => {
  return (
    <div
      className="flex gap-2 hover:bg-red-500 p-2 cursor-pointer rounded-xs"
      data-id={id}
      data-section-id={sectionId}
      data-element={'delete'}
    >
      <Trash />
      <span>Delete</span>
    </div>
  )
}

const contentClassName = 'w-max flex flex-col gap-4 p-2'
