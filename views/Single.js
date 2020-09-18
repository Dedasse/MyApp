import React from 'react';
import PropTypes from "prop-types";
import {Image} from 'react-native';
import {Card, CardItem, Left, Container, Content, Icon,Text,Title} from 'native-base';

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
          <Image source={{uri: mediaUrl + file.filename}}
              style={{height: 400, width: null, flex: 1}}
            />
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
