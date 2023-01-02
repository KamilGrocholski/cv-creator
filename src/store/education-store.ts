import create from 'zustand'
import { Education } from '../types/cv'

interface State {
    educationList: Education[]
}

interface Actions {
    add: () => void
    update: (indexToUpdate: number, newEducation: Education) => void
    remove: (indexToRemove: number) => void
}

export const useEducationStore = create<State & Actions>(set => ({
    educationList: [{}],

    add: () => set((state) => ({ educationList: [...state.educationList, {}] })),
    remove: (indexToRemove) => set((state) => ({ educationList: state.educationList.filter((_, index) => index !== indexToRemove) })),
    update: (indexToUpdate, newEducation) => set((state) => ({ educationList: state.educationList.map((education, index) => index === indexToUpdate ? newEducation : education) }))
}))