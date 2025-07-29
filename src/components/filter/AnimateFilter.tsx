import mock from '@/mocks/todo.json'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  showFilter: boolean
}

export const AnimateFilter = ({ showFilter }: Props) => (
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
          <div
            key={i}
            className="cursor-pointer px-3 py-1 rounded-md border border-white/20 hover:bg-white/10 transition"
          >
            <span>{i}</span>
          </div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
)
