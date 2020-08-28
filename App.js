import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import List from "./components/List";


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <List />
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

export default App;
