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
      techRole: '',
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

  const [userEducation, setUserEducation] = useState(
    {
      schoolName: '',
      sy: '',
      course: '',
    }
  )

  function handleEducationInput(e) {
    setUserEducation(prevEducation => (
      {
      ...prevEducation,
      [e.target.name]: e.target.value
    }
    ))
  }

  const [userSkills, setUserSkills] = useState ([])

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


  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formattedData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      techRole: formData.get('techRole'),
      address: formData.get('address'),
      phoneNumber: formData.get('phoneNumber'),
      email: formData.get('email'),
      linkedin: formData.get('linkedin'),
      github: formData.get('github'),
      personalExperience: formData.get('personalExperience'),
      schoolName: formData.get('schoolName'),
      sy: formData.get('sy'),
      course: formData.get('course'),
      userWorkExperience,
      userSkills: userSkills.map(item => item.value)
    }

    console.log( formattedData );
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
        workTitle: '',
        workDate: '',
        workLocation: '',
        workInfo: {},
      }
    ]);
    setUserEducation({
      schoolName: '',
      sy: '',
      course: '',
    });
    setUserSkills([]);
  }
  
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <UserInfo userDataInput={userDataInput} userData={userData} />
          <WorkExperience userWorkExperience={userWorkExperience} addWorkInfo={addWorkInfo} handleExperienceInput={handleExperienceInput} handleExperienceTitles={handleExperienceTitles} addWorkExperience={addWorkExperience} />
          <Education userEducation={userEducation} handleEducationInput={handleEducationInput} handleReactSelect={handleReactSelect} />
          <Skills userEducation={userEducation.course} handleSkillsInput={handleSkillsInput} setUserSkills={setUserSkills} userSkills={userSkills} />
          <button type="submit" className="form-btn">Submit</button>
          <button type="button" onClick={clearAllInput}>Clear</button>;
        </form>
      </div>
    </>
  )
}