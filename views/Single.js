import React from 'react';
import {StyleSheet, Image,Text,SafeAreaView} from 'react-native';

const Single = ({route}) => {

  const {myshit,mediaUrl} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{myshit.title}</Text>
      <Image
          style={styles.image2}
        source={{uri: mediaUrl + myshit.filename}} />
      <Text>{myshit.description}</Text>
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

export default Single;
