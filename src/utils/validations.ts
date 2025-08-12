import z from "zod"

export const TodoSchema = z.string().min(3, '3 character min')

export function parsedValue(value: string) {
  const { success, error } = TodoSchema.safeParse(value)

  const errorVal: string | undefined = error?.issues[0].message

  return { success, error: errorVal }
}