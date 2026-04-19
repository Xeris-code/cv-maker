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
    <div className="app-layout border-b-2 border-[#E2E8F0]">
      {/* Menu Window */}
      <BuilderSidebar state={state} dispatch={dispatch} t={t}/>

      {/* Form Window */}
      <div className="bg-[#ffffff] border-r-2 border-[#E2E8F0] p-6 print:hidden">
        <BuilderForms state={state} dispatch={dispatch} t={t}/>
        
      </div>

      {/* Preview Window */}
      <div className="preview-panel bg-[#ffffff] p-10">
            <div className="cv-page text-[#1e293b]">
                <div className="flex-col">
              <div className="text-[#ffffff] bg-[#0f172a] min-h-[200px] flex flex-col">
                <div className="pt-5 pl-5">
                    <p className="font-bold text-3xl">{basics.titleFront} {basics.name} {basics.surname} {basics.titleBack}</p>
                </div>
                <div className="flex gap-2">
                  <div className="max-w-2/3 p-5">
                    <p className="text-xs whitespace-pre-line pr-5">{basics.summary}</p>
                  </div>
                </div>
                
              </div>
              <div className="flex">
                  <div className="min-w-2/3">
                    {work.length > 0 && 
                      <div className="p-4 mb-5">
                      <HeadingPreview>Work experience</HeadingPreview>
                      {work.map((w: WorkExperience) => (
                        <AddWork key={`previewWorkField_${w.id}`} work={w}/>
                      ))}
                    </div>}
                    {education.length > 0 && 
                      <div className="p-4 mb-5">
                      <HeadingPreview>Education</HeadingPreview>
                      {education.map((edu: Education) => (
                        <AddEducation key={`previewWorkField_${edu.id}`} education={edu}/>
                      ))}
                    </div>}
                    {courses.length > 0 &&
                      <div className="p-4 mb-5">
                      <HeadingPreview>Courses & Certificates</HeadingPreview>
                      {courses.map((cor: CoursesCertificates) => (
                        <AddCourse key={`previewCourseField_${cor.id}`} course={cor}/>
                      ))}
                    </div>}
                    {projects.length > 0 &&
                      <div className="p-4 mb-5">
                      <HeadingPreview>Projects</HeadingPreview>
                      {projects.map((prj: Projects) => (
                        <AddProject key={`previewProjectField_${prj.id}`} project={prj}/>
                      ))}
                    </div>}
                  </div>
                  
                  <div className="min-w-1/3 bg-[#f3f4f6] relative bottom-30">
                    <div className="flex justify-center">
                      {basics.photo
                        ? <img className="relative border-2 bottom-15 w-[200px] h-[250px] object-cover" src={basics.photo} alt="CV photo"/>
                        : <div className="h-[90px]"></div>
                      }
                    </div>
                    <div className="text-xs  relative bottom-9 w-[240px] flex flex-col gap-3 pl-6">
                      {basics.mail &&
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="text-[#0f172a] shrink-0"/>
                        <p className="font-bold break-words">{basics.mail}</p>
                      </div>}
                      {basics.phone &&
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="text-[#0f172a] shrink-0"/>
                        <p className="font-bold break-words">{basics.phone}</p>
                      </div>}
                      {(basics.adress_city || basics.adress_state) &&
                      <div className="flex items-center gap-3 text-sm">
                        <MapPinHouse className="text-[#0f172a] shrink-0"/>
                        <div className="flex-col">
                          <p className="font-bold  break-words">{`${basics.adress_city}${basics.adress_city && basics.adress_state ? "," : ""}`}</p>
                          <p className="font-bold  break-words">{`${basics.adress_state}`}</p>
                        </div>
                      </div>}
                      {hasBirth && 
                      <div className="flex items-center gap-3 text-sm">
                        <Cake className="text-[#0f172a] shrink-0"/>
                        <p className="font-bold  break-words">{
                          `${birth.day ? birth.day : ""}${birth.day && birth.month ? "." : ""}
                          ${birth.month ? birth.month : ""}${(birth.day || birth.month) && birth.year ? "." : ""}
                          ${birth.year ? birth.year : ""}`
                        }</p>
                      </div>}
                      </div>
                      
                      {basics.interest &&
                      <div className="p-2 mb-5">
                        <HeadingPreview className="text-base">Interests and hobbies</HeadingPreview>
                        <p className="text-sm whitespace-pre-line pl-2 pr-2 pt-3">{basics.interest}</p>
                      </div>}


                      {basics.driving && <div className="p-2 mb-5">
                        <HeadingPreview className="text-base">Driving license</HeadingPreview>
                        <p> tu bude license</p>
                      </div>}
                  </div>
            </div></div>
      </div></div>
    </div>
    
  </main>;
}