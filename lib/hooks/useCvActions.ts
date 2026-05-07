import { 
    CvAction, AllowedTemplateType, MenuCategory, CollectionKey,
    CollectionItem, SingleUpdateAction, OnCollectionChange,
    BasicInformation, BirthDate, CvState, WebLanguage

} from "../types";

function updateCollectionItem<T extends CollectionKey, F extends Extract<keyof CollectionItem<T>, string>>(
    target: T, id: number, field: F, value: CollectionItem<T>[F]
): CvAction {
    const action: SingleUpdateAction<T, F> = { type: "UPDATE", target, id, field, value};
    return action as CvAction;
};

export function useCvActions(dispatch: React.Dispatch<CvAction>){

    const handleDemo = () => {
        dispatch({ type: "LOAD_DEMO" });
    };

    const handleReset = () => {
        dispatch({ type: "CLEAR" });
    };

    const handleLanguageChange = ( language: WebLanguage ) => { 
        dispatch({ type: "SET", target: "webLang", value: language });
    };

    const handleToggleTemplateSelector = (state: CvState) => {
        dispatch({ type: "SWITCH", target: "templateSelector", value: !state.templateSelector });
    };

    const handleTemplateChange = ( template: AllowedTemplateType ) => {
        dispatch({ type: "SET", target: "template", value: template });
    };

    const handleMenuChange = ( menu: MenuCategory ) => {
        dispatch({ type: "SET", target: "menu", value: menu});
    };

    const handleAddToCollection = ( key: CollectionKey ) => {
        dispatch({ type: "ADD", target: key });
    };

    const handleCollectionChange: OnCollectionChange = (target, id, field, value) => {
        dispatch(updateCollectionItem(target, id, field, value))
    };

    const handleDeleteCollectionItem = ( key: CollectionKey, id: number ) => {
        dispatch({ type: "DELETE", target: key, id: id });
    };

    const handlePersonalChange = ( field: keyof BasicInformation, value: BasicInformation[keyof BasicInformation]) => {
        dispatch({ type: "SET_BASICS_FIELD", field: field, value: value });
    };

    const handleBirthChange = ( field: keyof BirthDate, value: BirthDate[keyof BirthDate]) => {
        dispatch({ type: "SET_BIRTH_FIELD", field: field, value: value });
    };
    
    const handleReorder = ( target: CollectionKey, items: CvState[CollectionKey]["items"]) => {
        dispatch({ type: "REORDER_COLLECTION", target: target, items: items });
    };

    return {
        handleDemo,
        handleReset,
        handleReorder,
        handleBirthChange,
        handleAddToCollection,
        handleDeleteCollectionItem,
        handleCollectionChange,
        handlePersonalChange,
        handleMenuChange,
        handleTemplateChange,
        handleLanguageChange,
        handleToggleTemplateSelector,
    };
};