import { BlankSection } from './BlankSection'

export function SectionWrap() {
  return (
    <div
      className="min-w-[280px] overflow-hidden p-2 h-max rounded-2xl
        shadow-md bg-muted/50 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="overflow-y-auto">
        <BlankSection />
      </div>
    </div>
  )
}
