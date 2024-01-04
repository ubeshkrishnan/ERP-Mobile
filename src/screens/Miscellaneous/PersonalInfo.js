import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../../Color';

const PersonalInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>
          Father / Guardian Name <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>M. Mahalingam</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Father Mobile Number</Text>
        <Text style={styles.value}>9629677077</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mother Name</Text>
        <Text style={styles.value}>E. Nagalakshmi</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mother Mobile Number</Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Occupation of Father/Guardian</Text>
        <Text style={styles.value}>Business</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Occupation of Mother</Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Father Annual Income</Text>
        <Text style={styles.value}>80000</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Mother Annual Income</Text>
        <Text style={styles.value}>0</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Door No & Street Name <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>4/14, Nilavarapatti, Salem - 636201</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Name of Area/Village/Town <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Pincode <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>636201</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          City <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>SALEM</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          State <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>TAMIL NADU</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Country <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>INDIA</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Door No & Street Name (Communication)</Text>
        <Text style={styles.value}>4/14, Nilavarapatti, Salem - 636201</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Name of Area/Village/Town (Communication)
        </Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Communication Pincode <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>636201</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Communication City <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>SALEM</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Communication State <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>TAMIL NADU</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>
          Communication Country <Text style={styles.required}>*</Text>
        </Text>
        <Text style={styles.value}>INDIA</Text>
      </View>
    </ScrollView>
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

export default PersonalInfo;
