import create from 'zustand'
import { SECTIONS } from '../constants/CV_CREATOR'

interface State {
    sections: typeof SECTIONS
    currentSection: keyof typeof SECTIONS

    mobileTab: 'PREVIEW' | 'FORMS'
    isOpenSidebar: boolean
}

interface Actions {
    setCurrentSection: (section: keyof typeof SECTIONS) => void
    setMobileTab: (mobileTab: State['mobileTab']) => void 
    setIsOpenSidebar: (bool: boolean) => void
}

export const useCvStore = create<State & Actions>(set => ({
    sections: SECTIONS,
    currentSection: 'CREDENTIALS',
    setCurrentSection: (section) => set(() => ({ currentSection: section })),
    
    mobileTab: 'FORMS',
    setMobileTab: (mobileTab) => set(() => ({ mobileTab })),

    isOpenSidebar: false,
    setIsOpenSidebar: (bool) => set((state) => ({ isOpenSidebar: bool }))
}))