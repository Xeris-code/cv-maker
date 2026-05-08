import { useReducer, useEffect, useState } from "react";
import { cvReducer, initialState } from "@/lib/reducer";
import { translations } from "@/lib/i18n";
import { Sidebar, BuilderPanel } from "@/components/builder";
import { WebLanguageOptions } from "@/lib/types";
import { PreviewPanel } from "@/components/preview";
import { MainLayout, PrintDocument, Header, MobileLayout, MobileHeader, MobileSelector, MobileMenuSwitcher} from "@/components/app";
import { getSectionCompletion, getTotalCompletion } from "@/lib/helpers";
import { useCvActions } from "@/lib/hooks";
import { getTemplates } from "@/components/templates";

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

    const [scale, setScale] = useState(1);
    const [state, dispatch] = useReducer(cvReducer, initialState);

    const t = translations[state.webLang];
    const actions = useCvActions(dispatch)
    const sectionCompletion = getSectionCompletion(state)
    const totalCompletion = getTotalCompletion(state)
    
    const [mobileView, setMobileView] = useState<"builder" | "preview">("preview");
    const [forceDesktop, setForceDesktop] = useState(false);
    const isMobile = useIsMobileDevice();
    const finalIsMobile = forceDesktop ? false : isMobile;

    const templates = getTemplates(t)

    const languages: WebLanguageOptions = [
        { language: "en", name: t.ui.languages["en"] },
        { language: "sk", name: t.ui.languages["sk"] },
        { language: "de", name: t.ui.languages["de"] },
    ]

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

    if (isMobile === null) {
        return null;
    }

    return finalIsMobile ? (
        <MobileLayout
            header={
                <MobileHeader
                    appTitle={t.ui.app.name}
                    printButtonTitle={t.ui.actions.printPDF}
                    demoTitle={t.ui.actions.demo}
                    resetTitle={t.ui.actions.reset}
                    language={state.webLang}
                    templateSelector={state.templateSelector}
                    onLanguageChange={actions.handleLanguageChange}
                    onToggleTemplateSelector={() => actions.handleToggleTemplateSelector(state)}
                    onPrint={handlePrint}
                    onDemo={actions.handleDemo}
                    onReset={actions.handleReset}
                />
            }
            selector={
                <MobileSelector
                    templates={templates} 
                    selectorActive={state.templateSelector}
                    selectedTemplate={state.template}
                    onTemplateChange={actions.handleTemplateChange}
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
                appTranslations={t.ui.app}
                t={t.preview}
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
        onMenuChange={actions.handleMenuChange}
        translations={t.ui.sections}
        />

        <BuilderPanel
        state={state}
        t={t}
        onAdd={actions.handleAddToCollection}
        onReorder={actions.handleReorder}
        onDelete={actions.handleDeleteCollectionItem}
        onBirthChange={actions.handleBirthChange}
        onPersonalChange={actions.handlePersonalChange}
        onCollectionChange={actions.handleCollectionChange}
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
    : (<>
        <MainLayout 
            header = {
                <Header
                    appTranslations={t.ui.app}
                    uiActions={t.ui.actions}
                    uiLanguage={state.webLang}
                    languageOptions={languages}
                    completion={totalCompletion}
                    onLanguageChange={actions.handleLanguageChange}
                    onPrint={handlePrint}
                    onDemo={actions.handleDemo}
                    onReset={actions.handleReset}
                />}
            selector = {
                <></>}
            sidebar = {
                <Sidebar
                    activeMenu={state.menu}
                    appTranslations={t.ui.app}
                    translations={t.ui.sections}
                    completion={sectionCompletion}
                    onMenuChange={actions.handleMenuChange}
                />}
        >
            <BuilderPanel
                state={state}
                t={t}
                onAdd={actions.handleAddToCollection}
                onReorder={actions.handleReorder}
                onDelete={actions.handleDeleteCollectionItem}
                onBirthChange={actions.handleBirthChange}
                onPersonalChange={actions.handlePersonalChange}
                onCollectionChange={actions.handleCollectionChange}
            />
            <PreviewPanel
                state={state}
                appTranslations={t.ui.app}
                t={t.preview}
            />
        </MainLayout>

        <PrintDocument state={state} t={t.preview}/>
        </>
    );
};