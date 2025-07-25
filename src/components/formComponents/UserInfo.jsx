
export default function UserInfo() {
  return (
    <>
      <div className="name-form-group">
        <label>
          <input type="text" placeholder="Firstname" name="firstname" id="firstName" className="firstName"/>
        </label>
        <label>
          <input type="text" placeholder="Lastname" name="Lastname" id="LasName" className="LastName"/>
        </label>
      </div>
      
      <div className="title-form-group">
        <label>
          <input type="text" placeholder="Software Developer" name="workTitle" id="workTitle" className="workTitle"/>
        </label>
      </div>
      
      <ul className="contact-form-group">
        <li>
          <label>
            <input type="text" placeholder="Laoag City, Ilocos Norte" name="address" id="address" className="address"/>
          </label>
        </li>
        <li>
          <label>
            <input type="number" placeholder="91234567890" name="phoneNumber" id="phoneNumber" className="phoneNumber"/>
          </label>
        </li>
        <li>
          <label>
            <input type="email" placeholder="youremail@example.com" name="email" id="email" className="email"/>
          </label>
        </li>
        <li>
          <label>
            <input type="text" placeholder="linkedin.com/in/username" name="linkedin" id="linkedin" className="linkedin"/>
          </label>
        </li>
        <li>
          <label>
            <input type="text" placeholder="github.com/username" name="github" id="github" className="github"/>
          </label>
        </li>
      </ul>
      
      <div className="user-summary-form-group">
        <label htmlFor="">
          <textarea name="personal-experience" id="personalExperience" className="personalExperience" rows={10}>
            Software Developer with 3+ years experience at Tech Company
          </textarea>
        </label>
      </div>
    </>
  )
}