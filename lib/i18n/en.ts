export const en = {
    ui: {

        app: {
            name: "CV Maker",
            description: "Create your professional CV quickly and for free.",
            progressBar: "completed",
            page: "Page",
            tips: {
                title: "Pro Tip",
                items:[
                    "Fill in all sections to create a complete and professional CV.",
                    "Use specific results instead of vague statements.",
                    "Tailor your CV to each job you apply for.",
                    "Use action verbs like 'built', 'designed', or 'improved'.",
                    "Keep your CV clear, concise, and easy to scan.",
                    "Focus on relevant experience rather than everything you've done.",
                    "Avoid long paragraphs — use bullet points where possible.",
                    "Highlight your achievements, not just responsibilities.",
                    "Keep formatting consistent across all sections.",
                    "Always double-check for spelling and grammar mistakes.",
                    "Try to keep your CV within 1-2 pages.",
                    "Recruiters spend ~6 seconds scanning a CV — make it count.",
                ],
            },
        },

        languages: {
            en: "English",
            sk: "Slovak",
            de: "German",
        },

        actions: {
            preview: "Preview",
            printPDF: "Download PDF",
            exportJSON: "Export JSON",
            demo: "Demo",
            reset: "Reset",
        },

        tooltip: {
            edit: "Edit",
            delete: "Delete",
            confirm: "Done"
        },

        sections: {
            personal: {
                title: "Personal Information",
                description: "Add your personal details and contact information.",
                fields: {
                    firstName: {
                        name: "First Name",
                        placeholder: "e.g. Peter"
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
                    portfolio: {
                        name: "Portfolio / Website",
                        placeholder: "e.g. github.com/PeterSmith"
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
                        title: "Personal profile",
                        placeholder: "Write a short summary of your profile...",
                    },
                    position: {
                        name: "Current position",
                        placeholder: "Enter your current position if any..."
                    },
                },
                addPhoto: "Upload Photo",
                toggleButton: "Show Title",
            },
            skills: {
                title: "Skills",
                description: "Add your technical skills.",
                placeholder: "e.g. Word, Excel",
                add: "Add Skill",
                items: "skills",
            },
            languages: {
                title: "Languages",
                description: "Add your spoken languages.",
                add: "Add Language",
                items: "languages",
                placeholder: "e.g. English, German",
            },
            work: {
                title: "Work Experience",
                description: "Add your professional experience and roles.",
                add: "Add Experience",
                items: "positions",
                present: "Present",
                from: "From",
                end: "To",
                fields: {
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
                },
            },
            education: {
                title: "Education",
                description: "Add your academic background.",
                add: "Add Education",
                items: "educations",
                from: "From",
                end: "To",
                fields: {
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
                        placeholder: "e.g. Bachelor, Master",
                        of: "of",
                    },
                    describe: {
                        name: "Description",
                        placeholder: "Optional: achievements, relevant courses, thesis...",
                    },
                },
            },
            courses: {
                title: "Courses / Certificates",
                description: "Add relevant courses and certificates.",
                add: "Add Course",
                items: "courses",
                date: "Date",
                fields: {
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
                },
            },
            projects: {
                title: "Projects",
                description: "Add your personal or professional projects.",
                add: "Add Project",
                items: "projects",
                fields: {
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

            },
            interests: {
                title: "Interests & Hobbies",
                description: "Add your interests and hobbies.",
                items: "items",
                fields: {
                    placeholder: "Add interests individually and press Enter after each one...",
                },

            },
        },

        options: {
            skills: {
                0: "Select level...",
                1: "Beginner",
                2: "Junior",
                3: "Intermediate",
                4: "Advanced",
                5: "Expert",
            },
        language: {
                0: "Select level...",
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
            centralized: "Centralized",
        },

    },

    preview: {
        sections: {
            pesonal: {
                name: "Profile",
            },
            contacts: {
                name: "Contacts",
            },
            skills: {
                name: "Skills",
            },
            languages: {
                name: "Langauges",
            },
            interests: {
                name: "Interests & Hobbies",
            },
            work: {
                name: "Work Experience",
                present: "Currently",
            },
            education: {
                name: "Education",
            },
            courses: {
                name: "Courses / Certificates",
            },
            projects: {
                name: "Projects",
            }
        },
    },

};