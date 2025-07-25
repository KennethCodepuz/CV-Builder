import { useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { validPhoneNumber } from './components/Regex';
import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';
import './App.css'

function App() {
  const [userData, setUserData] = useState({
    firstName: '',
    LasetName: ''
  })

  function handleSubmit(e) {
    e.prevent.default();
    console.log(userData)
  }

  return (
    <>
      <main>
        <ResumeForm handleSubmit={handleSubmit}/>
      </main>
      
      {/* <PDFDownloadLink document={<Resume />} fileName='resume.pdf'>
        {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
      </PDFDownloadLink> */}
    </> 
  )
}

export default App;
