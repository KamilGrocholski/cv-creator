import create from 'zustand'
import { Job } from '../types/cv'

interface State {
    jobs: Job[]
}

interface Actions {
    add: () => void
    remove: (indexToRemove: number) => void
    update: (indexToUpdate: number, newJob: Job) => void
}

export const useJobsStore = create<State & Actions>(set => ({
    jobs: [{}],

    add: () => set((state) => ({ jobs: [...state.jobs, {}] })),
    remove: (indexToRemove) => set((state) => ({ jobs: state.jobs.filter((_, index) => index !== indexToRemove) })),
    update: (indexToUpdate, newJob) => set((state) => ({ jobs: state.jobs.map((job, index) => index === indexToUpdate ? newJob : job) }))
}))