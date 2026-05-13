import { TranslationSchema } from "../types";

export const de = {
  ui: {
    app: {
      name: "CV Maker",
      description: "Erstellen Sie schnell und kostenlos Ihren professionellen Lebenslauf.",
      progressBar: "vollendet",
      page: "Page",
      tips: {
        title: "Pro Tipp",
        items: [
          "Füllen Sie alle Abschnitte aus, um einen vollständigen und professionellen Lebenslauf zu erstellen.",
          "Verwenden Sie konkrete Ergebnisse statt vager Aussagen.",
          "Passen Sie Ihren Lebenslauf an jede Stelle an, auf die Sie sich bewerben.",
          "Nutzen Sie aktive Verben wie „erstellt“, „entwickelt“ oder „verbessert“.",
          "Halten Sie Ihren Lebenslauf klar, kurz und leicht lesbar.",
          "Konzentrieren Sie sich auf relevante Erfahrungen statt auf alles, was Sie gemacht haben.",
          "Vermeiden Sie lange Absätze - verwenden Sie nach Möglichkeit Stichpunkte.",
          "Heben Sie Ihre Erfolge hervor, nicht nur Ihre Aufgaben.",
          "Achten Sie auf ein einheitliches Format in allen Abschnitten.",
          "Überprüfen Sie immer Rechtschreibung und Grammatik.",
          "Versuchen Sie, Ihren Lebenslauf auf 1-2 Seiten zu halten.",
          "Recruiter überfliegen einen Lebenslauf oft nur wenige Sekunden - nutzen Sie diese Zeit.",
        ],
      },
    },

    languages: {
      en: "Englisch",
      sk: "Slowakisch",
      de: "Deutsch",
    },

    actions: {
      preview: "Vorschau",
      printPDF: "PDF herunterladen",
      exportJSON: "JSON exportieren",
      demo: "Demo",
      reset: "Zurücksetzen",
    },

    tooltip: {
      edit: "Edit",
      delete: "Delete",
      confirm: "Done"
    },

    sections: {
      personal: {
        title: "Persönliche Daten",
        description: "Fügen Sie Ihre persönlichen Daten und Kontaktinformationen hinzu.",
        fields: {
          firstName: {
            name: "Vorname",
            placeholder: "z. B. Peter",
          },
          lastName: {
            name: "Nachname",
            placeholder: "z. B. Schmidt",
          },
          title: {
            name: "Titel",
            front: {
              name: "Vor dem Namen",
              placeholder: "z. B. Dr., Dipl.-Ing.",
            },
            back: {
              name: "Nach dem Namen",
              placeholder: "z. B. PhD.",
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
            placeholder: "z. B. peter@email.com",
          },
          portfolio: {
            name: "Portfolio / Website",
            placeholder: "z. B. github.com/PeterSchmidt",
          },
          phone: {
            name: "Telefonnummer",
            placeholder: "z. B. +49 170 1234567",
          },
          address: {
            name: "Adresse",
            city: {
              name: "Stadt",
              placeholder: "z. B. Berlin",
            },
            state: {
              name: "Land",
              placeholder: "z. B. Deutschland",
            },
          },
          photo: {
            name: "Foto",
            placeholder: "JPG oder PNG. Max. Größe 5 MB.",
          },
          summary: {
            name: "Zusammenfassung",
            title: "Persönliches Profil",
            placeholder: "Schreiben Sie eine kurze Zusammenfassung Ihres Profils...",
          },
          position: {
            name: "Aktuelle Position",
            placeholder: "Geben Sie Ihre aktuelle Position ein, falls vorhanden...",
          },
        },
        addPhoto: "Foto hochladen",
        toggleButton: "Titel anzeigen",
      },
      skills: {
        title: "Kenntnisse",
        description: "Fügen Sie Ihre technischen Kenntnisse hinzu.",
        placeholder: "z. B. Word, Excel",
        add: "Kenntnis hinzufügen",
        items: "Kenntnisse",
      },
      languages: {
        title: "Sprachen",
        description: "Fügen Sie Ihre gesprochenen Sprachen hinzu.",
        add: "Sprache hinzufügen",
        items: "Sprachen",
        placeholder: "z. B. Englisch, Deutsch",
      },
      work: {
        title: "Berufserfahrung",
        description: "Fügen Sie Ihre beruflichen Erfahrungen und Rollen hinzu.",
        add: "Erfahrung hinzufügen",
        items: "Positionen",
        present: "Aktuell",
        from: "Von",
        end: "Bis",
        fields: {
          position: {
            name: "Position",
            placeholder: "z. B. Software Engineer",
          },
          company: {
            name: "Unternehmen",
            placeholder: "z. B. Google",
          },
          city: {
            name: "Stadt",
            placeholder: "z. B. Berlin",
          },
          state: {
            name: "Land",
            placeholder: "z. B. Deutschland",
          },
          describe: {
            name: "Beschreibung",
            placeholder: "Beschreiben Sie kurz Ihre Aufgaben, Erfolge oder verwendeten Technologien...",
          },
        },
      },
      education: {
        title: "Ausbildung",
        description: "Fügen Sie Ihren akademischen Hintergrund hinzu.",
        add: "Ausbildung hinzufügen",
        items: "Ausbildungen",
        from: "Von",
        end: "Bis",
        fields: {
          faculty: {
            name: "Fakultät",
            placeholder: "z. B. Fakultät für Management",
          },
          university: {
            name: "Universität",
            placeholder: "z. B. Comenius-Universität",
          },
          field: {
            name: "Fachrichtung",
            placeholder: "z. B. Physik, Management, IT",
          },
          city: {
            name: "Stadt",
            placeholder: "z. B. Berlin",
          },
          state: {
            name: "Land",
            placeholder: "z. B. Deutschland",
          },
          degree: {
            name: "Abschluss",
            placeholder: "z. B. Bachelor, Master",
            of: "der",
          },
          describe: {
            name: "Beschreibung",
            placeholder: "Optional: Erfolge, relevante Kurse, Abschlussarbeit...",
          },
        },
      },
      courses: {
        title: "Kurse / Zertifikate",
        description: "Fügen Sie relevante Kurse und Zertifikate hinzu.",
        add: "Kurs hinzufügen",
        items: "Kurse",
        date: "Date",
        fields: {
          title: {
            name: "Name",
            placeholder: "z. B. Google Data Analytics Certificate...",
          },
          organization: {
            name: "Organisation",
            placeholder: "z. B. Coursera, Udemy, Google...",
          },
          link: {
            name: "Link",
            placeholder: "z. B. https://www.coursera.org/...",
          },
          describe: {
            name: "Beschreibung",
            placeholder: "Beschreiben Sie kurz, was Sie gelernt, erreicht oder worauf Sie sich konzentriert haben...",
          },
        },
      },
      projects: {
        title: "Projekte",
        description: "Fügen Sie persönliche oder berufliche Projekte hinzu.",
        add: "Projekt hinzufügen",
        items: "Projekte",
        fields: {
          title: {
            name: "Name",
            placeholder: "z. B. CV Maker App",
          },
          technology: {
            name: "Technologien",
            placeholder: "z. B. React, Python, Node.js...",
          },
          link: {
            name: "Git / Demo",
            placeholder: "z. B. https://github.com/username/project...",
          },
          describe: {
            name: "Beschreibung",
            placeholder: "Beschreiben Sie kurz das Projekt, Ihre Rolle und das wichtigste Ergebnis oder die Funktionalität...",
          },
        },
      },
      interests: {
        title: "Interessen & Hobbys",
        description: "Fügen Sie Ihre Interessen und Hobbys hinzu.",
        items: "Einträge",
        fields: {
          placeholder: "Fügen Sie die Interessen einzeln hinzu und drücken Sie nach jedem einzelnen die Eingabetaste ...",
        },
      },
    },

    options: {
      skills: {
        0: "Kenntnisstand auswählen...",
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
        4: "B2 - Fortgeschritten",
        5: "C1 - Sehr fortgeschritten",
        6: "C2 - Verhandlungssicher / fließend",
        7: "Muttersprache",
      },
    },

    date: {
      months: [
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

    templates: {
      classic: "Klassisch",
      modern: "Modern",
      graphic: "Grafisch",
      initial: "Initial",
      centralized: "Zentriert",
    },
  },

  preview: {
    sections: {
        pesonal: {
            name: "Profil",
        },
        contacts: {
            name: "Kontakte",
        },
        skills: {
            name: "Fähigkeiten",
        },
        languages: {
            name: "Sprachen",
        },
        interests: {
            name: "Interessen & Hobbys",
        },
        work: {
            name: "Berufserfahrung",
            present: "Aktuell",
        },
        education: {
            name: "Ausbildung",
        },
        courses: {
            name: "Kurse / Zertifikate",
        },
        projects: {
            name: "Projekte",
        }
    },
  },

} satisfies TranslationSchema;