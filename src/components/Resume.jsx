  import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffffff',
      
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  export default function Resume({ userFormattedData }) {
    console.log(userFormattedData);

    return (
    <Document>
      <Page size="A4" style={styles.page} >
        <View style={styles.section}>
          <Text>whatsupppp!</Text>
          <Text>{userFormattedData.firstName}</Text>
          <Text>{userFormattedData.lastName}</Text>
          <Text>{userFormattedData.techRole}</Text>
          <Text>{userFormattedData.address}</Text>
          <Text>{userFormattedData.phoneNumber}</Text>
          <Text>{userFormattedData.email}</Text>
          <Text>{userFormattedData.linkedin}</Text>
          <Text>{userFormattedData.github}</Text>
          <Text>{userFormattedData.personalExperience}</Text>
          <Text>{userFormattedData.schoolName}</Text>
          <Text>{userFormattedData.sy}</Text>
          <Text>{userFormattedData.course}</Text>
          {userFormattedData.userWorkExperience.map((exp, i) => {
            <div key={i}>
              <Text>{exp.workTitle}</Text>
              <Text>{exp.workDate}</Text>
              <Text>{exp.workLocation}</Text>
              <Text>{exp.workInfo}</Text>
            </div>
            })}
          {userFormattedData.userSkills.map(skill => <Text key={skill}>{skill}</Text>)}
        </View>
      </Page>
    </Document>
    )
  }