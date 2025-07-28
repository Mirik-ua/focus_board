import { User } from '@/types/user'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Store = {
  user: User
  setUser: (user: User) => void
  userExist: () => boolean
}

export const useStoreUser = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        user: { id: null, name: null, avatar: null },
        userExist: () => !!get().user,
        setUser: (user: User) => set({ user }),
      }),
      { name: 'UserStore' }
    )
  )
)
