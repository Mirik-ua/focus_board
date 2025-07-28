import { User, UserMode } from '@/types/user'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Store = {
  user: User
  isPopShow: boolean
  mode: UserMode
  setUser: (user: User) => void
  setMode: (mode: UserMode) => void
  userExist: () => boolean
  togglePopover: (toggle: boolean) => void
}

export const useStoreUser = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        user: { id: null, name: null, avatar: null },
        isPopShow: false,
        mode: null,
        userExist: () => !!get().user,
        setUser: (user: User) => set({ user }),
        setMode: (mode: UserMode) => set({ mode }),
        togglePopover: (toggle) => set({ isPopShow: toggle }),
      }),
      { name: 'UserStore' }
    )
  )
)
