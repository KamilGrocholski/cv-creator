import { useEducationStore } from "../../../../../../store/education-store"
import { Education } from "../../../../../../types/cv"
import { FormField, FormFieldTextArea } from "../../../../../common/FormField"
import { Icons } from "../../../../../common/Icons"
import { ScrollToEndComponent } from "../../../../../common/ScrollToEndComponent"

export const EducationForm = () => {
    const educationList = useEducationStore(state => state.educationList)
    const add = useEducationStore(state => state.add)

    return (
        <ScrollToEndComponent listWithScroll={(scrollToEnd) => (
            <>
                {educationList.map((education, i) => (
                    <EducationFormCard
                        key={i}
                        index={i}
                        education={education}
                    />
                ))}
                <button className='text-green btn-green-outline' onClick={() => {
                    add()
                    scrollToEnd()
                }}>{Icons.Add}</button>
            </>
        )} />
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
    const remove = useEducationStore(state => state.remove)
    const update = useEducationStore(state => state.update)

    const handleUpdateInstitution = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...education,
            institution: e.target.value
        })
    }

    const handleUpdateLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...education,
            location: e.target.value
        })
    }

    const handleUpdateSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        update(index, {
            ...education,
            summary: e.target.value
        })
    }

    const handleUpdateStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...education,
            startDate: e.target.value
        })
    }

    const handleUpdateEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...education,
            endDate: e.target.value
        })
    }

    const handleRemove = (e: React.FormEvent) => {
        e.preventDefault()
        remove(index)
    }

    return (
        <form className="form">
            <button onClick={handleRemove} className='btn-red-outline'>{Icons.Trash}</button>
            <FormField
                label='Instytucja'
                value={education.institution ?? ''}
                onChange={handleUpdateInstitution}
                placeholder='Uniwersytet Warszawski'
            />
            <FormField
                label='Miejscowość'
                value={education.location ?? ''}
                onChange={handleUpdateLocation}
                placeholder='Miejscowość'
            />
            <div className='form-many-row'>
                <FormField
                    label='Data rozpoczęcia'
                    value={education.startDate ?? ''}
                    onChange={handleUpdateStartDate}
                    placeholder='2011-02-12'
                />
                <FormField
                    label='Data zakończenia'
                    value={education.endDate ?? ''}
                    onChange={handleUpdateEndDate}
                    placeholder='2015-05-01'
                />
            </div>
            <FormFieldTextArea
                label='Podsumowanie'
                value={education.summary ?? ''}
                onChange={handleUpdateSummary}
                placeholder='Podsumowanie mojej edukacji...'
            />
        </form>
    )
}
