import React from 'react';
import {StyleSheet, Image,Text,SafeAreaView} from 'react-native';

const Single = ({route}) => {
  console.log({route});
  const {myshit,mediaUrl} = route.params;
  console.log(myshit.filename);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{myshit.title}</Text>
      <Image
          style={styles.image2}
          source={{ uri: mediaUrl + myshit.filename}}/>
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
    margin: 30
  },
  text: {
    paddingBottom: 10,
  }
});

export default Single;
