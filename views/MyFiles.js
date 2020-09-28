import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import List from "../components/List";
import PropTypes from 'prop-types';


const MyFiles = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <List navigation={navigation} all={false}/>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "lightgreen" translucent = {true}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

MyFiles.propTypes = {
  navigation: PropTypes.object,
};

export default MyFiles;
