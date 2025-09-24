import EducationForm from "./EducationForm"
import '../../styles/education.css'

export default function Education({ userEducation, handleEducationInput, handleReactSelect }) {

  return (
    <>
      <div className="education-container">
        <hr />
        <h3>Education</h3>
        <EducationForm userEducation={userEducation} handleEducationInput={handleEducationInput} handleReactSelect={handleReactSelect} />
        
      </div>
    </>
  )
}