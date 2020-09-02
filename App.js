import React from "react";
import Navigator from './navigators/Navigator';
import {AuthProvider} from "./context/AuthContext";


const App = () => {
  return (
    <AuthProvider>
      <Navigator/>
    </AuthProvider>
  );
};


export default App;
