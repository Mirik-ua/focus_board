'use client'

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'
import { restrictToParentElement } from '@dnd-kit/modifiers'
import { SortableItem } from './SortableItem'
import { SectionType } from '@/types/todo'

type Props = {
  sections: SectionType[]
  updateSectionIndex: (sections: SectionType[]) => void
}

export function SectionDnD({ sections, updateSectionIndex }: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  )

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={({ active, over }) => {
        if (active.id !== over?.id) {
          const oldIndex = sections.findIndex((s) => s.id === active.id)
          const newIndex = sections.findIndex((s) => s.id === over?.id)
          updateSectionIndex(arrayMove(sections, oldIndex, newIndex))
        }
      }}
      sensors={sensors}
      modifiers={[restrictToParentElement]}
    >
      <SortableContext
        items={sections.map((s) => s.id)}
        strategy={horizontalListSortingStrategy}
      >
        {sections.map((section) => (
          <SortableItem key={section.id} section={section} />
        ))}
      </SortableContext>
    </DndContext>
  )
}
