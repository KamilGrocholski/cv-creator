import { Icons } from "../components/common/Icons";

export const SECTIONS = {
    CREDENTIALS: {
        name: 'Dane osobowe',
        image: Icons.Person
    },
    SKILLS: {
        name: 'Umiejętności',
        image: Icons.Skill 
    },
    EDUCATION: {
        name: 'Wykształcenie',
        image: Icons.Education
    },
    PROJECTS: {
        name: 'Projekty',
        image: Icons.Education
    },
    CLAUSE: {
        name: 'Klauzula CV',
        image: Icons.Education
    }
} as const