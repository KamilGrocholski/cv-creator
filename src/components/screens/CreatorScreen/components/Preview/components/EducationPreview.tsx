import { View, Text } from "@react-pdf/renderer"
import React from "react"
import { useEducationStore } from "../../../../../../store/education-store"
import { Education } from "../../../../../../types/cv"

export const EducationPreview = () => {
    const educationList = useEducationStore(state => state.educationList)

    return (
        <View>
            {educationList.map((education, i) => (
                <EducationCard
                    key={i}
                    education={education}
                />
            ))}
        </View>
    )
}

interface EducationCardProps {
    education: Education
}

const EducationCard: React.FC<EducationCardProps> = ({
    education
}) => {

    return (
        <View>xd</View>
    )
}
