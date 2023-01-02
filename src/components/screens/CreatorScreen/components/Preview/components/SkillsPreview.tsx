import { useSkillsStore } from "../../../../../../store/skills-store"
import { Skill } from "../../../../../../types/cv"
import { Section } from "./Section"

export const SkillsPreview: React.FC = () => {
    const skills = useSkillsStore(state => state.skills)

    return (
        <Section title='Umiejętności'>
            {skills.map((skill, i) => (
                <SkillCard
                    key={i}
                    skill={skill}
                />
            ))}
        </Section>
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
            <div>{JSON.stringify(skill)}</div>
        </div>
    )
}
