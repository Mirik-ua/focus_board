import { CustomPopover } from '@/shared/Popover'
import { EllipsisVertical } from 'lucide-react'
import { Trash } from 'lucide-react'
import { Edit } from 'lucide-react'
import { ReactNode } from 'react'

type Props = { id: string; sectionId: string }

type TodoActionType = Props & {
  icon: ReactNode
  label: string
  dataElement: string
  className?: string
}

export const TodoAction = ({ sectionId, id }: Props) => {
  return (
    <CustomPopover
      Content={[
        <TodoActionsContent
          key="delete_todo"
          sectionId={sectionId}
          icon={<Trash />}
          id={id}
          label={'Delete'}
          dataElement={'delete'}
          className="hover:bg-red-500"
        />,
        <TodoActionsContent
          key="edit_todo"
          sectionId={sectionId}
          icon={<Edit />}
          id={id}
          label={'Edit'}
          dataElement={'edit'}
          className="hover:bg-foreground/20"
        />,
      ]}
      contentClassName={'w-max flex flex-col gap-4 p-2'}
    >
      <EllipsisVertical className="hover:bg-foreground/50 transition-all duration-500 rounded-xl" />
    </CustomPopover>
  )
}

const TodoActionsContent = ({
  id,
  sectionId,
  icon,
  dataElement,
  label,
  className,
}: TodoActionType) => {
  return (
    <div
      className={`flex gap-2 p-2 cursor-pointer rounded-xs ${className}`}
      data-id={id}
      data-section-id={sectionId}
      data-element={dataElement}
    >
      {icon}
      <span>{label}</span>
    </div>
  )
}
