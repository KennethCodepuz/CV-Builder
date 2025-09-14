  import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
  import React from 'react';

  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffffff',
      margin: 0,
      padding: 30,
    },
    section: {
      width: '100%',
      flexGrow: 1,
    },
    centerContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: 36,
      fontWeight: 700,
      textAlign: 'center'
    },
    careerRole: {
      fontSize: 18,
      textAlign: 'center',
    },
    linksContainer: {
      paddingTop: 10,
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: 5,
    },
    links : {
      width: 160,
      fontSize: 12,
      textAlign: 'center'
    },
    horizontalLine: {
      height: 2,
      backgroundColor: '000000',
      marginTop: 10,
      marginBottom: 10,
    }
  });

  export default function Resume({ userFormattedData }) {
    
    const displayWorkExp = (userFormattedData.userWorkExperience ?? []).map((exp, i) => 
            (
            <View key={i}>
              <Text>{exp.workTitle}</Text>
              <Text>{exp.workDate}</Text>
              <Text>{exp.workLocation}</Text>
              { Object.values(exp.workInfo ?? {}).map((info, i) => <Text key={i}>{info}</Text>) }
            </View>)
    )
    

    return (
    <Document>
      <Page size="A4" style={styles.page} >
        <View style={styles.section}>
          <View style={styles.centerContainer}>
            <Text style={styles.name}>{userFormattedData.firstName === '' ? 'John' : userFormattedData.firstName} {userFormattedData.lastName === '' ? 'Doe' : userFormattedData.lastName}</Text>
          </View>
          <View style={styles.centerContainer}>
            <Text style={styles.careerRole}>{userFormattedData.techRole === '' ? 'Software Developer' : userFormattedData.techRole}</Text>
          </View>
          <View style={styles.linksContainer}>
            <Text style={[styles.links]}>{userFormattedData.address}</Text>
            <Text style={[styles.links]}>{userFormattedData.phoneNumber}</Text>
            <Text style={[styles.links]}>{userFormattedData.email}</Text>
            <Text style={[styles.links]}>{userFormattedData.linkedin}</Text>
            <Text style={[styles.links]}>{userFormattedData.github}</Text>
          </View>
          <View style={styles.horizontalLine}></View>
          
          <Text>{userFormattedData.personalExperience}</Text>
          <Text>{userFormattedData.schoolName}</Text>
          <Text>{userFormattedData.sy}</Text>
          <Text>{userFormattedData.course}</Text>
          { displayWorkExp }
          {(userFormattedData.userSkills ?? []).map(skill => <Text key={skill}>{skill}</Text>)}
        </View>
      </Page>
    </Document>
    )
  }