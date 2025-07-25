type ToggleType = {
  handleClick: () => void
  text: string
  classname: string
}

export const ToggleBtn = ({ handleClick, text, classname }: ToggleType) => (
  <button
    onClick={handleClick}
    className={`px-3 py-1 rounded-md border transition duration-500 ${classname}`}
  >
    {text}
  </button>
)
