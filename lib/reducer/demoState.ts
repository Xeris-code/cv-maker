import { CvState } from "@/lib/types";
import { initialState } from "@/lib/reducer";


export const demoState: CvState = {
  ...initialState,

  basics: {
    ...initialState.basics,
    name: "Peter",
    surname: "Novák",
    mail: "peter.novak@email.com",
    portfolio: "https://github.com/Xeris-code",
    position: "Frontend Developer",
    phone: "+421 900 123 456",
    adress_city: "Bratislava",
    adress_state: "Slovakia",
    summary:
      "Frontend developer focused on building clean, responsive and user-friendly web applications using React and TypeScript.",
  },

  birth: {
    day: 12,
    month: 5,
    year: 1998,
  },

  skills: {
    items: [
      { id: 1, name: "React", level: 4 },
      { id: 2, name: "TypeScript", level: 3 },
      { id: 3, name: "JavaScript", level: 4 },
      { id: 4, name: "CSS / Tailwind", level: 4 },
      { id: 5, name: "Git", level: 3 },
    ], nextId: 6,
  },

  languages: {
    items: [
      { id: 1, name: "Slovak", level: 7 },
      { id: 2, name: "English", level: 6 },
      { id: 3, name: "German", level: 3 },
    ], nextId: 4,
  },

  work: {
    items: [
      {
        id: 1,
        position: "Frontend Developer",
        company: "Tech Solutions s.r.o.",
        city: "Bratislava",
        state: "Slovakia",
        start: { month: 1, year: 2022 },
        end: { month: 3, year: 2024 },
        present: false,
        description:
          "Developed and maintained web applications using React and TypeScript. \n Collaborated with designers to improve UI/UX and optimized performance of existing applications.",
        tasks: [],
      },
      {
        id: 2,
        position: "Junior Web Developer",
        company: "Startup Hub",
        city: "Vienna",
        state: "Austria",
        start: { month: 6, year: 2021 },
        end: { month: 12, year: 2021 },
        present: false,
        description:
          "Worked on internal tools and landing pages using JavaScript and CSS. \n Learned best practices in version control and teamwork.",
        tasks: [],
      },
    ], nextId: 3,
  },

  education: {
    items: [
      {
        id: 1,
        faculty: "Faculty of Informatics",
        university: "Slovak University of Technology",
        field: "Computer Science",
        city: "Bratislava",
        state: "Slovakia",
        degree: "Bachelor",
        start: { month: 9, year: 2017 },
        end: { month: 6, year: 2020 },
        description:
          "Focused on software development, algorithms and web technologies.",
      },
    ], nextId: 2,
  },

  courses: {
    items: [
      {
        id: 1,
        name: "React - The Complete Guide",
        org: "Udemy",
        date: { month: 12, year: 2022 },
        description:
          "Learned advanced React concepts including hooks, state management and performance optimization.",
        url: ""
      },
      {
        id: 2,
        name: "TypeScript Fundamentals",
        org: "Frontend Masters",
        date: { month: 8, year: 2022 },
        description:
          "Deep dive into TypeScript types, generics and best practices.",
        url: ""
      },
    ], nextId: 3,
  },

  projects: {
    items: [
      {
        id: 1,
        name: "CV Maker App",
        tech: "React, TypeScript, Tailwind",
        url: "https://github.com/Xeris-code/cv-maker",
        description:
          "A web application that allows users to build and preview CVs in real-time with multiple templates.",
      },
      {
        id: 2,
        name: "Portfolio Website",
        tech: "Next.js, Tailwind",
        url: "https://your-portfolio.com",
        description:
          "Personal portfolio showcasing projects, skills and experience.",
      },
    ], nextId: 3,
  },
};