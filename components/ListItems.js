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
    padding: 5,
    marginBottom: 5,
    marginHorizontal:15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 10,
    },
    shadowOpacity: 0.13,
    shadowRadius: 10.97,

    elevation: 15,
  },
  imageContainer: {
    flex: 1,

    justifyContent:"center",

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

    fontWeight: "bold",
    fontSize: 25,
    paddingBottom: 1,
    color:"red"
  },
  modal: {

  },
});

export default ListItem;
