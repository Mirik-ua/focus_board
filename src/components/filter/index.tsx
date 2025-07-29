import { BlueButton } from '@/shared/BlueButton'
import { Filter } from 'lucide-react'
import { useState } from 'react'
import { AnimateFilter } from './AnimateFilter'
import { useStoreTodo } from '@/store/todo'

export function FilterSection() {
  const [showFilter, setShowFilter] = useState(false)

  const { activeFilter, updateFilter } = useStoreTodo()

  const handleShowFilter = () => setShowFilter((prev) => !prev)

  return (
    <div className="flex items-center gap-4 relative ">
      <BlueButton props={{ onClick: handleShowFilter }}>
        <Filter className="w-5 h-5" />
      </BlueButton>
      <AnimateFilter
        showFilter={showFilter}
        activeFilter={activeFilter}
        onChange={updateFilter}
      />
    </div>
  )
}
