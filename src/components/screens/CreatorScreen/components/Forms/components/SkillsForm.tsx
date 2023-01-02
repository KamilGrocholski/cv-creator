import { useSkillsStore } from "../../../../../../store/skills-store"
import { Skill } from "../../../../../../types/cv"
import { FormField } from "../../../../../common/FormField"
import { Icons } from "../../../../../common/Icons"
import { ScrollToEndComponent } from "../../../../../common/ScrollToEndComponent"

export const SkillsForm = () => {
    const skills = useSkillsStore(state => state.skills)
    const {
        add
    } = useSkillsStore()

    return (
        <ScrollToEndComponent
            listWithScroll={(scrollToEnd) => (
                <>
                    {skills.map((skill, i) => (
                        <SkillFormCard
                            key={i}
                            index={i}
                            skill={skill}
                        />
                    ))}
                    <button className='text-green btn-green-outline' onClick={() => {
                        add()
                        scrollToEnd()
                    }}>{Icons.Add}</button>
                </>
            )}
        />
    )
}

interface SkillFormCard {
    skill: Skill
    index: number
}

const SkillFormCard: React.FC<SkillFormCard> = ({
    skill,
    index,
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

    const handleRemove = (e: React.FormEvent) => {
        e.preventDefault()
        remove(index)
    }

    return (
        <form className='form'>
            <button onClick={handleRemove} className='text-red btn-red-outline'>{Icons.Trash}</button>
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