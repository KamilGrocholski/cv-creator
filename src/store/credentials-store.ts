import create from 'zustand'
import type { Credentials } from '../types/cv'

type State = Credentials

interface Actions {
    setName: (name: string) => void
    setSurname: (surname: string) => void
    setEmail: (email: string) => void 
    setPhone: (phone: string) => void 
    setAddress: (address: string) => void 
}

export const useCredentialsStore = create<State & Actions>(set => ({
    name: undefined,
    email: undefined,
    phone: undefined,
    address: undefined,

    setName: (name) => set(() => ({ name })),
    setSurname: (surname) => set(() => ({ surname })),
    setEmail: (email) => set(() => ({ email })),
    setPhone: (phone) => set(() => ({ phone })),
    setAddress: (address) => set(() => ({ address })),
}))