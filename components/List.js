import React, {useState, useEffect}from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";


const url = 'https://raw.githubusercontent.com/mattpe/wbma/master/docs/assets/test.json';


const List = () => {
  const [mediaArray, setmediaArray] = useState([]);

  const loadMedia = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setmediaArray(json);
    } catch (error) {
      console.log('loadMedia error', error);
    }
    console.log('mediaArray:', mediaArray);
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};

export default List;
