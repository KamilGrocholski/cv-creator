import { View, Text, StyleSheet } from "@react-pdf/renderer"
import { useSkillsStore } from "../../../../../../store/skills-store"
import { Skill } from "../../../../../../types/cv"
import { styles } from "../Preview"

export const SkillsPreview: React.FC = () => {
    const skills = useSkillsStore(state => state.skills)

    return (
        <View>
            {skills.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
            ))}
        </View>
    )
}

interface SkillCardProps {
    skill: Skill
}

const SkillCard: React.FC<SkillCardProps> = ({
    skill
}) => {
    return (
        <View>
            xd
        </View>
    )
}
