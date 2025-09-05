
export default function UserInfo({ userDataInput, userData }) {
  return (
    <>
      <div className="name-form-group">
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Firstname" name="firstName" id="firstName" className="firstName" value={userData.firstName}/>
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Lastname" name="lastName" id="LasName" className="LastName" value={userData.lastName} />
      </div>
      
      <div className="title-form-group">
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Software Developer" name="techRole" id="techRole" className="workTitle" value={userData.techRole} />
      </div>
      
      <ul className="contact-form-group">
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="Laoag City, Ilocos Norte" name="address" id="address" className="address" value={userData.address} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="91234567890" name="phoneNumber" id="phoneNumber" className="phoneNumber" value={userData.phoneNumber} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="email" placeholder="youremail@example.com" name="email" id="email" className="email" value={userData.email} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="linkedin.com/in/username" name="linkedin" id="linkedin" className="linkedin" value={userData.linkedin} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="github.com/username" name="github" id="github" className="github" value={userData.github} />
        </li>
      </ul>
      
      <div className="user-summary-form-group">
        <textarea onChange={(e) => userDataInput(e)} name="personalExperience" id="personalExperience" className="personalExperience" rows={5} placeholder={'Software Developer with 3+ years experience at Tech Company'} value={userData.personalExperience}>
        </textarea>
      </div>
    </>
  )
}