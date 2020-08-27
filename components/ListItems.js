import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from "react-native";
import PropTypes from "prop-types";
import {getAutoFocusEnabled} from "expo/build/AR";
const {height, width} = Dimensions.get('screen');

const ListItem = ({ singleMedia }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setModalVisible(true)}
    >
      <Modal
        style={styles.modal}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Image
          style={styles.image2}
          source={{ uri: singleMedia.filename }}
        />
      </Modal>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: singleMedia.thumbnails.w160 }}
        />
      </View>
      <View style={styles.textview}>
        <Text style={styles.title}>{singleMedia.title}</Text>
        <Text style={styles.description}>{singleMedia.description}</Text>
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
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: "red",
    justifyContent:"flex-end",

  },
  image: {

    height:130,
    width:130,
    borderWidth: 1,
    borderColor:"black",
    borderRadius: 130,
  },
  image2: {
    flex: 1,
    borderRadius: width/2,
  },
  textview: {

    flex: 1.5,
    padding: 10,
  },
  title: {
    position:"absolute",
    top: 10,
    left:-100,
    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 1,
  },
  modal: {

  },
});

export default ListItem;
