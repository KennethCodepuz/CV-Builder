
export default function UserInfo({ userDataInput }) {
  return (
    <>
      <div className="name-form-group">
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Firstname" name="firstName" id="firstName" className="firstName"/>
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Lastname" name="lastName" id="LasName" className="LastName"/>
      </div>
      
      <div className="title-form-group">
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Software Developer" name="workTitle" id="workTitle" className="workTitle"/>
      </div>
      
      <ul className="contact-form-group">
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="Laoag City, Ilocos Norte" name="address" id="address" className="address"/>
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="91234567890" name="phoneNumber" id="phoneNumber" className="phoneNumber"/>
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="email" placeholder="youremail@example.com" name="email" id="email" className="email"/>
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="linkedin.com/in/username" name="linkedin" id="linkedin" className="linkedin"/>
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="github.com/username" name="github" id="github" className="github"/>
        </li>
      </ul>
      
      <div className="user-summary-form-group">
        <textarea onChange={(e) => userDataInput(e)} name="personalExperience" id="personalExperience" className="personalExperience" rows={5} placeholder={'Software Developer with 3+ years experience at Tech Company'}>
        </textarea>
      </div>
    </>
  )
}