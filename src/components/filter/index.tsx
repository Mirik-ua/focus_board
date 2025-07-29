import { BlueButton } from '@/shared/BlueButton'
import { Filter } from 'lucide-react'
import { useState } from 'react'
import { AnimateFilter } from './AnimateFilter'

export function FilterSection() {
  const [showFilter, setShowFilter] = useState(false)

  const handleShowFilter = () => setShowFilter((prev) => !prev)

  return (
    <div className="flex items-center gap-4 relative ">
      <BlueButton props={{ onClick: handleShowFilter }}>
        <Filter className="w-5 h-5" />
      </BlueButton>
      <AnimateFilter showFilter={showFilter} />
    </div>
  )
}
