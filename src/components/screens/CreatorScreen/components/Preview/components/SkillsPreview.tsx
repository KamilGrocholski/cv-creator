import { useSkillsStore } from "../../../../../../store/skills-store"
import { Skill } from "../../../../../../types/cv"

export const SkillsPreview: React.FC = () => {
    const skills = useSkillsStore(state => state.skills)

    return (
        <div>
            {skills.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
            ))}
        </div>
    )
}

interface SkillCardProps {
    skill: Skill
}

const SkillCard: React.FC<SkillCardProps> = ({
    skill
}) => {
    return (
        <div>
            xd
        </div>
    )
}
