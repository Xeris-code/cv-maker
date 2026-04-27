import { CvState, CvAction, Factory, CollectionKey } from "@/lib/types";


const factories: Factory = {
    skills: (id: number) => ({ id: id, name: "", level: 0}),
    languages: (id: number) => ({ id: id, name: "", level: 0}),
    work: (id: number) => ({id: id, start: {month: "", year: 0}, end: {month: "", year: 0}, present: false, position: "", company: "", city: "", state: "", description: "",  tasks: [] }),
    education: (id: number) => ({id: id, start: {year: 0}, end: {year: 0}, present: false, faculty: "", university: "", field: "", degree: "", city: "", state: "", description: ""}),
    courses: (id: number) => ({id: id, name: "", org: "", description: "", start: {month: "", year: 0}, end: {month: "", year: 0}, url: "" }),
    projects: (id: number) => ({id: id, name: "", description: "", tech: "", url: "" }),
};

function addItem<T extends CollectionKey>(collection: CvState[T], factoryType: T): CvState[T]{

    return {items: [...collection.items, factories[factoryType](collection.nextId)], nextId: collection.nextId + 1} as CvState[T];
};

function deleteItem<T extends CollectionKey>(collection: CvState[T], id: number): CvState[T]{

    return {items: collection.items.filter((item) => item.id != id), nextId: collection.nextId} as CvState[T];
};

export function cvReducer(state: CvState, action: CvAction): CvState {
    switch(action.type) {
        case "ADD":
            return {...state, [action.target]: addItem(state[action.target], action.target)}

        case "DELETE":
            return {...state, [action.target]: deleteItem(state[action.target], action.id)}

        case "SET":
            return {...state, [action.target]: action.value}

        case "SWITCH":
            return {...state, [action.target]: action.value}

        case "UPDATE":
            return {...state, [action.target]: {items: state[action.target].items.map((item) => item.id === action.id ? { ...item, [action.field]: action.value } : item), nextId: state[action.target].nextId}}

        case "SET_BASICS_FIELD":
            return {...state, basics: {...state.basics, [action.field]: action.value}}
        
        case "SET_BIRTH_FIELD":
            return {...state, birth: {...state.birth, [action.field]: action.value}}

        default:
            return state
    };
};

