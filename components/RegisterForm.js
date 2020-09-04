import React from 'react';
import {View,Button, StyleSheet} from 'react-native';
import FormTextInput from './FormTextInput';
import {register} from '../hooks/APIhooks';
import useSignUpForm from '../hooks/RegisterHooks';

const RegisterForm = () => {

  const doRegister = async () => {
    try {
      const serverResponse = await register(inputs); // remember imports
      console.log(serverResponse);
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
const styles = StyleSheet.create({});

export default RegisterForm;
