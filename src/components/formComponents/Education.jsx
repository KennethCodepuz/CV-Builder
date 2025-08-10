import EducationForm from "./EducationForm"

export default function Education() {

  return (
    <>
      <div className="education-container">
        <div>Education</div>
        <hr />
        <EducationForm />
        <button type="button">Add Education</button>
      </div>
    </>
  )
}