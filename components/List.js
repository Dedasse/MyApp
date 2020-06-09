import React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItems";
import PropTypes from "prop-types";

const List = (props) => {
  return (
    <FlatList
      data={props.mediaArray}
      renderItem={({ item }) => <ListItem singleMedia={item} />}
    />
  );
};

List.propTypes = {
  mediaArray: PropTypes.array,
};

export default List;
