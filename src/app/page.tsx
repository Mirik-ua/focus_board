'use client'
import { FilterSection } from '@/components/filter'
import { BlankSection } from '@/components/todo/BlankSection'
import { SectionBlock } from '@/components/todo/SectionBlock'
import UserDialog from '@/components/user/index'
import { useColors } from '@/hooks/useColor'
import { useStoreTodo } from '@/store/todo'
import { SectionDnD } from '@/components/dnd'

export default function TodoList() {
  const { sections, updateSectionIndex } = useStoreTodo()
  const color = useColors()

  return (
    <div
      className="flex font-sans pt-20 gap-16 overflow-x-scroll pb-6"
      style={{
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
      }}
    >
      <UserDialog />
      <main className="flex flex-col gap-[16px] px-6">
        <FilterSection />
        <div className="flex gap-[32px]">
          {sections && (
            <SectionDnD
              sections={sections}
              updateSectionIndex={updateSectionIndex}
            />
          )}
          <SectionBlock color={color}>
            <div className="overflow-y-auto">
              {<BlankSection color={color} />}
            </div>
          </SectionBlock>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
