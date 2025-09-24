import { useState } from "react"
import '../../styles/workExperience.css'

export default function Experience({  userWorkExperience, workInfo, handleExperienceInput, addWorkInfo, handleExperienceTitles, index }) {

    const [infoCount, setCount] = useState(0);
    const workInfoDisplay = Object.entries(workInfo).map((info, i) => <li key={i} id={i}>
                                                                        <input onChange={(e) => handleExperienceInput(index, i, e)}  type="textarea" cols={20} name="workInfo" className="workInfo" value={info[1]} />
                                                                      </li>
    )
    
    function handleAddInfo(index, count) {
      addWorkInfo(index, count);
      setCount(prevCount => prevCount + 1);
    }

  return (
    <div className="work-experience">
      <div className="work-experience-group">
        <div className="title-and-date-container">
          <input onChange={(e) => handleExperienceTitles(index, e)} type="text" name="workPlace" className="workPlace" placeholder="Google" value={userWorkExperience[index].workPlace} />
          <span> | </span>
          <input onChange={(e) => handleExperienceTitles(index, e)} type="text" name="workDate" placeholder="2015 - Present" className="work-date" value={userWorkExperience[index].workDate} /> 
        </div>
        
        <div className="work-location-form-group">
          <input onChange={(e) => handleExperienceTitles(index, e)} type="text" name="workTitle" className="workTitle" placeholder="Front-end Developer" value={userWorkExperience[index].workTitle} />
        </div>
        <ul className="work-info-list">
          {
            workInfoDisplay
          }
        </ul>
        <button className="workInfo-button" type="button" onClick={() => handleAddInfo(index, infoCount)}>Add Job Description</button>
      </div>
    </div>
  )
}