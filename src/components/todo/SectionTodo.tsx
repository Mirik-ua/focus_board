import { FilterTypes, SectionType } from '@/types/todo'
import { BlankTodo } from './BlankTodo'
import { TodoBlock } from './TodoBlock'
import { useStoreTodo } from '@/store/todo'
import { RemoveX } from '../../shared/RemoveX'

const STATIC_BLOCK_HEIGHT = '100vh - 340px'

export function SectionTodo({ section }: { section: SectionType }) {
  const { updateTodoCheckbox, deleteSection, activeFilter } = useStoreTodo()

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
              <MapTodo
                key={s.id}
                activeFilter={activeFilter}
                handleChange={handleChange}
                done={s.done}
                name={s.name}
                id={s.id}
              />
            ))
          : null}
        <BlankTodo sectionId={section.id} sectionName={section.name} />
      </div>
    </div>
  )
}

type Props = {
  activeFilter: FilterTypes
  handleChange: (id: string) => void
  done: boolean
  name: string
  id: string
}

const MapTodo = ({ activeFilter, handleChange, done, id, name }: Props) => {
  switch (activeFilter) {
    case 'active': {
      return !done ? (
        <TodoBlock
          handleChange={handleChange}
          done={done}
          name={name}
          id={id}
        />
      ) : null
    }
    case 'completed': {
      return done ? (
        <TodoBlock
          handleChange={handleChange}
          done={done}
          name={name}
          id={id}
        />
      ) : null
    }
    default:
      return (
        <TodoBlock
          handleChange={handleChange}
          done={done}
          name={name}
          id={id}
        />
      )
  }
}
