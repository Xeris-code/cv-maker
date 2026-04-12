"use client";

import {useState} from "react";
import Button from "../components/form/Button"

import Title from "../components/Title";
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

import { skillOptions, langOptions } from "@/lib/constants";

import { newEdu, newWork, newCourse, newProject} from "@/lib/helpers";
import { handleDeleteById, handleChangeById, getPhoto, extendTextArea} from "@/lib/handlers";


import { Mail, MapPinHouse, Phone, Cake } from "lucide-react";

import { Skill, Language, BasicInformation, Contacts, BirthDate, WorkExperience, Education, CoursesCertificates, Projects} from "../lib/types"
import InputWorkField from "@/components/form/InputWorkField";
import AddEducation from "@/components/preview/AddEducation";
import AddProject from "@/components/preview/AddProject";



export default function Page() {

  const handlePrint = () => {
    window.print();
  }

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

  const [projectsActive, setProjectsActive] = useState(false)

  const [basics, setBasics] = useState<BasicInformation>({
    name: "", surname: "",
    titleActive: false, titleFront: "", titleBack: "",
    photo: null, summary: "", interest: "", driving: ""
  })

  const [contacts, setContacts] = useState<Contacts>({
    mail: "", phone: "", adress_city: "", adress_state: ""
  })

  const [birth, setBirth] = useState<BirthDate>({
    day: 0, month: 0, year: 0
  })
  
  const hasDay = birth.day !== 0; const hasMonth = birth.month !== 0
  const hasYear = birth.year !== 0; const hasBirth = hasDay || hasMonth || hasYear


  return <main className="app-shell p-10 bg-[#0f172a] min-h-screen min-w-max">
    <h1 className="print:hidden text-5xl">CV maker</h1>
    <p className="print:hidden text-gray-400">First React project</p>
    <Button label="Export PDF" onClick={handlePrint} className="print:hidden"/>

    <div className="w-max mx-auto flex gap-5 items-start">

      <div className="bg-[#1e293b] text-[#ffffff] p-2 rounded-xl border-4 min-w-[500px] max-w-[580px] border-[#334155] mb-2 h-full print:hidden">
        <Title>Form</Title>

        <HeadingForm>Basic Information</HeadingForm>
        <InputText label="Name" value={basics.name} placeholder="Name" onChange={(e) => setBasics(prev => ({...prev, name: e.target.value}))}/>
        <InputText label="Surname" value={basics.surname} placeholder="Surname" onChange={(e) => setBasics(prev => ({...prev, surname: e.target.value}))}/>
        <ButtonToggle label="Title:" classNameWrapper="mt-2" condition={basics.titleActive} func={() => setBasics(prev => ({...prev, titleBack: "", titleFront: "", titleActive: !basics.titleActive}))}/>
        <div className={basics.titleActive ? "block" : "hidden"}>
          <InputText label="Title (front)" value={basics.titleFront} placeholder="Title" onChange={(e) => setBasics(prev => ({...prev, titleFront: e.target.value}))}/>
          <InputText label="Title (back)" value={basics.titleBack} placeholder="Title" onChange={(e) => setBasics(prev => ({...prev, titleBack: e.target.value}))}/>
        </div>

        <HeadingForm>Date of birth</HeadingForm>
        <DateSelect day = {birth.day} month = {birth.month} year = {birth.year}
        onDayChange={(e) => setBirth(prev => ({...prev, day: Number(e.target.value)}))}
        onMonthChange={(e) => setBirth(prev => ({...prev, month: Number(e.target.value)}))}
        onYearChange={(e) => setBirth(prev => ({...prev, year: Number(e.target.value)}))}
        />

        <HeadingForm>Summary</HeadingForm>
        <TextArea classNameWrapper="pt-3 ml-0.75 mr-0.75" placeholder="Write your summary here..." onChange={(e) => { extendTextArea(e, "summary", setBasics)}}/>

        <HeadingForm>CV Photo</HeadingForm>
        <div className="pt-4">
          <label className="pt-2 pb-2 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-[#ffffff] pt-1 pb-1 pl-3 pr-3 mt-2">
            Upload photo
            <input className="hidden" type="file" accept="image/*" onChange={(e) => getPhoto(e, setBasics)}/>
          </label>
        </div>

        <HeadingForm>Contacts</HeadingForm>
        <InputText  label="Email" value={contacts.mail} placeholder="joe@myMail.com" onChange={(e) => setContacts(prev => ({...prev, mail: e.target.value}))}/>
        <InputText  label="Phone" value={contacts.phone} placeholder="+421 0911 111 111" onChange={(e) => setContacts(prev => ({...prev, phone: e.target.value}))}/>
        <InputText  label="City" value={contacts.adress_city} placeholder="City" onChange={(e) => setContacts(prev => ({...prev, adress_city: e.target.value}))}/>
        <InputText  label="State" value={contacts.adress_state} placeholder="State" onChange={(e) => setContacts(prev => ({...prev, adress_state: e.target.value}))}/>

        <HeadingForm>Work Experience</HeadingForm>
        {work.map((w: WorkExperience, index: number) => (
          <InputWorkField
          key = {`formWorkField_${w.id}`}
          index = {index}
          work={w}
          setFunc={setWork}
          />
        ))}
        <Button label="+ Add experience" onClick={() => {setWork(prev => [...prev, newWork(nextWorkId)]); setNextWorkId(prev => prev + 1)}}/>

        <HeadingForm>Education</HeadingForm>
        {education.map((ed: Education, index: number) => (
          <InputEduField
          key = {`formEduField_${ed.id}`}
          index = {index}
          education={ed}
          setFunc={setEducation}
          />
        ))}
        <Button label="+ Add education" onClick={() => {setEducation(prev => [...prev, newEdu(nextEduId)]); setNextEduId(prev => prev + 1)}}/>



        <HeadingForm>Courses & Certificates</HeadingForm>
        {courses.map((course: CoursesCertificates, index: number) => (
          <InputCourseField
          key = {`formCourseField_${course.id}`}
          index = {index}
          course={course}
          setFunc={setCourse}
          />
        ))}
        <Button label="+ Add course" onClick={() => {setCourse(prev => [...prev, newCourse(nextCourseId)]); setNextCourseId(prev => prev + 1)}}/>

        <HeadingForm>Projects</HeadingForm>
        {projects.map((prj: Projects, index: number) => (
          <InputProjectField
          key = {`formProjectField_${prj.id}`}
          index = {index}
          project={prj}
          setFunc={setProject}
          />
        ))}
        <Button label="+ Add project" onClick={() => {setProject(prev => [...prev, newProject(nextProjectId)]); setNextProjectId(prev => prev + 1)}}/>

        <HeadingForm>Skills</HeadingForm>
        {skills.map((skill: Skill) => (
        <InputAddSelectText
          key={`formSkillField_${skill.id}`}
          id={skill.id} name={skill.name} level={skill.level} placeholderName="Add skill..." options={skillOptions}
          onNameChange={e => handleChangeById(skill.id, "name", e.target.value, setSkills)}
          onLevelChange={e => handleChangeById(skill.id, "level", Number(e.target.value), setSkills)}
          onClickDelete={e => handleDeleteById(skill.id, setSkills)}/>
        ))}
        <div className="flex justify-end">
        <Button label="+ Add skill" onClick={() => {setSkills(prev => [...prev, {id: nextSkillId, name: "", level: 0}]); setNextSkillId(prev => prev + 1)}}/>
        </div>

        <HeadingForm>Languages</HeadingForm>
        {langs.map((lang: Skill) => (
        <InputAddSelectText
          key={`formLangField_${lang.id}`}
          id={lang.id} name={lang.name} level={lang.level} placeholderName="Add language" options={langOptions}
          onNameChange={e => handleChangeById(lang.id, "name", e.target.value, setLangs)}
          onLevelChange={e => handleChangeById(lang.id, "level", Number(e.target.value), setLangs)}
          onClickDelete={e => handleDeleteById(lang.id, setLangs)}/>
        ))}
        <div className="flex justify-end">
        <Button label="+ Add language" onClick={() => {setLangs(prev => [...prev, {id: nextLangId, name: "", level: 0}]); setNextLangId(prev => prev + 1)}}/>
        </div>

        <HeadingForm>Interests & Hobbies</HeadingForm>
        <TextArea classNameWrapper="pt-3 ml-0.75 mr-0.75" placeholder="Write your interests and hobbies here..." onChange={(e) => { extendTextArea(e, "interest", setBasics)}}/>

        <HeadingForm>Driving license</HeadingForm>

      </div>


      <div className="preview-shell bg-[#1e293b] text-[#1e293b] p-2 rounded-xl border-4 border-[#334155] flex flex-col w-[840px]">
        <Title>Preview</Title>
        <div className="flex justify-center">
          <div className="cv-paper bg-[#ffffff] w-[794px] min-h-[1123px]">
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
                      {contacts.mail &&
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="text-[#0f172a] shrink-0"/>
                        <p className="font-bold break-words">{contacts.mail}</p>
                      </div>}
                      {contacts.phone &&
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="text-[#0f172a] shrink-0"/>
                        <p className="font-bold break-words">{contacts.phone}</p>
                      </div>}
                      {(contacts.adress_city || contacts.adress_state) &&
                      <div className="flex items-center gap-3 text-sm">
                        <MapPinHouse className="text-[#0f172a] shrink-0"/>
                        <div className="flex-col">
                          <p className="font-bold  break-words">{`${contacts.adress_city}${contacts.adress_city && contacts.adress_state ? "," : ""}`}</p>
                          <p className="font-bold  break-words">{`${contacts.adress_state}`}</p>
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

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>;
}