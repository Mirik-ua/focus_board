'use client'
import { BlankSection } from '@/components/todo/BlankSection'
import { SectionBlock } from '@/components/todo/SectionBlock'
import { SectionTodo } from '@/components/todo/SectionTodo'
import { useStoreTodo } from '@/store/todo'
import { SectionType } from '@/types/todo'

export default function TodoList() {
  const { sections } = useStoreTodo()
  return (
    <div
      className="flex font-sans  pt-20  px-6 gap-16  pb-6"
      style={{
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
      }}
    >
      <main className="flex overflow-x-scroll gap-[32px] ">
        {sections.length
          ? sections.map((s: SectionType) => (
              <SectionBlock key={s.id}>
                <SectionTodo section={s} />
              </SectionBlock>
            ))
          : null}
        <SectionBlock>
          <div className="overflow-y-auto">{<BlankSection />}</div>
        </SectionBlock>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
