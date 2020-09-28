import React, {useContext} from "react";
import {FlatList } from "react-native";
import ListItem from "./ListItems";
import {useLoadMedia} from "../hooks/APIhooks";
import {AuthContext} from "../context/AuthContext";
import PropTypes from 'prop-types';




const List = ({navigation, all}) => {

  const {user} = useContext(AuthContext);
  const mediaArray = useLoadMedia(all, user.user_id);

  return (
    <FlatList
    data={mediaArray}
    keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) =>
        <ListItem navigation={navigation} singleMedia={item} editable={!all} />}
  />
);
};

List.propTypes = {
  navigation: PropTypes.object,
  all: PropTypes.bool,
};
export default List;
