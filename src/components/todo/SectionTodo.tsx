import { SectionType } from '@/types/todo'
import { BlankTodo } from './BlankTodo'
import { TodoBlock } from './TodoBlock'
import { useStoreTodo } from '@/store/todo'
import { RemoveX } from '../../shared/RemoveX'

const STATIC_BLOCK_HEIGHT = '100vh - 340px'

export function SectionTodo({ section }: { section: SectionType }) {
  const { updateTodoCheckbox, deleteSection } = useStoreTodo()

  const handleChange = (id: string) => updateTodoCheckbox(section.id, id)

  const handleDelete = (): Promise<void> => {
    deleteSection(section.id)
    return Promise.resolve()
  }

  return (
    <div>
      <div
        className="border-b-1 flex items-center justify-between border-gray-200
                      sticky top-0 bg-background p-4"
      >
        <h3 className={'font-bold break-words'}>{section.name}</h3>
        <RemoveX
          popover={true}
          sectionName={section.name}
          onDelete={handleDelete}
        />
      </div>
      <div
        className="flex py-4 px-4 max-h-fit flex-col gap-4 overflow-y-scroll"
        style={{ maxHeight: `calc(${STATIC_BLOCK_HEIGHT})` }}
      >
        {section.todos.length
          ? section.todos.map((s) => (
              <TodoBlock handleChange={handleChange} key={s.id} {...s} />
            ))
          : null}
        <BlankTodo sectionId={section.id} sectionName={section.name} />
      </div>
    </div>
  )
}
