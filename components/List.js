import React, {useState, useEffect}from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";


const url = 'http://media.mw.metropolia.fi/wbma/';


const List = (props) => {

  const [mediaArray, setMediaArray] = useState([]);

  const loadMedia = async (limit = 10) => {
    try {
      const response = await fetch(url + 'media?limit=' + limit);
      const json = await response.json();
        const media = await Promise.all(
          json.map(async (item) => {
            const response = await fetch(url + 'media/' + item.file_id);
            const json = await response.json();
            return json;
         }));

      setMediaArray(media);
      console.log('mediaArray:', mediaArray);
    } catch (error) {
      console.log('loadMedia error', error);
    }
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <ListItem
        navigation={props.navigation}
        singleMedia={item} />}
    />
  );
};

export default List;
