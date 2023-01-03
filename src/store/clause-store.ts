import create from 'zustand'

interface State {
    clause?: string
}

interface Actions {
    setClause: (clause: string) => void
}

export const useClauseStore = create<State & Actions>(set => ({
    clause: undefined,
    
    setClause: (clause) => set(() => ({ clause }))
}))