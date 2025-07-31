import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { SectionTodo } from '../todo/SectionTodo'
import { SectionType } from '@/types/todo'

type Props = {
  section: SectionType
}

export function SortableItem({ section }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: section.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`min-w-[280px] overflow-hidden max-w-[min-content] rounded-2xl
                  shadow-md h-auto max-h-fit relative cursor-grab
                  ease-[cubic-bezier(0.22,1,0.36,1)]`}
      style={{
        ...style,
        border: `2px solid ${section.color}`,
        boxShadow: `0 6px 12px -2px ${section.color}`,
      }}
    >
      <SectionTodo section={section} />
    </div>
  )
}
