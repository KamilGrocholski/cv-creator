import { useProjectsStore } from "../../../../../../store/projects-store"
import { Project } from "../../../../../../types/cv"
import { FormField, FormFieldTextArea } from "../../../../../common/FormField"
import { Icons } from "../../../../../common/Icons"
import { ScrollToEndComponent } from "../../../../../common/ScrollToEndComponent"

export const ProjectsForm = () => {
    const projects = useProjectsStore(state => state.projects)
    const add = useProjectsStore(state => state.add)

    return (
        <ScrollToEndComponent listWithScroll={(scrollToEnd) => (
            <>
                {projects.map((project, i) => (
                    <ProjectFormCard
                        key={i}
                        index={i}
                        project={project}
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

interface ProjectFormCardProps {
    project: Project
    index: number
}

const ProjectFormCard: React.FC<ProjectFormCardProps> = ({
    project,
    index
}) => {
    const remove = useProjectsStore(state => state.remove)
    const update = useProjectsStore(state => state.update)

    const handleUpdateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...project,
            name: e.target.value
        })
    }

    const handleUpdateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        update(index, {
            ...project,
            description: e.target.value
        })
    }

    const handleUpdateStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...project,
            startDate: e.target.value
        })
    }

    const handleUpdateEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...project,
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
                label='Nazwa'
                value={project.name ?? ''}
                onChange={handleUpdateName}
                placeholder='Mój projekt'
            />
            <div className='form-many-row'>
                <FormField
                    label='Data rozpoczęcia'
                    value={project.startDate ?? ''}
                    onChange={handleUpdateStartDate}
                    placeholder={'2022-05-22'}
                />
                <FormField
                    label='Data rozpoczęcia'
                    value={project.endDate ?? ''}
                    onChange={handleUpdateEndDate}
                    placeholder={'2022-05-22'}
                />
            </div>
            <FormFieldTextArea
                label='Opis'
                value={project.description ?? ''}
                onChange={handleUpdateDescription}
                placeholder='Opis mojego projektu...'
            />
        </form>
    )
}
