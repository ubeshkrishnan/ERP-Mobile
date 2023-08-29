import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Color';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['[Odd sem-23-24]', '[Even sem-23-24]'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownButtonText}>
          {selectedOption || 'Academic-Term'} {'▼'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOptions}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => selectOption(option)}
            >
              <Text style={styles.optionButtonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    width: 200,
    height: 40,
    backgroundColor: '#0c46c3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'relative', // To position the arrow correctly
    color: 'white'
  },
  dropdownButtonText: {
    fontSize: 16,
    color: Colors.ColorYellow,
    fontWeight: 'bold',
  },
  dropdownOptions: {
    marginTop: 10,
    width: 200,
    backgroundColor: '#F3B825',
    borderRadius: 8,
    padding: 10,
    position: 'absolute',
    top: 40, // To position the options below the button
  },
  optionButton: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  optionButtonText: {
    fontSize: 16,
  },
});

export default Dropdown;
