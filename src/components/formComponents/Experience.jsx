

export default function Experience({  workInfo, addWorkInfo, handleSubmitExperience, index }) {

  const workInfoDisplay = workInfo.map((info, index) => <li key={index}>
                                                          <input  type="textarea" cols={10} name="workInfo" className="workInfo"/>
                                                        </li>
                                                      )

  return (
    <div className="work-experience">
      <div className="work-experience-group">
        <div className="title-and-date-container">
          <input onChange={(e) => handleSubmitExperience(index, e)} type="text" name="workTitle" className="work-title" placeholder="Software Developer" />
          <input onChange={(e) => handleSubmitExperience(index, e)} type="text" name="workDate" placeholder="2015 - Present" className="work-date"/> 
        </div>
        
        <div className="work-location-form-group">
          <input onChange={(e) => handleSubmitExperience(index, e)} type="text" name="workLocation" className="work-location" placeholder="Manila City, Philippines"/>
        </div>
        <ul className="work-info">
          {
            workInfoDisplay
          }
        </ul>
        <button type="button" onClick={() => addWorkInfo(index)}>+ work info</button>
      </div>
    </div>
  )
}