export const en = {

    app: {
        name: "CV - Maker",
        description: "Create your personal CV quickly and for free.",
    },

    sections: {
        common: {
            personal: "Personal Information",
            contacts: "Contact",
            work: "Work Experience",
            education: "Education",
            courses: "Courses / Certificates",
            skills: "Skills",
            languages: "Languages",
            interests: "Interests & Hobbies",
            projects: "Projects",
        },
    },

    fields: {
        firstName: {
            name: "First name",
            placeholder: "e.g. Peter",
        },
        lastName: {
            name: "Last name",
            placeholder: "e.g. Smith",
        },
        title: {
            name: "Title",
            front: {
                name: "Before name",
                placeholder: "e.g. Mgr., Ing."
            },
            back: {
                name: "After name",
                placeholder: "e.g. PhD."
            },
        },
        birth: {
            name: "Date of Birth",
            day: "Day",
            month: "Month",
            year: "Year",
        },
        email: {
            name: "Email",
            placeholder: "e.g. peter@email.com"
        },
        phone: {
            name: "Phone number",
            placeholder: "e.g. +421 901 234 567",
        },
        address: {
            name: "Adress",
            city: {
                name: "City",
                placeholder: "e.g. London",
            },
            state: {
                name: "Country",
                placeholder: "e.g. England",
            },
        },
        photo: {
            name: "Photo",
            placeholder: "JPG or PNG. Max size 5MB.",
        },
        summary: {
            name: "Summary",
            placeholder: "Write a short summary of your profile...",
        },
        position: {
            name: "Current position",
            placeholder: "Enter your current position if any...",
        },
        skills: {
            name: "Skill",
            placeholder: "Add skill...",
        },
        languages: {
            name: "Language",
            placeholder: "Add language...",
        },
        work: {
            name: "Position",
            position: {
                name: "Position",
                placeholder: "e.g. Software Engineer",
            },
            company: {
                name: "Company",
                placeholder: "e.g. Google",
            },
            city: {
                name: "City",
                placeholder: "e.g. Bratislava",
            },
            state: {
                name: "Country",
                placeholder: "e.g. Slovakia",
            },
            describe: {
                name: "Description",
                placeholder: "Briefly describe your responsibilities, achievements or technologies used...",
            },
            present: "Present",
            from: "From",
            end: "To",
        },
        education: {
            name: "Education",
            faculty: {
                name: "Faculty",
                placeholder: "e.g. Faculty of Management",
            },
            university: {
                name: "University",
                placeholder: "e.g. Comenius University",
            },
            field: {
                name: "Field",
                placeholder: "e.g. Physics, Management, IT",
            },
            city: {
                name: "City",
                placeholder: "e.g. Bratislava",
            },
            state: {
                name: "Country",
                placeholder: "e.g. Slovakia",
            },
            degree: {
                name: "Degree",
                placeholder: "e.g. Bachelor's, Master's",
            },
            describe: {
                name: "Description",
                placeholder: "Optional: achievements, relevant courses, thesis...",
            },
            present: "Present",
            from: "From",
            end: "To",
        },
        courses: {
            name: "Course",
            title: {
                name: "Name",
                placeholder: "e.g. Google Data Analytics Certificate...",
            },
            organization: {
                name: "Organization",
                placeholder: "e.g. Coursera, Udemy, Google...",
            },
            link: {
                name: "Link",
                placeholder: "e.g. https://www.coursera.org/...",
            },
            describe: {
                name: "Description",
                placeholder: "Briefly describe what you learned, achieved or focused on...",
            },
            from: "From",
            end: "To"
        },
        project: {
            name: "Project",
            title: {
                name: "Name",
                placeholder: "e.g. Google Data Analytics Certificate...",
            },
            technology: {
                name: "Technology",
                placeholder: "e.g. React, Python, Node.js...",
            },
            link: {
                name: "Git / Demo",
                placeholder: "e.g. https://github.com/username/project...",
            },
            describe: {
                name: "Description",
                placeholder: "Briefly describe the project, your role, and the main result or functionality...",
            },
        },
        interests: {
            name: "Interests & Hobbies",
            placeholder: "List a few interests that reflect your personality or skills (e.g. sports, coding, volunteering...)",
        }

    },

    actions: {
        addWork: "Add work experience",
        addSkill: "Add skill",
        addPhoto: "Upload Photo",
        addLanguage: "Add language",
        addEducation: "Add education",
        addCourse: "Add course",
        addProject: "Add project",
        exportPdf: "PDF",
    },

    options: {
        skills: {
            0: "Select skill level...",
            1: "Beginner",
            2: "Junior",
            3: "Intermediate",
            4: "Advanced",
            5: "Expert",
        },
        language: {
            0: "Select language level...",
            1: "A1 - Beginner",
            2: "A2 - Elementary",
            3: "B1 - Intermediate",
            4: "B2 - Upper Intermediate",
            5: "C1 - Advanced",
            6: "C2 - Proficient / Fluent",
            7: "Native",
        },
    },

    date: {
        months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },

    templates: {
        classic: "Classic",
        modern: "Modern",
        graphic: "Graphic",
        initial: "Initial",
    },

} as const;