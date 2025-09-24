import { useState } from "react";
import UserInfo from "./formComponents/UserInfo"
import WorkExperience from "./formComponents/WorkExperience"
import Education from "./formComponents/Education";
import Skills from "./formComponents/Skills";
import '../styles/ResumeForm.css'
// import '../styles/reset.css'

export default function ResumeForm({ userData, setUserData, userWorkExperience, setWorkExperience, userEducation, setUserEducation, userSkills, setUserSkills, handleSubmit, userProgrammingLanguagesAndFrameworks, setUserProgrammingLanguagesAndFrameworks }) {
  
  function userDataInput(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  
  function addWorkExperience() {
    setWorkExperience([...userWorkExperience, {
      workPlace: '',
      workDate: '',
      workTitle: '',
      workInfo: {},
    }])
  }

  function addWorkInfo(index, count) {
    setWorkExperience(prevExperience => prevExperience.map((exp, i) => i === index ? {...exp, workInfo: {...exp.workInfo, [count]: ''}} : exp));
  }
  
  function handleExperienceInput(index, i, e) {
    const data = [...userWorkExperience];
    data[index] = {...data[index], [e.target.name]: {...data[index].workInfo, [i]: e.target.value}};
    setWorkExperience(data);
  }

  function handleExperienceTitles(index, e) {
    const data = [...userWorkExperience];
    data[index] = {...data[index], [e.target.name]: e.target.value};
    setWorkExperience(data);
  }

  function handleEducationInput(e) {
    setUserEducation(prevEducation => (
      {
      ...prevEducation,
      [e.target.name]: e.target.value
    }
    ))
  }

  function handleReactSelect(option, e) {
    setUserEducation(prevEducation => ({
      ...prevEducation,
      [e.name]: option ? option : ''
    }))
    setUserSkills([]);
  }

  function handleSkillsInput(option) {
    setUserSkills(option);
  }

  function handleUserLanguagesAndFrameworks(option) {
    setUserProgrammingLanguagesAndFrameworks(option);
  }

  function clearAllInput() {
    setUserData({
      firstName: '',
      lastName: '',
      techRole: '',
      address: '',
      phoneNumber: '',
      email: '',
      linkedin: '',
      github: '',
      personalExperience: '',
    });
    setWorkExperience([
      {
        workPlace: '',
        workDate: '',
        workTitle: '',
        workInfo: {},
      }
    ]);
    setUserEducation({
      schoolName: '',
      sy: '',
      course: '',
    });
    setUserSkills([]);
    setUserProgrammingLanguagesAndFrameworks([]);
  }
  
  return (
    <>
      <div  className='resumeForm'>
        <form onSubmit={handleSubmit}>
          <h1>Build Your Own CV!</h1>
          <UserInfo userDataInput={userDataInput} userData={userData} />
          <WorkExperience userWorkExperience={userWorkExperience} addWorkInfo={addWorkInfo} handleExperienceInput={handleExperienceInput} handleExperienceTitles={handleExperienceTitles} addWorkExperience={addWorkExperience} />
          <Education userEducation={userEducation} handleEducationInput={handleEducationInput} handleReactSelect={handleReactSelect} />
          <Skills userEducation={userEducation.course} handleSkillsInput={handleSkillsInput} setUserSkills={setUserSkills} userSkills={userSkills} handleUserLanguagesAndFrameworks={handleUserLanguagesAndFrameworks} userProgrammingLanguagesAndFrameworks={userProgrammingLanguagesAndFrameworks}/>
          <div className="buttons">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="clear-btn" onClick={clearAllInput}>Clear</button>
          </div>
          
        </form>
      </div>
    </>
  )
}