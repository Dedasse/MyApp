import React, {useState,useEffect} from 'react';
import PropTypes from "prop-types";
import {Image} from 'react-native';
import {Card, CardItem, Left, Container, Content, Icon, Text, Title} from 'native-base';
import {Video} from "expo-av";
import {checkToken, getUser} from '../hooks/APIhooks';
import AsyncStorage from '@react-native-community/async-storage';
import * as ScreenOrientation from 'expo-screen-orientation';


const Single = ({route}) => {
  const [error, setError] = useState(false);
  const [owner, setOwner] = useState({});
  const [videoRef, setVideoRef] = useState(null);
  const {file, mediaUrl} = route.params;

  const handleVideoRef = (component) => {
    setVideoRef(component);
  };

  const showVideoInFullscreen = async() => {
    try {
    await  videoRef.presentFullscreenPlayer();
    } catch (e) {
      console.log('svifs error ', e.message);
    }
  }

  const unlock = async () => {
    await ScreenOrientation.unlockAsync();
}
  const lock = async () => {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }

  const fetchOwner = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setOwner(await getUser(file.user_id, userToken));
    console.log('owner', owner);
  };

  useEffect(() => {
    unlock();
    fetchOwner();
    const orientSub = ScreenOrientation.addOrientationChangeListener((evt) => {
      if (evt.orientationInfo.orientation > 2) {
        showVideoInFullscreen();
      }
    });
    return () => {
      lock();
      ScreenOrientation.removeOrientationChangeListener(orientSub);
    }
  }, [videoRef]);
  return (
    <Container>
      <Content padder>
      <Card>
      <CardItem>
        <Left>
              <Icon name={'image'} />
              <Title><Text>{file.title}</Text></Title>
        </Left>
          </CardItem>
          <CardItem cardBody>
            <>
            { file.media_type==='image' ?
              <Image source={{uri: mediaUrl + file.filename}}
                style={{height: 400, width: null, flex: 1}}
              />
              :
                <Video
                  ref={handleVideoRef}
                  source={{uri:
                    error ? 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4':
                       mediaUrl + file.filename,
                }}
                  style={{height: 400, width: null, flex: 1}}
                  useNativeControls={true}
                  resizeMode="cover"
                  posterSource={{uri: mediaUrl + file.screenShot}}
                  usePoster={true}
                  onError={(err) => {
                    setError(true);
                    console.log('video error', err);
                  }}
            />

              }
              </>
          </CardItem>
          <CardItem style={{flexDirection: 'column'}}>
            <Text>
          {file.description}
            </Text>
            <Text>
              By:{owner.username}
            </Text>
          </CardItem>
    </Card>
      </Content>
    </Container>

  );
};



Single.propTypes = {
  route: PropTypes.object,
}

export default Single;
