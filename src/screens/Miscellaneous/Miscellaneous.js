import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Color';

const Miscellaneous = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Regulation *</Text>
        <Text style={styles.value}>2021</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Batch *</Text>
        <Text style={styles.value}>2022</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Degree Branch *</Text>
        <Text style={styles.value}>MBA MBA</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>First Name *</Text>
        <Text style={styles.value}>DEEPTHI</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Last Name *</Text>
        <Text style={styles.value}>M</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Roll Number *</Text>
        <Text style={styles.value}>22MBA026</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Register Number *</Text>
        <Text style={styles.value}>711922631027</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Current Semester *</Text>
        <Text style={styles.value}>III</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Student Status *</Text>
        <Text style={styles.value}>REGULAR</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Section *</Text>
        <Text style={styles.value}>A</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Quota *</Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Medium *</Text>
        <Text style={styles.value}>ENGLISH</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mode of Admission *</Text>
        <Text style={styles.value}>DIRECT</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mode of Education *</Text>
        <Text style={styles.value}>FULL TIME</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Do You Need Hostel Facility? *</Text>
        <Text style={styles.value}>NO</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Special Categories</Text>
        <Text style={styles.value}>YES</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Second Language</Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Remarks</Text>
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
    fontSize: Colors.Lable_FontSize,
  },
  value: {
    flex: 1,
    color: 'black',
    fontSize: Colors.Data_FontSize,
  },
});

export default Miscellaneous;
