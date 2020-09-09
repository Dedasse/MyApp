import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import { checkToken} from '../hooks/APIhooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {Icon, Title, Container, Content} from 'native-base';


const Login = ({navigation}) => {
  const {setIsLoggedIn,setUser} = useContext(AuthContext);
  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    if (userToken) {
      try {
        const userData = await checkToken(userToken);
        console.log('token valid', userData);
        setUser(userData);
        setIsLoggedIn(true);
      } catch (e) {
        console.log('token chek failed',e.message);
      }

    }
  };
  useEffect(() => {
    getToken();
  }, []);


  return (
    <Container >
      <Content padder>
      <Title>
          <Icon name={'person'} style={{fontSize: 200}}/>
      </Title>
      <Text>Login</Text>
      <LoginForm navigation={navigation} />
      <RegisterForm navigation={navigation}/>
      </Content>
    </Container>
  );
};



Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
