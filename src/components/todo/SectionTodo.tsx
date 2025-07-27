import { SectionType } from '@/types/todo'
import { BlankTodo } from './BlankTodo'

export function SectionTodo({ section }: { section: SectionType }) {
  return (
    <div>
      <div className="border-b-1 border-gray-200 pb-4">
        <h3 className={'font-bold break-words'}>{section.name}</h3>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {section.todos.length
          ? section.todos.map((i) => {
              return (
                <div
                  key={i.id}
                  className="rounded-lg px-4 py-3 text-foreground border transition-colors
                   border-white/80 
                    duration-200 ease-in-out cursor-pointer
                    hover:scale-[1.02]
                    hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]
                    hover:bg-white/10 
                    dark:border-black/80 dark:hover:bg-black/10"
                  style={{
                    borderColor: `rgba(var(--muted-foreground), 0.1)`,
                    transition: 'background-color 0.6s ease',
                  }}
                >
                  {i.name}
                </div>
              )
            })
          : null}
        <BlankTodo sectionId={section.id} sectionName={section.name} />
      </div>
    </div>
  )
}
