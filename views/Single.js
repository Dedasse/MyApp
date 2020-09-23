import React from 'react';
import PropTypes from "prop-types";
import {Image} from 'react-native';
import {Card, CardItem, Left, Container, Content, Icon, Text, Title} from 'native-base';
import {Video} from "expo-av";

const Single = ({route}) => {

  const {file,mediaUrl} = route.params;

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
              <Video source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                  style={{height: 400, width: null, flex: 1}}
                  useNativeControls={true}
                  onError={(err) => {
                    console.log('video error', err);
                  }}
            />

              }
              </>
          </CardItem>
          <CardItem>
            <Text>
          {file.description}
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
