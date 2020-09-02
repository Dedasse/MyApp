import React from 'react';
import {StyleSheet, Image, Text, SafeAreaView} from 'react-native';
import PropTypes from "prop-types";

const Single = ({route}) => {

  const {file,mediaUrl} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{file.title}</Text>
      <Image
          style={styles.image2}
        source={{uri: mediaUrl + file.filename}} />
      <Text>{file.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image2: {
    flex:1,
    width: 400,
    margin: 5
  },
  text: {
    paddingBottom: 5,
  }
});

Single.propTypes = {
  route: PropTypes.object,
}

export default Single;
