import EducationForm from "./EducationForm"

export default function Education({ userEducation, handleEducationInput, handleReactSelect }) {

  return (
    <>
      <div className="education-container">
        <div>Education</div>
        <hr />
        <EducationForm userEducation={userEducation} handleEducationInput={handleEducationInput} handleReactSelect={handleReactSelect} />
        <button type="button">Add Education</button>
      </div>
    </>
  )
}