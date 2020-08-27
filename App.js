
import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import List from "./components/List";


const App = () => {
  return (
    <View style={styles.container}>
      <List />
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "lightgreen" translucent = {true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 40,
  },

});

export default App;
