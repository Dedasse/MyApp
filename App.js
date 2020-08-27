
import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Text
} from "react-native";
import List from "./components/List";
import PropTypes from "prop-types";
import {getAutoFocusEnabled} from "expo/build/AR";
import {Colors} from "react-native/Libraries/NewAppScreen";

const App = (props) => {
  console.log();
  return (
    <View style={styles.main}>
      <View style={styles.nope}>
      <Image
          style={styles.image}
          source={{ uri: "http://placekitten.com/2030/1905" }}
        />
        <Text style={styles.textin}>1435 Homeless Cats</Text>
    <View style={styles.container}>
      </View>
      <List />
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "lightgreen" translucent = {true}/>
      </View>
      </View>
  );
};



const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",

  },
  container: {
    flex:1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  nope: {
    flex: 1,
  },
  image: {
    alignSelf:"center",
    width: 400,
    height: 400,
    borderWidth: 1,
    borderColor: "black",
    paddingTop:10
  },
  textin: {
    fontSize: 25,
    color: "red",
    position: "absolute",
    top: 50,
    left: 10,
    backgroundColor: "#aaaaaa",
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 10,
    },
    shadowOpacity: 0.13,
    shadowRadius: 13.97,

    elevation: 24,
    }
});

export default App;
