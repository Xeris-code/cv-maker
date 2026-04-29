import { useReducer, useEffect, useState } from "react";
import { cvReducer, initialState } from "@/lib/reducer";
import { translations } from "@/lib/i18n";
import { Sidebar, BuilderPanel } from "../builder";
import { WebLanguage, TemplateOption, AllowedTemplateType, MenuCategory, CollectionKey, BasicInformation, BirthDate, SingleUpdateAction, OnCollectionChange, CollectionItem, CvAction } from "@/lib/types";
import { VisualClassicTemplate, VisualGraphicTemplate, VisualCentralizedTemplate, VisualInitialTemplate, VisualModernTemplate } from "@/components/templates";
import { PreviewPanel } from "@/components/preview";

import { MainLayout, Header, TemplateSelector} from "@/components/app";
import { MobileLayout } from "./MobileLayout";
import { MobileHeader } from "./MobileHeader";
import { MobileSelector } from "./MobileSelector";
import { MobileMenuSwitcher } from "./MobileMenuSwticher";

const STORAGE_KEY = "cv-maker-state"

function useIsMobileDevice() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const forcedMobile = new URLSearchParams(window.location.search).get("mobile");

    if (forcedMobile === "true") {
      setIsMobile(true);
      return;
    }

    if (forcedMobile === "false") {
      setIsMobile(false);
      return;
    }

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const touchDevice = navigator.maxTouchPoints > 0;

    setIsMobile(coarsePointer || touchDevice);
  }, []);

  return isMobile;
}

