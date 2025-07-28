'use client'
import { BlankSection } from '@/components/todo/BlankSection'
import { SectionBlock } from '@/components/todo/SectionBlock'
import { SectionTodo } from '@/components/todo/SectionTodo'
import UserDialogWrapper from '@/components/user/index'
import { useColors } from '@/hooks/useColor'
import { useStoreTodo } from '@/store/todo'
import { SectionType } from '@/types/todo'

export default function TodoList() {
  const { sections } = useStoreTodo()
  const color = useColors()

  return (
    <div
      className="flex font-sans pt-20 gap-16 overflow-x-scroll pb-6"
      style={{
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
      }}
    >
      <UserDialogWrapper />
      <main className="flex gap-[32px] px-6">
        {sections.length
          ? sections.map((s: SectionType) => (
              <SectionBlock key={s.id} color={s.color}>
                <SectionTodo section={s} />
              </SectionBlock>
            ))
          : null}
        <SectionBlock color={color}>
          <div className="overflow-y-auto">
            {<BlankSection color={color} />}
          </div>
        </SectionBlock>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
