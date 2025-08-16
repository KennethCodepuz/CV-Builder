import Experience from "./Experience"

export default function WorkExperience({ userWorkExperience, addWorkInfo, handleExperienceInput, handleSubmitExperience, addWorkExperience}) {

  const workExperienceForm = userWorkExperience.map((workExperience, index) => <Experience key={index} workInfo={workExperience.workInfo} handleExperienceInput={handleExperienceInput} addWorkInfo={addWorkInfo} handleSubmitExperience={handleSubmitExperience} index={index}/>)

  return (
    <>
      <div className="work-experience-form-group">
        <div>WORK EXPERIENCE</div>
        <hr />
        {workExperienceForm}
        <button type="button" onClick={addWorkExperience}>+ work experience</button>
      </div>
    </>
  )
}