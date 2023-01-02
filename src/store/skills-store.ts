import create from 'zustand'
import { Skill } from '../types/cv'

interface State {
    skills: Skill[]
}

interface Actions {
    add: () => void
    update: (indexToUpdate: number, newSkill: Skill) => void
    remove: (indexToRemove: number) => void
}

export const useSkillsStore = create<State & Actions>(set => ({
    skills: [{}],

    add: () => set((state) => ({ skills: [...state.skills, {}] })),
    update: (indexToUpdate, newSkill) => set((state) => ({ skills: state.skills.map((skill, index) => index === indexToUpdate ? newSkill : skill) })),
    remove: (indexToRemove) => set((state) => ({ skills: state.skills.filter((_, index) => index !== indexToRemove) }))  
}))