import { useState } from "react"

export default function Experience({  workInfo, handleExperienceInput, addWorkInfo, handleExperienceTitles, index }) {

    const [infoCount, setCount] = useState(0);
    const workInfoDisplay = Object.entries(workInfo).map((info, i) => <li key={i} id={i}>
                                                                        <input onChange={(e) => handleExperienceInput(index, i, e)}  type="textarea" cols={10} name="workInfo" className="workInfo"/>
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
          <input onChange={(e) => handleExperienceTitles(index, e)} type="text" name="workTitle" className="work-title" placeholder="Software Developer" />
          <input onChange={(e) => handleExperienceTitles(index, e)} type="text" name="workDate" placeholder="2015 - Present" className="work-date"/> 
        </div>
        
        <div className="work-location-form-group">
          <input onChange={(e) => handleExperienceTitles(index, e)} type="text" name="workLocation" className="work-location" placeholder="Manila City, Philippines"/>
        </div>
        <ul className="work-info">
          {
            workInfoDisplay
          }
        </ul>
        <button type="button" onClick={() => handleAddInfo(index, infoCount)}>+ work info</button>
      </div>
    </div>
  )
}