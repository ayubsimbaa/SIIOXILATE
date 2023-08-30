import { create } from 'zustand'

interface IUseCompetingStore {
  showFrame: boolean
  setFrame: (b: boolean) => void
}

const useCompetingStore = create<IUseCompetingStore>(set => ({
  showFrame: false,
  setFrame(b) {
    set({ showFrame: b })
  },
}))

export { useCompetingStore }

