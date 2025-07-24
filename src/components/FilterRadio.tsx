import { memo } from 'react'
import { FilterCheckboxType } from '@/types/todo'

export const FilterRadio = memo(function FilterCheckbox({
  handleChangeRadio,
  name,
  activeValue,
}: FilterCheckboxType) {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type="radio"
        onChange={() => handleChangeRadio(name)}
        checked={name === activeValue}
      />
    </div>
  )
})
