import { create } from 'zustand'

interface TopSectionProps {
  title: string
  user_name: string
  set_title: (title: string) => void
  set_user_name: (user_name: string) => void
}

const useTopSection = create<TopSectionProps>()(set => ({
  title: '',
  user_name: '',
  set_title(title) {
    set({ title })
  },
  set_user_name(user_name) {
    set({ user_name })
  },
}))

export { useTopSection }

