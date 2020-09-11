import React, {useContext, useState} from 'react';

import FormTextInput from './FormTextInput';
import { postRegistration, postLogIn,checkAvailable} from '../hooks/APIhooks';
import useSignUpForm from '../hooks/RegisterHooks';
import { AuthContext} from '../context/AuthContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import {Form, Text, Button} from 'native-base';


const RegisterForm = ({navigation}) => {
  const {setUser, setIsLoggedIn} = useContext(AuthContext);
  const [usernameAvailable,setUsernameAvailable] = useState('');
  const doRegister = async () => {
    try {
      const result = await postRegistration(inputs);
      console.log('user created', result);
      const userData = await postLogIn(inputs);
      await AsyncStorage.setItem('userToken', userData.token);
      setIsLoggedIn(true);
      setUser(userData.user);
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange} = useSignUpForm();

  const checkUsernameAvailability = async (username) => {
    setUsernameAvailable(await checkAvailable(username));
  };

  return (
    <Form>
       <FormTextInput
        autoCapitalize="none"
        placeholder="username"
        onChangeText={(txt) => handleInputChange('username', txt)}
        onEndEditing={(event) => {
          const text = event.nativeEvent.text;
          console.log('reg form username input', text);
          checkUsernameAvailability(text);
        }}
        error={usernameAvailable}
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
      <Button block onPress={doRegister}>
        <Text>Register</Text>
      </Button>
    </Form>
  );
};
RegisterForm.propTypes = {
  navigation: PropTypes.object,
};

export default RegisterForm;
