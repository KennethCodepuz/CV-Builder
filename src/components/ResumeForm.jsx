import { useState } from "react";
import UserInfo from "./formComponents/UserInfo"
import WorkExperience from "./formComponents/WorkExperience"
import Education from "./formComponents/Education";
import Skills from "./formComponents/Skills";

export default function ResumeForm() {
  const [userData, setUserData] = useState(
    {
      firstName: '',
      lastName: '',
      workTitle: '',
      address: '',
      phoneNumber: '',
      email: '',
      linkedin: '',
      github: '',
      personalExperience: '',
    }
  )

  function userDataInput(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const [userWorkExperience, setWorkExperience] = useState([
    {
      workTitle: '',
      workDate: '',
      workLocation: '',
      workInfo: {},
    }
  ])
  function addWorkExperience() {
    setWorkExperience([...userWorkExperience, {
      workTitle: '',
      workDate: '',
      workLocation: '',
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

  const [userEducation, setUserEducation] = useState([
    {
      schoolName: '',
      course: '',
    }
  ])


  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    console.log(userWorkExperience);
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <UserInfo userDataInput={userDataInput}/>
          <WorkExperience userWorkExperience={userWorkExperience} addWorkInfo={addWorkInfo} handleExperienceInput={handleExperienceInput} handleExperienceTitles={handleExperienceTitles} addWorkExperience={addWorkExperience} />
          <Education userEducation={userEducation}/>
          <Skills />
          <button type="submit" className="form-btn">Save</button>
        </form>
      </div>
    </>
  )
}