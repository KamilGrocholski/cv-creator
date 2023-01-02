import { useCvStore } from '../../../../../store/cv-store'
import './Header.scss'

export const Header = () => {
    const currentSection = useCvStore(state => state.currentSection)
    const sections = useCvStore(state => state.sections)

    return (
        <header className='creator-header'>
            {sections[currentSection].name}
        </header>
    )
}
