import useWindowSize from "../../../hooks/useWindowSize"
import { useCvStore } from "../../../store/cv-store"
import { Modal } from "../../common/Modal"
import { Forms } from "./components/Forms"
import { Header, HeaderMobile } from "./components/Header"
import { Preview } from "./components/Preview"
import { Sidebar } from "./components/Sidebar"
import './CreatorScreen.scss'

export const CreatorScreen = () => {
    const { width } = useWindowSize()
    const mobileTab = useCvStore(state => state.mobileTab)
    const setIsOpenSidebar = useCvStore(state => state.setIsOpenSidebar)
    const isOpenSidebar = useCvStore(state => state.isOpenSidebar)

    return (
        <div className='creator-wrapper'>
            {width > 1264 ?
                <Sidebar /> :
                <Modal
                    isOpen={isOpenSidebar}
                    onClose={() => setIsOpenSidebar(false)}
                >
                    <Sidebar />
                </Modal>}
            <div className='creator-right-side-wrapper'>
                {width > 1264 ?
                    <Header /> : <HeaderMobile />}
                {width > 1264 ?
                    <div className='creator-forms-preview-wrapper'>
                        <Forms />
                        <Preview />
                    </div> :
                    mobileTab === 'FORMS' ?
                        <Forms /> :
                        <Preview />}
            </div>
        </div>
    )
}
