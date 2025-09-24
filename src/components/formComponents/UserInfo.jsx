import '../../styles/userInfo.css'


export default function UserInfo({ userDataInput, userData }) {
  return (
    <>
      <div className="name-form-group">
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Firstname" name="firstName" id="firstName" className="firstName || name" value={userData.firstName}/>
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Lastname" name="lastName" id="LasName" className="LastName || name" value={userData.lastName} />
      </div>
      
      <div className="title-form-group">
        <input onChange={(e) => userDataInput(e)} type="text" placeholder="Software Developer" name="techRole" id="techRole" className="workTitle" value={userData.techRole} />
      </div>
      
      <ul className="contact-form-group">
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="Address" name="address" id="address" className="address" value={userData.address} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="91234567890" name="phoneNumber" id="phoneNumber" className="phoneNumber" value={userData.phoneNumber} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="email" placeholder="email" name="email" id="email" className="email" value={userData.email} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="linkedin link" name="linkedin" id="linkedin" className="linkedin" value={userData.linkedin} />
        </li>
        <li>
          <input onChange={(e) => userDataInput(e)} type="text" placeholder="github link" name="github" id="github" className="github" value={userData.github} />
        </li>
      </ul>

      <div className="user-summary-form-group">
        <hr />
        <h3>ABOUT ME</h3>
        <textarea onChange={(e) => userDataInput(e)} name="personalExperience" id="personalExperience" className="personalExperience" rows={6} placeholder={'Software Developer with 3+ years experience at Tech Company'} value={userData.personalExperience}>
        </textarea>
      </div>
    </>
  )
}