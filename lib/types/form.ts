import { SkillLevel, LanguageLevel, WebLanguage, AllowedTemplateType, MenuCategory } from "@/lib/types";

export type DayOption = {
    num: number;
    label: string;
}

export type MonthOption = {
    num: number;
    label: string;
    name: string;
}

export type YearOption = {
    num: number;
    label: string;
}

export type BasicInformation = {
    name: string;
    surname: string;
    titleActive: boolean;
    titleFront: string;
    titleBack: string;
    position: string;
    photo: string | null;
    summary: string;
    driving: string;
    mail: string;
    portfolio: string;
    phone: string;
    adress_city: string;
    adress_state: string;
};

export type BirthDate = {
    day: number;
    month: number;
    year: number;
};

export type Skill = {
    id: number;
    name: string;
    level: SkillLevel;
};

export type Interest = {
    id: number;
    name: string;
};

export type Language = {
    id: number,
    name: string,
    level: LanguageLevel
};

export type WorkExperience = {
    id: number;
    start: {month: number, year: number};
    end: {month: number, year: number};
    present: boolean;
    position: string;
    company: string;
    city: string;
    state: string;
    description: string;
    tasks: string[];
};

export type Education = {
    id: number;
    start: {month: number, year: number};
    end: {month: number, year: number};
    faculty: string;
    university: string;
    field: string;
    degree: string;
    city: string;
    state: string;
    description: string;
};

export type CoursesCertificates = {
    id: number;
    name: string;
    org: string;
    description: string;
    date: {month: number, year: number};
    url: string;
};

export type Projects = {
    id: number;
    name: string;
    description: string;
    tech: string;
    url: string;
};

export type CollectionState<T> = {
    items: T[];
    nextId: number;
};

export type CvState = {
    webLang: WebLanguage,
    template: AllowedTemplateType,
    templateSelector: boolean,
    menu: MenuCategory,
    basics: BasicInformation,
    birth: BirthDate,
    interests: CollectionState<Interest>,
    skills: CollectionState<Skill>,
    languages: CollectionState<Language>,
    work: CollectionState<WorkExperience>,
    education: CollectionState<Education>,
    courses: CollectionState<CoursesCertificates>,
    projects: CollectionState<Projects>,
};

export type CollectionKey = {
    [K in keyof CvState]: CvState[K] extends CollectionState<any> ? K : never
}[keyof CvState];

export type StringKey = {
    [K in keyof CvState]: CvState[K] extends string ? K : never
}[keyof CvState];

export type BoolKey = {
    [K in keyof CvState]: CvState[K] extends boolean ? K : never
}[keyof CvState];

export type CollectionItem<T extends CollectionKey> = CvState[T] extends CollectionState<infer U> ? U : never;

export type SingleUpdateAction<
    T extends CollectionKey,
    F extends keyof CollectionItem<T>
> = { type: "UPDATE"; target: T; id: number; field: F; value: CollectionItem<T>[F] };

export type OnCollectionChange = <
    T extends CollectionKey,
    F extends Extract<keyof CollectionItem<T>, string>,
>( target: T, id: number, field: F, value: CollectionItem<T>[F] ) => void;



export type UpdateActionType = {
    [T in CollectionKey]:
    {[F in keyof CollectionItem<T>]: SingleUpdateAction<T, F>}[keyof CollectionItem<T>];
}[CollectionKey];

export type Factory = {
    [K in CollectionKey]: (id: number) => CvState[K] extends CollectionState<infer T> ? T : never
};

export type CvAction = 
    | { type: "ADD", target: CollectionKey }
    | { type: "DELETE", target: CollectionKey, id: number }
    | { type: "SET", target: StringKey, value: string }
    | { type: "SWITCH", target: BoolKey, value: boolean }
    | UpdateActionType
    | { type: "SET_BASICS_FIELD", field: keyof BasicInformation, value: BasicInformation[keyof BasicInformation] }
    | { type: "SET_BIRTH_FIELD", field: keyof BirthDate, value: number | null }
    | { type: "LOAD_DEMO" }
    | { type: "CLEAR" }
    | { type: "LOAD_SAVED", value: CvState}
    | { type: "REORDER_COLLECTION", target: CollectionKey, items: CvState[CollectionKey]["items"]}

