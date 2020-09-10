import React, {useContext, useEffect,useState} from 'react';

import PropTypes from 'prop-types';
import { AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import { checkToken} from '../hooks/APIhooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {Icon, Title, Container, Content,Text,Button} from 'native-base';


const Login = ({navigation}) => {
  const {setIsLoggedIn, setUser} = useContext(AuthContext);
  const [register, setRegister] = useState();
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

  const hange = () => {
   // <Button block onPress={console.log('ssss')}>
   // <Text>No account yet?</Text>
   // </Button>
    console.log('AAAAAAAAAAA');
   // setRegister(< RegisterForm navigation = {navigation} />);
  };

  return (
    <Container >
      <Content padder>
      <Title>
          <Icon name={'person'} style={{fontSize: 200}}/>
      </Title>
      <Text>Login</Text>
        <LoginForm navigation={navigation} />
        {register}
      </Content>
    </Container>
  );
};



Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
