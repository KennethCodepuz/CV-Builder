import Select from "react-select"
import makeAnimated from "react-select/animated"

export default function Skills() {
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

  const animatedComponents = makeAnimated();

  return (
    <>
      <hr />
      <div className="skills-container">
        <div className="languanges">
          <label>
            Programming Languanges and Frameworks
            <Select 
              options={programmingLanguagesOption}
              isMulti
              defaultValue={[programmingLanguagesOption[0]]}
              closeMenuOnSelect={false}
              components={animatedComponents}
            />  
          </label>
        </div>
      </div>
    </>
  )
}