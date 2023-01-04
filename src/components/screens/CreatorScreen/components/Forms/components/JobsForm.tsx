import React from "react"
import { useJobsStore } from "../../../../../../store/jobs-store"
import { Job } from "../../../../../../types/cv"
import { FormField, FormFieldTextArea } from "../../../../../common/FormField"
import { Icons } from "../../../../../common/Icons"
import { ScrollToEndComponent } from "../../../../../common/ScrollToEndComponent"

export const JobsForm = () => {
    const jobs = useJobsStore(state => state.jobs)
    const add = useJobsStore(state => state.add)

    return (
        <ScrollToEndComponent listWithScroll={(scrollToEnd) => (
            <>
                {jobs.map((job, i) => (
                    <JobFormCard
                        key={i}
                        index={i}
                        job={job}
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

interface JobFormCardProps {
    job: Job
    index: number
}

const JobFormCard: React.FC<JobFormCardProps> = ({
    job,
    index
}) => {
    const remove = useJobsStore(state => state.remove)
    const update = useJobsStore(state => state.update)

    const handleUpdatePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...job,
            position: e.target.value
        })
    }

    const handleUpdateStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...job,
            startDate: e.target.value
        })
    }

    const handleUpdateEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...job,
            endDate: e.target.value
        })
    }

    const handleUpdateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        update(index, {
            ...job,
            description: e.target.value
        })
    }

    const handleUpdateSummary = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        update(index, {
            ...job,
            summary: e.target.value
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
                label='Stanowisko'
                value={job.position ?? ''}
                onChange={handleUpdatePosition}
                placeholder='Prezes zarządu'
            />
            <div className='form-many-row'>
                <FormField
                    label='Data rozpoczęcia'
                    value={job.startDate ?? ''}
                    onChange={handleUpdateStartDate}
                    placeholder='2011-02-12'
                />
                <FormField
                    label='Data zakończenia'
                    value={job.endDate ?? ''}
                    onChange={handleUpdateEndDate}
                    placeholder='2015-05-01'
                />
            </div>
            <FormFieldTextArea
                label='Opis'
                value={job.description ?? ''}
                onChange={handleUpdateDescription}
                placeholder='Opis mojej pracy...'
            />
            <FormFieldTextArea
                label='Podsumowanie'
                value={job.summary ?? ''}
                onChange={handleUpdateSummary}
                placeholder='Podsumowanie mojej pracy...'
            />
        </form>
    )
}
