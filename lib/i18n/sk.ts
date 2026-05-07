import { TranslationSchema } from "../types";

export const sk = {
  ui: {
    app: {
      name: "CV Maker",
      description: "Vytvorte si profesionálny životopis rýchlo a zadarmo.",
      progressBar: "vyplnené",
      tips: {
        title: "Pro Tip",
        items: [
          "Vyplňte všetky sekcie, aby váš životopis pôsobil kompletne a profesionálne.",
          "Používajte konkrétne výsledky namiesto všeobecných tvrdení.",
          "Prispôsobte životopis každej pracovnej ponuke.",
          "Používajte akčné slovesá ako „vytvoril“, „navrhol“ alebo „zlepšil“.",
          "Udržujte CV prehľadné, stručné a ľahko čitateľné.",
          "Zamerajte sa na relevantné skúsenosti, nie na všetko, čo ste robili.",
          "Vyhnite sa dlhým odsekom - kde sa dá, použite odrážky.",
          "Zvýraznite úspechy, nie iba zodpovednosti.",
          "Udržujte jednotné formátovanie vo všetkých sekciách.",
          "Vždy si skontrolujte gramatiku a preklepy.",
          "Skúste udržať CV na 1-2 stranách.",
          "Recruiteri často skenujú CV len pár sekúnd - využite ich naplno.",
        ],
      },
    },

    languages: {
      en: "Angličtina",
      sk: "Slovenčina",
      de: "Nemčina",
    },

    actions: {
      preview: "Náhľad",
      printPDF: "Stiahnuť PDF",
      exportJSON: "Exportovať JSON",
      demo: "Demo",
      reset: "Resetovať",
    },

    tooltip: {
      edit: "Upraviť",
      delete: "Odstrániť",
      confirm: "Hotovo",
    },

    sections: {
      personal: {
        title: "Osobné údaje",
        description: "Pridajte svoje osobné a kontaktné údaje.",
        fields: {
          firstName: {
            name: "Meno",
            placeholder: "napr. Peter",
          },
          lastName: {
            name: "Priezvisko",
            placeholder: "napr. Novák",
          },
          title: {
            name: "Titul",
            front: {
              name: "Pred menom",
              placeholder: "napr. Mgr., Ing.",
            },
            back: {
              name: "Za menom",
              placeholder: "napr. PhD.",
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
            placeholder: "napr. peter@email.com",
          },
          portfolio: {
            name: "Portfólio / Web",
            placeholder: "napr. github.com/PeterNovak",
          },
          phone: {
            name: "Telefónne číslo",
            placeholder: "napr. +421 901 234 567",
          },
          address: {
            name: "Adresa",
            city: {
              name: "Mesto",
              placeholder: "napr. Bratislava",
            },
            state: {
              name: "Krajina",
              placeholder: "napr. Slovensko",
            },
          },
          photo: {
            name: "Fotografia",
            placeholder: "JPG alebo PNG. Max. veľkosť 5MB.",
          },
          summary: {
            name: "Zhrnutie",
            title: "Osobný profil",
            placeholder: "Napíšte krátke zhrnutie svojho profilu...",
          },
          position: {
            name: "Aktuálna pozícia",
            placeholder: "Zadajte svoju aktuálnu pozíciu, ak ju máte...",
          },
        },
        addPhoto: "Nahrať fotografiu",
        toggleButton: "Zobraziť titul",
      },
      skills: {
        title: "Zručnosti",
        description: "Pridajte svoje technické zručnosti.",
        placeholder: "napr. Word, Excel",
        add: "Pridať zručnosť",
        items: "zručností",
      },
      languages: {
        title: "Jazyky",
        description: "Pridajte jazyky, ktoré ovládate.",
        add: "Pridať jazyk",
        items: "jazykov",
        placeholder: "napr. angličtina, nemčina",
      },
      work: {
        title: "Pracovné skúsenosti",
        description: "Pridajte svoje pracovné skúsenosti a pozície.",
        add: "Pridať skúsenosť",
        items: "pozícií",
        present: "Súčasnosť",
        from: "Od",
        end: "Do",
        fields: {
          position: {
            name: "Pozícia",
            placeholder: "napr. Software Engineer",
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
            placeholder: "Stručne opíšte svoje zodpovednosti, úspechy alebo použité technológie...",
          },
        },
      },
      education: {
        title: "Vzdelanie",
        description: "Pridajte svoje akademické vzdelanie.",
        add: "Pridať vzdelanie",
        items: "vzdelaní",
        from: "Od",
        end: "Do",
        fields: {
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
            placeholder: "napr. fyzika, manažment, IT",
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
            placeholder: "napr. bakalár, magister",
            of: "/",
          },
          describe: {
            name: "Popis",
            placeholder: "Voliteľné: úspechy, relevantné predmety, záverečná práca...",
          },
        },
      },
      courses: {
        title: "Kurzy / Certifikáty",
        description: "Pridajte relevantné kurzy a certifikáty.",
        add: "Pridať kurz",
        items: "kurzov",
        date: "Dátum",
        fields: {
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
            placeholder: "Stručne opíšte, čo ste sa naučili, dosiahli alebo na čo bol kurz zameraný...",
          },
        },
      },
      projects: {
        title: "Projekty",
        description: "Pridajte svoje osobné alebo pracovné projekty.",
        add: "Pridať projekt",
        items: "projektov",
        fields: {
          title: {
            name: "Názov",
            placeholder: "napr. CV Maker App",
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
            placeholder: "Stručne opíšte projekt, svoju rolu a hlavný výsledok alebo funkcionalitu...",
          },
        },
      },
      interests: {
        title: "Záujmy a koníčky",
        description: "Pridajte svoje záujmy a koníčky.",
        items: "položiek",
        fields: {
          placeholder: "Pridajte jednotlive záujmy a po každom stlačte Enter...",
        },
      },
    },

    options: {
      skills: {
        0: "Vyberte úroveň...",
        1: "Začiatočník",
        2: "Junior",
        3: "Mierne pokročilý",
        4: "Pokročilý",
        5: "Expert",
      },
      language: {
        0: "Vyberte úroveň...",
        1: "A1 - Začiatočník",
        2: "A2 - Základy",
        3: "B1 - Mierne pokročilý",
        4: "B2 - Vyšší pokročilý",
        5: "C1 - Pokročilý",
        6: "C2 - Plynulý / profesionálny",
        7: "Rodný jazyk",
      },
    },

    date: {
      months: [
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

    templates: {
      classic: "Klasický",
      modern: "Moderný",
      graphic: "Grafický",
      initial: "Iniciálový",
      centralized: "Centrovaný",
    },
  },

  preview: {},
} satisfies TranslationSchema;