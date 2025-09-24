import Select from "react-select"
import makeAnimated from "react-select/animated"
import '../../styles/skills.css'

export default function Skills({ userEducation, handleSkillsInput, setUserSkills, userSkills, handleUserLanguagesAndFrameworks, userProgrammingLanguagesAndFrameworks }) {

  const programmingLanguagesOption = [
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'TypeScript', label: 'TypeScript' },
      { value: 'Python', label: 'Python' },
      { value: 'Java', label: 'Java' },
      { value: 'C#', label: 'C#' },
      { value: 'C++', label: 'C++' },
      { value: 'C', label: 'C' },
      { value: 'Go', label: 'Go' },
      { value: 'Rust', label: 'Rust' },
      { value: 'PHP', label: 'PHP' },
      { value: 'Ruby', label: 'Ruby' },
      { value: 'Kotlin', label: 'Kotlin' },
      { value: 'Swift', label: 'Swift' },
      { value: 'R', label: 'R' },
      { value: 'MATLAB', label: 'MATLAB' },
    ]

  function optionChoice(userEducation) {
    

    const civilEngineeringSkillsOption = [
      { value: 'AutoCAD', label: 'AutoCAD' },
      { value: 'Civil 3D', label: 'Civil 3D' },
      { value: 'Revit', label: 'Revit' },
      { value: 'STAAD.Pro', label: 'STAAD.Pro' },
      { value: 'ETABS', label: 'ETABS' },
      { value: 'SAP2000', label: 'SAP2000' },
      { value: 'SAFE', label: 'SAFE' },
      { value: 'Primavera P6', label: 'Primavera P6' },
      { value: 'MS Project', label: 'MS Project' },
      { value: 'SketchUp', label: 'SketchUp' },
      { value: 'ArcGIS', label: 'ArcGIS' },
      { value: 'QGIS', label: 'QGIS' },
      { value: 'Excel (Advanced)', label: 'Excel (Advanced)' },
      { value: 'Quantity Surveying', label: 'Quantity Surveying' },
      { value: 'Project Estimation', label: 'Project Estimation' },
      { value: 'Structural Analysis', label: 'Structural Analysis' },
      { value: 'Geotechnical Engineering', label: 'Geotechnical Engineering' },
      { value: 'Hydraulic Design', label: 'Hydraulic Design' },
      { value: 'Construction Safety', label: 'Construction Safety' },
      { value: 'Building Information Modeling (BIM)', label: 'Building Information Modeling (BIM)' },
    ]

    const electricalEngineeringSkillsOption = [
      // Core Fundamentals
      { value: 'Circuit Analysis', label: 'Circuit Analysis' },
      { value: 'Power Systems', label: 'Power Systems' },
      { value: 'Electrical Machines', label: 'Electrical Machines' },
      { value: 'Power Electronics', label: 'Power Electronics' },
      { value: 'Control Systems', label: 'Control Systems' },
      { value: 'Signal Processing', label: 'Signal Processing' },
      { value: 'Digital Electronics', label: 'Digital Electronics' },
      { value: 'Analog Electronics', label: 'Analog Electronics' },

      // Software / Tools
      { value: 'AutoCAD Electrical', label: 'AutoCAD Electrical' },
      { value: 'MATLAB & Simulink', label: 'MATLAB & Simulink' },
      { value: 'ETAP', label: 'ETAP' },
      { value: 'Multisim', label: 'Multisim' },
      { value: 'LTspice', label: 'LTspice' },
      { value: 'PSpice', label: 'PSpice' },
      { value: 'PLC Programming', label: 'PLC Programming' },

      // Hardware / Practical Skills
      { value: 'Arduino', label: 'Arduino' },
      { value: 'Raspberry Pi', label: 'Raspberry Pi' },
      { value: 'PCB Design (Eagle/KiCad)', label: 'PCB Design (Eagle/KiCad)' },

      // Industry / Safety
      { value: 'Electrical Safety Standards', label: 'Electrical Safety Standards' },
      { value: 'Load Calculation', label: 'Load Calculation' },
      { value: 'Power Distribution', label: 'Power Distribution' },
    ]

    const chemicalEngineeringSkillsOption = [
      // Core Fundamentals
      { value: 'Mass Transfer', label: 'Mass Transfer' },
      { value: 'Heat Transfer', label: 'Heat Transfer' },
      { value: 'Fluid Mechanics', label: 'Fluid Mechanics' },
      { value: 'Thermodynamics', label: 'Thermodynamics' },
      { value: 'Chemical Reaction Engineering', label: 'Chemical Reaction Engineering' },
      { value: 'Process Control', label: 'Process Control' },
      { value: 'Separation Processes', label: 'Separation Processes' },
      { value: 'Material & Energy Balances', label: 'Material & Energy Balances' },
      { value: 'Process Safety & HAZOP', label: 'Process Safety & HAZOP' },
      { value: 'Environmental Engineering', label: 'Environmental Engineering' },

      // Software / Tools
      { value: 'Aspen Plus', label: 'Aspen Plus' },
      { value: 'HYSYS', label: 'HYSYS' },
      { value: 'MATLAB', label: 'MATLAB' },
      { value: 'COMSOL Multiphysics', label: 'COMSOL Multiphysics' },
      { value: 'ChemCAD', label: 'ChemCAD' },
      { value: 'AutoCAD P&ID', label: 'AutoCAD P&ID' },
      { value: 'Excel (Advanced)', label: 'Excel (Advanced)' },

      // Industry / Practical Skills
      { value: 'Process Simulation', label: 'Process Simulation' },
      { value: 'Plant Design', label: 'Plant Design' },
      { value: 'Piping & Instrumentation Diagrams (P&ID)', label: 'Piping & Instrumentation Diagrams (P&ID)' },
      { value: 'Pilot Plant Operations', label: 'Pilot Plant Operations' },
      { value: 'Quality Control & QA/QC', label: 'Quality Control & QA/QC' },
      { value: 'Energy Efficiency & Sustainability', label: 'Energy Efficiency & Sustainability' },
    ]

    const computerEngineeringSkillsOption = [
      // Core Fundamentals
      { value: 'Digital Logic Design', label: 'Digital Logic Design' },
      { value: 'Computer Architecture', label: 'Computer Architecture' },
      { value: 'Microprocessors & Microcontrollers', label: 'Microprocessors & Microcontrollers' },
      { value: 'Embedded Systems', label: 'Embedded Systems' },
      { value: 'Operating Systems', label: 'Operating Systems' },
      { value: 'Networking Fundamentals', label: 'Networking Fundamentals' },
      { value: 'Cybersecurity Basics', label: 'Cybersecurity Basics' },
      { value: 'Software Engineering', label: 'Software Engineering' },
      { value: 'Algorithms & Data Structures', label: 'Algorithms & Data Structures' },

      // Hardware / Low-Level Skills
      { value: 'FPGA (VHDL/Verilog)', label: 'FPGA (VHDL/Verilog)' },
      { value: 'Assembly Language', label: 'Assembly Language' },
      { value: 'PCB Design (KiCad/Altium)', label: 'PCB Design (KiCad/Altium)' },
      { value: 'Arduino', label: 'Arduino' },
      { value: 'Raspberry Pi', label: 'Raspberry Pi' },
      { value: 'IoT Systems', label: 'IoT Systems' },

      // Software / Programming
      { value: 'C', label: 'C' },
      { value: 'C++', label: 'C++' },
      { value: 'Python', label: 'Python' },
      { value: 'Java', label: 'Java' },
      { value: 'Verilog/VHDL', label: 'Verilog/VHDL' },
      { value: 'Linux/Unix Systems', label: 'Linux/Unix Systems' },
      { value: 'Shell Scripting', label: 'Shell Scripting' },

      // Tools / Industry
      { value: 'MATLAB', label: 'MATLAB' },
      { value: 'Multisim', label: 'Multisim' },
      { value: 'Proteus', label: 'Proteus' },
      { value: 'LabVIEW', label: 'LabVIEW' },
      { value: 'Version Control (Git)', label: 'Version Control (Git)' },
      { value: 'Cloud Computing Basics', label: 'Cloud Computing Basics' },
    ]

    const informationTechnologySkillsOption = [
      // Core IT Skills
      { value: 'Networking Fundamentals', label: 'Networking Fundamentals' },
      { value: 'System Administration (Windows/Linux)', label: 'System Administration (Windows/Linux)' },
      { value: 'Database Management (SQL, NoSQL)', label: 'Database Management (SQL, NoSQL)' },
      { value: 'IT Support & Troubleshooting', label: 'IT Support & Troubleshooting' },
      { value: 'Operating Systems', label: 'Operating Systems' },
      { value: 'Cloud Computing Basics', label: 'Cloud Computing Basics' },
      { value: 'Cybersecurity Fundamentals', label: 'Cybersecurity Fundamentals' },
      { value: 'ITIL / IT Service Management Basics', label: 'ITIL / IT Service Management Basics' },
      { value: 'Virtualization (VMware/Hyper-V)', label: 'Virtualization (VMware/Hyper-V)' },

      // Software & Tools
      { value: 'Microsoft Office Suite (Advanced Excel, PowerPoint)', label: 'Microsoft Office Suite (Advanced Excel, PowerPoint)' },
      { value: 'Git & Version Control', label: 'Git & Version Control' },
      { value: 'Linux Command Line', label: 'Linux Command Line' },
      { value: 'Bash/Shell Scripting', label: 'Bash/Shell Scripting' },
      { value: 'Basic Programming (Python/Java/C#)', label: 'Basic Programming (Python/Java/C#)' },
      { value: 'Web Development Basics (HTML, CSS, JS)', label: 'Web Development Basics (HTML, CSS, JS)' },

      // Networking & Security Tools
      { value: 'Cisco Packet Tracer', label: 'Cisco Packet Tracer' },
      { value: 'Wireshark', label: 'Wireshark' },
      { value: 'Firewall & IDS/IPS Management', label: 'Firewall & IDS/IPS Management' },
      { value: 'Active Directory & Group Policy', label: 'Active Directory & Group Policy' },

      // Industry / Professional Skills
      { value: 'Technical Documentation', label: 'Technical Documentation' },
      { value: 'Project Management Basics (Agile, Scrum)', label: 'Project Management Basics (Agile, Scrum)' },
      { value: 'Help Desk / Ticketing Systems', label: 'Help Desk / Ticketing Systems' },
      { value: 'Cloud Platforms (AWS, Azure, GCP - basics)', label: 'Cloud Platforms (AWS, Azure, GCP - basics)' },
    ]

    if(userEducation.value === 'Bachelor of Science in Information Technology' || userEducation.value === 'Bachelor of Science in Computer Science') {
      return informationTechnologySkillsOption;
    }

    if(userEducation.value === 'Bachelor of Science in Civil Engineering') {
      return civilEngineeringSkillsOption;
    }

    if(userEducation.value === 'Bachelor of Science in Electrical Engineering') {
      return electricalEngineeringSkillsOption;
    }

    if(userEducation.value === 'Bachelor of Science in Chemical Engineering') {
      return chemicalEngineeringSkillsOption;
    }

    if(userEducation.value === 'Bachelor of Science in Computer Engineering') {
      return computerEngineeringSkillsOption;
    }

  }

  const animatedComponents = makeAnimated();

  return (
    <>
      <hr />
      <div className="skills-container">
        <div className="languanges">
          <hr />
          { userEducation.value === 'Bachelor of Science in Computer Science' || userEducation.value === 'Bachelor of Science in Information Technology' || userEducation.value === 'Bachelor of Science in Computer Engineering' ? 
            <>
              <label>
                <h4>
                  Programming Languanges and Frameworks
                </h4>
              
                <Select 
                  name="languangesAndFrameworks[]"
                  onChange={(option) => handleUserLanguagesAndFrameworks(option)}
                  options={programmingLanguagesOption}
                  isMulti
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  value={userProgrammingLanguagesAndFrameworks}
                />  
            </label>
            </> :
            null
          }
          <label>
            <h4>
              Skills
            </h4>
            <Select 
              name="skillsArray[]"
              onChange={(option) => handleSkillsInput(option)}
              options={optionChoice(userEducation)}
              isMulti
              closeMenuOnSelect={false}
              components={animatedComponents}
              value={userSkills}
          />
          </label>
          
        </div>
      </div>
    </>
  )
}