import { useRef } from 'react'
import ReactDOM from 'react-dom'
import useOnClickOutside from '../../../hooks/useClickOutside'
import { Icons } from '../Icons'
import './Modal.scss'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: JSX.Element | JSX.Element[]
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
}) => {
    if (!isOpen) return null

    const ref = useRef<HTMLDivElement>(null)

    const handleClickOutside = () => {
        onClose()
    }

    useOnClickOutside(ref, handleClickOutside)

    return ReactDOM.createPortal(
        <div className='modal-backdrop'>
            <div className='modal' ref={ref}>
                <div>
                    <div className='modal-close-btn' onClick={onClose}>{Icons.X}</div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
        , document.getElementById('modal-root') as HTMLElement)
}
