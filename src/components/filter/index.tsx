import { BlueButton } from '@/shared/BlueButton'
import { Filter } from 'lucide-react'
import { memo, useCallback, useMemo, useState } from 'react'
import { AnimateFilter } from './AnimateFilter'
import { useStoreTodo } from '@/store/todo'

export const FilterSection = memo(function FilterSection() {
  const [showFilter, setShowFilter] = useState(false)

  const activeFilter = useStoreTodo((s) => s.activeFilter)
  const updateFilter = useStoreTodo((s) => s.updateFilter)

  const handleShowFilter = useCallback(() => setShowFilter((prev) => !prev), [])

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
})
