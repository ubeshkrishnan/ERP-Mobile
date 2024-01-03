import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const EducationDetail = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Converted Christian or Adi Dravidar *</Text>
        <Text style={styles.value}>NO</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>UG Branch *</Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>UG Degree *</Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>UG Reg.no *</Text>
        <Text style={styles.value}>18DAG009</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>UG Institution Name *</Text>
        <Text style={styles.value}>PSGR Krishnammal College Of Arts And Science</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>University *</Text>
        <Text style={styles.value}>Bharathiar University</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Month & Year of Completion *</Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Overall % until semester *</Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Overall % percentage *</Text>
        <Text style={styles.value}></Text>
      </View>

      {/* Add more rows for the remaining fields */}

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
  },
  value: {
    flex: 1,
    color: 'black',
  },
});

export default EducationDetail;
