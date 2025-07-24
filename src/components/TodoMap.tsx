import { TodoMapType } from '@/types/todo'

export const TodoMap = ({
  label,
  completed,
  id,
  handleChange,
}: TodoMapType) => (
  <div className="flex">
    <p>{label}</p>
    <input
      type="checkbox"
      onChange={() => handleChange(id)}
      checked={completed}
    />
  </div>
)
