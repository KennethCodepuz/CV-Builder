import { useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { validPhoneNumber } from './components/Regex';
import Resume from './components/Resume';
import ResumeForm from './components/ResumeForm';
import './App.css'

function App() {
  

  return (
    <>
      <main>
        <ResumeForm/>
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
