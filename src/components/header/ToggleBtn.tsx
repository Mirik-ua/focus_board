import { Button } from '../ui/button'

type ToggleType = {
  handleClick: () => void
  text: string
  classname: string
}

export const ToggleBtn = ({ handleClick, text, classname }: ToggleType) => (
  <Button
    onClick={handleClick}
    className={`py-2 px-4 rounded-xl border border-white/10 hover:border-[#3b82f6]/30 bg-black/60 text-white hover:text-[#3b82f6] shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] transition ${classname}`}
  >
    {text}
  </Button>
)
