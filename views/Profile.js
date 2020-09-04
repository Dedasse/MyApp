import React,{useContext} from 'react';
import {StyleSheet, SafeAreaView,View, Text, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

const Profile = ({navigation}) => {
  const {setIsLoggedIn, user} = useContext(AuthContext);
  console.log('loggen in user data', user);

  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }
  //ei jaksanut keskittyä tohon user.user juttuun
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>user id: {user.user_id}</Text>
      <Text style={styles.text}>username: {user.username}</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  text: {
    fontSize: 40,
    fontWeight: '100',
    marginBottom:40,
  }
});

export default Profile;
