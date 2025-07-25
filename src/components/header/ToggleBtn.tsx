export const ToggleBtn = ({
  handleClick,
  text,
  classname,
}: any & { classname?: string }) => (
  <button
    onClick={handleClick}
    className={`px-3 py-1 rounded-md border transition duration-500 ${classname}`}
  >
    {text}
  </button>
)
