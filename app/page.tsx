"use client";

import {useState} from "react";
import Button from "../components/form/Button"

import AddSkill from "../components/preview/AddSkill";
import AddLang from "@/components/preview/AddLang";
import InputText from "../components/form/InputFieldText"
import HeadingForm from "../components/form/HeadingForm";
import ButtonToggle from "../components/form/ButtonToggle";
import InputAddSelectText from "../components/form/InputAdditionText"
import HeadingPreview from "../components/preview/HeadingPreview";
import DateSelect from "@/components/form/DateSelect";
import TextArea from "@/components/form/TextArea";
import AddWork from "@/components/preview/AddWork";
import InputEduField from "@/components/form/InputEduField";
import InputCourseField from "@/components/form/InputCourseField";
import InputProjectField from "@/components/form/InputProjectField";
import AddCourse from "@/components/preview/AddCourse";

import { getSkillOptions, getLangOptions } from "@/lib/constants";

import { newEdu, newWork, newCourse, newProject} from "@/lib/helpers";
import { handleDeleteById, handleChangeById, getPhoto, extendTextArea} from "@/lib/handlers";


import { Mail, MapPinHouse, Phone, Cake, User, BriefcaseBusiness, GraduationCap, LanguagesIcon, Layers, ScrollText, FileUserIcon, BikeIcon, CameraIcon, ContactRoundIcon } from "lucide-react";

import { Skill, Language, BasicInformation,
    BirthDate, WorkExperience, Education,
    CoursesCertificates, Projects, AllowedLanguage,
    TranslationKeys,
    MenuCategory, categoryMenuItem
  } from "../lib/types"

import InputWorkField from "@/components/form/InputWorkField";
import AddEducation from "@/components/preview/AddEducation";
import AddProject from "@/components/preview/AddProject";


import { translations } from "@/lib/translations";
import { styleLanguageSwitchDivider, styleLanguageSwitchWrapper, styleMenuButtonIcon, styleMenuWindow, styleMenuWrapper, stylePrintButton } from "@/lib/styles";
import MenuButton from "@/components/form/MenuButton";
import ButtonLanguageSwitch from "@/components/ButtonLanguageSwitch";
import Label from "@/components/form/Label";

/*
app name 32-40px
section form 18-22px
label 13-14px
input text 15-16px
*/

