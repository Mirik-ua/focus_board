import mock from '@/mocks/todo.json'
import { FilterTypes } from '@/types/todo'
import { motion, AnimatePresence } from 'framer-motion'
import { FilterText } from './FilterText'

type Props = {
  showFilter: boolean
  activeFilter: FilterTypes
  onChange: (filter: FilterTypes) => void
}

export const AnimateFilter = ({
  showFilter,
  activeFilter,
  onChange,
}: Props) => (
  <AnimatePresence>
    {showFilter && (
      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -120, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center gap-2 absolute left-14"
      >
        {mock.todoFilters.map((i) => (
          <FilterText
            key={i}
            onChange={onChange}
            activeFilter={activeFilter}
            filterName={i as FilterTypes}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
)
