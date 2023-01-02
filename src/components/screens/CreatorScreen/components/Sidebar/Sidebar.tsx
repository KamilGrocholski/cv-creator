import useWindowSize from "../../../../../hooks/useWindowSize"
import { Logo } from "../../../../common/Logo"
import { SectionsList } from "./components/SectionsList"
import './Sidebar.scss'

export const Sidebar = () => {
    const { width } = useWindowSize()

    if (width > 1264) return (
        <aside className='sidebar'>
            <Logo />
            <SectionsList />
        </aside>
    )

    return (
        <aside className='sidebar-mobile'>
            <Logo />
            <SectionsList />
        </aside>
    )
}
