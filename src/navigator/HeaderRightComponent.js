import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../Color';
import { Url } from '../../Global_Variable/api_link';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [academicTerms, setAcademicTerms] = useState([]); // State to hold academic terms data

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    fetch(Url + '/academic') // Append '/academic' to the URL here
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAcademicTerms(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
        <Text style={styles.dropdownButtonText}>
          {selectedOption || 'Academic-Term'} {'▼'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOptions}>
          {academicTerms.map((term, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionButton}
              onPress={() => selectOption(term.academic_term)}
            >
              <Text style={styles.optionButtonText}>{term.academic_term}</Text>
              
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
    color: 'white',
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
