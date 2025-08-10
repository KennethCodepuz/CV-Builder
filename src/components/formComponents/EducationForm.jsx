import Select from "react-select"

export default function EducationForm({ userEducation }) {
  const courseOptions = [
    {value: 'Bachelor of Science in Computer Science', label: 'Bachelor of Science in Computer Science'},
    {value: 'Bachelor of Science in Information Technology', label: 'Bachelor of Science in Information Technology'},
    {value: 'Bachelor of Science in Civil Engineering', label: 'Bachelor of Science in Civil Engineering'},
    {value: 'Bachelor of Science in Electrical Engineering', label: 'Bachelor of Science in Electrical Engineering'},
    {value: 'Bachelor of Science in Chemical Engineering', label: 'Bachelor of Science in Chemical Engineering'},
    {value: 'Bachelor of Science in Computer Engineering', label: 'Bachelor of Science in Computer Engineering'},
  ]
  
  return (
    <>
      <li>
        <input type="text" placeholder="Mariano Marcos State University" name="schoolName" className="schoolName"/>
        <Select name="course" className="course" options={courseOptions}/>
      </li>
    </>
  )
}