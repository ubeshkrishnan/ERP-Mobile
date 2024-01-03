import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const PersonalInfo = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <Text style={styles.label}>Father / Guardian Name *</Text>
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
        <Text style={styles.label}>Door No & Street Name *</Text>
        <Text style={styles.value}>4/14, Nilavarapatti, Salem - 636201</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Name of Area/Village/Town *</Text>
        <Text style={styles.value}></Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Pincode *</Text>
        <Text style={styles.value}>636201</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>City *</Text>
        <Text style={styles.value}>SALEM</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>State *</Text>
        <Text style={styles.value}>TAMIL NADU</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Country *</Text>
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
        <Text style={styles.label}>Communication Pincode *</Text>
        <Text style={styles.value}>636201</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Communication City *</Text>
        <Text style={styles.value}>SALEM</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Communication State *</Text>
        <Text style={styles.value}>TAMIL NADU</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Communication Country *</Text>
        <Text style={styles.value}>INDIA</Text>
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
  },
  value: {
    flex: 1,
    color: 'black',
  },
});

export default PersonalInfo;
