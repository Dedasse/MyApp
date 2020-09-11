import React,{useContext, useState, useEffect} from 'react';
import {Image} from 'react-native';
import {AuthContext} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';
import {Icon, Content,Text,Button, Container, Left, CardItem,Card, Body} from 'native-base';
import { getAvatar} from '../hooks/APIhooks';

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
const Profile = ({navigation}) => {
  const {setIsLoggedIn, user} = useContext(AuthContext);
  const [avatar, setAvatar] = useState([{filename: ''}]);
  console.log('loggen in user data', user);

  const fetchAvatar = async () => {
    setAvatar(await getAvatar(user.user_id));
  };

  useEffect(() => {
    fetchAvatar();
  }, []);


  const logout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.clear();
    navigation.navigate('Login');
  };

  return (
    <Container>
      <Content padder>

          <Card>
            <Left>
              <CardItem header bordered>
                <Icon name="person" />
                <Text>Username: {user.username}</Text>
              </CardItem>
              <CardItem cardBody bordered>
                <Image
                source={avatar[0]?
                  {uri: mediaUrl + avatar[0].filename}
                 : {uri: 'http://placekitten.com/400/300'}
                }
                  style={{height: 400, width: null, flex: 1}}
                />
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>Fullname: {user.full_name}</Text>
                  <Text>Email: {user.email}</Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Button
                    block
                    onPress={logout}>
                    <Text>Logout</Text>
                  </Button>
                </Body>
              </CardItem>
            </Left>
          </Card>

      </Content>
    </Container>
  );
};



export default Profile;
