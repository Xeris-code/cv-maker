"use client";

import { useReducer } from "react";
import { cvReducer, initialState } from "@/lib/reducer/cvReducer";

import { translations } from "@/lib/i18n"
import MainHeader from "@/components/builder/MainHeader";
import BuilderSidebar from "@/components/builder/BuilderSidebar";
import BuilderForms from "@/components/builder/BuilderForms";
import CvPreview from "@/components/cv/CvPreview";
import TemplateCarousel from "@/components/cv/TemplateCarousel";


export default function Page() {
  

  const [state, dispatch] = useReducer(cvReducer, initialState)
  const t = translations[state.webLang]


  return <main className="app-shell bg-[#F8FAFC] min-h-screen min-w-max">
    {/* Header Wrapper */}
    <MainHeader state={state} dispatch={dispatch} t={t}/>
    {/* Main Wrapper */}
    <div className={`mx-auto max-w-6xl px-6 py-2 ${state.templateSelector ? null : "hidden"}`}>
      <TemplateCarousel
        selectedTemplate={state.template}
        dispatch={dispatch}
      />
    </div>
    <div className="app-layout border-b-2 border-t-2 border-[#E2E8F0]">
      {/* Menu Window */}
      <BuilderSidebar state={state} dispatch={dispatch} t={t}/>
      {/* Form Window */}
      <BuilderForms state={state} dispatch={dispatch} t={t}/>
      {/* Preview Window */}
      <CvPreview state={state} t={t}/>
    </div>
  </main>;
}