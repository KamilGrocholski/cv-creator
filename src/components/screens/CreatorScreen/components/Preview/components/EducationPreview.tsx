import React from "react"
import { useEducationStore } from "../../../../../../store/education-store"
import { Education } from "../../../../../../types/cv"
import { Section } from "./Section"

export const EducationPreview = () => {
    const educationList = useEducationStore(state => state.educationList)

    return (
        <Section title='Wykształcenie'>
            {educationList.map((education, i) => (
                <EducationCard
                    key={i}
                    education={education}
                />
            ))}
        </Section>
    )
}

interface EducationCardProps {
    education: Education
}

const EducationCard: React.FC<EducationCardProps> = ({
    education
}) => {

    return (
        <div>{JSON.stringify(education)}</div>
    )
}
