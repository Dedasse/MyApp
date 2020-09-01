import React from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,

} from "react-native";
import PropTypes from "prop-types";

const mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

const ListItem = (props) => {


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        props.navigation.navigate('Single',{myshit: props.singleMedia,mediaUrl})}}>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: mediaUrl + props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.textview}>
        <Text style={styles.title}>{props.singleMedia.title}</Text>
        <Text style={styles.description}>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flexDirection: "row",
    padding: 15,
    marginBottom: 5,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
  image2: {
    flex: 1,
  },
  textview: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 1,
  },
  modal: {},
});

export default ListItem;
