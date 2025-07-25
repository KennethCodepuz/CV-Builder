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

  export default function Resume() {

    return (
    <Document>
      <Page size="A4" style={styles.page} >
        <View style={styles.section}>
          <Text>Section #1</Text>
          <Text>Hello World!</Text>
        </View>
      </Page>
    </Document>
    )
  }