import { FilterTypes } from '@/types/todo'

type Props = {
  filterName: FilterTypes
  onChange: (i: FilterTypes) => void
  activeFilter: FilterTypes
}

export const FilterText = ({ activeFilter, onChange, filterName }: Props) => (
  <div
    onClick={() => onChange(filterName)}
    className={`cursor-pointer px-3 py-1 rounded-md border border-foreground/20 hover:bg-foreground/10 transition text-sm capitalize ${
      activeFilter === filterName
        ? 'text-[#3b82f6] underline underline-offset-4'
        : 'text-foreground/80 hover:text-foreground'
    }`}
  >
    <span>{filterName}</span>
  </div>
)
