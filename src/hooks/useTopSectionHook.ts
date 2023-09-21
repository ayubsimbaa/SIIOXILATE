import { useEffect } from 'react'
import { useTopSection } from '../zustand_store/useTopSection'

const useTopSectionHook = (title: string) => {
  const set_title = useTopSection(state => state.set_title)
  useEffect(() => {
    set_title(title)
  })
}

export { useTopSectionHook }

