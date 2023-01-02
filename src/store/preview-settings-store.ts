import create from "zustand";

interface State {
    normalColor: string
    accent: string
    headers: {
        size: string
    }
    text: {
        size: string
    }
    sections: {
        margin: string
    }
    rows: {
        margin: string
    }
}

interface Actions {
    setAccent: (accent: string) => void
    setNormalColor: (normalColor: string) => void
    setHeaders: (headers: Partial<State['headers']>) => void 
    setText: (text: Partial<State['text']>) => void 
    setSections: (sections: Partial<State['sections']>) => void 
    setRows: (rows: Partial<State['rows']>) => void 
}

export const usePreviewSettingsStore = create<State & Actions>(set => ({
    accent: 'blue',
    normalColor: 'white',
    headers: {
        size: '22px'
    },
    text: {
        size: '22px'
    },
    sections: {
        margin: '22px'
    },
    rows: {
        margin: '22px'
    },

    setAccent: (accent) => set(() => ({ accent })),
    setNormalColor: (normalColor) => set(() => ({ normalColor })),
    setHeaders: (headers) => set((state) => ({ headers: {...state.headers, ...headers} })),
    setText: (text) => set((state) => ({ text: {...state.text, ...text} })),
    setSections: (sections) => set((state) => ({ sections: {...state.sections, ...sections} })),
    setRows: (rows) => set((state) => ({ rows: {...state.rows, ...rows} }))  
}))