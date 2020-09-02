import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";
import {useLoadMedia} from "../hooks/APIhooks";





const List = ({navigation}) => {
  const mediaArray = useLoadMedia();

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem
        navigation={navigation}
        singleMedia={item} />}
    />
  );
};

export default List;
