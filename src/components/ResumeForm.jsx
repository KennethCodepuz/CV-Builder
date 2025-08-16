import { useState } from "react";
import UserInfo from "./formComponents/UserInfo"
import WorkExperience from "./formComponents/WorkExperience"
import Education from "./formComponents/Education";
import Skills from "./formComponents/Skills";

export default function ResumeForm() {
  const [userData, setUserData] = useState([
    {
      firstName: '',
      LasetName: '',
      workTitle: '',
      address: '',
      phoneNumber: '',
      email: '',
      linkedin: '',
      github: '',
      personalExperience: '',
    }
  ])

  const [userWorkExperience, setWorkExperience] = useState([
    {
      workTitle: '',
      workDate: '',
      workLocation: '',
      workInfo: {},
    }
  ])

  const [userEducation, setUserEducation] = useState([
    {
      schoolName: '',
      course: '',
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

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userWorkExperience)
    // console.log(workInfo);
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <UserInfo />
          <WorkExperience userWorkExperience={userWorkExperience} addWorkInfo={addWorkInfo} handleExperienceInput={handleExperienceInput} handleSubmitExperience={handleExperienceInput} addWorkExperience={addWorkExperience} />
          <Education userEducation={userEducation}/>
          <Skills />
          <button type="submit" className="form-btn">Save</button>
        </form>
      </div>
    </>
  )
}