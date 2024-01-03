import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const SurveyData = () => {
  const [selectedSampleType1, setSelectedSampleType1] = useState('');
  const [selectedSampleType2, setSelectedSampleType2] = useState('');

  const dropdownSample = [
    {sample_type_id: '1', sample_type: 'A- Excellent'},
    {sample_type_id: '2', sample_type: 'B- Very Good'},
    {sample_type_id: '3', sample_type: 'C- Average'},
    // Add more options as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>STUDENT FEEDBACK</Text>

      <View style={styles.table}>
        {/* Header Row */}
        <View style={styles.tableRow}>
          <Text style={styles.headerCell}>Questions</Text>
          <Text style={styles.headerCell}>CORE PAPER 10 - FDE </Text>
        </View>

        {/* Row 1 - Question 1 */}
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>
            Do you think that the school provides you with adequate sport
            facilities
          </Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType1}
            onSelect={selectedItem => {
              setSelectedSampleType1(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>

        {/* Row 2 - Question 2 */}
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>
            Encourage and accepts different opinios
          </Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Has the Respect of the students</Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>
            Is involved and supportive of students within the school
          </Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Knows the subject Matter</Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Recognizes and acknowlegde effort</Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>Use the class time effectively</Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.cellText}>
            What do you like best about the Class and /or teacher ?
          </Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.cellText}>What motivates you to learn more</Text>
          <SelectDropdown
            data={dropdownSample}
            defaultValue={selectedSampleType2}
            onSelect={selectedItem => {
              setSelectedSampleType2(selectedItem.sample_type_id);
            }}
            buttonStyle={styles.dropdownButton}
            buttonTextAfterSelection={selectedItem => selectedItem.sample_type}
            buttonTextStyle={styles.dropdownButtonText}
            rowTextForSelection={(item, index) => item.sample_type}
            renderDropdownIcon={() => (
              <Text style={styles.dropdownIcon}>▼</Text>
            )}
            dropdownStyle={styles.dropdownStyle}
            rowStyle={styles.dropdownRow}
            rowTextStyle={styles.dropdownRowText}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexGrow: 1, // Allow ScrollView to take the full height
  },
  header: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  table: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  cellText: {
    flex: 1,
    fontSize: 16,
    color: 'blue',
    fontWeight: '600',
  },
  dropdownButton: {
    height: 30,
  },
  dropdownButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dropdownIcon: {
    fontSize: 20,
    color: 'black',
  },
  dropdownStyle: {
    // Add styling for dropdown container if needed
  },
  dropdownRow: {
    // Add styling for dropdown row if needed
  },
  dropdownRowText: {},
});

export default SurveyData;
