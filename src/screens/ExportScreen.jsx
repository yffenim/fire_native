import React, { Component } from "react";
// import { Center, Text, Button, Input, Link,} from "native-base";
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import l from "../../helpers/consolelog.js";
import { CSVLink, CSVDownload } from "react-csv";

// create as class component for memory retention purposes
// advantages of class components: access to lifestyle methods

export default class ExportScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Level', 'Updated'],
      tableData: [
        ['1', 'the date'],
        ['3', 'the date'],
        ['5', 'the date'],
        ['7', 'the date']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
