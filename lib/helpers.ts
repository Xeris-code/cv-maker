export const newWork = (
    id: number
) => {
    return {
        id: id,
        start: {month: "", year: 0},
        end: {month: "", year: 0},
        present: false,
        position: "",
        company: "",
        city: "",
        state: "",
        description: "", 
        tasks: []
    }
}

export const newEdu = (
    id: number
) => {
    return {
        id: id,
        start: {year: 0},
        end: {year: 0},
        present: false,
        faculty: "",
        university: "",
        field: "",
        degree: "",
        city: "",
        state: "",
        description: ""
    }
}

export const newCourse = (
    id: number
) => {
    return {
        id: id,
        name: "",
        org: "",
        description: "",
        start: {month: "", year: 0},
        end: {month: "", year: 0},
        url: "",
    }
}

export const newProject = (
    id: number
) => {
    return {
        id: id,
        name: "",
        description: "",
        tech: "",
        url: "",
    }
}