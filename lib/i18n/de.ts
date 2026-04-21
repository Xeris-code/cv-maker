import { TranslationSchema } from "./types";

export const de: TranslationSchema = {

    app: {
        name: "CV - Maker",
        description: "Erstellen Sie Ihren Lebenslauf schnell und kostenlos.",
    },
    common: {},

    sections: {
        common: {
            personal: "Persönliche Daten",
            contacts: "Kontakt",
            work: "Berufserfahrung",
            education: "Ausbildung",
            courses: "Kurse / Zertifikate",
            skills: "Fähigkeiten",
            languages: "Sprachen",
            interests: "Interessen & Hobbys",
            projects: "Projekte",
        },
        form: {
            name: "Formular",
        },
        preview: {},
    },

    fields: {
        firstName: {
            name: "Vorname",
            placeholder: "z.B. Peter",
        },
        lastName: {
            name: "Nachname",
            placeholder: "z.B. Smith",
        },
        title: {
            name: "Titel",
            front: {
                name: "Titel vor dem Namen",
                placeholder: "z.B. Dr., Ing."
            },
            back: {
                name: "Titel nach dem Namen",
                placeholder: "z.B. PhD."
            },
        },
        birth: {
            name: "Geburtsdatum",
            day: "Tag",
            month: "Monat",
            year: "Jahr",
        },
        email: {
            name: "E-Mail",
            placeholder: "z.B. peter@email.com"
        },
        phone: {
            name: "Telefonnummer",
            placeholder: "z.B. +421 901 234 567",
        },
        address: {
            name: "Adresse",
            city: {
                name: "Stadt",
                placeholder: "z.B. London",
            },
            state: {
                name: "Land",
                placeholder: "z.B. Deutschland",
            },
        },
        photo: {
            name: "Foto",
            placeholder: "JPG oder PNG. Max. Größe 5MB.",
        },
        summary: {
            name: "Zusammenfassung",
            placeholder: "Schreiben Sie eine kurze Zusammenfassung über sich...",
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
                placeholder: "z.B. Softwareentwickler",
            },
            company: {
                name: "Unternehmen",
                placeholder: "z.B. Google",
            },
            city: {
                name: "Stadt",
                placeholder: "z.B. Bratislava",
            },
            state: {
                name: "Land",
                placeholder: "z.B. Slowakei",
            },
            describe: {
                name: "Beschreibung",
                placeholder: "Beschreiben Sie kurz Ihre Aufgaben, Erfolge oder Technologien...",
            },
            present: "Heute",
            from: "Von",
            end: "Bis",
        },
        education: {
            name: "Education",
            faculty: {
                name: "Fakultät",
                placeholder: "z.B. Fakultät für Management",
            },
            university: {
                name: "Universität",
                placeholder: "z.B. Comenius Universität",
            },
            field: {
                name: "Fachrichtung",
                placeholder: "z.B. Physik, Management, IT",
            },
            city: {
                name: "Stadt",
                placeholder: "z.B. Bratislava",
            },
            state: {
                name: "Land",
                placeholder: "z.B. Slowakei",
            },
            degree: {
                name: "Abschluss",
                placeholder: "z.B. Bachelor, Master",
            },
            describe: {
                name: "Beschreibung",
                placeholder: "Optional: Erfolge, relevante Kurse, Abschlussarbeit...",
            },
            present: "Heute",
            from: "Von",
            end: "Bis",
        },
        courses: {
            name: "Zertifikat",
            title: {
                name: "Name",
                placeholder: "z.B. Google Data Analytics Zertifikat...",
            },
            organization: {
                name: "Organisation",
                placeholder: "z.B. Coursera, Udemy, Google...",
            },
            link: {
                name: "Link",
                placeholder: "z.B. https://www.coursera.org/...",
            },
            describe: {
                name: "Beschreibung",
                placeholder: "Beschreiben Sie kurz, was Sie gelernt oder erreicht haben...",
            },
            from: "Start",
            end: "Ende"
        },
        project: {
            name: "Projekt",
            title: {
                name: "Name",
                placeholder: "z.B. Datenanalyse-Projekt...",
            },
            technology: {
                name: "Technologien",
                placeholder: "z.B. React, Python, Node.js...",
            },
            link: {
                name: "Git / Demo",
                placeholder: "z.B. https://github.com/username/project...",
            },
            describe: {
                name: "Beschreibung",
                placeholder: "Beschreiben Sie das Projekt, Ihre Rolle und das Ergebnis...",
            },
        },
        interests: {
            name: "Interessen & Hobbys",
            placeholder: "Nennen Sie einige Interessen (z.B. Sport, Programmieren, Ehrenamt...)",
        }
    },

    actions: {
        addWork: "Berufserfahrung hinzufügen",
        addSkill: "Fähigkeit hinzufügen",
        addPhoto: "Foto hochladen",
        addLanguage: "Sprache hinzufügen",
        addEducation: "Ausbildung hinzufügen",
        addCourse: "Kurs hinzufügen",
        addProject: "Projekt hinzufügen",
        exportPdf: "PDF",
    },

    options: {
        skills: {
            0: "Niveau auswählen...",
            1: "Anfänger",
            2: "Junior",
            3: "Mittelstufe",
            4: "Fortgeschritten",
            5: "Experte",
        },
        language: {
            0: "Sprachniveau auswählen...",
            1: "A1 - Anfänger",
            2: "A2 - Grundkenntnisse",
            3: "B1 - Mittelstufe",
            4: "B2 - Gute Kenntnisse",
            5: "C1 - Fortgeschritten",
            6: "C2 - Fließend",
            7: "Muttersprache",
        },
    },

    date: {
        months : [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
        ],
    },

};
