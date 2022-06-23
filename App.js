import React from "react";
import { View, Text, } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

const App = () => {
  return(
    <View>
      <Header title="Albaraka Türk Katılım Bankası"/>
      <Input />
    </View>
  )
}

export default App;