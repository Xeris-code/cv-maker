import { TranslationSchema } from "./types";

export const sk: TranslationSchema = {

    app: {
        name: "CV - Maker",
        description: "Vytvorte si svoj životopis rýchlo a zadarmo.",
    },
    common: {},

    sections: {
        common: {
            personal: "Osobné údaje",
            contacts: "Kontakt",
            work: "Pracovné skúsenosti",
            education: "Vzdelanie",
            courses: "Kurzy / Certifikáty",
            skills: "Zručnosti",
            languages: "Jazyky",
            interests: "Záujmy a koníčky",
            projects: "Projekty",
        },
        form: {
            name: "Formulár",
        },
        preview: {},
    },

    fields: {
        firstName: {
            name: "Meno",
            placeholder: "napr. Peter",
        },
        lastName: {
            name: "Priezvisko",
            placeholder: "napr. Smith",
        },
        title: {
            name: "Titul",
            front: {
                name: "Pred menom",
                placeholder: "napr. Mgr., Ing."
            },
            back: {
                name: "Za menom",
                placeholder: "napr. PhD."
            },
        },
        birth: {
            name: "Dátum narodenia",
            day: "Deň",
            month: "Mesiac",
            year: "Rok",
        },
        email: {
            name: "Email",
            placeholder: "napr. peter@email.com"
        },
        phone: {
            name: "Telefónne číslo",
            placeholder: "napr. +421 901 234 567",
        },
        address: {
            name: "Adresa",
            city: {
                name: "Mesto",
                placeholder: "napr. Londýn",
            },
            state: {
                name: "Krajina",
                placeholder: "napr. Anglicko",
            },
        },
        photo: {
            name: "Fotografia",
            placeholder: "JPG alebo PNG. Max. veľkosť 5MB.",
        },
        summary: {
            name: "Zhrnutie",
            placeholder: "Napíšte krátke zhrnutie o sebe...",
        },
        position: {
            name: "Current position",
            placeholder: "Enter your current position if any...",
        },
        skills: {
            name: "Zručnosť",
            placeholder: "Pridajte zručnosť...",
        },
        languages: {
            name: "Jazyk",
            placeholder: "Pridajte jazyk...",
        },
        work: {
            name: "Pozícia",
            position: {
                name: "Pozícia",
                placeholder: "napr. Softvérový inžinier",
            },
            company: {
                name: "Spoločnosť",
                placeholder: "napr. Google",
            },
            city: {
                name: "Mesto",
                placeholder: "napr. Bratislava",
            },
            state: {
                name: "Krajina",
                placeholder: "napr. Slovensko",
            },
            describe: {
                name: "Popis",
                placeholder: "Stručne opíšte vaše povinnosti, úspechy alebo použité technológie...",
            },
            present: "Súčasnosť",
            from: "Od",
            end: "Do",
        },
        education: {
            name: "Vzdelanie",
            faculty: {
                name: "Fakulta",
                placeholder: "napr. Fakulta manažmentu",
            },
            university: {
                name: "Univerzita",
                placeholder: "napr. Univerzita Komenského",
            },
            field: {
                name: "Odbor",
                placeholder: "napr. Fyzika, Manažment, IT",
            },
            city: {
                name: "Mesto",
                placeholder: "napr. Bratislava",
            },
            state: {
                name: "Krajina",
                placeholder: "napr. Slovensko",
            },
            degree: {
                name: "Titul",
                placeholder: "napr. Bakalár, Magister",
            },
            describe: {
                name: "Popis",
                placeholder: "Voliteľné: úspechy, relevantné predmety, diplomová práca...",
            },
            present: "Súčasnosť",
            from: "Od",
            end: "Do",
        },
        courses: {
            name: "Kurz",
            title: {
                name: "Názov",
                placeholder: "napr. Google Data Analytics Certificate...",
            },
            organization: {
                name: "Organizácia",
                placeholder: "napr. Coursera, Udemy, Google...",
            },
            link: {
                name: "Odkaz",
                placeholder: "napr. https://www.coursera.org/...",
            },
            describe: {
                name: "Popis",
                placeholder: "Stručne opíšte, čo ste sa naučili alebo dosiahli...",
            },
            from: "Začiatok",
            end: "Koniec"
        },
        project: {
            name: "Projekt",
            title: {
                name: "Názov",
                placeholder: "napr. Projekt analýzy dát...",
            },
            technology: {
                name: "Technológie",
                placeholder: "napr. React, Python, Node.js...",
            },
            link: {
                name: "Git / Demo",
                placeholder: "napr. https://github.com/username/project...",
            },
            describe: {
                name: "Popis",
                placeholder: "Stručne opíšte projekt, vašu úlohu a výsledok...",
            },
        },
        interests: {
            name: "Záujmy a koníčky",
            placeholder: "Uveďte niekoľko záujmov (napr. šport, programovanie, dobrovoľníctvo...)",
        }
    },

    actions: {
        addWork: "Pridať pracovnú skúsenosť",
        addSkill: "Pridať zručnosť",
        addPhoto: "Nahrať fotografiu",
        addLanguage: "Pridať jazyk",
        addEducation: "Pridať vzdelanie",
        addCourse: "Pridať kurz",
        addProject: "Pridať projekt",
        exportPdf: "PDF",
    },

    options: {
        skills: {
            0: "Vyberte úroveň...",
            1: "Začiatočník",
            2: "Junior",
            3: "Stredne pokročilý",
            4: "Pokročilý",
            5: "Expert",
        },
        language: {
            0: "Vyberte úroveň jazyka...",
            1: "A1 - Začiatočník",
            2: "A2 - Základy",
            3: "B1 - Mierne pokročilý",
            4: "B2 - Stredne pokročilý",
            5: "C1 - Pokročilý",
            6: "C2 - Plynulý",
            7: "Materinský jazyk",
        },
    },

    date: {
        months : [
            "Január",
            "Február",
            "Marec",
            "Apríl",
            "Máj",
            "Jún",
            "Júl",
            "August",
            "September",
            "Október",
            "November",
            "December",
        ],
    },

};
