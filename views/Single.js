import React from 'react';
import {StyleSheet, Image, Text,View, SafeAreaView} from 'react-native';
import PropTypes from "prop-types";

const Single = ({route}) => {

  const {file,mediaUrl} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{file.title}</Text>
      <View style={styles.imagebox}>
      <Image
          style={styles.image2}
          source={{uri: mediaUrl + file.filename}} />
      </View>
      <Text style={styles.text2}>{file.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagebox: {
    flex:2
  }
  ,
  image2: {
    flex:1,
    width: '100%',
    alignSelf:'center',
    margin: 5
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
  },
  text2: {
    flex: 1,
    textAlign: 'center'
  }
});

Single.propTypes = {
  route: PropTypes.object,
}

export default Single;
