import Select from "react-select"
import makeAnimated from "react-select/animated"

export default function Skills({ userEducation }) {
  const programmingLanguagesOption = [
    {value: 'JavaScript', label: 'JavaScript'},
    {value: 'ReactJS', label: 'ReactJS'},
    {value: 'Svelte', label: 'Svelte'},
    {value: 'Php', label: 'Php'},
    {value: 'SQL', label: 'SQL'},
    {value: '.NET', label: '.NET'},
    {value: 'C#', label: 'C#'},
    {value: 'Java', label: 'Java'},
    {value: 'C++', label: 'C++'},
  ]

  function optionChoice() {
    if(userEducation === 'Bachelor of Science in Computer Science' || userEducation === 'Bachelor of Science in Information Technology') {
      return programmingLanguagesOption;
    }

  }

  const animatedComponents = makeAnimated();

  return (
    <>
      <hr />
      <div className="skills-container">
        <div className="languanges">
          <label>
            Programming Languanges and Frameworks
            <Select 
              options={optionChoice()}
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
            />  
          </label>
        </div>
      </div>
    </>
  )
}