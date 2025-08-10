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
      workInfo: [],
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
      workInfo: [],
    }])
  }

  function addWorkInfo(index) {
    let i = 0;
    const data = [...userWorkExperience]
    data[index] = {...data[index], workInfo: [...data[index].workInfo, {[i]: ''}]}
    i++;
    setWorkExperience(data);
  }
  
  function handleExperienceInput(index, e) {
    const data = [...userWorkExperience];
    data[index] = {...data[index], [e.target.name]: e.target.value};
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
          <WorkExperience userWorkExperience={userWorkExperience} addWorkInfo={addWorkInfo} handleSubmitExperience={handleExperienceInput} addWorkExperience={addWorkExperience} />
          <Education userEducation={userEducation}/>
          <Skills />
          <button type="submit" className="form-btn">Save</button>
        </form>
      </div>
    </>
  )
}