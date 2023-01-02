import { CredentialsPreview } from "./components/CredentialsPreview"
import { EducationPreview } from "./components/EducationPreview"
import { SkillsPreview } from "./components/SkillsPreview"
import './Preview.scss'

export const Preview = () => {
    return (
        <div className='preview'>
            <div className='preview-document'>
                <CredentialsPreview />
                <SkillsPreview />
                <EducationPreview />
            </div>
        </div>
    )
}