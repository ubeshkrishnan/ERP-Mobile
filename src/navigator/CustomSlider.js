import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const CustomSidebar = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <Text>Sidebar Content</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={{ color: 'black' }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end', // Positions the sidebar to the right
    alignItems: 'center',
  },
  sidebar: {
    width: windowWidth * 0.75, // Adjust the width as needed
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 20,
    paddingRight: 10,
    alignItems: 'flex-end', // Align content to the right
  },
});

export default CustomSidebar;
