  import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
  import React from 'react';

  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffffff',
      margin: 0,
      padding: 60,
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
      fontSize: 32,
      fontWeight: 700,
      textAlign: 'center'
    },
    careerRole: {
      fontSize: 16,
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
      paddingLeft: 20,
      fontSize: 12,
      textAlign: 'center',
      color: '#474747ff',
    },
    horizontalLine: {
      height: 2,
      backgroundColor: '000000',
      marginTop: 5,
      marginBottom: 10,
    },
    sectionTitleStyle: {
      fontSize: 18, 
      fontWeight: 800,
      paddingTop: 10,
      paddingBottom: 10,
    },
    personalExperience: {
      fontSize: 13,
      lineHeight: 1.5,
      color: '#36454F',
    },
    workPlaceAndDateContainer: {
      flexDirection: 'row',
    },  
    experiencePlace: {
      fontSize: 13,
      color: '#747575ff',
      lineHeight: 1.5,
    },  
    experienceTitle: {
      fontSize: 14,
      fontWeight: 800,
      lineHeight: 1.5,
    },
    workInfo: {
      paddingLeft: 15,
      fontSize: 14,
    },
    skillsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      fontSize: 12,
      paddingTop: 10,
    }
  });

  export default function Resume({ userFormattedData }) {
    
    const displayWorkExp = (userFormattedData.userWorkExperience ?? []).map((exp, i) => 
            (
            <View style={{paddingBottom: 15}} key={i}>
              <View style={styles.workPlaceAndDateContainer}>
                <Text style={styles.experiencePlace}>{exp.workPlace}</Text>
                 <Text style={styles.experiencePlace}>{exp.workPlace ? ' | ' : null}</Text>
                <Text style={styles.experiencePlace}>{exp.workDate}</Text>
              </View>
              <Text style={styles.experienceTitle}>{exp.workTitle}</Text>
              { Object.values(exp.workInfo ?? {}).map((info, i) => <Text style={styles.workInfo} key={i}>• {info}</Text>) }
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
          <View>
            <Text style={styles.sectionTitleStyle}>ABOUT ME</Text>
            <Text style={styles.personalExperience}>{userFormattedData.personalExperience}</Text>
          </View>
          <View style={styles.horizontalLine}></View>
          <View>
            <Text style={styles.sectionTitleStyle}>WORK EXPERIENCE</Text>
            { displayWorkExp }
          </View>
          <View style={styles.horizontalLine}></View>
          <View>
            <Text style={styles.sectionTitleStyle}>EDUCATION</Text>
            <Text style={{fontSize: 14, color: '#747575ff', lineHeight: 1.5}}>{userFormattedData.sy}</Text>
            <Text style={{fontSize: 18, fontWeight: 700, lineHeight: 1.5}}>{userFormattedData.schoolName}</Text>
            <Text style={{fontSize: 14, lineHeight: 1.5, fontWeight: 600, paddingLeft: 10}}>{userFormattedData.course ? `• ${userFormattedData.course}` : null}</Text>
          </View>
          <View style={styles.horizontalLine}></View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.sectionTitleStyle, {marginRight: 15, fontSize: 14}]}>SKILLS: </Text>
            <View style={[styles.skillsContainer]}>
              {(userFormattedData.userSkills ?? []).map(skill => <Text key={skill}>{skill ? `${skill}, ` : null}</Text>)}
            </View>
          </View>
          {
            userFormattedData.userProgrammingLanguagesAndFrameworks ? 
            <View style={{flexDirection: 'row'}}>
              <Text  style={[styles.sectionTitleStyle, {marginRight: 5, fontSize: 14}]}>Languages And Frameworks: </Text>
              <View style={[styles.skillsContainer, {paddingTop: 12}]}>
                {(userFormattedData.userProgrammingLanguagesAndFrameworks).map(item => <Text key={item}>{item}, </Text>)}
              </View>
            </View>
            : 
            null
          }
        </View>
      </Page>
    </Document>
    )
  }