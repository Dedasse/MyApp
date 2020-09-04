import React, {useContext} from 'react';
import {View,Button, StyleSheet} from 'react-native';
import FormTextInput from './FormTextInput';
import {register, postRegistration, postLogIn} from '../hooks/APIhooks';
import useSignUpForm from '../hooks/RegisterHooks';
import {AuthProvider, AuthContext} from '../context/AuthContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
const RegisterForm = ({navigation}) => {
  const {setUser, setIsLoggedIn} = useContext(AuthContext);
  const doRegister = async () => {
    try {
      const result = await postRegistration(inputs);
      console.log('user created', result);
      const userData = await postLogIn(inputs);
      await AsyncStorage.setItem('userToken', userData.token);
      setIsLoggedIn(true);
      setUser(userData);
    } catch (e) {
      console.log(e.message);
    }
  };

const {inputs, handleInputChange} = useSignUpForm();

  return (
    <View>
      <FormTextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="password"
        onChangeText={(txt) => handleInputChange('password', txt)}
        secureTextEntry={true}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="email"
        onChangeText={(txt) => handleInputChange('email', txt)}
      />
      <FormTextInput
        autoCapitalize="none"
        placeholder="full name"
        onChangeText={(txt) => handleInputChange('full_name', txt)}
      />
      <Button title="Register!" onPress={doRegister}/>
    </View>
  );
};
RegisterForm.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterForm;
