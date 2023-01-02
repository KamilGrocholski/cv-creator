import { Link } from 'react-router-dom'
import { Logo } from '../../../../common/Logo'
import './HomeMain.scss'

export const HomeMain = () => {
    return (
        <main className='home-main'>
            <Logo />
            <div>
                <Link to='/creator' className='btn-green-outline'>Stwórz CV</Link>
                <button className='btn-green-filled'>Wczytaj</button>
            </div>
        </main>
    )
}
