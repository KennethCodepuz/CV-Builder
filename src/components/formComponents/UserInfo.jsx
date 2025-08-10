
export default function UserInfo() {
  return (
    <>
      <div className="name-form-group">
        <input type="text" placeholder="Firstname" name="firstname" id="firstName" className="firstName"/>
        <input type="text" placeholder="Lastname" name="Lastname" id="LasName" className="LastName"/>
      </div>
      
      <div className="title-form-group">
        <input type="text" placeholder="Software Developer" name="workTitle" id="workTitle" className="workTitle"/>
      </div>
      
      <ul className="contact-form-group">
        <li>
          <input type="text" placeholder="Laoag City, Ilocos Norte" name="address" id="address" className="address"/>
        </li>
        <li>
          <input type="text" placeholder="91234567890" name="phoneNumber" id="phoneNumber" className="phoneNumber"/>
        </li>
        <li>
          <input type="email" placeholder="youremail@example.com" name="email" id="email" className="email"/>
        </li>
        <li>
          <input type="text" placeholder="linkedin.com/in/username" name="linkedin" id="linkedin" className="linkedin"/>
        </li>
        <li>
          <input type="text" placeholder="github.com/username" name="github" id="github" className="github"/>
        </li>
      </ul>
      
      <div className="user-summary-form-group">
        <textarea name="personalExperience" id="personalExperience" className="personalExperience" rows={5} defaultValue={'Software Developer with 3+ years experience at Tech Company'}>
        </textarea>
      </div>
    </>
  )
}