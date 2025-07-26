import { SectionWrap } from '@/components/todo/SectionWrap'

export default function TodoList() {
  return (
    <div
      className="flex font-sans  pt-20  px-6 gap-16  pb-6"
      style={{
        height: 'calc(100vh - 100px)',
        maxHeight: 'calc(100vh - 100px)',
      }}
    >
      <main className="flex overflow-x-scroll gap-[32px] ">
        <SectionWrap />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  )
}
