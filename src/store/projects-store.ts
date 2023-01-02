import create from 'zustand'
import { Project } from '../types/cv'

interface State {
    projects: Project[]
}

interface Actions {
    add: () => void
    update: (indexToUpdate: number, newProject: Project) => void
    remove: (indexToRemove: number) => void 
}

export const useProjectsStore = create<State & Actions>(set => ({
    projects: [{}],

    add: () => set((state) => ({ projects: [...state.projects, {}] })),
    update: (indexToUpdate, newProject) => set((state) => ({ projects: state.projects.map((project, index) => index === indexToUpdate ? newProject : project) })),
    remove: (indexToRemove) => set((state) => ({ projects: state.projects.filter((_, index) => index !== indexToRemove) })) 
}))