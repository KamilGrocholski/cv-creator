import create from 'zustand'
import { SECTIONS } from '../constants/CV_CREATOR'

interface State {
    sections: typeof SECTIONS
    currentSection: keyof typeof SECTIONS
}

interface Actions {
    setCurrentSection: (section: keyof typeof SECTIONS) => void
}

export const useCvStore = create<State & Actions>(set => ({
    sections: SECTIONS,
    currentSection: 'CREDENTIALS',
    
    setCurrentSection: (section) => set(() => ({ currentSection: section }))
}))