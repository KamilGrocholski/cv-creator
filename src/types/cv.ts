export interface TimePeriod {
    startDate?: string
    endDate?: string
}

export interface Credentials {
    name?: string
    surname?: string
    email?: string
    phone?: string
    address?: string
}

export interface Link {
    label: string
    url: string
}

export interface Experience extends TimePeriod {
    name?: string
    position?: string
    summary?: string
}

export interface Education extends TimePeriod {
    institution?: string
    location?: string
    summary?: string
}

export interface Skill {
    name?: string
    level?: string
}

export interface Project extends TimePeriod {
    name?: string
    description?: string
    url?: string
}

export interface Job extends TimePeriod {
    position?: string
    description?: string
    summary?: string
}

export interface CV {
    credentials: Credentials
    links: Link[]
    experiences: Experience[]
    education: Education[]
    skills: Skill[]
    projects: Project[]
}