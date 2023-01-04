import { Icons } from "../components/common/Icons";

export const SECTIONS = {
    CREDENTIALS: {
        name: 'Dane osobowe',
        image: Icons.Person
    },
    JOBS: {
        name: 'Praca',
        image: Icons.Work
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
        image: Icons.Project
    },
    CLAUSE: {
        name: 'Klauzula CV',
        image: Icons.Clause
    }
} as const