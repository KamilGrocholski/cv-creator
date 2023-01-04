import React from "react"
import { useEducationStore } from "../../../../../../store/education-store"
import { Education } from "../../../../../../types/cv"

export const EducationPreview = () => {
    const educationList = useEducationStore(state => state.educationList)

    return (
        <div>
            {educationList.map((education, i) => (
                <EducationCard
                    key={i}
                    education={education}
                />
            ))}
        </div>
    )
}

interface EducationCardProps {
    education: Education
}

const EducationCard: React.FC<EducationCardProps> = ({
    education
}) => {

    return (
        <div>xd</div>
    )
}
