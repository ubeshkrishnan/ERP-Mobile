import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../Color';

const Miscellaneous = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>
          Regulation<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>2021</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Batch<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>2022</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Degree Branch<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>MBA MBA</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          First Name<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>DEEPTHI</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Last Name<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>M</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Roll Number<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>22MBA026</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Register Number<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>711922631027</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Current Semester<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>III</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Student Status<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>REGULAR</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Section<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>A</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Quota<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>-</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Medium<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>ENGLISH</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Mode of Admission<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>DIRECT</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Mode of Education<Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>FULL TIME</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Do You Need Hostel Facility?<Text style={styles.required}>*</Text>
        </Text>
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
    fontSize: 17,
  },
  value: {
    flex: 1,
    color: 'black',
    fontSize: Colors.Data_FontSize,
  },
  required: {
    color: 'red',
  },
});

export default Miscellaneous;
