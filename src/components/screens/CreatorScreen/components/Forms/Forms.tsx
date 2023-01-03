import { useCvStore } from '../../../../../store/cv-store'
import { ClauseForm } from './components/ClauseForm'
import { CredentialsForm } from './components/CredentialsForm'
import { EducationForm } from './components/EducationForm'
import { ProjectsForm } from './components/ProjectsForm'
import { SkillsForm } from './components/SkillsForm'
import './Forms.scss'

export const Forms = () => {
    return (
        <div className='forms' >
            <SelectedForm />
        </div>
    )
}

const SelectedForm: React.FC = () => {
    const currentSection = useCvStore(state => state.currentSection)

    if (currentSection === 'CREDENTIALS') return <CredentialsForm />
    if (currentSection === 'SKILLS') return <SkillsForm />
    if (currentSection === 'EDUCATION') return <EducationForm />
    if (currentSection === 'PROJECTS') return <ProjectsForm />
    if (currentSection === 'CLAUSE') return <ClauseForm />
    return <></>
}
