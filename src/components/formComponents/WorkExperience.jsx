import Experience from "./Experience"
import '../../styles/workExperience.css'

export default function WorkExperience({ userWorkExperience, addWorkInfo, handleExperienceInput, handleExperienceTitles, addWorkExperience}) {

  const workExperienceForm = userWorkExperience.map((workExperience, index) => <Experience key={index} userWorkExperience={userWorkExperience} workInfo={workExperience.workInfo} handleExperienceInput={handleExperienceInput} addWorkInfo={addWorkInfo} handleExperienceTitles={handleExperienceTitles} index={index}/>)

  return (
    <>
      <div className="work-experience-form-group">
        <hr />
        <h3>WORK EXPERIENCE</h3>
        {workExperienceForm}
        <button type="button" onClick={addWorkExperience} className="work-experience-button">Add Work Experience</button>
      </div>
    </>
  )
}