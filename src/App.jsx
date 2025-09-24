import { useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { validPhoneNumber } from './components/Regex';
import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';
import './App.css'
import './styles/reset.css'

function App() {
  const [userData, setUserData] = useState(
    {
      firstName: '',
      lastName: '',
      techRole: '',
      address: '',
      phoneNumber: '',
      email: '',
      linkedin: '',
      github: '',
      personalExperience: '',
    }
  )

  const [userWorkExperience, setWorkExperience] = useState([
    {
      workPlace: '',
      workDate: '',
      workTitle: '',
      workInfo: {},
    }
  ])

  const [userEducation, setUserEducation] = useState(
    {
      schoolName: '',
      sy: '',
      course: '',
    }
  )

  const [userSkills, setUserSkills] = useState ([])
  const [userProgrammingLanguagesAndFrameworks, setUserProgrammingLanguagesAndFrameworks] = useState ([])

  const [userFormattedData, setUserFormattedData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log(userProgrammingLanguagesAndFrameworks);
    console.log(userSkills);

    const formattedData = {
      firstName: formData.get('firstName') ?? '',
      lastName: formData.get('lastName') ?? '',
      techRole: formData.get('techRole') ?? '',
      address: formData.get('address') ?? '',
      phoneNumber: formData.get('phoneNumber') ?? '',
      email: formData.get('email') ?? '',
      linkedin: formData.get('linkedin') ?? '',
      github: formData.get('github') ?? '',
      personalExperience: formData.get('personalExperience') ?? '',
      schoolName: formData.get('schoolName') ?? '',
      sy: formData.get('sy') ?? '',
      course: formData.get('course') ?? '',
      userWorkExperience: userWorkExperience ?? {},
      userSkills: (userSkills ?? []).map(item => item.value),
      userProgrammingLanguagesAndFrameworks: (userProgrammingLanguagesAndFrameworks ?? []).map(item => item.value)
    }

    setUserFormattedData(formattedData);
    setFormSubmitted(true);
  }

  function editButton() {
    setFormSubmitted(false);
  }

  return (
    <>
      <main>
        {
          formSubmitted ? 
          <div className='pdfview'>
            <PDFViewer style={{width: '40em', height: '56.56em'}} showToolbar={false}> 
              <Resume userFormattedData={userFormattedData} /> 
            </PDFViewer> 
            <button className='editbtn' onClick={editButton}>Edit</button>
            <div>
              {formSubmitted && <PDFDownloadLink document={<Resume userFormattedData={userFormattedData} />} fileName='resume.pdf'>
              {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Download PDF'
                }
              </PDFDownloadLink>}
            </div>
          </div>
          : 
          <ResumeForm userData={userData} setUserData={setUserData} 
                    userWorkExperience={userWorkExperience} setWorkExperience={setWorkExperience}
                    userEducation={userEducation} setUserEducation={setUserEducation}
                    userSkills={userSkills} setUserSkills={setUserSkills} handleSubmit={handleSubmit} 
                    userProgrammingLanguagesAndFrameworks={userProgrammingLanguagesAndFrameworks} setUserProgrammingLanguagesAndFrameworks={setUserProgrammingLanguagesAndFrameworks}
                    />
        }
        
      </main>
    </> 
  )
}

export default App;
