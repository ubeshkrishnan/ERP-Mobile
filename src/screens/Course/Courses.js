import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Courses = () => {
  const navigation = useNavigation();

  const navigateToTopBar = () => {
    navigation.navigate('TopBarNavigator');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red'}}>Courses Screen</Text>
      <TouchableOpacity onPress={navigateToTopBar}>
        <Text>Go to Top Bar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Courses;
