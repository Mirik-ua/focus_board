import { SectionType } from '@/types/todo'
import { BlankTodo } from './BlankTodo'
import { TodoBlock } from './TodoBlock'

export function SectionTodo({ section }: { section: SectionType }) {
  return (
    <div>
      <div className="border-b-1 border-gray-200 pb-4">
        <h3 className={'font-bold break-words'}>{section.name}</h3>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {section.todos.length
          ? section.todos.map((s) => <TodoBlock key={s.id} {...s} />)
          : null}
        <BlankTodo sectionId={section.id} sectionName={section.name} />
      </div>
    </div>
  )
}