export default function Page() {

  const handlePrint = () => {
    window.print();
  }

  const categoryMenuList: categoryMenuItem[] = [
{name: "personal", icon: User},
{name: "work", icon: BriefcaseBusiness},
{name: "education", icon: GraduationCap},
{name: "courses", icon:  ScrollText},
{name: "skills", icon: Layers},
{name: "languages", icon: LanguagesIcon},
{name: "interests", icon: BikeIcon},
{name: "projects", icon: FileUserIcon}
  ]

  const [webLang, setWebLang] = useState<AllowedLanguage>("sk")
  const t = (key: TranslationKeys) => translations[webLang][key];
  const tFull = translations[webLang]

  const skillOptions = getSkillOptions(webLang)
  const langOptions = getLangOptions(webLang)

  const [skills, setSkills] = useState<Skill[]>([])
  const [nextSkillId, setNextSkillId] = useState(1)

  const [langs, setLangs] = useState<Language[]>([])
  const [nextLangId, setNextLangId] = useState(1)

  const [work, setWork] = useState<WorkExperience[]>([])
  const [nextWorkId, setNextWorkId] = useState(1)

  const [education, setEducation] = useState<Education[]>([])
  const [nextEduId, setNextEduId] = useState(1)

  const [courses, setCourse] = useState<CoursesCertificates[]>([])
  const [nextCourseId, setNextCourseId] = useState(1)

  const [projects, setProject] = useState<Projects[]>([])
  const [nextProjectId, setNextProjectId] = useState(1)

  const [menuCategory, setMenuCategory] = useState<MenuCategory>("personal")

  const [basics, setBasics] = useState<BasicInformation>({
    name: "", surname: "",
    titleActive: false, titleFront: "", titleBack: "",
    photo: null, summary: "", interest: "", driving: "",
    mail:"", phone:"", adress_city:"", adress_state:""
  })

  const [birth, setBirth] = useState<BirthDate>({
    day: 0, month: 0, year: 0
  })
  
  const hasDay = birth.day !== 0; const hasMonth = birth.month !== 0
  const hasYear = birth.year !== 0; const hasBirth = hasDay || hasMonth || hasYear


  return <main className="app-shell bg-[#F8FAFC] min-h-screen min-w-max">
    {/* Header Wrapper */}
    <div className="flex justify-between pl-30 pr-30 pt-5 pb-5 border-b-2 border-[#E2E8F0] print:hidden">
      <div className="">
        <h1 className="text-[32px] text-[#0F172A]">{t("appTitle").name}</h1>
        <p className="text-[15px] text-[#475569]">{t("appDescription").name}</p>
      </div>
      <div className="flex self-center gap-3">
        <div className={styleLanguageSwitchWrapper}>
          <ButtonLanguageSwitch key="languageSwitch_SK" label="SK" condition={webLang === "sk"} onClick={()=>setWebLang("sk")}/>
          <div className={styleLanguageSwitchDivider}>|</div>
          <ButtonLanguageSwitch key="languageSwitch_EN" label="EN" condition={webLang === "en"} onClick={()=>setWebLang("en")}/>
          <div className={styleLanguageSwitchDivider}>|</div>
          <ButtonLanguageSwitch key="languageSwitch_DE" label="DE" condition={webLang === "de"} onClick={()=>setWebLang("de")}/>
        </div>
        <button className={stylePrintButton} onClick={(e) => handlePrint()}>{t("exportPdf").name}</button>
      </div>
    </div>
    {/* Main Wrapper */}
    <div className="app-layout border-b-2 border-[#E2E8F0]">
      {/* Menu Window */}
      <div className={styleMenuWindow}>
        <div className={styleMenuWrapper}>
          {categoryMenuList.map((menu) => (
            <MenuButton key={menu.name} label={t(`${menu.name}Title`).name} setFunc={() => setMenuCategory(menu.name)} condition={menuCategory===menu.name} Icon={menu.icon}/>  
          ))}
          </div>  
      </div>

      {/* Form Window */}
      <div className="bg-[#ffffff] border-r-2 border-[#E2E8F0] p-6 print:hidden">
        {menuCategory === "personal" && <>
        <h1 className="text-[25px] text-[#1E293B] mb-2">{t("personalTitle").name}</h1>
        <div className="flex flex-col pt-2 gap-3">
          <InputText label={t("name").name} value={basics.name} placeholder={t("name").placeholder} onChange={(e) => setBasics(prev => ({...prev, name: e.target.value}))}/>
          <InputText label={t("surname").name} value={basics.surname} placeholder={t("surname").placeholder} onChange={(e) => setBasics(prev => ({...prev, surname: e.target.value}))}/>
          <ButtonToggle label={t("title").name} condition={basics.titleActive} func={() => setBasics(prev => ({...prev, titleBack: "", titleFront: "", titleActive: !basics.titleActive}))}/> 
          {basics.titleActive
            ? <>
              <InputText label={t("titleFront").name} value={basics.titleFront} placeholder={t("titleFront").placeholder} onChange={(e) => setBasics(prev => ({...prev, titleFront: e.target.value}))}/>
              <InputText label={t("titleBack").name} value={basics.titleBack} placeholder={t("titleBack").placeholder} onChange={(e) => setBasics(prev => ({...prev, titleBack: e.target.value}))}/>
            </>
            : <><div className="border-b-1"></div></>
          }
          <InputText label={t("cityContact").name} value={basics.adress_city} placeholder={t("cityContact").placeholder} onChange={(e) => setBasics(prev => ({...prev, adress_city: e.target.value}))}/>
          <InputText label={t("stateContact").name} value={basics.adress_state} placeholder={t("stateContact").placeholder} onChange={(e) => setBasics(prev => ({...prev, adress_state: e.target.value}))}/>
          <DateSelect label={t("birth").name} day={birth.day} month={birth.month} year={birth.year}
          webLang={{day: t("birthDay").name, month: t("birthMonth").name, year: t("birthYear").name}}
          onDayChange={(e) => setBirth(prev => ({...prev, day: Number(e.target.value)}))}
          onMonthChange={(e) => setBirth(prev => ({...prev, month: Number(e.target.value)}))}
          onYearChange={(e) => setBirth(prev => ({...prev, year: Number(e.target.value)}))}/>
          
          <TextArea label={t("summary").name} placeholder={t("summary").placeholder} onChange={(e) => { extendTextArea(e, "summary", setBasics)}}/>
          <InputText label={t("mail").name} value={basics.mail} placeholder={t("mail").placeholder} onChange={(e) => setBasics(prev => ({...prev, mail: e.target.value}))}/>
          <InputText label={t("phone").name} value={basics.phone} placeholder={t("phone").placeholder} onChange={(e) => setBasics(prev => ({...prev, phone: e.target.value}))}/>
          <div className="flex flex-col gap-1">
            <Label label={t("photo").name}/>
            {basics.photo 
                ? <div className="border-1 border-[#94A3B8] border-dashed rounded-xl bg-[#F1F5F9] pt-5 pb-5 flex flex-col gap-3">
                    <div className="self-center">
                        <img className="w-[100px] h-[130px] object-fit rounded" src={basics.photo} alt="CV photo"/>
                    </div>
                    <label className="self-center cursor-pointer bg-gradient-to-r from-[#CBD5F5] to-[#3B82F6] h-fit pt-2 pb-2 pl-4 pr-4 shadow-lg rounded-lg w-fit flex gap-2">
                      <ContactRoundIcon className={styleMenuButtonIcon}/>{t("newPhoto").name}
                      <input className="hidden" type="file" accept="image/*" onChange={(e) => getPhoto(e, setBasics)}></input>
                    </label>
                    <label className="text-[14px] text-[#94A3B8] self-center">
                      {t("newPhoto").placeholder}
                    </label>
                </div>
                : <div className="border-1 border-[#94A3B8] border-dashed rounded-xl bg-[#F1F5F9] pt-5 pb-5 flex flex-col gap-3">
                    <label className="self-center cursor-pointer bg-gradient-to-r from-[#CBD5F5] to-[#3B82F6] h-fit pt-2 pb-2 pl-4 pr-4 shadow-lg rounded-lg w-fit flex gap-2">
                      <ContactRoundIcon className={styleMenuButtonIcon}/>{t("firstPhoto").name}
                      <input className="hidden" type="file" accept="image/*" onChange={(e) => getPhoto(e, setBasics)}></input>
                    </label>
                    <label className="text-[14px] text-[#94A3B8] self-center">
                      {t("firstPhoto").placeholder}
                    </label>
                </div>}
          </div>
        </div></>}
        {menuCategory === "work" && <>
          <h1 className="text-[25px] text-[#1E293B] mb-2">{t("workTitle").name}</h1>
          <div className="flex flex-col gap-3">
          {work.map((w: WorkExperience, index: number) => (
          <InputWorkField
          labels={tFull}
          key = {`formWorkField_${w.id}`}
          index = {index}
          work={w}
          setFunc={setWork}
          />
        ))}
        <Button label={t("addWork").name} onClick={() => {setWork(prev => [...prev, newWork(nextWorkId)]); setNextWorkId(prev => prev + 1)}}/>
        </div>
        </>}
        {menuCategory === "education" && <>
          <h1 className="text-[25px] text-[#1E293B] mb-2">{t("educationTitle").name}</h1>
          <div className="flex flex-col gap-3">
          {education.map((ed: Education, index: number) => (
          <InputEduField
          labels={tFull}
          key = {`formEduField_${ed.id}`}
          index = {index}
          education={ed}
          setFunc={setEducation}
          />
        ))}
        <Button label={t("addEdu").name} onClick={() => {setEducation(prev => [...prev, newEdu(nextEduId)]); setNextEduId(prev => prev + 1)}}/>

        </div></>}
        {menuCategory === "courses" && <>
          <h1 className="text-[25px] text-[#1E293B] mb-2">{t("coursesTitle").name}</h1>
          <div className="flex flex-col gap-3">
          {courses.map((course: CoursesCertificates, index: number) => (
          <InputCourseField
          key={`formCourseField_${course.id}`}
          labels={tFull}
          index = {index}
          course={course}
          setFunc={setCourse}
          />
          
        ))}
        <Button label={t("addCourse").name} onClick={() => {setCourse(prev => [...prev, newCourse(nextCourseId)]); setNextCourseId(prev => prev + 1)}}/>
        </div></>}
        {menuCategory === "skills" && <>
          <h1 className="text-[25px] text-[#1E293B] mb-2">{t("skillsTitle").name}</h1>
          <div className="flex flex-col gap-3">
            {skills.map((skill: Skill) => (
          <InputAddSelectText
            key={`formSkillField_${skill.id}`}
            name={skill.name} level={skill.level} placeholderName={t("skillButton").placeholder} options={skillOptions}
            onNameChange={e => handleChangeById(skill.id, "name", e.target.value, setSkills)}
            onLevelChange={e => handleChangeById(skill.id, "level", Number(e.target.value), setSkills)}
            onClickDelete={e => handleDeleteById(skill.id, setSkills)}/>
          ))}
          <Button label={t("skillButton").name} onClick={() => {setSkills(prev => [...prev, {id: nextSkillId, name: "", level: 0}]); setNextSkillId(prev => prev + 1)}}/>
        </div>
        </>}
        {menuCategory === "languages" && <>
          <h1 className="text-[25px] text-[#1E293B] mb-2">{t("languagesTitle").name}</h1>
          <div className="flex flex-col gap-3">
            {langs.map((lang: Language) => (
          <InputAddSelectText
            key={`formLangField_${lang.id}`}
            name={lang.name} level={lang.level} placeholderName={t("langButton").placeholder} options={langOptions}
            onNameChange={e => handleChangeById(lang.id, "name", e.target.value, setLangs)}
            onLevelChange={e => handleChangeById(lang.id, "level", Number(e.target.value), setLangs)}
            onClickDelete={e => handleDeleteById(lang.id, setLangs)}/>
          ))}
          <Button label={t("langButton").name} onClick={() => {setLangs(prev => [...prev, {id: nextLangId, name: "", level: 0}]); setNextLangId(prev => prev + 1)}}/>
        </div>
        </>}
        {menuCategory === "interests" && <>
          <h1 className="text-[25px] text-[#1E293B]">{t("interestsTitle").name}</h1>
          <TextArea label="" placeholder={t("interestsTitle").placeholder} onChange={(e) => { extendTextArea(e, "interest", setBasics)}}/>
        </>}
        {menuCategory === "projects" && <>
          <h1 className="text-[25px] text-[#1E293B]">{t("projectsTitle").name}</h1>
          <div className="flex flex-col gap-3">
          {projects.map((prj: Projects, index: number) => (
          <InputProjectField
          key={`formProjectField_${prj.id}`}
          labels={tFull}
          index = {index}
          project={prj}
          setFunc={setProject}
          />
        ))}
        <Button label={t("addProject").name} onClick={() => {setProject(prev => [...prev, newProject(nextProjectId)]); setNextProjectId(prev => prev + 1)}}/>
        </div></>}
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
                          `${hasDay ? birth.day : ""}${hasDay && hasMonth ? "." : ""}
                          ${hasMonth ? birth.month : ""}${(hasDay || hasMonth) && birth.year ? "." : ""}
                          ${birth.year ? birth.year : ""}`
                        }</p>
                      </div>}
                      </div>
                      {skills.length > 0 &&
                      <div className="p-2 mb-5">
                        <HeadingPreview className="text-base">Skills</HeadingPreview>
                        {skills.map((skill: Skill) => {return <AddSkill key={`previewSkillField_${skill.id}`} skillInstance={skill} options={skillOptions}/>})}
                      </div>}
                      {langs.length > 0 &&
                      <div className="p-2 mb-5">
                        <HeadingPreview className="text-base">Languages</HeadingPreview>
                        {langs.map((lang: Language) => {return <AddLang key={`previewLangField_${lang.id}`} langInstance={lang} options={langOptions}/>})}
                      </div>}
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