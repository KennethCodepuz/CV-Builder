import Select from "react-select"

export default function EducationForm({ userEducation, handleEducationInput }) {
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
        <input onChange={handleEducationInput} type="text" placeholder="Mariano Marcos State University" name="schoolName" className="schoolName"/>
        {/* <Select  name="course" className="course" options={courseOptions}/> */}
        <select onChange={handleEducationInput} name="course" id="course" value={userEducation.course}>
          <option value="">-- Select a course --</option>
          {courseOptions.map(course => <option key={course.value} value={course.value}>{course.label}</option>)}
        </select>
      </li>
    </>
  )
}