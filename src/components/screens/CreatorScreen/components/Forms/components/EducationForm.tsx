import React from "react"
import { useEducationStore } from "../../../../../../store/education-store"
import { Education } from "../../../../../../types/cv"
import { FormField } from "../../../../../common/FormField"

export const EducationForm = () => {
    const educationList = useEducationStore(state => state.educationList)
    const {
        add
    } = useEducationStore()

    return (
        <div>
            <button onClick={() => add()}>Dodaj</button>
            {educationList.map((education, i) => (
                <EducationFormCard
                    key={i}
                    index={i}
                    education={education}
                />
            ))}
        </div>
    )
}

interface EducationFormCardProps {
    education: Education
    index: number
}

const EducationFormCard: React.FC<EducationFormCardProps> = ({
    education,
    index
}) => {
    const {
        remove,
        update
    } = useEducationStore()

    const handleUpdateInstitution = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...education,
            institution: e.target.value
        })
    }

    const handleUpdateSummary = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...education,
            summary: e.target.value
        })
    }

    return (
        <form className="form">
            <button onClick={() => remove(index)}>Usun</button>
            <FormField
                label='Instytucja'
                value={education.institution ?? ''}
                onChange={handleUpdateInstitution}
                placeholder='Uniwersytet Warszawski'
            />
            <FormField
                label='Podsumowanie'
                value={education.summary ?? ''}
                onChange={handleUpdateSummary}
                placeholder='Podsumowanie mojej edukacji...'
            />
        </form>
    )
}
