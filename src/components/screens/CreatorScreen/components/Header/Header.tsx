import { useCvStore } from '../../../../../store/cv-store'
import { Icons } from '../../../../common/Icons'
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

export const HeaderMobile = () => {
    const setMobileTab = useCvStore(state => state.setMobileTab)
    const setIsOpenSidebar = useCvStore(state => state.setIsOpenSidebar)
    const isOpenSidebar = useCvStore(state => state.isOpenSidebar)
    const mobileTab = useCvStore(state => state.mobileTab)

    return (
        <header className='creator-header-mobile'>
            <div onClick={() => setIsOpenSidebar(isOpenSidebar ? false : true)} className='mobile-menu-icon'>{Icons.Menu}</div>
            <div className='tabs-container'>
                <span onClick={() => setMobileTab('FORMS')} className={`tab ${mobileTab === 'FORMS' && 'tab-active'}`}>Formularze</span>
                <span onClick={() => setMobileTab('PREVIEW')} className={`tab ${mobileTab === 'PREVIEW' && 'tab-active'}`}>Podgląd</span>
            </div>
        </header>
    )
}