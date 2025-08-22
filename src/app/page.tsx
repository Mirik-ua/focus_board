'use client'
import { FilterSection } from '@/components/filter'
import { BlankSection } from '@/components/todo/BlankSection'
import { SectionBlock } from '@/components/todo/SectionBlock'
import UserDialog from '@/components/user/index'
import { useColors } from '@/hooks/useColor'
import { useStoreTodo } from '@/store/todo'
import { SectionDnD } from '@/components/dnd'
import { TodoEvent } from '@/types/todo'
import { MouseEvent, useEffect } from 'react'
import { TodoEditDialog } from '@/components/todo/TodoEditDialog'

async function getTodos() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
    cache: 'no-store',
  })
  return await res.json()
}

// async function createTodos() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`, {
//     cache: 'no-store',
//     method: 'POST',
//     body: JSON.stringify({
//       section: 'first section',
//     }),
//   })
//   return res.json()
// }

export default function TodoList() {
  const {
    sections,
    updateSectionIndex,
    deleteTodo,
    editModeOff,
    editModeOn,
    todoEditMode,
    editModeSubmit,
  } = useStoreTodo()
  const color = useColors()

  async function loadTodos() {
    const todos = await getTodos()
    console.log(todos)
  }

  useEffect(() => {
    loadTodos()
  }, [])

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    const item = target.closest('[data-id]')
    if (!item) {
      return
    }

    const getElement = item.getAttribute('data-element')
    const getId = item.getAttribute('data-id')

    switch (getElement) {
      case TodoEvent.delete: {
        const getSectionId = item.getAttribute('data-section-id')
        if (getSectionId && getId) return deleteTodo(getSectionId, getId)
      }
      case TodoEvent.edit: {
        const getSectionId = item.getAttribute('data-section-id')
        if (getSectionId && getId) {
          return editModeOn({
            sectionId: getSectionId,
            todoId: getId,
            active: true,
          })
        }
      }
    }
  }

  const handleDoubleClick = (e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return

    const { target } = e

    const validationDbClick =
      target.tagName.toLowerCase() !== 'svg' &&
      target.tagName.toLowerCase() !== 'button'

    if (validationDbClick) {
      const item = target.closest('[data-todo-id]')

      if (!item) return

      const sectionId = item.getAttribute('data-section-id')
      const todoId = item.getAttribute('data-todo-id')

      if (sectionId && todoId) {
        return editModeOn({
          sectionId,
          todoId,
          active: true,
        })
      }
    }
  }

  return (
    <div
      className="flex font-sans pt-20 gap-16 overflow-x-scroll pb-6"
      style={{
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
      }}
    >
      <UserDialog />
      <TodoEditDialog
        onClose={editModeOff}
        onSubmit={editModeSubmit}
        active={todoEditMode.active}
        editTodo={todoEditMode}
      />
      <main className="flex flex-col gap-[16px] px-6">
        <FilterSection />
        <div
          className="flex gap-[32px]"
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        >
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
