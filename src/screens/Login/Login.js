import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import { Url } from '../../../Global_Variable/api_link';

const Login = () => {
  const [username, setUsername] = useState('rsumathi_el@kongunaducollege.ac.in');
  const [password, setPassword] = useState('kasc@123');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        Url + '/index',
        { username, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        navigation.navigate('Dashboard')
        console.log('Login successful');
        // Store the user data or token and navigate to the dashboard
      } else {
        console.log('Login failed');
        // Handle login failure, show an error message, etc.
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };



  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.background}></View>
      <View style={styles.loginContainer}>
        {/* Icon above the Login text */}
        <Icon name="user-graduate" size={40} color="white" style={styles.iconAboveLogin} />
        <Text style={styles.heading}> Login</Text>
        <Text style={styles.please}>Please enter your Login and Password</Text>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="white" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholderTextColor="white"
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="white"
              style={styles.visibilityIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <View style={styles.loginButtonCard}>
            <Text style={styles.loginButtonText}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C78F5',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1F4CA3',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
    color: 'white',
  },
  please: {
    color: 'white',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  visibilityIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'white',
  },
  loginButton: {
    marginTop: 40,
    alignItems: 'center',
  },
  loginButtonCard: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: '#1F4CA3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconAboveLogin: {
    marginBottom: 20,
  },
});

export default Login;
