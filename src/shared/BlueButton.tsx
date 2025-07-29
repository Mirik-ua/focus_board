import { Button } from '@/components/ui/button'

type Props = {
  props: object
  children: React.ReactNode | string
}

export const BlueButton = ({ props, children }: Props) => {
  return (
    <Button
      className="rounded-xl border border-white/10 hover:border-[#3b82f6]/30 bg-black/60 text-white hover:text-[#3b82f6] shadow-[0_0_8px_#3b82f6] hover:shadow-[0_0_12px_#3b82f6] transition"
      {...props}
    >
      {children}
    </Button>
  )
}
