import { useSkillsStore } from "../../../../../../store/skills-store"
import { Skill } from "../../../../../../types/cv"
import { FormField } from "../../../../../common/FormField"

export const SkillsForm = () => {
    const skills = useSkillsStore(state => state.skills)
    const {
        add
    } = useSkillsStore()

    return (
        <div>
            {skills.map((skill, i) => (
                <SkillFormCard
                    key={i}
                    index={i}
                    skill={skill}
                />
            ))}
            <button onClick={() => add()}>Dodaj</button>
        </div>
    )
}

interface SkillFormCard {
    skill: Skill
    index: number
}

const SkillFormCard: React.FC<SkillFormCard> = ({
    skill,
    index
}) => {
    const {
        update,
        remove
    } = useSkillsStore()

    const handleUpdateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...skill,
            name: e.target.value
        })
    }

    const handleUpdateLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
        update(index, {
            ...skill,
            level: e.target.value
        })
    }

    return (
        <form className='form'>
            <button onClick={() => remove(index)}>Usun</button>
            <FormField
                label='Nazwa'
                value={skill.name ?? ''}
                onChange={handleUpdateName}
                placeholder='Nazwa'
            />
            <FormField
                label='Poziom'
                value={skill.level ?? ''}
                onChange={handleUpdateLevel}
                placeholder='Poziom'
            />
        </form>
    )
}