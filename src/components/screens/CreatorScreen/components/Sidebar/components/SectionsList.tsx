import React from "react"
import { SECTIONS } from "../../../../../../constants/CV_CREATOR"
import { useCvStore } from "../../../../../../store/cv-store"

export const SectionsList = () => {
    const sections = useCvStore(state => state.sections)
    const currentSection = useCvStore(state => state.currentSection)
    const {
        setCurrentSection
    } = useCvStore()

    return (
        <div className='sidebar-sections-list'>
            {Object.entries(sections).map(([key, section], i) => (
                <SectionSingle key={i} {...{ ...section, isActive: currentSection === key, onClick: () => setCurrentSection(key as keyof typeof SECTIONS) }} />
            ))}
        </div>
    )
}

const SectionSingle: React.FC<{
    name: string
    image: React.ReactNode
    onClick: () => void
    isActive: boolean
}> = ({
    name,
    image,
    onClick,
    isActive
}) => {
        return (
            <span onClick={onClick} className='sidebar-section-element'>
                <div>{image}</div>
                <span>{name}</span>
            </span>
        )
    }
