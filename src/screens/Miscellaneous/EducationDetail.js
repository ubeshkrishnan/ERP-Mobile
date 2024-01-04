import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Color';
const EducationDetail = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>
          Converted Christian or Adi Dravidar{' '}
          <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>NO</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          UG Branch <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          UG Degree <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          UG Reg.no <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>18DAG009</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          UG Institution Name <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>
          PSGR Krishnammal College Of Arts And Science
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          University <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>Bharathiar University</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Month & Year of Completion <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Overall % until semester <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Overall % percentage <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    marginRight: 8,
    fontSize: 17,
  },
  value: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  required: {
    color: 'red',
  },
});

export default EducationDetail;