export function AppShell(){

    const [state, dispatch] = useReducer(cvReducer, initialState);
    const [mobileView, setMobileView] = useState<"builder" | "preview">("preview");
    const [forceDesktop, setForceDesktop] = useState(false);
    const isMobile = useIsMobileDevice();
    const finalIsMobile = forceDesktop ? false : isMobile;

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return;

            const saved = JSON.parse(stored);

            const mergedState = {
            ...initialState,
            ...saved,
            basics: {
                ...initialState.basics,
                ...saved.basics,
            },
            work: saved.work ?? initialState.work,
            education: saved.education ?? initialState.education,
            skills: saved.skills ?? initialState.skills,
            languages: saved.languages ?? initialState.languages,
            courses: saved.courses ?? initialState.courses,
            projects: saved.projects ?? initialState.projects,
            };

            dispatch({
            type: "LOAD_SAVED",
            value: mergedState,
            });
        } catch {
            localStorage.removeItem(STORAGE_KEY);
        }
        }, []
    );

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        } catch {}
    }, [state]);

    const [scale, setScale] = useState(1);

    useEffect(() => {
        const update = () => {
            const widthScale = window.innerWidth / 794;
            setScale(Math.min(widthScale, 1));
        };

        update();
        window.addEventListener("resize", update);

        return () => window.removeEventListener("resize", update);
    }, []);

    useEffect(() => {
        const afterPrint = () => {
            setForceDesktop(false);
        };

        window.addEventListener("afterprint", afterPrint);

        return () => window.removeEventListener("afterprint", afterPrint);
    }, []);

    const t = translations[state.webLang];

    const templates: TemplateOption[] = [
        { type: "classic", label: t.templates.classic, visual: VisualClassicTemplate },
        { type: "modern", label: t.templates.modern, visual: VisualModernTemplate },
        { type: "graphic", label: t.templates.graphic, visual: VisualGraphicTemplate },
        { type: "initial", label: t.templates.initial, visual: VisualInitialTemplate },
        { type: "centralized", label: t.templates.centralized, visual: VisualCentralizedTemplate },
      ];
    
    const handleLanguageChange = ( language: WebLanguage ) => { 
        dispatch({ type: "SET", target: "webLang", value: language });
    };
    
    const handleToggleTemplateSelector = () => {
        dispatch({ type: "SWITCH", target: "templateSelector", value: !state.templateSelector });
    };
    
    const handlePrint = () => {
        if (isMobile) {
            setForceDesktop(true);
            
            setTimeout(() => {
                window.print();
            }, 400);
        } else {
            window.print();
        }
    };

    const handleDemo = () => {
        dispatch({ type: "LOAD_DEMO" });
    };

    const handleReset = () => {
        dispatch({ type: "CLEAR" });
    };

    const handleTemplateChange = ( template: AllowedTemplateType ) => {
        dispatch({ type: "SET", target: "template", value: template });
    };

    const handleMenuChange = ( menu: MenuCategory ) => {
        dispatch({ type: "SET", target: "menu", value: menu});
    };

    const handleCurrentPositionChange = ( value: string ) => {
        dispatch({ type: "SET", target: "currentPosition", value: value});
    };

    const addToCollection = ( key: CollectionKey ) => {
        dispatch({ type: "ADD", target: key });
    };

    function updateCollectionItem<T extends CollectionKey, F extends Extract<keyof CollectionItem<T>, string>>(
        target: T, id: number, field: F, value: CollectionItem<T>[F]
    ): CvAction {
        const action: SingleUpdateAction<T, F> = { type: "UPDATE", target, id, field, value};
        return action as CvAction;
    };

    const handleCollectionChange: OnCollectionChange = (target, id, field, value) => {
        dispatch(updateCollectionItem(target, id, field, value))
    };
    
    const deleteCollectionItem = ( key: CollectionKey, id: number ) => {
        dispatch({ type: "DELETE", target: key, id: id });
    };

    const handlePersonalChange = ( field: keyof BasicInformation, value: BasicInformation[keyof BasicInformation]) => {
        dispatch({ type: "SET_BASICS_FIELD", field: field, value: value });
    };

    const handleBirthChange = ( field: keyof BirthDate, value: BirthDate[keyof BirthDate]) => {
        dispatch({ type: "SET_BIRTH_FIELD", field: field, value: value });
    };


    if (isMobile === null) {
        return null;
    }

    return finalIsMobile ? (
        <MobileLayout
            header={
                <MobileHeader
                    appTitle={t.app.name}
                    printButtonTitle={t.actions.exportPdf}
                    demoTitle={t.actions.demo}
                    resetTitle={t.actions.reset}
                    language={state.webLang}
                    templateSelector={state.templateSelector}
                    onLanguageChange={handleLanguageChange}
                    onToggleTemplateSelector={handleToggleTemplateSelector}
                    onPrint={handlePrint}
                    onDemo={handleDemo}
                    onReset={handleReset}
                />
            }
            selector={
                <MobileSelector
                    templates={templates} 
                    selectorActive={state.templateSelector}
                    selectedTemplate={state.template}
                    onTemplateChange={handleTemplateChange}
                />
            }
        >
            <div className="pb-20">
    {mobileView === "preview" ? (
      <div className="pt-1 h-[calc(100vh-140px)] overflow-y-auto overflow-x-hidden flex justify-center">
        <div
            style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            }}
        >
        <div className="w-[794px] h-[1123px]">
            <PreviewPanel
                state={state}
                t={t}
                styleWrapper="bg-transparent p-0"
                stylePage="cv-page"
            />
          </div>
        </div>
      </div>
    ) : (
    <>
        <MobileMenuSwitcher
        activeMenu={state.menu}
        onMenuChange={handleMenuChange}
        translations={t.sections.common}
        />

        <BuilderPanel
        state={state}
        t={t}
        onAdd={addToCollection}
        onDelete={deleteCollectionItem}
        onBirthChange={handleBirthChange}
        onCurrentPositionChange={handleCurrentPositionChange}
        onPersonalChange={handlePersonalChange}
        onCollectionChange={handleCollectionChange}
        />
    </>
    )}
  </div>

  <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 shadow-lg">
    <div className="mx-auto flex max-w-md gap-2">
      <button
        type="button"
        onClick={() => setMobileView("builder")}
        className={`flex-1 rounded-lg py-2 text-sm font-semibold ${
          mobileView === "builder"
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Edit
      </button>

      <button
        type="button"
        onClick={() => setMobileView("preview")}
        className={`flex-1 rounded-lg py-2 text-sm font-semibold ${
          mobileView === "preview"
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        Preview
      </button>
    </div>
  </div>
        </MobileLayout>
    )
    : (<MainLayout 
            header = {
                <Header 
                    appTitle={t.app.name}
                    appDescription={t.app.description}
                    printButtonTitle={t.actions.exportPdf}
                    demoTitle={t.actions.demo}
                    resetTitle={t.actions.reset}
                    language={state.webLang}
                    templateSelector={state.templateSelector}
                    onLanguageChange={handleLanguageChange}
                    onToggleTemplateSelector={handleToggleTemplateSelector}
                    onPrint={handlePrint}
                    onDemo={handleDemo}
                    onReset={handleReset}
                />}
            selector = {
                <TemplateSelector 
                    templates={templates} 
                    selectorActive={state.templateSelector}
                    selectedTemplate={state.template}
                    onTemplateChange={handleTemplateChange}
                />}
            sidebar = {
                <Sidebar
                    activeMenu={state.menu}
                    translations={t.sections.common}
                    onMenuChange={handleMenuChange}
                />}
        >
            <BuilderPanel
                state={state}
                t={t}
                onAdd={addToCollection}
                onDelete={deleteCollectionItem}
                onBirthChange={handleBirthChange}
                onCurrentPositionChange={handleCurrentPositionChange}
                onPersonalChange={handlePersonalChange}
                onCollectionChange={handleCollectionChange}
            />
            <PreviewPanel
                state={state}
                t={t}
            />
        </MainLayout>
    );
};