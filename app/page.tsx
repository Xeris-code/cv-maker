"use client";

import { useReducer } from "react";
import { cvReducer, initialState } from "@/lib/cvReducer";

import HeadingPreview from "../components/preview/HeadingPreview";
import AddWork from "@/components/preview/AddWork";
import AddCourse from "@/components/preview/AddCourse";
import { Mail, MapPinHouse, Phone, Cake } from "lucide-react";

import { WorkExperience, Education,
    CoursesCertificates, Projects, 
  } from "../lib/types"

import AddEducation from "@/components/preview/AddEducation";
import AddProject from "@/components/preview/AddProject";


import { translations } from "@/lib/translations";
import MainHeader from "@/components/MainHeader";
import BuilderSidebar from "@/components/builder/BuilderSidebar";
import BuilderForms from "@/components/builder/BuilderForms";
import CvPreview from "@/components/cv/CvPreview";
import TemplateCarousel from "@/components/cv/TemplateCarousel";

/*
app name 32-40px
section form 18-22px
label 13-14px
input text 15-16px
*/

export default function Page() {
  

  const [state, dispatch] = useReducer(cvReducer, initialState)
  const {basics, birth, skills, langs, work, education, courses, projects} = state
  const t = translations[state.webLang]

  const hasBirth = birth.day || birth.month || birth.year


  return <main className="app-shell bg-[#F8FAFC] min-h-screen min-w-max">
    {/* Header Wrapper */}
    <MainHeader state={state} dispatch={dispatch} t={t}/>
    {/* Main Wrapper */}
    <div className={`mx-auto max-w-6xl px-6 py-2 ${state.templateWindow ? null : "hidden"}`}>
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