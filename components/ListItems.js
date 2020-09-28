import React from "react";

import {ListItem as NBListItem, Left, Right, Button,Thumbnail,Body, Icon,Text} from 'native-base';
import PropTypes from "prop-types";
import {deleteFile} from "../hooks/APIhooks";
import AsyncStorage from "@react-native-community/async-storage";

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = ({navigation, singleMedia, editable}) => {

  const doDelete = async () => {
    const token = await AsyncStorage.getItem('userToken');
    try {
      await deleteFile(singleMedia.file_id, token);
    } catch (e) {
      console.log('errror', e);
    }
  };


  return (
    <NBListItem thumbnail>
      <Left>
        <Thumbnail square source={{ uri: mediaUrl + singleMedia.thumbnails.w160}} />
      </Left>
      <Body>
        <Text >{singleMedia.title}</Text>
        <Text note  numberOfLines={1}>{singleMedia.description}</Text>
      </Body>
      <Right>
        <Button transparent
         onPress={() => {
            navigation.navigate('Single', {file: singleMedia})
          }}>
          <Icon name={'eye'}/>
          <Text>View</Text>
          </Button>
        {editable && <>
          <Button success transparent onPress={
            () => {
              navigation.navigate('Modify', {file: singleMedia});
            }}>
            <Icon name={'create'}></Icon>
            <Text>Modify</Text>
          </Button>
          <Button danger transparent onPress={doDelete}>
            <Icon name={'trash'}></Icon>
            <Text>Delete</Text>
          </Button>
        </>
        }
      </Right>

    </NBListItem>

  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object,
  editable: PropTypes.bool,
};


export default ListItem;
