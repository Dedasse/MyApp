import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from "react-native";
import PropTypes from "prop-types";

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
          source={{ uri: singleMedia.thumbnails.w160 }}
        />
      </Modal>
      <Image
        style={styles.image}
        source={{ uri: singleMedia.thumbnails.w160 }}
      />
      <View style={styles.view}>
        <Text>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    marginVertical: 5,
  },
  image: {
    width: 180,
    height: 220,
    margin: 10,
  },
  image2: {
    width: 300,
    height: 400,
    margin: 10,
  },
  view: {
    flex: 1,
    marginHorizontal: 10,
  },
  modal: {},
});

export default ListItem;
