import { Logo } from "../../../../common/Logo"
import { SectionsList } from "./components/SectionsList"
import './Sidebar.scss'

export const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <Logo />
            <SectionsList />
        </aside>
    )
}
