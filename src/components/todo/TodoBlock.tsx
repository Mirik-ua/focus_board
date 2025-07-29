import { Checkbox } from '@/components/ui/checkbox'

type Props = {
  name: string
  id: string
  done: boolean
  handleChange: (id: string) => void
}

export function TodoBlock({ name, id, done, handleChange }: Props) {
  return (
    <div
      className="rounded-lg px-4 py-3 text-foreground border transition-colors
                   border-white/80 
                    duration-200 ease-in-out cursor-pointer
                    hover:scale-[1.02]
                    hover:shadow-[0_4px_12px_rgba(255,255,255,0.15)]
                    hover:bg-white/10 
                    dark:border-black/80 dark:hover:bg-black/10"
      style={{
        borderColor: `rgba(var(--muted-foreground), 0.1)`,
        transition: 'background-color 0.6s ease',
      }}
    >
      <div id={id} className="flex items-center gap-2">
        <Checkbox checked={done} onCheckedChange={() => handleChange(id)} />
        <span className="text-sm">{name}</span>
      </div>
    </div>
  )
}
