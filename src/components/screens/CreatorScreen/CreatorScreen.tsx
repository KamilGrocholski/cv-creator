import { Forms } from "./components/Forms"
import { Header } from "./components/Header"
import { Preview } from "./components/Preview"
import { Sidebar } from "./components/Sidebar"
import './CreatorScreen.scss'

export const CreatorScreen = () => {
    return (
        <div className='creator-wrapper'>
            <Sidebar />
            <div className='creator-right-side-wrapper'>
                <Header />
                <div className='creator-forms-preview-wrapper'>
                    <Forms />
                    <Preview />
                </div>
            </div>
        </div>
    )
}
