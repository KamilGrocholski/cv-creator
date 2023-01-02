import { Theme, useTheme } from '../../context/ThemeContext'

export const ThemeSetter: React.FC = () => {
    const { theme, setTheme } = useTheme()

    const handleSetTheme = () => {
        if (theme === Theme.DARK) {
            setTheme(Theme.LIGHT)
        } else {
            setTheme(Theme.DARK)
        }
    }

    return (
        <button
            onClick={handleSetTheme}
        >
            {theme}
        </button>
    )
}
