import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export const initialThemeState = {
    theme: Theme.DARK,
    setTheme: () => null
}

interface StateAndActions {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<StateAndActions>(initialThemeState)

export const ThemeProvider: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
    children
}) => {
    const [themeLocal, setThemeLocal] = useLocalStorage<Theme>('theme', Theme.DARK)

    const [theme, setTheme] = useState<Theme>(Theme.DARK)

    useEffect(() => {
        setTheme(themeLocal)
    }, [])

    useEffect(() => {
        setThemeLocal(theme)
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)